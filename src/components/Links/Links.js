import styled from "styled-components";

export const Spinner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff !important;
    width: 20% !important;

    @media only screen and (max-width: 924px){
        padding-top: 20px !important;
    }
`

export const Container = styled.div`
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
            margin-left: 10px;
        }

        h6{
           &:hover{
            cursor: pointer;
           }
        }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
        border-radius: 0px 12px 12px 0px;
        border: none;

        &:hover{
            cursor: pointer;
        }
    }

    @media only screen and (max-width: 924px){
        margin-bottom: 80px;
        
        div{
            flex-direction: column;
            height: 100px;
            padding: 4px 10px;
        }

        button{
            height: 100px;
        }

        h5{
            font-size: 14px;
        }
    }
`