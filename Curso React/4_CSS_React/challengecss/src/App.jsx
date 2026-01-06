import "./App.css";
import CarDetails from "./components/CarDetails";

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Challenge CSS 🚗</h1>

      <CarDetails brand="Ferrari" km={0} color="Vermelha" isNew={true} />
      <CarDetails brand="BMW" km={45000} color="Azul" isNew={false} />
      <CarDetails brand="Lamborghini" km={5000} color="Amarela" isNew={false} />
    </div>
  );
}

export default App;
