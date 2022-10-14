import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/shortly.png';
import trophy from '../../assets/trophy.jpg'
import Ranking from '../../components/Ranking.js';
import UserContext from '../../contexts/UserContext.js';
import Links from '../../components/Links/Links.jsx';
import axios from 'axios';
import {Circles} from "react-loader-spinner";
import { toast,ToastContainer } from "react-toastify";
import { Container } from "./InitialPage.js";

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

const notify2 = (msg)=>{
toast(`✅ ${msg}`, {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });
}

export default function InitialPage(){
const { token,setToken } = useContext(UserContext);
const [links,setLinks] = useState({shortenedUrls:[]});
const [url,setUrl] = useState('');
const [render,setRender] = useState(0);
const [load,setLoad] = useState(false);

useEffect(()=>{
    if(token){
        const promise = axios.get('https://yan-project-shortly.herokuapp.com/users/me',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        promise.then(res=>{
            setLinks(res.data);
        });

        promise.catch(Error=>{
            notify(Error.response.data);
        });
        }
    },[url,render,token]);

function shortenLink(event){
    event.preventDefault();
    setLoad(true);

    const body = {
        url
    }

    const promise = axios.post('https://yan-project-shortly.herokuapp.com/urls/shorten',body,{
        headers:{
            Authorization: `Bearer ${token}`
        }
        });

        promise.then(()=>{
        setLoad(false);
        setUrl('')
        notify2("Url shortened!");
        });

        promise.catch(Error=>{
        setLoad(false);
        if(Error.response.status === 422){
            notify("Insira uma URL válida https://...");
        }
        if(Error.response.status === 500){
            notify("Erro no servidor!");
        }
        })
}

function logOut(){
    localStorage.setItem('authToken', '');
    setToken(localStorage.getItem('authToken'));
}

return(
    <Container token={token} load={load}>
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
        {
            token === '' ?
            <>
                <header>
                <Link to="/signin" style={{textDecoration:"none"}}>
                    <h3>Entrar</h3>
                </Link>
                <Link to="/signup" style={{textDecoration:"none"}}>
                    <h4>Cadastrar-se</h4>
                </Link>
                </header>
                <div className='title'>
                    <h1>Shortly</h1>
                    <img src={logo} alt="shortly" srcset="" />
                </div>
                <div className='ranking'>
                    <img src={trophy} alt="trophy" srcset="" />
                    <h2>Ranking</h2>
                </div>
                <div className='rankingContainer'>
                    <Ranking />
                </div>
                <Link to="/signup" style={{textDecoration:"none"}}>
                    <h1 className='criar'>Crie sua conta para usar nosso serviço!</h1>
                </Link>
            </>
            :
            <>
                <header>
                    <h5 className='greetings'>Seja bem-vindo(a), Pessoa!</h5>
                        <h3>Home</h3>
                    <Link to="/ranking" style={{textDecoration:"none"}}>
                        <h4>Ranking</h4>
                    </Link>
                    <Link onClick={logOut} to="/" style={{textDecoration:"none"}}>
                        <h4>Sair</h4>
                    </Link>
                </header>
                <div className='title'>
                    <h1>Shortly</h1>
                    <img src={logo} alt="shortly" srcset="" />
                </div>
                {
                    load ?
                        <div className="spinner">
                            <Circles  color={'#5D9040'} width={160} />
                        </div>      
                    :
                        <form onSubmit={shortenLink}>
                            <input type="text"
                                placeholder="Links que cabem no bolso"
                                value={url}
                                onChange={(e)=>setUrl(e.target.value)}
                                required />
                            <button type="submit">Encurtar link</button>
                        </form>
                }
                <div className='linkContainer'>
                    <Links links={links} setRender={setRender} />
                </div>
            </> 
        }
    </Container>
)
}