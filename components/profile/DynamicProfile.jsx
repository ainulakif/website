"use client";

import Profile from '@components/Profile'
import { usePathname, useRouter, notFound } from 'next/navigation';
import { useState, useEffect } from 'react';

const DynamicProfile = () => {
    const pathName = usePathname();
    const router = useRouter();
    const userId = pathName.split('/').pop();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${userId.toString()}/posts`)
            const data = await response.json();

            if (data.error) {
                // console.log("[dynamicprofile.js] entering error state");
                router.push("/not-found");
                // notFound();
                return;
            }
            setPosts(data);
        }

        fetchPosts();
    }, [])

    // console.log("Post: ", posts);

    return (
        <Profile
            name={posts[0]?.creator?.username ? (`${posts[0]?.creator?.username}'s`) : ("")}
            desc={posts[0]?.creator?.username ? (`Visiting ${posts[0]?.creator?.username} profile page`) : ("")}
            data={posts}
            handleEdit={() => []}
            handleDelete={() => { }}
        />
    )
}

export default DynamicProfile;