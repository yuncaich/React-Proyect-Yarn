import React from 'react'
import ReactDOM from 'react-dom/client'
import HelloWorld from './HelloWorldApp'
//import FirstApp from './FirstApp'
import Counter from './CounterApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld/>
        <Counter value={11}/>
    </React.StrictMode>
    
)