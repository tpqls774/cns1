import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 50px;
`

export const MainContext = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 200px;
`

export const Text = styled.p`
    font-size: 18px;
    cursor: pointer;
`

export const Btn = styled.button`
    font-size: 16px;
    padding: 3px 10px;
    border: none;
    border-radius: 5px;
    background-color: pink;
    cursor: pointer;
    animation: spin .1s infinite;

    &:hover{
        background-color: hotpink;
    }

    @keyframes spin {
        0% {
            transform: translate(-160px, 160px);
        }
        15% {
            transform: translate(-80px, 80px);
        }
        25% {
            transform: translateY(0);
        }
        35% {
            transform: translate(80px, 80px);
        }
        50% {
            transform: translate(160px, 160px);
        }
        65% {
            transform: translate(240px, 80px);
        }
        75% {
            transform: translateY(320px);
        }
        85% {
            transform: translate(240px, -80px);
        }
        100% {
            transform: translate(-160px, 160px);
        }
    }
`