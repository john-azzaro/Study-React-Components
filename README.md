# React Components Study

<br>

# What is the React Component Study?
The React component Study is an examination of Components, functionality, and best practices.

Here are a few questions from the study to explore:

* [What is a component?](#What-is-a-component)
* [Why do you use components?](#Why-do-you-use-components)
* [How do you create and use components?](#How-do-you-create-and-use-components)
* [How do you style components?](#How-do-you-style-components)
* [](#)
* [](#)
* [](#)

<br>
<br>
<br>

# What is a component?

<dl>
<dd>

## Components are resuable pieces of code to create elements.
**Components are the building blocks of a React app.** In a more technical sense, a component is a JavaScript class or function that accepts inputs like props and returns a React element that describes how the section's UI will appear. At its core, components can help organize complex applications by making small, reusable pieces of code. Below is an example of the simple "component".
```JavaScript
      const myGreeting = <div>                                             
                            <h1>This is my Greeting</h1>                     
                            <p>Salutations from myself to yourself</p>
                         </div>
```

<br>

## A component can be written as a function.
When you write the component as a function, you simply return the component inside parentheses ( () ). **Note here that custom components should be upper case**
```JavaScript
      function Greeting() {
        return (
          <div>                                             
              <h1>This is my Greeting</h1>                     
              <p>Salutations from myself to yourself</p>
          </div>
        );
      };
```

<br>

## To use functional components, you can use tags or createElement.
**The first method is using tags (e.g. ```<myComponent> <myComponent />```).** Tags can be used because a React component that only accepts one element and all the rest/siblings must be nested within the one parent element.

**The second method is to use the full tags as an element (e.g. ```<myComponent><myComponent/>``` ).** This will come in handy when you start nested elements later on.

**The third method is to use the ```React.createElement(myComponent)``` method.** When you use this method, you simply pass in the component name (i.e. Greeting).
```JavaScript
  // Method 1: Tags:
  ReactDOM.render(< Greeting />, appRoot);
  
  // Method 2: Full tag element:
  ReactDOM.render(<Greeting><Greeting/>, appRoot);

  // Method 3: createElement method:
  ReactDOM.render(React.createElement(Greeting), appRoot);

```

</dd>
</dl>

<br>
<br>
<br>

# Why do you use components?
The advantage of using React components is that the are *reusable*. You can make a special component like a button, box, etc. and reuse them as many times as you want throughout your code. They serve the same purpose as JavaScript functions but work in isolation and return HTML via a render function.

<dl>
<dd>

</dd>
</dl>

<br>
<br>
<br>

# What is a prop?

<dl>
<dd>

## Props make components easily and dynamically customizable.
 **Props are the inputs (i.e. arguments) to a React component and are similar to HTML element attributes.** Props provide a way of pasing properites and data down from one component to another, typically from parent to a child component (unidirectional dataflow). In many ways, you can consider props the same as arguments to a function.  However, note that props are *read-only* and components should *never* modify props passed into it. So when a component is passed a prop as an input, it should always return the same result for the input.

<br>

## To use props in a component, use curly braces.
Inside the curly braces, you can insert JavaScript, such as variables, etc. You can also use backticks inside the curly braces as well.
```JavaScript
      const googleAddress = "https://google.com";
      const target = "_blank";

      const googleHome = (
        <a href={googleAddress} target={target}>        // curly braces for variables.
          {`Google Homepage`}                           // curly braces with backticks.
        </a>
      );

      ReactDOM.render(googleHome, appRoot);
```

<br>

## You can add id's and class attributes to output HTML.
**You can add id's and classes which are rendered into the DOM by using props.** Notice that these look very much similar to DOM attributes. However, keep in mind that there are some subtle differences in prop attributes. For example, although the "id" is the same as it is in HTML,the the prop for "class" is called "className".

```JavaScript
      function Greeting() {
        return (
          <span id='greet-id' className='greet-class'>Hello world</span>    // id and classname.
        );
      }

      ReactDOM.render(< Greeting />, appRoot);
```

<br>

## Props are function arguments.
**Props are passed to components much like the way arguments are passed into a function.** If you were to pass in a the parameter "args" and insert a console.log(args), you will get an empty object ( {} ). This object is the component's props (which we called "args") and contains the key/value pairs corresponding to the props that were passed in.

In the example below, when you render Greeting, you can also (in the same tag) pass in any arguments you want. In this case, there are no argument. However, if you console log the args you passed in (which are still nothing in this case), you will get an *empty object*. This object is what will store all the arguments you pass in to the component for you to use internally. 
```JavaScript
      const appRoot = document.querySelector("#application-root");

      function Greeting(args) {                                                              // 2. Arguments passed in as "args".
        console.log(args)                                                                    // 3. {}
        return <span id="greeting-id" className="greeting-class">My Greeting</span>;    
      }

      ReactDOM.render(<Greeting />, appRoot);                                                // 1. Greeting instance with NO arguments.
```

<br>

## Pass props like arguments.
**To pass props to components, you simply pass the arguments to the empty "props" object.** Suppose you want to pass attributes from OUTSIDE the component. In the example below, when we render Greeting with ```ReactDOM.render()``` and pass in ```className="new-class-name"```, we are essentially populating the blank object in the form of key/value pairs, which in this case would be ```className: new-class-name```. 

And because you pass the props like arguments, you pass ```props``` as a parameter to Greeting and then access the key/value pair for className using dot-notation. In this case, we use the curly braces and ```props.className```.
```JavaScript
      const appRoot = document.querySelector("#application-root");                     

      function Greeting(props) {                                                             // 2. arguments passed in as "props". 
        return <span id="greeting-id" className={props.className}>My Greeting</span>;        // 3. className accesed with props.className.
      }

      ReactDOM.render(<Greeting className="new-class-name"/>, appRoot);                      // 1. Greeting instance with className argument.
```

<br>

## You can pass multiple types of data to the component.
**The types of data you can pass include strings, booleans, numbers, objects, arrays, etc.** You can do all of that when you render the instance of your component. **Also notice that except for the strings, all the values of the data types are in curly braces ({}).**
```JavaScript
      ReactDOM.render(
        <Greeting 
          className="new-class-name"           // class
          foo='bar'                            // string
          boolProp={false}                     // booleans
          numberProp={123}                     // integers
          objectProp={{ baz: 'buzz' }}         // objects
          objectProp={ bar }                   // object via const obj = {foo: 'bar'}
          functionProp={func}                  // function via const func = function(){...}
          arrayProp={[ '3', '2', '1' ]}        // array
        />, appRoot);
```

<br>

## Nesting Elements will create a prop called "children".
**When you nest other elements inside your rendered component, React will create a special object called "children".** For example, if you want to nest an ```<h1>``` element inside ```<header>```, those nested elements are stored and accessed via the "children" property. The children prop to pass nested element much like an argument to a function which React then renders to the page.



 In the following examples, you'll see how the rendered component shows in the console WITHOUT children and WITH children and how when you do have children, a special "children" property is created.

<dl>
<dd>

<br>

### WITHOUT nested elements, React will not provide the "children" object.
-------------
**Withough nested elements, the component will not have the children object.** In the example below, we have a basic render of the Greeting component WITHOUT any nested elements. Note that in the console, the component does NOT have a children property.
```JavaScript
      function Greeting(props) {
        console.log(props)
        return (
          <header>
            Salutations!                       // OUTPUT: Salutations!
          </header>
        );
      }

      ReactDOM.render(
        <Greeting className="my-class">        // Note that there are NO nested elements.
        </Greeting>, appRoot);
```
```
  ==========CONSOLE==========

  {className: "my-class"}
    className: "my-class"
    __proto__: Object
```

<br>

### WITH nested elements, React WILL provide the "children" object.
--------------
**React creates the "children" prop automatically and assigns its value whatever was between the open and closing of the component tags.** The children prop is enabling the h1 element to be specified *outside* the Greeting component at the exact point where we placed it.

```JavaScript
      function Greeting(props) {
        console.log(props)
        return (
          <header>
            {props.children}                   // OUTPUT: Warm Welcome!
          </header>
        );
      }

      ReactDOM.render(
        <Greeting className="my-class">
          <h1>Warm Welcome!</h1>               // h1 nested element.
        </Greeting>, appRoot);
```
```
  ==========CONSOLE==========

  {className: "my-class", children: {…}}
    className: "my-class"
    children: {$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}
    __proto__: Object
```
</dd>
</dl>

</dd>
</dl>

<br>
<br>
<br>




























/////////////////////////////////////////////////////////



# How do you create and use a custom component?
To create and use basic components in your application, you simply need to follow the following process:

<dl>
<dd>

## 1. Create a composition file.
Assuming you have your React application setup and ready to go (e.g. create-react-app), the first thing you need to do is create "composition" file inside your source files folder. This file is going to house all of the components for the immediate study.
```
  src  >  composition  
```

<br>

## 2. Create a component file in the composition folder.
Once you have the composition folder setup, you can put all of your component files inside. For this study, we want to create a component that splits the screen in two called "Split." Remember that in the case of custom components, you always want to capitalize the first letter by convention.
```
  src  >  composition  >  Split.js
```

<br>

## 3. In your component file, import React.
First, you need to make sure you import react so that you can use it inside your file. To do this, you simply need to import React from the react dependency that which comes bundled with the ```create-react-app``` application installation.
```JavaScript
  import React from 'react';                         // Import React for use inside file.
```

<br>

## 4. Create a function for your component.
The function you create is going to be the custom component you want to exort elsewhere in your code.  In this case, we're going to create a component that "splits" a screen in two, so we should name it something that is intuitive like "Split". Again, remember that since this is a custom component, you want to capitalize the first letter.
```JavaScript
  import React from 'react';
  
  function Split() {                                 // Split component.
    return (
      <div className='split'>
        This is the content of the split component.
      </div>
    );
  }
```

<br>

## 5. Export the component for use in the app.
If you want to export your component for use elsewhere in your code, you need to export it. React uses the "export" keyowrd to export a particular module, named parameter, etc. To export the default export from a file, you follow the following syntax:
```JavaScript
  import React from 'react';
  
  function Split() {
    return (
      <div className='split'>
        This is the content of the split component.
      </div>
    );
  }

  export default Split                               // export the Split component elsewhere in the code.
```

<br>

## 6. Import the component.
React uses the keywords ```import``` and ```from``` to import a particular module or named parameter. In this case, since we have a custom component named "Split" in the composition file, we can import the component "Split" from the composition file route back in the src file (e.g ./) and then inside the composition file (e.g. ./composition/Split.js).
```JavaScript
  import React from 'react';
  import Split from './composition/Split';           // import split from the composition file.


  function App() {
    return (
      <main className='App'>
        This is the content of the split component.
      </main>
    );
  }

  export default App;
```

<br>

## 7. Use the component in your file.
After you have imported the component to your file, you can freely use it as many times as you wish in the file by inserting the tag with the component name anywhere you wish. In this case, the "Split" component is being used in the main App component. Note that you could add as many component tags as you wish because since components are reusable. So if you added 6 instances of ```< Split />```, you would have 6 elements of "This is the content of the split component."
```JavaScript
  import React from 'react';
  import Split from './composition/Split';    


  function App() {
    return (
      <main className='App'>
        < Split />                                     // "Split" component.
      </main>
    );
  }

  export default App;
```

</dd>
</dl>

<br>
<br>
<br>

# How do coordinate CSS styles with components?

<dl>
<dd>

## 1. Create a .css file in the src folder.
When you use ```create-react-app``` when you setup your project, you have webpack enabled. Webpack lets you add CSS files specifically 
for each component you make. In this example, we are making a style sheet specifically for the App component. This is good because it 
is a seperation of concerns that allows you to focus on one section of styling at a time.
```
  src  >  App.css
```

<br>

## 2. Inside the new .css file, create your styling.
This stylization file is exactly the same as any normal css file. 
```css
  .App {                             
    display: flex;
    margin: 40px;
    min-height: calc(100vh - 80px);
  }
```

<br>

## 3. Import the .css file to the .js file you want to use it in.
Tp use the CSS stylization in your component file, you need to import it from its location in the directory. In this case, the 
App.css file is in the same folder (i.e. ./).Remember that webpack is going to add the styles to the browser when you import it 
to the JavaScript file.
```javascript
  import './App.css';
```

</dd>
</dl>

<br>
<br>
<br>

# How do make components configurable.
When You make a component configurable, you increase its potential for reuse by mixing both custom and standard props. In the example below, 
we pass props as a parameter and access the passed children from the props object to make the Split component versatile for any application. 

<dl>
<dd>

## 1. Create a .css file for the component stylization.
The first step in styling components (with props) is to create the stylesheet.
```css
  .split {
    flex: 1;
    padding: 1em;
  }
```

<br>

## 2. Add classNames to respective components.
In this example, the Split components have been expanded from a single tag to tags that have content nested inside of them. You can
insert the classNames inside these component tags.
```JavaScript
  function App() {
    return (
      <main className='App'>
        <Split className='left'>                // class name = left.
          Content for left panel.
        </Split>
        <Split className="right">               // class name = right.
          Content for right panel.
        </Split>
      </main>
    );
  }
```

<br>

## 3. Add the stylizations to your .css file.
For this step, you can either include your stylizations in a condensed stylesheet (i.e. App.css) or you can create a seperate stylesheet
and then import that stylesheet to the document you are using.
```css
    .App {
      display: flex;
      margin: 40px;
      min-height: calc(100vh - 80px);
    }

    .left {                                     // stylization for left column.
      background-color: darkslategray;
      color: azure;
    }

    .right {                                    // stylization for right column.
      background-color: wheat;
      color: firebrick;
    }
```

<br>

## 4. Setup the component for props.
In this step, you want to enable the "Split" component to show the content inside you other component (in this case App.js the the string 
"Content for left panel" and "Content for right panel". Those strings will be passed to the Split component via props and then when you 
call props.children, you will see the message.
```JavaScript
  function Split(props) {                                 // pass the props object.
    return (
      <div className='split'> 
        {props.children}                                  // and call the props.children.
      </div>
    );
  }
```

<br>

## 4. Make the component configurable.
Inside the split component you add code to read the props and create a new combined variable called "combinedClassName".
```JavaScript
  function Split(props) {
    const combinedClassName = `split ${props.className}`;      // Code reads props and create new className.
    return (
      <div className={combinedClassName}>                      // ... and call the new combinedClassName.
        {props.children}
      </div>
    );
  }
```

</dd>
</dl>

<br>
<br>
<br>







</dd>
</dl>

<br>
<br>
<br>

