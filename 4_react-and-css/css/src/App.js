
import './App.css';
import MyComponent from './component/MyComponent';
import Title from './component/Title';

function App() {
  const n = 15;

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/* Inline CSS */}
      <p style={{color: "magenta", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>

      {/* CSS Inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título terá classe dinâmica</h2>

      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
