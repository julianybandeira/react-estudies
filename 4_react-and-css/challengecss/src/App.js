import './App.css';
import CardCar from './components/CardCar';

function App() {

  const carsList = [
    {id: 1, brand: "Fiat", color: "prata", year: 2018, km: 2000},
    {id: 2, brand: "Fiat", color: "prata", year: 2018, km: 2000},
    {id: 3, brand: "Fiat", color: "prata", year: 2018, km: 2000},
  ]
  return (
    <div className="App">
      <h1>Challenge CSS</h1>
      <div className="car-container">
        {carsList.map((car) => (
          <CardCar  
          key={car.id}
          car={car}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
