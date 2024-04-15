import Story from "./Story"
import './Stories.css'

var listaUsuarios = [
    {
        nome: "Byel",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Rodrigo",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Cleiton",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Dudu",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    },
    {
        nome: "Jordan",
        url: "https://avatars.githubusercontent.com/u/48858978?v=4"
    }
]

export default function Stories() {
    return (
        <div className="Stories">
        {
            listaUsuarios.map((usuario) => {
               return <Story nomeUsuario={usuario.nome} caminhoDaImagem={usuario.url} />
            })
        }
        </div>
    )
}