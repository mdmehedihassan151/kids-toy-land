import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <> 
        <header className='w-11/12 mx-auto py-4'>
            <Navbar/>
        </header>
       <main className='w-11/12 mx-auto py-4'>
         <Outlet></Outlet>
       </main>
        </>
    );
};

export default MainLayout;