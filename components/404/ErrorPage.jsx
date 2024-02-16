'use client'

import Image from "next/image"

const ErrorPage = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Image
        src="/assets/images/404.png"
        alt="404 Logo"
        width={64}
        height={64}
      // className="object-contain"
      />
      <h1 className="head_text head_center">
        {/* underscore means globals.css */}
        404 Page Not Found
        <br className="max-md:hidden" />
      </h1>
    </section>
  )
}

export default ErrorPage