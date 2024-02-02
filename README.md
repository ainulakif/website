# PORTFOLIO PROJECT

A [portfolio website application](https://promptopia-test.vercel.app/) that I can use to showcase my projects in one place. I don't know if it's appropriate but currently this is what I want to do.

>This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's also utilize [Vercel](https://vercel.com/) for deployment and hosting of the web application.

<!-- ctrl + shift + v -->

## Changelog

### [Unreleased]

- useSearchParams build issues
  - ⚠ Entire page "/update-prompt" deopted into client-side rendering due to "useSearchParams()"
- updated git on a whole build to remove certain private files.
- make a new and public repository/domain.
- a new chart on `/Countries` page that shows Country's population.
  - Incorporated `Chart.js` library with `react-chartjs-2` to visualize the population data.

<!-- - Implement Search
  - Search by prompt
  - Search by tag
  - Search by username

- Implement Click on tag

- Implement View other profiles

  - Create new dynamic [id] folder in profile
  - by fetching POST from different users -->

>The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [1.0.1] - 2024-02-02

#### Added

- README and LICENSE files.
- Integrated Google Cloud APIs into Login page using a unique Client ID.
  - Create new Prompt and view Profile by logging in.
  - In Profile, prompt could be editted and deleted.
- Integrated with the OpenWeatherMap API for current weather data.
  - Incorporated `react-select-async-paginate` library to supports loading options page by page.
  - Displays current weather conditions (temperature, humidity, wind speed).
- Integrated with the Rest Countries API for country names and population.

### Authors and acknowledgment

Special thanks to the Author of these courses:

1. [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) for this [NextJS](https://youtu.be/wm5gMKuwSYk) tutorial where the project based on.
2. [CodewithSloba](https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw) that shows how to [fetch Weather API in React](https://youtu.be/Reny0cTTv24).

### Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Vercel Documentation](https://vercel.com/docs/getting-started-with-vercel) - learn about Vercel features and deploy your application.
- [REST COUNTRIES 🇵🇪](https://restcountries.com/) - Get information about countries via a RESTful API.
- [OpenWeather API](https://openweathermap.org/api) - Get Current weather data collection.
