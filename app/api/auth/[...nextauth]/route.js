import { models, model } from "mongoose";
import NextAuth from "next-auth/next";;
import GoogleProvider from "next-auth/providers/google";

import UserSchema from "@models/user";
import { connectToDB } from "@utils/database";

//handle authentication
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    callbacks: {
        async session({ session }) {
            const User = models.User || model('User', UserSchema);
            const sessionUser = await User.findOne({
                email: session.user.email
            })
    
            session.user.id = sessionUser._id.toString();
    
            return session;
        },
        async signIn({ profile }) {
            try {
                const { User } = await connectToDB(process.env.dbName1);
                //check if a user is already existed
                const userExists = await User.findOne({
                    email: profile.email,
                });
    
                //if not, create a new user and save it to the database
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }
    
                return true;
            } catch (error) {
                console.error(`[auth.js] Error on auth: ${error.message}`);
                return false;
            }
        }
    }
})

export { handler as GET, handler as POST };