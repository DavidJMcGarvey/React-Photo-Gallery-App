Full Stack JavaScript Techdegree Project 7
--------------------------------------------
####      React Photo Gallery App      ####
--------------------------------------------

Welcome to my React Photo Gallery App, where you come for the components, but you stay for props and state. This app uses the React UI library to present pictures from flickr.

To run: 
1. Download dependencies using **npm install** in your Terminal/CLI.
2. Get API Key (non-comercial) from flikr: https://www.flickr.com/services/apps/create/apply/
3. Create a **config.js** file in main directory and in it copy the following, except with your API Key as a string:
      ```
      const apiKey = '12345example67890';
      export default apiKey
      ```
4. Back in your Terminal/CLI, type: **npm start**

Or:
1. Go to: https://react-gallery-app.davidjmcgarveygithub.now.sh/


**BASIC FEATURES**
Using React components and the Flickr API, this web app allows users to search all of Flickr for whatever they would like. Upon search, 24 photos from the web will be displayed for the user's enjoyment. There are also 4 buttons that will search what is written on the button. Search results are reflected in the URL. 

  **EXTRA FEATURES**
- A "Loading..." indicator is present during the data fectching. 
- If the user's search fails to retreive any photos, a message will appear encouraging them to try again.
- 404-like error route that lets user know that their url ain't cutting it.  

Author: David J McGarvey
Created: 2019-11-19
Updated: 2019-11-27


--------------------------------------------
###      create-react-app README      ###
--------------------------------------------
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
