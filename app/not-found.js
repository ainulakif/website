import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Page not found ",
}


const notfound = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Image
        src="/assets/images/404.png"
        alt="404 Logo"
        width={64}
        height={64}
      />
      <h1 className="head_text head_center">
        404 Page Not Found
        <br className="max-md:hidden" />
      </h1>
      <p className="desc text-center">Oops! This page was not found</p>
      <Link href="/" className="gray_btn">
        Return Home
      </Link>
    </section>
  )
}

export default notfound