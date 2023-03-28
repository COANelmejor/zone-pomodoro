# Zone Pomodoro

<a href="https://www.repostatus.org/#active"><img src="https://www.repostatus.org/badges/latest/active.svg" alt="Project Status: Active – The project has reached a stable, usable state and is being actively developed." /></a>

A simple Pomodoro timer for when you need to be in "The Zone".

## Description

When you use "The Pomodoro Technique" you have to work for 25 minutes and then take a 5 minute break (and 15 minutes every 4th break).

You stay focus for around 25 minutes, but some times you need a minute or two to be able to focus. (If not more)

When you are in "The Zone" you can work for as long as you stay focused.

This two ("The Pomodoro" and "The Zone") are not exactly very compatible between each other.

Because when you enter "The Zone" and you have to work only for 25 minutes, you can't take a 5 minute break. YOU ARE FOCUSED IN "THE ZONE".

For that reason, I created this project to help you stay focused in "The Zone" how much you want.

The principal idea is to get "Break Time" and use it when you get out of "The Zone".

## How it works

### Setup

At the beginning you need to set your "Pomodoro".

You will need 4 parameters:

| Parameter | Description | Pomodoro Default | Zone Recommended |
|----------|-------------|---:|---:|
| **Work Time**   | The time you have to work, before you get "Break Time". | 25 minutes | 5 minutes |
| **Short Break Time or "Rest Time"** | The number of minutes you have to take on a short break. | 5 minutes | 1 minutes |
| **Long break multiplier** | How big should be long breaks compared to short bracks. | 3 times | 3 times |
| **# of Cycles for big Breaks** | The number of "Short Breaks" you have to take before you get start to get "Long Break Time". | 4 cycles | 4 cycles |

Then you can start your **"Zone Pomodoro"**.

### Usage

You have two timers: **"Work"** and **"Break"**.

Once you start the "Work" Timer you will have to work for the minutes you set.

Every time the "Work" Timer reaches 0, the "Break" Timer gain an amount of time, defined by your parameters, and the "Work" Timer will be reseted and start the countdown again automatically.

When you get out of "The Zone" you should to take a "Break".

You can take a break whenever you need as long as you have accumulated time on your "Break" Timer.

When you start the "Break" Timer, the "Work" Timer will stop saving it current time.

When you finish your "Break Time", resume the "Work" Timer, so you can add more "Break Time" to your "Break" Timer.

**Note:** Only one timer can be running at a time. Starting a timer will stop the other one, but stopping a timer will not start the other one.

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
