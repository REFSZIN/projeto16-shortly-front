import styled from 'styled-components';

export const URL = styled.div`
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
    width: 80%;
    height: 60px;
    margin-top: 40px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0px 0px 12px;

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-left: 20px;
        padding-right: 40px;
        background-color: #80CC74;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 12px 0px 0px 12px;
        color: #FFFFFF;

        a{
            color: #ffffff;
        }

        h6{
           &:hover{
            cursor: pointer;
           }
        }
    }

    @media only screen and (max-width: 768px){
        margin-top: 0;

        div{
            padding-top:10px;
            padding-bottom: 4px;
            height: 100px;
            flex-direction: column;
        }

        a{
            margin-left: 30%;
        }
    }
`

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    header{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 58px;
        position: relative;

        .greetings{
            position: absolute;
            font-weight: 400;
            font-size: 14px;
            left: 200px;
            color: #5D9040;
        }

        h3{
            font-size: 14px;
            color: #5D9040;
            margin-right: 30px;
        }

        h4{
            font-size: 14px;
            color: #5D9040;
        }
    }

    .title{
        display: flex;
        justify-content: center;

        h1{
            font-size: 64px;
            font-weight: 700;
        }
        img{
            width: 102px;
            height: 110px;
            transform: translateY(-1em);
        }
    }

    @media only screen and (max-width: 768px) {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       position: relative;

       .title{
        position: absolute;
        top: 100px;
       }

       header{
        position: absolute;
        top: 0;
       }

       form{
        margin-top: 60px;
        width: 80%;

        button{
            margin-top: 30px;
        }
       }
    } 
`