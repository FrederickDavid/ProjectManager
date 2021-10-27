import { Input } from 'antd'
import React,{useState} from 'react'
import styled from 'styled-components'


const Home = () => {
    const [chn, setChn] = useState(false);
    const onChn = () => {
        setChn(!chn);
      };
    return (

       
      <Container>
        {
            chn?(
                <Everyhold>
                <Avata src="/images/hero.png"/>
      <Wrapper>
      
      <Card1>
          <Undraw src="/images/8.svg"/>
      </Card1>
      <Card2>
          <Holder>
          <Header>Create Account</Header>
          <Upload> Upload An Image</Upload>
          <AllInputs>
              <Text>Name </Text>
              <Place placeholder="Enter your User Name"/>
          </AllInputs>
          <AllInputs>
              <Text>Email </Text>
              <Place placeholder="adeniran@gmail.com"/>
          </AllInputs>
          <AllInputs>
              <Text>PassWord </Text>
              <Place placeholder="Enter your Password"/>
          </AllInputs>
          <AllInputs>
              <Text>Company Key </Text>
              <Place placeholder="Enter your Company Key"/>
          </AllInputs>
          <SignUp>Sign Up</SignUp>
          </Holder> 
          <All>Allready have an account <span onClick={onChn}>sign in</span> </All>
      </Card2>
      </Wrapper>
      </Everyhold>
            ):(
                <Everyhold>
               
      <Wrapper>
      
      <Card1>
          <Undraw src="/images/8.svg"/>
      </Card1>
      <Card2>
          <Holder>
          <Header>Sign In</Header>
        
          
          <AllInputs>
              <Text>Email </Text>
              <Place placeholder="adeniran@gmail.com"/>
          </AllInputs>
          <AllInputs>
              <Text>PassWord </Text>
              <Place placeholder="Enter your Password"/>
          </AllInputs>
          <AllInputs>
              <Text>Company Key </Text>
              <Place placeholder="Enter your Company Key"/>
          </AllInputs>
          <SignUp>Sign Up</SignUp>
          </Holder> 
          <All>Don't have an account <span onClick={onChn}>sign up</span> </All>
      </Card2>
      </Wrapper>
      </Everyhold>
            )
        }
      </Container>
    )
}

export default Home
const Everyhold= styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;
const All = styled.div`
span{
    color: gold;
    cursor: pointer;
    font-weight: bold;
    font-size: 18px;
}
`;
const Avata = styled.img`
 display: none;

@media screen and (max-width:800px){
    display: unset;
    height: 150px;
width: 150px;
border-radius: 50%;
background-color: white;
margin: 10px; 
   
} 
`
const SignUp = styled.div`
margin-top: 20px;
font-size: 20px;
font-weight: bold;
height: 40px;
border: 1px solid lightgrey;
border-radius: 5px;
width: 300px;
display: flex;
align-items: center;
justify-content: center;
color: white;
cursor: pointer;
transition: all 350ms;
transform: scale(1);
:hover{
    background-color:magenta;
    color:  white;
    transform: scale(1.05); 
    font-weight: bold;
    cursor: pointer;

}

`;
const Place = styled(Input)`
font-size: 15px;
outline:none;
height: 20px;
border: 1px solid lightgrey;
border-radius: 3px;
width: 300px;
display: flex;
align-items: center;
color: rgba(0 ,0, 0 ,0.5);


`;
const Text = styled.div`
font-weight: 500;
font-size: 15px;
`
const Holder = styled.div`
margin: 10px;
width: 80%;
@media screen and (max-width:800px){
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  }
`;
const AllInputs = styled.div`
padding: 10px 0 10px 0;
`;
const Upload = styled.div`

margin-bottom: 40px;
height: 30px;
border: 1px solid lightgrey;
background-color: white;
border-radius: 3px;
width: 300px;
display: flex;
align-items: center;
color: rgba(0 ,0, 0 ,0.8);
transition: all 350ms;
transform: scale(1);
:hover{
    background-color: #5c49d7;
    color: white;
    transform: scale(1.001); 
    font-weight: bold;
    cursor: pointer;

}
`;
const Header = styled.div`
font-weight: bold;
font-size:30px;
padding-bottom: 15px;
padding-top:15px;


`
const Undraw = styled.img`
height: 100%;
width: 100%;
/* background-color: white; */
object-fit:  contain;
`
const Card1 = styled.div`
height: 100%;
width:400px;
background-color:white ;
display: unset;
border-radius:  10px 0 0 10px;
@media screen and (max-width:800px){
    display: none;
}
`;
const Card2 = styled.div`
border-radius: 0 10px  10px 0;
height: 100%;
width:400px;
display: flex;
color: white;
flex-direction: column;
/* padding-top:50px; */
background-color: #5c49d7;
/* justify-content: center; */
align-items: center;
@media screen and (max-width:800px){
  border-radius: 10px;
  width: 340px;

}

`;
const Wrapper = styled.div`
height: 70%;
width: 800px;
background-color:white;
 border-radius: 10px;
display: flex;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
@media screen and (max-width:800px){
    width: 340px;

}
`;
const Container= styled.div`
height: 100vh;
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;





`;
