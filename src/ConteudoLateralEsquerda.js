import logo from './Image/logo.png'
import Menu from './TextMenu'

export default function ConteudoLateralEsquerda(){
    return(
        <>
        <div className='conteudoLateralEsquerda'>
            <img src={logo} alt='Logo'/>
            <p>Exemplo de conteudo lateral esquerda</p>
            <ul>
                <Menu nome="Home"/>
                <Menu nome="Buscar"/>
                <Menu />
                <Menu />
            </ul>
        </div>
        </>
    )
}

//export default function ConteudoLateralEsquerda()