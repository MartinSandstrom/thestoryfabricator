#StoryFabricator
*NPM module for https://storyfabricator.herokuapp.com/.*

## Install

```
$ npm install thestoryfabricator --save
```

## Usage

```js
var storyfabricator = require("thestoryfabricator");
storyfabricator.getRandomStory().then((response) => {
    console.log(response);
});
```