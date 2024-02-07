import Feed from "@components/Feed"
import TabbedNavigation from "@components/TabbedNavigation/TabbedNavigation"
import Weather from "@components/weather/Weather"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text head_center">
            {/* underscore means globals.css */}
           My Website
            <br className="max-md:hidden" />
            <span className="green_gradient text-center"> Multiple Projects</span>
        </h1>
        <p className="desc text-center">
        My web portfolio that consists of several projects.
        </p>
        <TabbedNavigation />
        {/* <Weather />
        <Feed /> */}
    </section>
  )
}

export default Home