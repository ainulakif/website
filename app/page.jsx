import Feed from "@components/Feed"
import TabbedNavigation from "@components/TabbedNavigation/TabbedNavigation"
import Weather from "@components/weather/Weather"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text head_center">
            {/* underscore means globals.css */}
           My Web Portfolio
            <br className="max-md:hidden" />
            <span className="green_gradient text-center"> Multiple Projects</span>
        </h1>
        <p className="desc text-center">
        My web portfolio showcases a collection of my latest projects. Explore the diverse range of projects to get a glimpse of my capabilities and experience in the field of web development.
        </p>
        <TabbedNavigation />
        {/* <Weather />
        <Feed /> */}
    </section>
  )
}

export default Home