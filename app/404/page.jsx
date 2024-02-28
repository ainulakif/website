import ErrorPage from "@components/404/ErrorPage"

export const metadata = {
    title: "Page Not Found",
}

const page = () => {
  return (
    <ErrorPage />
  )
}

export default page