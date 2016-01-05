# vis-component

A scaffold/base example to pattern our vis components after.


# Structure

This repo is meant to provide a minimal example / starter for an encapsulated visualization component.

An index.html and index.jsx file provide an example of the component in use. The components main files are found in `src` with the `components` subdirectory as the holder for react components that may or may not wrap a visualization and a `chart` folder for visualization code that is not react specific.

React is use as the primary encapsulation of visualization so that there is a clear and unambiguous way to declaratively instantiate them. However the charts themselves will also provide an API that can allow them to be used directly without react.

If using this as a started project a number of things need to renamed to match your new component, in particular everything saying viscomponent, visComponent or vis_component should probably be changed to a more descriptive name.

# Dev Workflow

Uses webpack for building and webpack-dev-server during development. These can be accessed via npm scripts

`npm start` - to start the server in dev mode (with a watcher). Go to localhost:8080 when this is running to start execution from index.html. You can change the value in sample_data and refresh to see a change in the vis.

`npm run build` - execute the build. Results currently go into a build subfolder and library dependencies are extracted to a .deps file.

See `webpack.config.js` for details.
