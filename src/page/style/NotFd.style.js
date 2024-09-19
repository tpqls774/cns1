import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrap = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
    position: relative;
    background: linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet);

    p{
        font-size: 80px;
        border: 1px solid;
        text-orientation: upright;
    }
`

export const StyledLink = styled(Link)`
    border: 1px solid;
    border-radius: 15px;
    padding: 13px;
    text-decoration: none;
    color: black;
`

export const Title = styled.p`
    position: absolute;
    font-size: 82px;
    font-weight: bold;
    background: linear-gradient(90deg, red, orange, yellow, green, blue, indigo, violet);
    -webkit-background-clip: text;
    color: transparent; 
    top: 50%; 
    left: 50%;
    transform: translate(-50%, -50%); 
    text-align: center;
    z-index: 10; 
    margin: 0;
    pointer-events: none;
`

export const Gallery = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Increased the minimum size of images */
    gap: 10px;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 10px;
    overflow: auto;
    z-index: 1;

    img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
`