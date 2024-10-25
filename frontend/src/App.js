import React from "react";
//import {useState,useEffect} from "react";
//import "./index.css";

/*const App = () =>{
    const [count,setcount] = useState(0);

    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=> setcount(count+1)}>click me</button>
        </div>
    );
}*/
/*function App(){
    return(
        <div>
            <h1>hi mohammed</h1>
            <h2>hi mohammed</h2>
            <h3>hi mohammed</h3>
            <h4>hi mohammed</h4>
            <h5>hi mohammed</h5>
            <h6>hi mohammed</h6>
        </div>
    );
}*/
/*function tick(){
    return(
        <>
        <h1>hello mohammed</h1>
        <h2> it is {new Date().toLocaleTimeString()} </h2>
        </>
    );
    
}*/
// FUNCTION TO ADD A PARAMETRE PROPS
/*const Pro = (props) => {
    return (
        <div>
            <h1>I'am {props.name}</h1>
        </div>
    );
}*/
/*function App(){
    let A = "mohammed";
    return(
        <div>
            <h1>hello {A}</h1>
        </div>
    );
}*/
/*class car extends React.Component{
    render(){
       return <h1>hi i'am a car</h1>
    }
}*/
/*class car extends React.Component {
    constructor() {
        super();
        this.nom = {name:"mercidec"};
        this.state = {color:"black"};
    }
    render(){
        return <h1>hi i'am a car my name {this.nom.name} and my state {this.state.color}</h1>
    }
}*/
/*function Gestin(){
    return (
        <div>
            <h1>hi I'am mohammed el hilaly</h1>
        </div>
    )

}
const Page = () => <h1>hello world</h1>
function Pag () {return <h1>hi i'am mohammed</h1>}*/
//event
/*const Img = () => <img src="https://m.media-amazon.com/images/I/81LE33gFAML._AC_UL480_QL65_.jpg" alt="img amazone"/>
const Title = () => <h1>Play-Doh Modeling Compound<br/> 10-Pack Case of Colors,</h1>
const Auther = () => <h4>Delivery Fri, Sep 22</h4>
function Book(props){
    return (
        <div>
        <Img />
        <Title />
        <Auther />
        <p>{props.jop}</p>
        <p>{props.title}</p>
        <p>{props.number}</p>
        </div>
        
    );
} 

function EventExemple(){
    const handleforminput = (e)=>{
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
        console.log('handle form input');
    }
    const handleclickbutton = ()=>{
        alert('handle button click');
    }
    return <section>
        <form>
            <h2>typical form</h2>
            <input type="text"
             onChange={handleforminput} 
             name="exemple"
            style={{margin:"16px"}} 
            />
        </form>
        <button onClick={handleclickbutton}>click me</button> 
    </section>
}
function App(){
    return (
        <div>
            <EventExemple />
           <Book jop="devlopper"/>
           <Book title='hello world'/>
           <Book number="20"/>
           <Book/>
           <Book/>
           <Book/>
        </div>
    );
}*/
//useState Hook
/*function Counter(){
    const [count,setCount] = useState(0);
    function Handeleclick(){
        setCount(count+1);
    };
    return (<>
        <h2>my count :{count} </h2>
        <button onClick={Handeleclick}>click me</button>
        </>);
}
function App(){
    return(
        <Counter/>
    );
}*/
const data = [
     {id:1,name:"mohammed"},
     {id:2,name:"yuossef"},
     {id:3,name:"ahmed"},
     {id:4,name:"simo"},
 ]
 const UseExemple = ()=>{
     const [people,setPeople] = React.useState(data);
     const remove = (id)=>{
//     const newarray =  people.filter((person)=> person.id !== id);
         setPeople(people.filter((person)=> person.id !== id));
     
     };
     return (
     <div>
         {people.map(function(person){
         const {name, id} = person;
         return (<div><h4 key={id}>{name}</h4>
         <button onClick={()=>remove(id)}>remove</button>
         </div>)
        })}
         <button onClick={() => setPeople([])}>clearItem</button>
     </div>);
   
    }
 function App(){
     return(
         <UseExemple />
     )
 }
/*const data = [
    {id:1,name:"mohammed",age:20,hoppy:"scream at the computer"},
    {id:2,name:"youssef",age:17,hoppy:"i like the movies"},
    {id:3,name:"ahmed",age:50,hoppy:"I like to play in the computer game"},
];
const AficherPerson = ()=>{
    const [person,setPerson] = React.useState(data);
    const show = (id)=>{
        const newperson = person.filter(function(people){
            return (!(people.id === 1 && people.id === 2));
        })
        setPerson([newperson]);
    }
    return (
       
        <div>
            {person.map(function(people){
                const {id,name ,age ,hoppy} = people;
                return (<>
                    <h1 key={id}>{name}</h1>
                    <h2 key={id}>{age}</h2>
                    <h3 key={id}>hoppy:{hoppy}</h3>
                    <button onClick={()=>show(id)}>show {name}</button>
                </>)
            })
            }
        </div>
    )
    
}
function App(){
    return(
        <AficherPerson />
    )
}*/

/*function App(){
    const display = ()=>{
        setperson({
            name:'youssef',
           age:17,
           hoppy:'I like to play free fier'
        }
        )
        
    }
//    const [name,setName] = useState("mohammed");
// const [age,setAge] = useState(20);
// const [hoppy,setHoppy] = useState('I like to read books');
//anoder way
const [person,setperson] = useState({name:"mohammed",age:20,hoppy:"I like to read the books"});
    return <div>
        <h1>{person.name}</h1>
        <h2>{person.age}</h2>
        <h3>{person.hoppy}</h3>
        <button onClick={display}>show :youssef</button> 
    </div>
}*/
/*function User(){
    const [Value,setValue] = useState(0);
    const Add = () =>{
        setTimeout(() => {
            setValue((currentstate)=>{
               return currentstate+1;
            });
        }, 3000);
        
    };
   return(
    <div>
        <p>{Value}</p>
        <button onClick={Add}>cilck me {Value} times</button>
    </div>)
   };
function App(){
    return(
        <User />
         )
}*/
//the information in the useeffect hook in this casse useeffect run in all the render, it's mean if you have any value
//and if you change this value useeffect we render anoder time 
//the way to use useefect(function ,array [that is the value ,outervalue])if you change this value useefect we render(run) anoder time.
/*function Conter (){
    const [count,setCuont] = useState(0);
    const sayhello = ()=>{
        console.log("hello world");
    };
    sayhello();
    useEffect(()=>{
        setTimeout(()=>{
            setCuont(count+1);
        },1000)
    },[count]);

    return (<div>
        <p>{count}</p>
        </div>)
   
};*/

//function App(){
  // return <Conter />
//};
 export default App; 
