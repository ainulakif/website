# PORTFOLIO PROJECT

A [portfolio website application](https://ainulakif-website.vercel.app/) that I can use to showcase my projects in one place. I don't know if it's appropriate but currently this is what I want to do.

>This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It's also utilize [Vercel](https://vercel.com/) for deployment and hosting of the web application.

<!-- ctrl + shift + v -->

## Changelog

<!-- ### Added

- Centralize all links into `/data/links.json` so they can be updated easily

### Fixed

- Improve French translation (#377).

### Changed

- Upgrade dependencies: Ruby 3.2.1, Middleman, etc.

### Removed

- Duplicate index file for the english version -->

### [Unreleased]

- Refactor CSS

- !!Move weather/population API into environment variables (modify so it receive props from server-side).

- In production, restcountries API can't fetch the data

- Showcase mongodb as public (to-do list)
  - ~~Add radio button for done/undone.~~
  - ~~Instead of remove the list item, update item to strikethrough.~~
  - Nested lists (maybe after layouting the css).
    - Lists is better if refer each list with their own radio button.
    - at the same time, I could prepare that nested lists.
  - Editing list item should be possible.

- Make sign-in button disabled while waiting for Auth.

>The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### [1.6.7] - 2024-05-02

#### Changed

- Modify from single connection to multiple connection. The database separate `prompt` and `todolist`.
  - Update the API endpoint to work with the database and also the session.
  - Modify the error handling in each API endpoint.

### [1.5.3] - 2024-02-28

#### Added

- Enabled [Web Analytics](https://vercel.com/docs/analytics/quickstart) in Vercel.
- Implemented JsonLd into the head element.
- Create a 404 landing page.
- Provide fallback title to children for SEO on each document.

#### Changed

- Updated static metadata configuration.
- Modify TODO with signin condition.

### [1.4.10] - 2024-02-13

#### Added

- To-do list
  - Showcase mongodb usecase as public.

#### Changed

- Added log for debug at Feed and TodoList.

### [1.3.3] - 2024-02-07

#### Added

- New tabbed layout to show different components.
- Population chart is now on the Homepage.

#### Changed

- Custom style on asyncpaginate search bar.

### [1.2.0] - 2024-02-05

#### Added

- Implemented Search by prompt, tag and username.
- Implemented Click on tag and username into search.
- Implemented View of other profiles as public.
  - While in session, clicking on other profiles will redirect to their `unique` profile page.
  - Also, clicking on your own profiles will redirect to `/Profile` page.
  
#### Changed

- Modified username's regex to validate test usernames.

### [1.1.0] - 2024-02-05

#### Changed

- Edit changelog for v1.0.1.
- `/Countries` page now shows country by population chart.
  - Incorporated `Chart.js` library with `react-chartjs-2` to visualize the population data.
- Updated git history to filter branches.
- Domain name changed.
- Updated Client ID.
- Repository became public.

### [1.0.1] - 2024-02-02

#### Added

- README and LICENSE files.
- Integrated Google Cloud APIs into Login page using a unique Client ID.
  - Create new Prompt and view Profile by logging in.
  - In Profile, prompt could be editted and deleted.
- Integrated with the OpenWeatherMap API for current weather data.
  - Incorporated `react-select-async-paginate` library to supports loading options page by page.
  - Displays current weather conditions (temperature, humidity, wind speed).
- a new `/Countries` page that shows Country's population
  - Integrated with the Rest Countries API to show country names and population.

## Authors and acknowledgment

Special thanks to the Author of these courses:

1. [JavaScript Mastery](https://www.youtube.com/@javascriptmastery) for this [NextJS tutorial](https://youtu.be/wm5gMKuwSYk) where the project based on.
2. [CodewithSloba](https://www.youtube.com/channel/UCBu5ulO4d-d47lAVybpRTkw) that shows how to [fetch Weather API in React](https://youtu.be/Reny0cTTv24).

## Resources

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Vercel Documentation](https://vercel.com/docs/getting-started-with-vercel) - learn about Vercel features and deploy your application.
- [REST COUNTRIES 🇵🇪](https://restcountries.com/) - Get information about countries via a RESTful API.
- [OpenWeather API](https://openweathermap.org/api) - Get Current weather data collection.
- [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) - Recommended to built in `generateMetaData` method.
