# Marvel App

The application is deployed on GitHub Pages: [Marvel App](https://eloycs1.github.io/marvel-app/).

This project is a React SPA using the [Marvel Comics API](https://developer.marvel.com/documentation/getting_started) to get and filter character information.

> ⚠️The API has a high response time. This can cause long loading times. To prevent too many requests, the search input has been disabled while loading.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation and Usage

You can install using this command:

```bash
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
You can generate code coverage report on /coverage folder:

```bash
npm test -- --coverage --watchAll
```

### `npm run build`

Builds the app for production to the `build` folder.\

### `npm run deploy`

That will cause the predeploy and deploy scripts defined in package.json to run.

Under the hood, the predeploy script will build a distributable version of the React app and store it in a folder named build. Then, the deploy script will push the contents of that folder to a new commit on the gh-pages branch of the GitHub repository, creating that branch if it doesn't already exist.

By default, the new commit on the gh-pages branch will have a commit message of "Updates". You can specify a custom commit message via the -m option, like this:

```bash
npm run deploy -- -m "Deploy React app to GitHub Pages"
```

### `npm run lint`

Run the lint to display possible errors. It is recommended to install the `ESLint` extension for Visual Studio Code to see errors in real time.

### `npm run format`

Execute the rules configured in prettier to format all files. It is recommended to install the `Prettier - Code formatter` for Visual Studio Code and enable format on save option to prevent format errors.

## Testing

To ensure the quality and integrity of the code, unit tests have been performed with [Jest](https://jestjs.io/docs/tutorial-react). More than 90% coverage of Statements, Branches, Functions and Lines has been configured

## Stack

- **react**: 18.3.1
- **react-router-dom**: 6.25.1
- **sass**: 1.77.8
- **eslint**: 8.56.0
- **prettier**: 3.3.3
- **jest**: 27.5.2

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
