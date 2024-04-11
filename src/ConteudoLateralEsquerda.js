import logo from './Image/logo.png'
import Menu from './TextMenu'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { MdAddBox } from "react-icons/md";

export default function ConteudoLateralEsquerda() {
    return (
        <>
            <div className='conteudoLateralEsquerda'>
                <img src={logo} alt='Logo' />
                <p>Exemplo de conteudo lateral esquerda</p>
                <ul>
                    <Menu nome="Home" icone={<FaHome />} />
                    <Menu nome="Buscar" icone={<FaMagnifyingGlass/>} />
                    <Menu nome="Messages" icone={<BiMessageDetail />} />
                    <Menu nome="Notifications" icone={<FaHeart/>} />
                    <Menu nome="Create" icone={<MdAddBox />} />
                </ul>
            </div>
        </>
    )
}

//export default function ConteudoLateralEsquerda()