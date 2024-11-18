import './App.css';

const Person = (props) => {
  return(
    <>
      <h1>Name: {props.firstName}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {

  return (
    <div className="App">
      <Person 
        firstName="Tobi" 
        lastName="Salawu" 
        age={30}
      />
      <Person 
        firstName="shf" 
        lastName="Idk"
        age={30}
      />
      <Person firstName="shs" lastName="Jaydah" age={30}/>
    </div>
  );
}

export default App;
