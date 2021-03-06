# Zone Pomodoro

A simple Pomodoro timer for when you need to be in "The Zone".

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

When you use "The Pomodoro Technique" you have to work for 25 minutes and then take a 5 minute break (and 15 minutes every 4th break).

You stay focus for around 25 minutes, but some times you nees a minute or two to be able to focus.

When you are in "The Zone" you can work for as long as you stay focused.

This two ("The Pomodoro" and "The Zone") are not exactly very compatible between each other.

Because when you enter "The Zone" and you have to work only for 25 minutes, you can't take a 5 minute break. YOU ARE FOCUSED IN "THE ZONE".

For that reason, I created this project to help you stay focused in "The Zone" how much you want.

The principal idea is to get "Break Time" and use it when you get out of "The Zone".

## How it works

### Setup

At the beginning you need to set your "Pomodoro".

You will need 5 parameters:

| Parameter | Description | Pomodoro Default | Zone Recommended |
|----------|-------------|---:|---:|
| **Work Time**   | The number of minutes you have to work, before you get a "Break Time". | 25 minutes | 5 minutes |
| **Short Break Time** | The number of minutes you have to take on a short break. | 5 minutes | 1 minutes |
| **Long Break Time**  | The number of minutes you have to take on a long break. | 15 minutes | 3 minutes |
| **# of Short Breaks** | The number of "Short Breaks" you have to take before you get start to get "Long Break Time". | 3 times | 3 times |
| **# of Long Breaks** | The number of "Long Break" you have to take before you get a "Work Time". | 1 times | 1 times |

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
