import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 20px;

    .spinner{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 40px;
        height: 100px;
    }

    .linkContainer{
        margin-top: 10px;
        height: 400px;
        overflow-y: scroll;

        button{
            background-color: #FFFFFF;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    form{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top:70px;

        input{
            width: 60%;
            height: 60px;
            border-radius: 12px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
            padding-left: 14px;
            margin-right: 60px;
        }

        button{
            height: 60px;
            width: 18%;
            border-radius: 12px;
            border: none;
            background-color: #5D9040;
            color: #FFFFFF;
            font-size: 20px;

            &:hover{
                cursor: pointer;
            }
        }
    }

    .criar{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 60px;
        color: #000000;
        font-weight: 700;
        font-size: 36px;
    }

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
            color: ${props=>props.token === '' ? '#5D9040' : '#9C9C9C'};
            margin-right: 30px;
        }

        h4{
            font-size: 14px;
            margin-right:30px;
            color: #5D9040;
        }
    }

    .title{
        display: flex;
        justify-content: center;

        h1{
            font-size: 64px;
            font-weight: 200;
        }
        img{
            width: 102px;
            height: 110px;
            transform: translateY(-1em);
        }
    }

    .ranking{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 70px;

        h2{
            font-size: 36px;
            font-weight: 700;
        }

        img{
            width: 110px;
            height: 100px;
        }
    }

    .rankingContainer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        height: 240px;
        margin-left: 10%;
        margin-right: 10%;
        margin-top: 50px;
        padding: 20px;
        overflow-y: scroll;
        color: #000000;
        font-weight: 500;
        font-size: 22px;
    }

    @media only screen and (max-width: 924px) {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       position: relative;

       .rankingContainer{
        width: 90%;
       }

       .title{
        margin-top: 60px;
       }

       header{
        position: absolute;
        top: 0;

        .greetings{
            top:180px;
            width: 200px;
            left: 0;
            margin: 0;
        }
       }

       form{
        flex-direction: column;
        input{
            width: 380px;
            margin-right: 0;
        }

        button{
            width: 130px;
            margin-top: 10px;
        }
       }

       .linkContainer{
        height: 400px;
        width: 80%;
    }
    }   

    @media only screen and (min-width: 700px) and (max-width: 924px){
        .rankingContainer{
            height: 150px;
       }
    }
`