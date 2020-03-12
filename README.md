# React Components Study

<br>

# What is the React Component Study?
The React component Study is an examination of Components, functionality, and best practices.

Here are a few questions from the study to explore:

* [](#)
* [](#)
* [](#)

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

# How do you create and use components?
To create and use basic components in your application, you simply need to follow the following process:

<br>

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
First, you need to make sure you import react so that you can use it inside your file. To do this, you simply need ot import React from the react dependency that which comes bundled with the ```create-react-app``` application installation.
```JavaScript
  import React from 'react';
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
If you want to export your component for use elsewhere in your code, you need to export it. To export the component, you just have to export as default and give the component a name that will be called.
```JavaScript
  import React from 'react';
  
  function Split() {
    return (
      <div className='split'>
        This is the content of the split component.
      </div>
    );
  }

  export default Split              // export the Split component elsewhere in the code.
```

<br>

## 6. Import the component.
To use an external component, you need to import it from the composition file it is stored in. In this case, the composition file route is back in the src file (e.g ./) and then inside the composition file (e.g. ./composition/Split.js).
```JavaScript
  import React from 'react';
  import Split from './composition/Split';    // import split from the composition file.


  function App() {
    return (
      <main className='App'>
        // code here.
      </main>
    );
  }

  export default App;
```

<br>

## 7. Use the component in your file.
After you have imported the component to your file, you can freely use it as many times as you wish in the file
```JavaScript
  import React from 'react';
  import Split from './composition/Split';    


  function App() {
    return (
      <main className='App'>
        < Split />
      </main>
    );
  }

  export default App;
```






</dd>
</dl>

