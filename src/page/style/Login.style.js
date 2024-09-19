import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    height: calc(100vh - 50px);
    align-items: center;
    flex-direction: column;
`

export const Img = styled.img`
    width: 10%;
    animation: change 5s forwards infinite;

    @keyframes change {
        0%{
            filter: drop-shadow(3px 3px 3px red);
        }
        20%{
            filter: drop-shadow(3px 3px 3px orange);
        }
        40%{
            filter: drop-shadow(3px 3px 3px yellow);
        }
        60%{
            filter: drop-shadow(3px 3px 3px green);
        }
        80%{
            filter: drop-shadow(3px 3px 3px blue);
        }
        100%{
            filter: drop-shadow(3px 3px 3px red);
        }
    }
`

export const Bg = styled.img`
    width: 35%;
    position: absolute;
    right: 0;
`

export const Input = styled.input`
    margin: 15px;
    width: 25%;
    padding: 15px;
    border: 1px solid gray;
    border-radius: 10px;
`

export const Submit = styled.button`
    margin: 20px;
    width: 10%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: pink;
    cursor: pointer;
`

