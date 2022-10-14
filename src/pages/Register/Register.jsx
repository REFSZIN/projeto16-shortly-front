import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from "../../assets/shortly.png"
import axios from 'axios';
import { toast,ToastContainer } from "react-toastify";
import {Circles} from "react-loader-spinner";
import {Container} from "./Register.js"

const notify = (error)=>{
    toast(`❗ ${error}`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }

export default function Register(){
    const navigate = useNavigate();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [load,setLoad] = useState(false);

    function signUp(event){
        event.preventDefault();
        setLoad(true);

        const body = {
            name,
            email,
            password,
            confirmPassword
        }

        const promise = axios.post('https://yan-project-shortly.herokuapp.com/signup',body);

        promise.then(()=>{
            setLoad(false);
            navigate('/signin');
        });

        promise.catch(Error=>{
            setLoad(false);
            if(Error.response.status === 422){
                notify("Preencha os dados corretamente!");
            }
            if(Error.response.status === 409){
                notify("Email já está cadastrado!");
            }
            if(Error.response.status === 500){
                notify("Erro no servidor!");
            }  
        });
    }

    return(
        <Container>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={true}
                limit={1}
            />
            <header>
                <Link to="/signin" style={{textDecoration:"none"}}>
                    <h3>Entrar</h3>
                </Link>
                <h4>Cadastrar-se</h4>
            </header>
            <div className='title'>
                <h1>Shortly</h1>
                <img src={logo} alt="shortly" srcset="" />
            </div>
            {
            load ?
            <div className="spinner">
                 <Circles color={'#5D9040'} />
            </div>
                :
            <form onSubmit={signUp}>
                <input type="text"
                    value={name}
                    placeholder="Nome"
                    onChange={(e)=>setName(e.target.value)}
                    required />
                <input type="email"
                    value={email}
                    placeholder="E-mail"
                    onChange={(e)=>setEmail(e.target.value)}
                    required />
                <input type="password"
                    value={password}
                    placeholder="Senha"
                    onChange={(e)=>setPassword(e.target.value)}
                    required />
                <input type="password"
                    value={confirmPassword}
                    placeholder="Confirmar senha"
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    required />
                <button type="submit">Criar Conta</button>
            </form>
            }
        </Container>
    )
}