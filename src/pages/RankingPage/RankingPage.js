import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 20px;

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
            color: #9C9C9C;
            margin-right: 20px;
            margin-left: 10px;
        }

        h4{
            font-size: 14px;
            color: #5D9040;
            margin-right: 10px;
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
        width: 90%;
        height: 240px;
        margin-left: 20%;
        margin-right: 20%;
        margin-top: 50px;
        padding: 20px;
        overflow-y: scroll;
        color: #000000;
        font-weight: 500;
        font-size: 22px;
    }

    @media only screen and (max-width: 924px) {
       display: flex;
       align-items: center;
       flex-direction: column;

       .title{
        margin-top: 60px;
       }

       header{
        .greetings{
            width: 200px;
            top: 230px;
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

        .ranking{
            margin-top: 40px;
        }

        .rankingContainer{
            margin-top: 30px;
        }
    }
`