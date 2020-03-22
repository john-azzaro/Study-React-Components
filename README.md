# React Components Study

<br>

# What is the React Component Study?
The React component Study is an examination of Components, functionality, and best practices.

Here are a few questions from the study to explore:

* [What is a component?](#What-is-a-component)
* [What is a prop?](#What-is-a-prop)
* [Why do you use components?](#Why-do-you-use-components)
* [How do you create and use a custom component?](#How-do-you-create-and-use-a-custom-component)
* [How do you style components?](#How-do-you-style-components)
* [How do you make components configurable?](#How-do-you-make-components-configurable)
* [How do you create React class components?](#How-do-you-create-React-class-components)
* [What are default props and how do you use them?](#What-are-default-props-and-how-do-you-use-them)
* [](#)
* [](#)
* [](#)


<br>
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
When you write the component as a function, you simply return the component inside parentheses ( (...) ). **Note here that custom components should be upper case**
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

<br>
<br>
<br>
<br>

# Why do you use components?
The advantage of using React components is that the are *reusable*. You can make a special component like a button, box, etc. and reuse them as many times as you want throughout your code. They serve the same purpose as JavaScript functions but work in isolation and return HTML via a render function.

<br>
<br>
<br>
<br>

# How do you create and use a custom component?

<dl>
<dd>

## Create a composition file to store custom components.
**When you create a composition file, you create a holder for custom components.** Assuming you have your React application setup and ready to go (e.g. create-react-app), the first thing you need to do is create "composition" file inside your source files folder. This file is going to house all of the components for the immediate study.
```
  src  >  composition  
```

<br>

## Create a custom component file
**To create a custom component, simply create a .js file and name it with a capital letter.** Now that you have a composition file, you can create as many custom compents as you want and store them (and associaetd css files) for use in your application. Remember that when you do custom components, by convention you should always capitalize the first letter in the name.
```
  src  >  composition  >  MyComponent.js
```
<br>

## Setup your custom component.
**The setup for a custom component will usually have a few standard elements.** First, you need to import React so you can utilize it in your file. Second, you need to create your custom component. You component can be constructed in a few ways, such as a *function component* or a *class component*. For this example, we'll use a function component but see some of the following questions in this readme for class component composition. Note here that we have the "props" object passed in and ```{props.children}``` to get the child text. 


And lastly, you need to export your component for use elsewhere in the application.
```JavaScript
  import React from 'react';                         // 1. Import react

  function MyComponent(props) {                      // 2. Custom component (with props passed in).
    return (
      <div>
        {props.children}                             // 3. Access the children via props.children.
      </div>
    );
  }

  export default MyComponent;                        // 4. Export "MyComponent" component.
```

<br>

## Import and use you custom component.
**To import a custom component, you need to import the file and then use the component name you exported.** First, you need to import the component by name and then import it from the file location. Once this is done, you can use the component anywhere in the file! In the example below, we use the ```MyComponent``` component in the App component and the result of that JSX return will be "This is a test" passed via the props object to the div element in the MyComponent component.

```JavaScript
  import React from 'react';
  import MyComponent from './composition/MyComponent';      // 1. Import custom component from file location. 

  function App() {
    return (
      <MyComponent>                                         // 2. Use the imported custom component.
        This is a test.                                     // 3. Text accessible via props.children.
      </MyComponent>      
    );
  }

  export default App;
```

**You can also store the component as a constant and then use it in another component.** For example, instead of cramming all the code associated with the component inside another component, you can make things cleaner by storing the component *outside* another function and then using that variable name anywhere you want inside the curly braces.
```JavaScript
  import React from 'react';
  import MyComponent from './composition/MyComponent';    

  const UseComponent = (                                     // 1. Component stored as a const...
    <MyComponent>                             
      This is a test.            
    </MyComponent>    
  );

  function App() {
    return (
      {UseComponent}                                         // 2. Stored component used in code.
    );
  }

  export default App;
```

<br>
<br>
<br>
<br>


# How do you style components?

<dl>
<dd>

## Create a CSS file inside the same folder as your component file.
For component styling, create a style sheet with the name of the component (or related components) in the folder you have the component in. 
For example, if you are making a CSS file for a custom component, it will be inside the composition file. 
```
  composition  >  MyComponent.css
```

## Import the CSS file to your component file
To import a css file, all you need to do is import the file directly using the "import" keyword and the file path.
```JavaScript
    import React from 'react';
    import './MyComponent.css';                      // import css file to component file.
    
    function Greeting(props) {       
    return (                             
      <div>
        {props.children}           
      </div>
    );
  }

  export default Greeting;
```

## You can also use inline styling.
To Use inline styling, you simply need to add the additional attribute to your element. Normally you would want to use className, 
but in this case, you just add the attribute with double brackets, one for the JSX insertion and the second for the css property. 
```JavaScript
    import React from 'react';
    import './MyComponent.css';    
    
    function Greeting(props) {       
      return (                             
        <div style={{ color: props.color }}>            // 1. inline style option
          {props.children}           
        </div>
      );
    }

  export default Greeting;
```

And then to add the inline styling to the component in App, simply add the "color" attribute to the special variables you 
created in the primary App component. In this case, we can add the color name or a hexcode (i.e. color='#126BCC').
```JavaScript
    const MyGreetings = (
      <Greeting color='#126BCC'>                       // 2. added color attribute.
        Hello there friend!         
      </Greeting>  
    );
    
    function App() {
    return (
       {MyGreetings}         
    );
  }
```

</dd>
</dl>

<br>
<br>
<br>
<br>

# How do you make components configurable?

<dl>
<dd>

## Without configurability, components lack multiple uses. 

To put configurability in context, if you use a component like "MyComponent" in another like "App" in App.js, you will most likely need to access content inside the invoked component. To start off, take a look at a basic use of a component in the ```App``` component. Although this is a great example of how to use a component, you'll notice that this component only has one use.
```JavaScript 
  function Greeting() {                        // 1. "Greeting" custom component.
    return (                                   // 2. That returns the following JSX element.
      <div className="greetingStyle">
        Hello there friend!               
      </div>
    );
  }
    
  function App() {
    return (
      <Greeting />                            // 3. Greeting "Hello there friend!" text.  
    );
  }
```

## Configure components with props.
**To create a component that can be used many times over, you need to make the component configurable.** You can do this using the "props" object, which is passed to the relevant component and allows you to access any of the properties that it stores. This is useful because it allows your component to be used in many different ways. 

Consider the Greeting component above. The component as it is has one use... to say "Hello there friend!" with the associated stylings. However, if you want to use the same component with different greetings like "Howdy" or "Hiya", you would have to make completely different components for those seperate greetings. 

**To make the component configurable, you need to use the props object.** This will in turn allow children (i.e. the text "Hello there friend!") to pass via the props object to the Greeting component and back to the App component for display.  To configure the component, you simply need to pass props as a parameter of the Greeting component and then access the child "Hello there friend!" text via ```props.children```.
```JavaScript
  function Greeting(props) {                // 2. Pass the "props" object to access the child text.
    return (                             
      <div className="greetingStyle">
        {props.children}                    // 3. ... and pass child text through via props.children.
      </div>
    );
  }
    
  function App() {
    return (
      <Greeting>                            // 1. Greeting component with children text.
        Hello there friend!                 // 4. "Hello there friend!" will return via JSX.
      </Greeting>            
    );
  }
```

## You can also configure components with variables.
Variables can store such things as attributes (e.g. className, etc.). To make these attributes configurable, you need to create a variable can apply the
attrubutes like stylizations that already exist for your component but also the additional attibutes that exist outside this component. To do this, you 
need to use a template literal and access the props.className prop.
```JavaScript
  function Greeting(props) {       
    const combinedClassName = `greetingStyle ${props.className}`;        // 1. access className prop.
    return (                             
      <div className={combinedClassName}>                                // 2. use as className value.
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
<br>

# How do you create React class components?

<dl>
<dd>

## Classes make React components with extra features.
**Classes are a standard ES6 feature that you can use to make React components with extra features.** A component can be of two types; either a function component or a class component. Functional components is the simplest form of a react component. A class component has a lot more features to define a class component. Like a function component, the class component receives props. Additionally, Classes are similar to objects as they contain methods.However, inside a class component the State object can be changed while the Props object represents fixed values.

## To create a class component, define a class and extend React.component.
**To create a class component, you need to define a class that extends ```React.component```.** 
```JavaScript
  class MyClassComponent extends React.component {
    // code goes here
  }
```

## Class components use the render method.
React class components need a special method called "render". This is the only method required for react class components. The "render" method is similar to the "return" method in a functional component where you "return" JSX to define what the component will look like. The difference between render and return is how the props work for a class component compared to a functional component. In a functional component, props are a parameter. In a class component, the props are NOT parameters. Additionally, props are accessed via the self-referential *this*.
```JavaScript
  class MyClassComponent extends React.component {
    render() {
      return (
        // code goes here.
      );
    }
  }
```

## Class components and Functional components are very similar.
To illustrate how similar class and functional components are, here are two components that do the exact same thing but using either the class or functional format.
```JavaScript
  class MyClassComponent extends React.component {       // class component...
    render() {                                           // ... that renders JSX (i.e. return)...
      return (                                           // ... and returns JSX.
        <div>
          {this.props.children}                          // Props are accessed via this.props.
        <div>
      );
    }
  }
```
```JavaScript
  function MyClassComponent(props) {                      // functional component with props passed in.
    return (
      {props.children}                                    // ... and accessed via props.children.
    );
  }

```

</dd>
</dl>

<br>
<br>
<br>
<br>

# What are default props and how do you use them?

<dl>
<dd>

## Default props are used if no default value is supplied.
Default props will render with the property "static defaultProps". In essence, all you need to do is create a ```static defaultProps``` variable before you render your JSX. Inside this variable you have an object with all the properties you want to to be standard. Then, when you want to assign those default props inside your rendered code, you insert an object inside the brackets you would normally use with JSX (i.e. {{ color: 'red'  }}).
```JavaScript
  class MyClassComponent extends React.component {
    static defaultProps = {                                  // 1. Default prop variable
      color: 'red';                                          // 2. Properties that can be assigned below.
    }  
    render() {
      return (
        <div style={{ color: this.props.color }}>            // 3. And used in the component elements.
          {this.props.children}   
        <div>
      );
    }
  }
```

</dd>
</dl>

<br>
<br>
<br>
<br>

# What is composition?

<dl>
<dd>

## Composition is about arranging components.
**Composition is the approach of arranging components within or next to each other.** Using composition, multiple components can be combined into one new component. Components are like branches on a tree where each branch contains zero or more branches branching off from it, so one component can have
  0 or more components branching from it. The component branches be considered "sub-trees" which would be a new component with its own internal tree of branches.




</dd>
</dl>

<br>
<br>
<br>
<br>

















