// import React from 'react';
// import ReactDOM from 'react-dom';
// import "./index.css";
// const name="Anshu";
// const imag="https://picsum.photos/200";
// const imag1="https://picsum.photos/300";
// const link="https://www.google.com/search?q=random+image+url&oq=random+ima&aqs=chrome.2.69i57j0i433i512l3j0i512l6.6423j1j7&sourceid=chrome&ie=UTF-8"
// //const curDate=new Date().toLocaleDateString();
// const curTime=new Date().toLocaleTimeString();
// // .heading{
// //   color: rgb(45, 45, 179);
// //   text-align: center;
// //   text-transform: capitalize;
// //   font-weight: bold;
// //   text-shadow: 0px 2px 4px yellowgreen;
// //   margin: 70px 0;
// //   font-family: 'Josefin Slab', serif;
// //   font-family: 'Ubuntu', sans-serif;
// // }
// const heading = {
//   color:  "#E491A3",
//   textTransform: "capitalize",
//   textAlign: "center",
//   fontWeight: "bold",
//   textShadow: "0px 2px 4px yellowgreen",
//   margin: "70px 0",
//   fontFamily: "'Josefin Slab', serif"
// };
// ReactDOM.render(
//    <>
//     <h1 style={heading}>{`Hlw My name is ${name}`}</h1>
//     <p>{`Today date is ${ new Date()}`}</p>
//     <p>{`Currrent time is ${curTime}`}</p>

//     <div className="imgdiv">
//       <img src={imag} alt="randomimg"/>
//       <a href={link} target="RandomNum">
//       <img src={imag1} alt="randomimg"/>
//       </a>
//     </div>
//    </>,
//    document.getElementById("root")
// );
// // .heading{
// //   color: rgb(45, 45, 179);
// //   text-align: center;
// //   text-transform: capitalize;
// //   font-weight: bold;
// //   text-shadow: 0px 2px 4px yellowgreen;
// //   margin: 70px 0;
// //   font-family: 'Josefin Slab', serif;
// //   font-family: 'Ubuntu', sans-serif;
// // }


// import React from 'react';
// import  ReactDOM  from 'react-dom';
// import "./index.css";
// let greeting='';
// const cssstyle={
  
// };
// let curDate=new Date(2023, 9, 13,9 );
// curDate=curDate.getHours();

// if( curDate>=1 && curDate<12){
//   greeting='Good Morning';
//   cssstyle.color='green';

// }else if(curDate>=12 && curDate<19){
//   greeting='Good Afternoon';
//   cssstyle.color='orange';
// }else{
//   greeting='Good Night';
//   cssstyle.color='black';
// }

// ReactDOM.render(
// <>
// <div>
// <h1 className="heading">Hlw Sir, <span style={cssstyle}> {greeting} </span></h1>
// </div>
// </> ,
//   document.getElementById("root")
// );

// import React from "react";
// import  ReactDOM  from "react-dom";
// import App from "./App";

// ReactDOM.render(<App/>,document.getElementById("root"));

//  {/* <Card imgsrc={Sdata[0].imgsrc}
//           title={Sdata[0].title}
//           sname= {Sdata[0].sname}
//           link={Sdata[0].link}/> */}
// {/* 
//     <Card imgsrc={Sdata[1].imgsrc}
//           title={Sdata[1].title}
//           sname= {Sdata[1].sname}
//           link={Sdata[1].link}/>

//     <Card imgsrc={Sdata[2].imgsrc}
//           title={Sdata[2].title}
//           sname= {Sdata[2].sname}
//           link={Sdata[2].link}/>

//     <Card imgsrc={Sdata[3].imgsrc}
//           title={Sdata[3].title}
//           sname= {Sdata[3].sname}
//           link={Sdata[3].link}/>      
    
//     <Card imgsrc={Sdata[4].imgsrc}

//           title={Sdata[4].title}
//           sname= {Sdata[4].sname}
//           link={Sdata[4].link}/> */}





// function ncard(val){
//       console.log(val);
// return(
//       <Card imgsrc={val.imgsrc}
//           title={val.title}
//           sname= {val.sname}
//           link={val.link}/>
// );
// }{
      //Sdata.map(ncard)}



// {Sdata.map(function ncard(val){
//       return(
//             <Card imgsrc={val.imgsrc}
//             title={val.title}
//             sname= {val.sname}
//             link={val.link}/>  
//       );
// })}

import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import App from './App';
ReactDOM.render(<App/>,
    document.getElementById("root")
);

