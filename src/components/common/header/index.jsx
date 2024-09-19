import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from '../header/index.style'

const Header = () => {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.MainContext>
                <S.Text onClick={() => navigate('/')}>홈</S.Text>
                <S.Text onClick={() => navigate('/create')}>만들기</S.Text>
                <S.Text onClick={() => navigate('/image')}>사진</S.Text>
            </S.MainContext>
            <S.Btn onClick={() => navigate('/login')}>로그인</S.Btn>
        </S.Container>
    )
}

export default Header;
