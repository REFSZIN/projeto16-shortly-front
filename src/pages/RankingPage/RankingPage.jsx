import { useContext, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import logo from '../../assets/shortly.png';
import trophy from '../../assets/trophy.jpg'
import Ranking from '../../components/Ranking.js';
import UserContext from '../../contexts/UserContext.js';
import {Container} from "./RankingPage.js"

export default function RankingPage(){
    const navigate = useNavigate();
    const { token,setToken } = useContext(UserContext);

    useEffect(()=>{
        if(token===''){
            navigate('/');
        }
    },[])

    function logOut(){
        localStorage.setItem('authToken', '');
        setToken(localStorage.getItem('authToken'));
    }

    return(
        <Container>
            <header>
                <h5 className='greetings'>Seja bem-vindo(a), Pessoa!</h5>
                <Link to="/" style={{textDecoration:"none"}}>
                    <h4>Home</h4>
                </Link>
                <h3>Ranking</h3>
                <Link onClick={logOut} to="/" style={{textDecoration:"none"}}>
                    <h4>Sair</h4>
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
        </Container>
    )
}