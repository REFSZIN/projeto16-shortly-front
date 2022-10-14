import { useContext, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../assets/shortly.png';
import axios from 'axios';
import UserContext from '../../contexts/UserContext.js';
import {Circles} from "react-loader-spinner";
import { toast,ToastContainer } from "react-toastify";
import {Container} from "./Login.js"

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

export default function Login(){
    const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [load,setLoad] = useState(false);

    const { setToken } = useContext(UserContext);

    function signIn(event){
        event.preventDefault();
        setLoad(true);

        const body = {
            email,
            password
        }

        const promise = axios.post('https://yan-project-shortly.herokuapp.com/signin',body);

        promise.then((res)=>{
            localStorage.setItem('authToken', res.data);
            setToken(localStorage.getItem('authToken'));
            setLoad(false);
            navigate('/');
        })

        promise.catch(Error => {
            setLoad(false);
            if(Error.response.status === 401){
                notify("Usuário não está cadastrado ou a senha está incorreta!");
            }
            if(Error.response.status === 500){
                notify("Erro no servidor!");
            }
        })
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
                <h3>Entrar</h3>
                <Link to="/signup" style={{textDecoration:"none"}}>
                    <h4>Cadastrar-se</h4>
                </Link>
            </header>
            <div className='title'>
                <h1>Shortly</h1>
                <img src={logo} alt="shortly" srcset="" />
            </div>
            {
                load ?
                <div className="spinner">
                    <Circles  color={'#5D9040'} />
                </div>
                :
                <form onSubmit={signIn}>
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
                <button type="submit">Entrar</button>
            </form>
            }
        </Container>
    )
}