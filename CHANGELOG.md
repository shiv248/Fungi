# Fungi Changelog

## [0.1.1] - 9/3/2022
### Added
- used `nest new` CLI and `yarn create react-app` CLI to create respective back and frontend directories
- setup github remote
- changed backend `main.ts` file to serve all API requests on `/api`
- added `ServeStaticModule` module to `app.module.ts`
  - changed the default serve of the frontend from backend to the build output of the frontend for all endpoints except `/api`

## [0.1.2] - 9/4/2022
### Added
- a InfiniteScroll system using hooks and callbacks to rerender only when the scroll is past a certain distance
- data grabbing upon reaching the bottom and rerender call, which changes the data presented on the page
- posts card component with css
### Removed
- removed `reportWebVitals` came with create-react

## [0.1.3] - 9/5/2022
### Added
- Like comment share buttons for posts, also on hover show posts game
- changed posts card to accept props
- implemented the posts with individual random posts to the InfiniteScroll system
### Removed
- removed any hardcoded data to prepare for future data flow
