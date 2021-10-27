import React from 'react';
import Header from "./Header"
import AdminSignin from "./AdminSignin"
import Registers from "./Registers"
// import SignUp from "./SignUp"


const Home = () => {
  return (
    <div>
    <Header />
    <Registers />
    <AdminSignin />
    {/* <SignUp /> */}
    </div>
  )
}

export default Home;
