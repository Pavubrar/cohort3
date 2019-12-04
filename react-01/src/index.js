import React from 'react';
import ReactDOM from 'react-dom';
//import { whileStatement } from '@babel/types';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// var style ={
//     backgroundColor: "orange",
//     color: "white",
//     fontFamily: 'Arial'
// }
// let skiData ={
//     total: 50,
//     powder: 20,
//     backcountry: 10, 
//     goal: 100
// }
// class SkiDayCounter extends React.Component{
//     render(){
//         return(
//             <section>
//             <div>
//                 <p>Total days: {this.props.total}</p>
//             </div>
//             <div>
//                 <p>Powder days: {this.props.powder}</p>
//             </div>
//             <div>
//                 <p>Backcountry days: {this.props.backcountry}</p>
//             </div>
//             <div>
//                 <p>Goal days: {this.props.goal}</p>
//             </div>
//                 Ski Days..
//             </section>
//         )
//     }
// }
//     ReactDOM.render(
//         <SkiDayCounter
//         total={skiData.total}
//         powder={skiData.powder}
//         backcountry ={skiData.backcountry}
//         goal = {skiData.goal}/>,
//         document.getElementById('root')
//     )


// // class Message extends React.Component{
// //     render() {
// //         console.log(this.props);
        
// //         return(
// //             <div>
// //              <h1  style = {{color:this.props.color}}>
// //              {this.props.msg
// //              }</h1>
// //              <p>I'll check back in{this.props.minutes} minutes</p>
// //             </div>
// //         )
// //     }
// // }
// const title = React.createElement('ul', {id: 'title', className:'header',style: style},
// React.createElement('li',{},
// "hello parveen"
// 'Hello World!'
// ))
// ReactDOM.render(
//    // title,
//    <div style ={style}> <h1 id= "id-header">Hello World</h1>
//    <p>Am happy to learn React</p> 
//    </div>,
   
//  ReactDOM.render(<Message color= "blue" msg ="how are you ?"minutes = {2} />,document.getElementById('root'))
