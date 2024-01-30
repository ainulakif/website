"use client";

import Image from "next/image"

function Weather() {
    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
                    <Image
                        src=""
                        alt="user_image"
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />

                    <div className="flex flex-col">
                        <h3 className="font-satoshi font-semibold text-gray-900">
                            Test1
                        </h3>
                        <p className="font-inter text-sm text-gray-500">
                            Test2
                        </p>
                    </div>
                </div>

                <div className="copy_btn" onClick={() => {}}>
                    <Image
                        src="/assets/icons/copy.svg"
                        alt="copy_btn"
                        width={12}
                        height={12}
                    />
                </div>
            </div>

            <p className="my-4 font-satoshi text-sm text-gray-700">
                Test3
            </p>
            <p className="font-inter text-sm blue_gradient cursor-pointer"
                onClick={() => { }}
            >
                TEST4
            </p>

            {/* {session?.user.id === post.creator._id && pathName === "/profile" && ( */}
            <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
                <p
                    className="font-inter text-sm green_gradient cursor-pointer"
                    onClick={() => { }}
                >
                    Edit
                </p>
                <p
                    className="font-inter text-sm orange_gradient cursor-pointer"
                    onClick={() => { }}
                >
                    Delete
                </p>
            </div>
            {/* )} */}
        </div>
    )
}

export default Weather