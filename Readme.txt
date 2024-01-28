Episode 03 - Laying the Foundation

Difference between functional component and Element 

Function use the arrow function and 
naming covention will be camel case letters in Function component
Renedering will happend in tag type 
Ex: const HeadingComponent = () => ( <div> Hello </div>);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)




Element use the small letters 
Element use the name of the element to render it 
Ex: const  headingElement = ( <div> Hello </div>);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(headingElement)


What is component composition ?
Component inside the component is calleed compostion 
ex: const Title = () => ( <div>  Hello this the title </div>);

const HeadingComponent = () => ( <div> <Title/> Hello </div>);
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>)

JSX
jsx will help to prevent from cross side scripting 
JSX transpiled before it reaches the JS - Parcel - Babel
JSx => Babel transpiled to React.createElement => ReactElement - JS object ==> HTML Element(render)

Extensions

- prettier code fomateer 
- Eslint 
- bracker pair colorizer
- better comments


Episode 5 : Lets Get hooked

Two type of export / import
- default export/import
export default  Component_name;
import component_name from "path";
- Named export/ import
export   Component_name;
import { component_name } from "path";


React Hooks
- Hooks are nothing but normal function
when u import u need to import hooks as named hooked
-useState ===>  Whenever state is changes react will re-render my component


Mounting and unmounting the component using useEffect 
   useEffect(() => {
     const timer = setInterval(() => {
       console.log("use effect mounting");
     }, 1000);
     return () => {
          clear the interval so all resource will closed 
       console.log("UseEffect Contact us unmounted");

       clearInterval(timer);
     };
   }, []);