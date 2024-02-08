"use client";

import { useSession } from "next-auth/react";
import TodoList from "./TodoList";
import { useState } from "react";

const ToDo = () => {
    const { data: session } = useSession();
    const tempLogin = true;

    const [submitted, setSubmitted] = useState(false);

    const handleSubmission = () => {
        alert('submitted');
        setSubmitted(true);
    }
    
    return (
        <div className='prompt_card'>
            <span>
                To-do list
            </span>
            <div>
                <TodoList submitted={submitted} />
                {/* {session?.user.id === post.creator._id && ( */}
                {tempLogin === true && (
                    <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3" onClick={() => alert('clicked submit')}>
                        <p
                            className="font-inter text-sm green_gradient cursor-pointer"
                        >
                            Submit
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ToDo