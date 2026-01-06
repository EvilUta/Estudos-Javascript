
const CarDetails = ({brand,km,color, newCar}) => { // se coloca entre parametros destruturados em {}
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Marca: {brand}</li> {/* Pode so usar o parametro pois o props n foi usado */}
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar && <p>Este carro é novo!</p>}
    </div>
  ) 
}

export default CarDetails
