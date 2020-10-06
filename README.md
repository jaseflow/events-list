# Events List

```
npm install
npm run build-dictionary // builds tokens
npm run server
npm run start
```

## What I did

I started off in Figma by creating the UI and breaking down the design into
components and styles. You can see the Figma file [here](https://www.figma.com/file/UoI99dMvBW0VQ0cBPwe6M6/Events?node-id=2%3A10).

The UI for this application is powered by Style Dictionary which is a build
system that allows you to create design tokens that can be used once in any
platform.

As the config has been setup to build for the web using Sass, it will
create a `variables.scss` and a `variables.js` file that can be used in
component stylesheets or inline respectively. The config file can also be
configured to build for other platforms like iOS or Android and the property
values will be transformed into the appropriate format.

## What I didn't do

### Automate Figma > Design Tokens > Sass
Defining your design decisions in a platofrm agnostic config file is nice but
it's not the ideal solution. If I had more time I would take things one step
further and use the Figma API to read the values saved in this [Figma
File](https://www.figma.com/file/UoI99dMvBW0VQ0cBPwe6M6/Events?node-id=2%3A10).

By adding a further step to the build process I can take the values from Figma,
populate the JSON files and then finally build those into Sass files. This approach
means that UX team who have little experience editing JSON files can truly make
their Figma component libraries a real source of truth.

### Complete the React functionality
I ran out of time figuring out how to use the new React router to watch for the
route change and update the state to use the selected event details.
