import { Link, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/shortly.png';
import axios from 'axios';
import UserContext from '../../contexts/UserContext.js';
import { toast,ToastContainer } from "react-toastify";
import { URL,Container } from './UrlPage.js';

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

export default function UrlPage(){
    const [link,setLink] = useState('');
    const {id} = useParams();
    const { token,setToken } = useContext(UserContext);

    useEffect(()=>{
        const promise = axios.get(`https://yan-project-shortly.herokuapp.com/urls/${id}`);

        promise.then(res=>{
            setLink(res.data);
        });

        promise.catch(Error=>{
            notify(Error.response.data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);

        function logOut(){
            localStorage.setItem('authToken', '');
            setToken(localStorage.getItem('authToken'));
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
            {
                token === '' ?
                <header>
                    <Link to="/signin" style={{textDecoration:"none"}}>
                        <h3>Entrar</h3>
                    </Link>
                    <Link to="/signup" style={{textDecoration:"none"}}>
                        <h4>Cadastrar-se</h4>
                    </Link>
                </header>
                :
                <header>
                    <h5 className='greetings'>Seja bem-vindo(a), Pessoa!</h5>
                    <Link to="/" style={{textDecoration:"none"}}>
                        <h3>Home</h3>
                    </Link>
                    <Link to="/ranking" style={{textDecoration:"none"}}>
                        <h3>Ranking</h3>
                    </Link>
                    <Link onClick={logOut} to="/" style={{textDecoration:"none"}}>
                        <h4>Sair</h4>
                    </Link>
                </header>
            }
            <div className='title'>
                <h1>Shortly</h1>
                <img src={logo} alt="shortly" srcset="" />
            </div>
            <URL>
                <div>
                    <a href={link.url}>
                        <h6>
                            {
                                link === '' ? '' : link.url.substring(0,50)+'...'
                            }
                        </h6>
                    </a>
                    <h6>{link.shortUrl}</h6>
                </div>
            </URL>
        </Container>
    )
}