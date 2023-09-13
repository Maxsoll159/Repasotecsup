import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { postLogin } from "../../helpers/apiUsuario"


export const Login = () => {
    const navigate = useNavigate()


    const [usuario, setUsuario] = useState({
        email: "",
        password: ""
    })
    const onDatos = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    const onLogged = (e) => {
        e.preventDefault()
        postLogin(usuario).then((res) => {
            if (res.status === 201) {
                navigate("/products", { state: { logged: true } })
                localStorage.setItem("token", res.data.access_token)
            } else {
                alert("Datos incorrectos")
            }
        })
    }

    return (
        <div>
            <form action="" onSubmit={onLogged}>
                <div>
                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" onChange={onDatos} />
                </div>
                <div>
                    <label htmlFor="">Contraseña:</label>
                    <input type="password" name="password" onChange={onDatos} />
                </div>
                <button type="submit">Ingresar</button>
            </form>

        </div>
    )
}
