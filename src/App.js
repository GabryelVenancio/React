import logo from './Image/logo.png'
import './App.css';
import ConteudoLateralEsquerda from './ConteudoLateralEsquerda';

function App() {
  return (
    <>
    <ConteudoLateralEsquerda />
    <div className="conteudoLateralEsquerda">
      {/* logo do instragram
          menu lateral 
      */}
    </div>
    <div className="conteudoCentral">
      {/* Stories
          Feed de post
          Links
      */}
    </div>
    <div className="conteudoLateralDireita">
      {/* 
          Login
          Sugestões de amigos
          Sugestões de contas
          Sugestões de hashtags
          Sugestões de locais
          Sugestões post patrocinados
          
      */}
    </div>
    </>
  );
}

export default App;
