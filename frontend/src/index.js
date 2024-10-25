import React from "react";
import ReactDOM from "react-dom";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
/*var color ="red";
var liste = <ul style={{listStyleType:"none",color:color}}>
    <li>element1</li>
    <li>element2</li>
    <li>element3</li>
    <li>element4</li>
    <li>element5</li>
</ul>;*/
/*var color = "red";
var listestyle = {listStyleType:"none" ,color:color};
var elems = ['element1','element2','element3','element4','element5'];
var liste = <ul style={listestyle}>
    {
    elems.map(function(elem,index){
        return <li key={index}>{elem}</li>;
    })
    }
</ul>
ReactDOM.render(liste,document.getElementById('root'));*/


// var elems = ['element1','element2','element3','element4','element5'];
// var Listeelement = function (){
//         return <ul>
//             {
//                 elems.map(function(elem,index){
//                  return   <li key={index}>{elem}</li>;
//                 })
//             }
//         </ul>
// }
// ReactDOM.render(<Listeelement/>,document.getElementById('root'));

/*var elems = ['element1','element2','element3','element4','element5'];

      var Listeelements= function(props) {
        return <ul>  {
            props.elems.map(function(elem,index) {
            return <li key = {index}>{elem}</li> ; })
        }
            </ul>
      }*/
/*var elems = ['element1','element2','element3','element4','element5'];
var ListeElement = function ({elems,color}){
    return <ul>
        {
            elems.map(function (elem,index){
                return <li key={index} style={{color:color,listStyleType:"none"}}>{elem}</li>
            })
        }
    </ul>
} */
/*var elems = ['element1','element2','element3','element4','element5'];
var ListeElement = function (props){
            return props.elems.map(function (elem,index){
               return <li key={index} style={{color:props.color}}>{elem}</li>;
            })
        }

        ReactDOM.render(<ul><ListeElement elems={elems} color="red"/></ul>,document.getElementById('root'));
*/
/*var elems = ['element1','element2','element3','element4','element5'];
var Element = function ({color,elem}){
    return <li style={{color:color}}>{elem}</li>
}
        
    var ListeElement = function ({elems,color}){
        return <ul>
            {
                elems.map(function (elem,index){
                    return <Element elem={elem} key={index} color={color}/>
                })
            }
        </ul>
    }

ReactDOM.render(<ListeElement elems={elems} color="red"/>,document.getElementById('root'));*/


