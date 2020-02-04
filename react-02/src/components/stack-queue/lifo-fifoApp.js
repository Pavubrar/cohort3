import React, { useState } from 'react';
import { Stack, Queue } from './lifo-fifo'
import './lifo-fifo.css';
import StackList from './stackList'
import QueueList from './queueList'

const lifo = new Stack();
const fifo = new Queue();
const initialList = ["🍇", "🍈", "🍉", "🍊", "🍌", "🍍", "🍎", "🍑", "🍒", "🍐", "🍓", "🌹"]

const LifoFifoApp = () => {
    // const [queue, setQueue] = useState();
    // const [stack, setStack] = useState(lifo);

    const [count, setCount] = useState(0)

    const handleAdd = () => {

        lifo.push(initialList[count]);
        console.log(lifo);
        fifo.enqueue(initialList[count]);
        console.log(fifo);
        //  setQueue(fifo.top);
        setCount(count + 1)
    }
    const handleRemove = () => {
        lifo.pop();
        console.log(lifo);
        fifo.dequeue();
        setCount(count - 1);
    }
    return (
        <div>
            <div className="butttons-ui">
                <button onClick={handleAdd}>Add Item</button>
                <button onClick={handleRemove}>Remove Item</button>
            </div>
            <div className="lists">
                <h2>Stack</h2>
                <h2>Queue</h2>
                <StackList list={lifo} />
                <QueueList list={fifo} />
            </div>
        </div>

    )

}
export default LifoFifoApp;