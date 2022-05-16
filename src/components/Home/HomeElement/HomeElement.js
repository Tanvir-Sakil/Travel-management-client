import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import HomeCarosel from '../HomeCarosel/HomeCarosel';
import NavbarTop from '../../Shared/NavbarTop/NavbarTop';
import Card from '../../Home/Card/Card';
import Counter from '../Counter/Counter';
import Specialspot from '../SpecialSpot/Specialspot';
import SpecialspotContent from '../SpecialspotContent/SpecialspotContent';
import Contact from '../Contact/Contact';
import Review from '../Review/Review';
import Testimonal from '../Testimonal/Testimonal';
import Notice from '../Notice/Notice';

const HomeElement = () => {
    return (
        <div>
            <NavbarTop></NavbarTop>
            <Navbar></Navbar>
            <HomeCarosel></HomeCarosel>
            <Notice></Notice>
            <Card></Card>
            <Counter></Counter>
            <Specialspot></Specialspot>
            <SpecialspotContent></SpecialspotContent>
           <Testimonal></Testimonal>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomeElement;