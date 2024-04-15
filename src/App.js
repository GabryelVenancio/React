import logo from './logo.svg';
import './App.css';
import Esquerda from './ConteudoLateralEsquerda';
import Centro from './Components/Centro/ConteudoCentro';
// JSX 

function App() {
  return (
    <>
      <Esquerda />
      <Centro />
      
      
      <div className='conteudoLateralDireita'>
        {/* 
          Login
          Sugestões de amigos
          Sugestões de contas
          Sugestões de hashtags
          Sugestões de locais
          Sugestões de posts patrocinados
          Link legais
        */}
      </div>
    </>
  );
}

export default App;
