import React from 'react'
import '../styles/home.css'
import Nav from '../components/Nav'
import Plantcontainer from '../components/Plantcontainer'
import {sect}from "../data"
import {secttwo}from "../data"
import {sectthree}from "../data"


const Home = () => {
 
  return (
    <>
    <Nav/>
      <section className='landing-page'>
        <div className='back'></div>
        <h1>Transfer Your Small Space Into an Oasis</h1>
      </section>
    <Plantcontainer data={sect}/>
    <Plantcontainer data={secttwo}/>
    <Plantcontainer data={sectthree}/>


    </>
  )
}

export default Home