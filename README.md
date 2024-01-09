### Angular Microfrontend

Microfrontend application built with Angular and Single Spa Framework

![App Image](appImg.png)

## Technologies

- NodeJS
- Webpack
- Typescript
- Angular
- TailwindCSS
- Single SPA Framework
- Babel


## Project structure

- `Root-app`: This is the app accountable for orchestrating all the micro-frontends, we call it the `shell` app;
- `angular-app1`: This is the sign-in app;
- `angular-app2`: This is the signup app;
- `angular-app3`: This is the homepage app;
- `app-404`: This is the app for the not found routes (404), loaded when the user navigates to an inexistent route;
- `app-dashboard`: This is the main logged state page of users;
- `app-header`: This is the header app, all the time visible on the page;
- `utility`: Last but not least, this is the app containing reusable logic, such as authentication state, endpoint configurations and so on, which are shared among the previous apps.


## Running the project

This project stores 7 micro-frontend apps (for real!!), first of all, clone this repo and navigate to it's directory 

After, just follow the steps below:

1 - First, let's install the dependencies for all microfrontends, by going to each app directory and running the command below.

```console
    npm install
```
2 - Navigate back to the root and run the command below (to launch all applications in a row):

```console
    npm start
```

Afterward, go to `http://localhost:9000` to see the app up and running, have fun!

Tip: You also can create your npm script for running all apps in a row, feel free to do it.

3 - For building the projects, navigate to each project and run the command below:

```console
    npm run build
```

Obs: In a real setup, each of these apps it'd be placed in different repositories or even inside a monorepo, They're placed all here to get management simplified.

## Backend

If you want to go deeper, this micro frontend app has its own API built with NodeJS available in this [repository](https://github.com/danilolmc/clean-arch-api)

### Requirements for running this project

- [Git](https://git-scm.com/)
- [NodeJS](https://nodejs.org/)

<hr>

Made with ❤️ by Danilo
