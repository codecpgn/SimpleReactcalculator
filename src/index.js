import React from 'react';
import ReactDOM from 'react-dom';
import { add, sub, mul, div} from "./Calc";
  
ReactDOM.render(
      <ul>
       <li>sum of two no is  {add(40,4)}</li>
       <li>Subtraction of two no is  {sub(30,3)}</li>
       <li>Division of two no is  {div(10,3)}</li>
       <li>Multiplication of two no is  {mul(10,3)}</li>
     </ul>,
   document.getElementById("root")
);