import './App.css';
import MyComponent from './assets/components/MyComponent';
import Title from './assets/components/Title';

const App = () => {

  const n = 15

  const redTitle = true

  return (
    <div className='App'>
      {/* CSS Global */}
      <h1>React com Css</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este paragrafo e do App.jsx</p> {/*  Esta em conflito */}
      {/* Inline CSS */}
      <p style ={{ color:'White' , padding: '25px' , backgroundColor: 'blueviolet' , borderRadius: '20px'}}>Este elemento foi etilizado em forma inline</p>
      {/* CSS Inline dinamico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"}) }>Css Dinamico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"}) }>Css Dinamico</h2>
      {/* classe dinamica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinamica</h2>
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
