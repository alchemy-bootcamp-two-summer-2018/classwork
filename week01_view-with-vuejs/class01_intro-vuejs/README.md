Class 01: Intro to VueJS
===

## Agenda

* Welcome to Bootcamp II!
* BC I Project Review Tomorrow
* Modern JavaScript
    * Object Properties
    * Destructuring
    * Template Literals
* VueJS

## Bootcamp II

* Week 1: The View
* Week 2: The Server
* Week 3: Apps: Transitions, Aggregations, Simple Auth 
* Week 4: Project Week

## Modern JavaScript

### Object Properties

#### Shorthand

Omit `: function` for properties that are functions:

```js
const superhero = {
    fly: function() {

    }
};
```

```js
const superhero = {
    fly() {

    }
};
```

Collapse properties being assign variables of same name:

```js
const superhero = {
    name: name,
    power: power
};
```

```js
const superhero = { name, power };
```

#### Destructuring

Reference property of same name as variable:

```js
const name = superhero.name;
```

```js
const { name } = superhero;
```

Can be more than one:

```js
const { name, power } = superhero;
```

Works for function parameters too:

```js
function logHero({ name, power }) {
    console.log(name, power);
}
```

A lot more can be done with destructuring...
 
### Template literals

String concatenation:

* tedious and hard to read
* no multi-line support

```js
const html = '<span class="greeting">' + greeting + ' ' + name + '</span>';
```

```js
const html = `<span class="greeting">${greeting} ${name}</span>`;
```

```js
const html = `
    <div>
        <span class="greeting">${greeting}</span>
        <span class="name">${name}</span>
    </div>
`;
```

## Vue CLI

### Up and Running

* Install Vue CLI Tool
    ```sh
    > npm install -g @vue/cli
    ```
* Create Project
    ```sh
    > vue create my-project
    ```

### Review Template Project

What can we learn?

### ESLint

* `> vue add @vue/eslint`
* Choose "errors only"
* Copy in `.eslintrc` file
* Add `/* eslint-env node */` to top of `babel.config.js`

## Intro to Vue.js

### Where does data come from?

* returned from `data` config method
* `props` from parent

### How is DOM updated?

#### Text Nodes

Mustaches:

```html
{{data}}
```

**NOTE:** Data is interpreted as plain text. Use `v-html=` for raw html.

#### Element Properties

##### Set with `v-bind`

`v-bind:` prefix on attributes:

```html
<button v-bind:disabled="!isValid">Submit</button>
```

Shorthand is `:` (skip the `v-bind`)

**NOTE:** the value in the attribute is interpreted as data expression, without `v-bind:` is just "string"

##### Events Via `v-on:`

Register to events using `v-on:`

```html
<button v-on:click="doSomething">Click Me To Do Something</button>
```

Shorthand is `@` (in lieu of `v-on:`)

Can be:

* Assignment expression to evaluated
* Method on the component _to be called_

#### Blocks (Multiplicity)

* Loop with `v-for`
* Conditional render with `v-if`
* Show/Hide with `v-show`
