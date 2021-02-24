import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const friends = ['Sagor', 'Sahed', 'Shahriar', 'Akash', 'Minhaz', 'Rakib', "Nishan"]
  const products = [
    {name:'Photoshop', price:'$499.99'},
    {name:'PDF Reader', price:'$599.99'},
    {name:'Illustrator', price:'$399.99'},
    {name:'Premiar Pro', price:'$699.99'},
  ]
 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit ok <code>src/App.js</code> and save to reload ok.
        </p>
        
        <Counter></Counter>
        <Users></Users>

        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            products.map(pd => <Products product={pd}></Products>)
          }
        </ul>

        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>

        <p>My first React Paragraph</p>
        <PersonBoy name="Rubel" job="Programmer" home="Chudadanga"></PersonBoy>
        <PersonBoy name="Sagor" job="Graphic Designer" home="Jhenaidah"></PersonBoy>
        <PersonBoy name="Sahed" job="Relationship Manager" home="Kashipur"></PersonBoy>

      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  // useEffect(() => {
    
  // }, [])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
    </div>
  )
}



function Counter(){

  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return(
    <div>
      <h3>Count: {count}</h3>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

function Products(props){

  const productStyle={
    border: '2px solid gray',
    backgroundColor: '#555',
    padding: '20px',
    width: '300px',
    height: '300px',
    float: 'left',
    margin: '20px'
  }
const {name, price} = props.product;
  return(
      <div style={productStyle}>
        <h3>{name}</h3>
        <h2>{price}</h2>
        <button>By Now</button>
      </div>
  )
}

function PersonBoy(props){
  const personStyle = {
    border: '5px solid yellow',
    padding: '40px',
    color: 'yellow',
    float: 'left',
    margin: '10px',
    width: '500px'
  }
  const color = {
    color: 'red'
  }
  return (
  <div style={personStyle}>
    <h1>Name: {props.name}</h1>
    <h3>Job: <span style={color}>{props.job}</span></h3>
    <h3>Home: {props.home}</h3>
  </div>
  );
}

export default App;
