// "use client";

// import { useState } from 'react'
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';

// import Form from "@components/Form";

import CreatePrompt from "@components/prompt/CreatePrompt"

export const metadata = {
    title: "Create Prompt"
}

const CreatePromptPage = () => {
    /*
    const router = useRouter();
    const { data: session } = useSession();

    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e) => {
        e.preventDefault(); //prevent from refreshing the page
        setSubmitting(true); //use as a loader

        try {
            const response = await fetch('/api/prompt/new', { //api pull
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: session?.user.id,
                    tag: post.tag
                })
            })

            if (response.ok) {
                router.push('/');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setSubmitting(false);
        }
    }
*/
    return (
        <CreatePrompt />

        // <Form
        //     type="Create"
        //     post={post}
        //     setPost={setPost}
        //     submitting={submitting}
        //     handleSubmit={createPrompt}
        // />
    )
}

export default CreatePromptPage