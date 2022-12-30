import { useState } from 'react';
import './App.css';
import City from "./assets/city.jpg"
import CarDetails from './components/CarDetails';
import ChangeMessageState from './components/ChangeMessageState';
import ConditionalRender from './components/ConditionalRender';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Fragment from './components/Fragment';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import Message from './components/Message';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {
  const name ="Lucas";

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 2, brand: "Lamborghini", color: "Prata", newCar: false, km: 12000},
    {id: 3, brand: "BMW", color: "Preta", newCar: false, km: 7000},
  ];

  const users = [
    {id: 1, name: "Joana", age: 18, job:"Chef"},
    {id: 2, name: "Julia", age: 16, job:"Estudante"},
    {id: 3, name: "Carlos", age: 32, job:"Professor"},
    {id: 4, name: "Ana", age: 38, job:"Desenvolvedora"},
  ]

  function showMessage(){
    alert("Executando function showMessage do componente pai")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) =>{
    setMessage(msg)
  }


  return (
    <div className="App">
      <h1>Avaçando em React</h1>

      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>

      {/* Imagem em assets */}
      <div>
        <img src={City}  alt="Cidade" height="200" width="300"/>
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />

      {/* props */}
      <ShowUserName name={name} />

      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" newCar={false}/>

      {/* reaproveitando */}
      <CarDetails brand="Ford" km={0} color="Vermelho" newCar={true}/>
      <CarDetails brand="Fiat" km={4500} color="Branco" newCar={false}/>

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails 
        key={car.id}
        brand={car.brand} 
        color={car.color}
        km={car.km}
        newCar={car.newCar}
        />
      ))}
      
    {/* fragment */}
    <Fragment propFragment="teste"/>

    {/* children */}
    <Container myValue="testing 1">
      <p>E este é o conteúdo.</p>
    </Container>
    <Container myValue="testing 2">
      <h4>Testando o container.</h4>
    </Container>

    {/* executar função */}
    <ExecuteFunction myFunction={showMessage}/>

    {/* state lift */}
    <Message msg={message}/>
    <ChangeMessageState handleMessage={handleMessage}/>

        {/* desafio */}
    {users.map((person) => (
        <UserDetails
        key={person.id}
        name={person.name}
        age={person.age}
        job={person.job}
        />
      ))}
    </div>
  );
}

export default App;
