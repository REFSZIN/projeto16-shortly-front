import { useEffect } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import { Circles } from "react-loader-spinner";
import logo from "../../assets/shortly.png";
import { toast,ToastContainer } from "react-toastify";
import axios from "axios";
import { Container } from "./ShortUrlPage.js";

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

export default function ShortUrlPage(){
    const { shorten:shortUrl } = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        const promise = axios.get(`https://yan-project-shortly.herokuapp.com/urls/open/${shortUrl}`);

        promise.then((res)=>{
            window.location.href = res.data.split('to ')[1];
        })

        promise.catch(Error=>{
            if(Error.response.status === 404){
                notify("Url não existe!");
                setTimeout(()=>navigate("/"),2000);
            }else{
                notify("Url inválida!");
                setTimeout(()=>navigate("/"),2000);
            } 
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);

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
            <div className='title'>
                <h2>Shortly</h2>
                <img src={logo} alt="shortly" srcset="" />
            </div>
            <h1>Redirecionando...</h1>
            <Circles width={200} height={200} color={'#5D9040'} />
        </Container>
    )
}