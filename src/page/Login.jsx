import React, { useState } from 'react'
import Header from '../components/common/header'

import hi from '../page/style/asset/hicat.svg'
import mexicatRight from '../page/style/asset/mexicancat.svg'
import mexicatLeft from '../page/style/asset/mexicancat2.svg'
import * as S from '../page/style/Login.style'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [imgSrc, setImgSrc] = useState(mexicatRight)
    const [isClicked, setIsClicked] = useState(false)
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [btn, setBtn] = useState(true)
    const navigate = useNavigate();
    
    const handleClicked = () => {
        if (isClicked) {
            setImgSrc(mexicatRight)
            setIsClicked(false);
        }
        else {
            setImgSrc(mexicatLeft)
            setIsClicked(true);
        }
    }

    const goToMain = () => {
        alert('로그인 성공!')
        navigate('/')
    }

    const changeBtn = () => {
        id.includes('@') && pw.length >= 5 ? setBtn(false) : setBtn(true);
    }


    return (
        <div>
            <Header />
            <S.Container>
                <S.Img src={imgSrc} onClick={handleClicked} />
                <S.Input
                    placeholder='아이디를 입력해'
                    value={id}
                    onChange={e => {
                        setId(e.target.value);
                    }}
                    onKeyUp={changeBtn}
                />
                <S.Input 
                    placeholder='비밀번호를 입력해'
                    value={pw}
                    onChange={e => {
                        setPw(e.target.value);
                    }}
                    onKeyUp={changeBtn}
                />
                <S.Submit onClick={goToMain} disabled={btn}>확인</S.Submit>
                <S.Bg src={hi} />
            </S.Container>
        </div>
    )
}

export default Login

