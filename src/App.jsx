// import React from 'react';
// import Heading from './Heading';
// import Para from './Para';
// import List from "./List";
// function App(){
//     return(
// <>
//   <Heading/>
//   <Para/>
//   <List/>
// </>
//  );
// }
//export default App;


// import React from 'react';
// import Heading from './Heading';
// import "./index.css";
// function App(){
//     return(
// <>
//   <Heading/>

// </>
//  );
// }
// export default App;


import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';
const favseries='netflix';
// const FavS=()=>{
//     if(favseries==='netflix'){
//         return <Netflix/>;
//     }else{
//         return <Amazon/>;
//     }
// };
const App=()=>(
    <>
    <h1 className='heading_style'>List of 5 netflix Series in 2020</h1>
   {/* <FavS/> */}
   {(favseries==='netflix') ? <Netflix/>: <Amazon/>}
    </>
);
export default App;

