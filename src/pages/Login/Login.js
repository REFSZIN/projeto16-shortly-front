import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 20px;

    .spinner{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 100px;
    }

    header{
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        height: 58px;

        h3{
            font-size: 14px;
            color: #9C9C9C;
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
            font-weight: 200;
        }
        img{
            width: 102px;
            height: 110px;
            transform: translateY(-1em);
        }
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 130px;

        input{
            width: 80%;
            height: 60px;
            margin-bottom: 26px;
            border: 1px solid rgba(120, 177, 89, 0.25);
            box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
            border-radius: 12px;
            padding-left: 14px;
            color: #9C9C9C;
        }

        button{
            margin-top: 62px;
            width: 200px;
            height: 60px;
            background-color: #5D9040;
            border-radius: 12px;
            border: none;
            color: #FFFFFF;

            &:hover{
                cursor: pointer;
            }
        }
    }

    @media only screen and (max-width: 924px) {
       display: flex;
       justify-content: center;
       align-items: center;
       flex-direction: column;
       position: relative;

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

       @media only screen and (min-width: 700px) and (max-width: 924px){
        .title{
            margin-top: 60px;
       }
    }
    }   
`