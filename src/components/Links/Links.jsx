import axios from "axios";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext.js";
import { IoTrash } from "react-icons/io5";
import { toast } from "react-toastify";
import {FallingLines} from "react-loader-spinner";
import { Container,Spinner } from "./Links.js";

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

export default function Links({links,setRender}){
    const { token } = useContext(UserContext);
    const [load,setLoad] = useState([...links.shortenedUrls.map(a => false)]);
    

        function deleteUrl(id,index){
            let loader = [...load];
            loader[index] = true;
            setLoad([...loader]);

            const promise = axios.delete(`https://ryan-project-shortly.herokuapp.com/urls/${id}`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
             });

             promise.then(()=>{
                loader[index] = false;
                setLoad([...loader]);
                setRender(Math.random());
                notify2('Url Deleted');
             });

             promise.catch(Error=>{
                loader[index] = false;
                setLoad([...loader]);
                notify(Error.response.data);
             });
        };

        function goToUrl(shortUrl){
            const promise = axios.get(`https://ryan-project-shortly.herokuapp.com/urls/open/${shortUrl}`);

        
            promise.then((res)=>{
                window.location.href = res.data.split('to ')[1];
            })

            promise.catch(Error=>{
                notify(Error.response.data);
            })
        };

    return(
        links.shortenedUrls.map((item,index) => 
        <Container key={index}>
            <div>
                <a href={item.url}>
                    <h6>{item.url.substring(0,30) + '...'}</h6>
                </a>
                <h6 onClick={()=>goToUrl(item.shortUrl)}>{item.shortUrl}</h6>
                <h5>Quantidade de visitantes: {item.visitCount}</h5>
            </div>
            {
                load[index] ?
                <Spinner>
                    <FallingLines visible={'true'} color={'crimson'} width={50} />
                </Spinner> 
                :
                <button onClick={()=>deleteUrl(item.id,index)}>
                    <IoTrash color="crimson" size={30} />    
                </button>
            }
        </Container>
        )
    )
}