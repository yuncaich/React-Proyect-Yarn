// import { Fragment } from "react";  <fragment> </fragment>  <> </>
//const newMessages = 'Fernando';
import PropTypes from 'prop-types';

const newMessages = {
    messages : 'Fernando',
    age: 35,
}

 const FirstAppss = (a,b) => {
     return a+b;
 }

// eslint-disable-next-line react/prop-types
function FirstApp({title}){ 
    //JSON.stringify no podemos psasar un objeto a un html
    //JSON.stringify(newMessages)
    return (
        <>  

            {title/* <code>{FirstAppss(23,4)} </code>      */ }
            <p> Soy un tiluto </p> 
        </>
   
    );

}

FirstApp.defaultProps = {
    title: 'I am a title',
};



export default FirstApp;