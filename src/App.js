import './App.css';

const Person = (props) => {
  return(
    <>
      <h1>Name: {props.firstName}</h1>
      <h2>Last Name: {props.lastName}</h2>
      <h2>Age: {props.Age}</h2>
    </>
  )
}

const App = () => {
  const name = 'Tobi';

  return (
    <div className="App">
      <Person firstName={"Tobi"} lastName={"Salawu"} Age = {'30'}/>
      <Person
    </div>
  );
}

export default App;
