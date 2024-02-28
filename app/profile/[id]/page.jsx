// "use client";


// import Profile from '@components/Profile'
// import { usePathname, useRouter } from 'next/navigation';
// import { useState, useEffect } from 'react';

import DynamicProfile from "@components/profile/DynamicProfile";

export const generateMetadata = async ({ params, searchParams }, parent) => {

    try {
        const id = params.id;
        const user = await fetch(`${process.env.NEXTAUTH_URL}/api/users/${id.toString()}/posts`).then(res => res.json());

        return {
            title: user[0]?.creator?.username
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Failed to fetch username" }),
            { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
    }
}

const ProfilePage = () => {
    {/*
    const pathName = usePathname();
    const userId = pathName.split('/').pop();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${userId.toString()}/posts`)
            const data = await response.json();

            setPosts(data);
        }
        fetchPosts();
    }, [])

    console.log("Post: ", posts);
*/}
    return (
        <DynamicProfile />
        /*
        <Profile
            name={posts[0]?.creator?.username}
            desc={`Visiting ${posts[0]?.creator?.username} profile page`}
            data={posts}
            handleEdit={() => []}
            handleDelete={() => { }}
        />
        */
    )
}

export default ProfilePage;