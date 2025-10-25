
import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state}=useNavigation();
    return (
        <div className='bg-linear-to-r from-sky-300 via-indigo-300 to-purple-300'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                {state=='loading' ? <Loading></Loading> : <Outlet></Outlet>}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;