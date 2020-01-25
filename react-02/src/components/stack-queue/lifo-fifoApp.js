import React, {useState} from 'react';
import {Stack, Queue} from './lifo-fifo'
import './lifo-fifo.css';
 const lifo =new Stack();
 const fifo = new Queue();
 const initialList = ["🍇","🍈","🍉","🍊","🍌","🍍","🍎","🍑","🍒","🍐","🍓","🌹"]

 const LifoFifoApp = () => {
     const [stack, setStack] = useState(lifo.stack);
     const [queue, setQueue] = useState(fifo.queue);
     const [list, setList] = useState(initialList[0]);
     //const [count, setCount] = useState(0)

     const handleAdd =() => {
         
         lifo.push();
         console.log("add clickrd");
         const stackUpdate = (list.concat());
         setStack(stackUpdate);
         console.log("add clickrd");
         fifo.enqueue();
         const queueUpdate =(list.concat()) ;
         setQueue(queueUpdate);
         
         //setNext(items.pull())

     }
     const handleRemove = () => {
         lifo.pop();
         const stackUpdate =lifo.stack.slice();
         setStack(stackUpdate);
         fifo.dequeue();
         const queueUpdate = fifo.queue.slice();
         setQueue(queueUpdate);

     }
     return(
         <div>
    <ul>
        {initialList.map(item => (
            <li key ={item}> {item}</li>
                    ))}
    </ul>
         <div className="butttons-ui">
             <button onClick={handleAdd}>Add Item</button>
             <button onClick={handleRemove}>Remove Item</button>
         </div>
         <div className="lists">
             <h2>Stack</h2>
             <h3>Upcoming Item</h3>
             <h2>Queue</h2>
         </div>
         </div>
    
     )
     
 }
 export default LifoFifoApp;