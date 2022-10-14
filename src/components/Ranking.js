import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Ranking(){
    const [ranks,setRanks] = useState([]);

    useEffect(()=>{
        const promise = axios.get('https://yan-project-shortly.herokuapp.com/ranking');

        promise.then(res=>{
            setRanks(res.data);
        });

        promise.catch(Error=>{
            alert(Error.response.data);
        })
    },[])
    
    return(
        ranks.map((rank,index)=>
        <Rank>
            <h1 key={index}>{index+1}. {rank.name} - {rank.linksCount} links - {rank.visitCount} visualizações</h1>
        </Rank>   
        )
    );
}

const Rank = styled.div`
 h1{
    margin-bottom: 10px;
 }
`