import { Fragment, useState } from 'react';
import './App.css'
import macaco2 from "./assets/macaco2.png"; // importar a imagem da pasta certa -> como e uma imagem estatica e melhor usar em public
import CarDetails from './components/CarDetails';
import CondicionalRender from './components/condicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from "./components/UserDetails";


function App() {

  const cars = [
    {id: 1 , brand: 'Ferrari' , color: 'Amarelo' , newCar: true , km: 0 },
    {id: 2 , brand: 'Chique' , color: 'Vermelho' , newCar: true , km: 0 },
    {id: 3 , brand: 'Uno' , color: 'Azul' , newCar: false , km: 22 },
  ]

  function showMessage() {
    console.log('Evento do componente pai')
  } 

  const [ message , setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const users = [
  { id: 1, nome: "Renan", idade: 20, profissao: "Dev" },
  { id: 2, nome: "Kathleen", idade: 19, profissao: "UX Designer" },
  { id: 3, nome: "Rodrigo", idade: 17, profissao: "Estudante" },
];


  return (
    <div>
      <h1>Seção 3</h1>

      <div>
        <img src="/macaco.png" alt="macaco" style={{ borderRadius: "20px" , width: "500px" , height:"300px" , marginBottom:"20px"}} /> {/* borderRadius para arredondar as bordas*/}
      </div>

      <div>
        <img src={macaco2} alt="macaco2" style={{ borderRadius: "20px" , width: "500px" , height:"300px"}} />
      </div>
      <ManageData />
      <ListRender />
      <CondicionalRender /> {/* Sempre nomeie componente com camel SEMPRE SERA A PRIMEIRA LETRA MAISCULA */}
      {/* Props */}
      <ShowUserName name="Renan" /> {/* Aqui se coloca a props com o valor */}
      {/* Destruturing */}
      <CarDetails brand='WM' km={10000} color='Azul' newCar={false} /> {/* Valores numericos sao entre {} */}
      {/* Reaproveitando */}
      <CarDetails  brand = "fiat" km={20000} color="Rosa choque" newCar={true}/>
      {/* Loop em array de objetos */}
      {cars.map((car) => (
         <CarDetails
         key={car.id}
         brand={car.brand}
         color={car.color}
         km={car.km}
         newCar={car.newCar}
        />
      ))}
      {/* Fragments */}
      < Fragments propsFragment='teste' />
      {/* Prop Children */}
      < Container myValue ='teste'>  {/* A abertura desse children é diferente */}
        <p>Este e o conteudo</p>    {/* da para chamar uma props dentro da children -> myValue*/}
      </Container>
      <Container myValue='testing'>
      <h2>Testando o container</h2>  {/* Pensando nisso da para reutilizar a mesma children */}
      </Container>
      {/* Executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message msg={message} /> {/* tem q passar o elemento para ele */}
      <ChangeMessageState handleMessage={handleMessage}/>
       {/* Desafio 4 */}
       <h2>Detalhes dos Usuários</h2>
      {users.map((user) => (
       <UserDetails
        key={user.id}
        nome={user.nome}
        idade={user.idade}
        profissao={user.profissao}
      />
      ))}
    </div>
  );
}

export default App;


