import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    h1{
        font-size: 36px;
        color: #5D9040;
        margin-bottom: 80px;
    }

    .title{
        display: flex;
        justify-content: center;
        margin-bottom: 100px;
        margin-top: 100px;

        h2{
            font-size: 64px;
            font-weight: 200;
        }
        img{
            width: 102px;
            height: 110px;
            transform: translateY(-1em);
        }
    }
`