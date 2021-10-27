import React from 'react'
import styled from 'styled-components'
import logo from "./logo.png"
import {AiOutlineMenu} from "react-icons/ai"

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={logo}/>
                <Link>
                <LinkText>Register</LinkText>
                <LinkText>Admin Signin</LinkText>
                <LinkText>SignUp</LinkText>
                <BurgerLink><AiOutlineMenu/></BurgerLink>
                </Link>
            </Wrapper>
        </Container>
    )
}

export default Header

const Container = styled.div `
width: 100%;
height: 80px;
background-color: lightblue;
display: flex;
align-items: center;
justify-content: center;
`
const Wrapper = styled.div `
width: 95%;
height: 100%;
display: flex;
align-items: center;
`
const Logo = styled.img `
width: 70px;
height: 70px;
border-radius: 50px;
background-color: gray;
object-fit: cover;
@media screen and (max-width: 768px) and (min-width: 300px){
width: 55px;
height: 55px;
border-radius: 50px;
background-color: gray;
object-fit: cover;
}
`
const Link = styled.div `
width: 30%;
height: 40px;
/* background-color: gray; */
margin-left: 65%;
display: flex;
@media screen and (max-width: 1024px) and (min-width: 994px){
width: 35%;
height: 40px;
/* background-color: gray; */
margin-left: 60%;
display: flex;
}
@media screen and (max-width: 993px) and (min-width: 800px){
width: 40%;
height: 40px;
/* background-color: gray; */
margin-left: 50%;
display: flex;
}
`
const LinkText = styled.div `
width: auto;
height: auto;
background-color: red;
margin: auto;
display: flex;
padding: 8px 15px 8px 15px;
align-items: center;
justify-content: center;
color: white;
font-weight: bold;
font-size: 13px;
border-radius: 4px;
background-color: rgb(0, 164, 284);
transition: all 350ms;
transform: scale(1);
:hover{
    transform: scale(0.958);
    cursor: pointer;
    /* background-color: rgb(0, 164, 284); */
    color: black;
}
@media screen and (max-width: 768px) and (min-width: 300px){
display: none;
}
`
const BurgerLink = styled.div`
display: none;
@media screen and (max-width: 768px) and (min-width: 300px){
width: 40px;
height: 40px;
color: black;
border-radius: 5px;
font-weight: bold;
font-size: 28px;
display: flex;
align-items: center;
justify-content: center;
margin: auto;
}
`