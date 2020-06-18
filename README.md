## Bonus Question **

Describe a hypothetical backend API for persistent custom order of issues:

For the backend we could use a simple Node/Express server with Mongoose and MongoDB serving as the database. I would define a Mongoose schema for issues that would map issues to the repo id, in which I would store in an object. Everytime the order of issues is changed in the frontend I'll send a PUT or a PATCH request to with updated array order. Then I would point my frontend to the port defined in my backend. Instead of making a new request when my active repository id exists inside my DB I'll just load the issues that are stored with the associated id. 

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test:watch`

Launches the test runner in the interactive watch mode.<br />

### `yarn test:coverage`

Launches the test runner in the interactive coverage mode.<br />

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


