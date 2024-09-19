import React from 'react'
import Img from '../page/style/asset/cat.jpeg'
import Header from '../components/common/header'
import * as S from './style/Home.style'

const Home = () => {
    return (
        <>
            <Header />
            <S.TitleWrap>
                <S.MainImg src={Img} />
                <S.HomeTitle>Home</S.HomeTitle>
                <S.Content>this is home page</S.Content>
            </S.TitleWrap>
        </>
    )
}

export default Home
