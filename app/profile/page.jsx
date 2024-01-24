"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const MyProfile = () => {
    const { data: session } = useSession();

    const [posts, setPosts] = useState([]);

    // GET request from local API
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json();

            setPosts(data);
        }

        // console.log(posts);

        if(session?.user.id) fetchPosts();
    }, []);

    //logic to handle edit and delete
    //pause at 2:48:27
    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile;