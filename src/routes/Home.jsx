import React from 'react'
import Nav from '../components/nav'
import HeroSec from '../components/HeroSec'
import PlayVd from '../components/PlayVd'
import Footer from '../components/footer'
import Brands from '../components/Brands'
import Instructors from '../components/Instructors'
import AppSec from '../components/AppSec'
import CardsSec from '../components/CardsSec'
import Swiper from '../components/Swiper'

function Home() {
    return (
    <>
    <Nav/>
    <HeroSec/>
    <PlayVd/>
    <Brands/>
    <Instructors/>
    <AppSec/>
    <CardsSec/>
    <Swiper/>
    <Footer/>
    </>
)
}

export default Home