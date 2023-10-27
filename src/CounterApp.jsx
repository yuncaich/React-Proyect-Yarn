import propTypes from 'prop-types';
import {useState} from 'react';
//Cuando cambia el estado se vuelve a renderizar el componente cambia el component y el html
function CounterApp({ value }){

    const [ counter,setCounter ] = useState(value);

    function handleAdd(){
        //console.log(event,newValue);
        setCounter(counter+1);  
        //setCounter((c)=>c+1);
    }
    
    function handlerest(){

        setCounter(counter-1);
    }

    function handlereset(){
        setCounter(value);
    }

    return (
        <>
            <h1> counter </h1>
            <h2> {counter} </h2>

            <button onClick={ handleAdd }> +1 </button>
            <button onClick={ handlerest }> -1 </button>
            <button onClick={ handlereset }> Reset </button>

        </>

    );
}

CounterApp.propTypes = {
    value: propTypes.number.isRequired,
}



export default CounterApp;