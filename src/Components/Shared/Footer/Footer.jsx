import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] pt-10 lg:pt-20 pb-5 lg:pb-10'>
            <div className='text-white text-center space-y-5 pb-5 lg:pb-10 max-w-7xl mx-auto'>
                <h2 className='font-extrabold text-4xl lg:text-6xl '>KeenKeeper</h2>
                <p className='font-medium px-5 text-[14px] lg:text-[16px] text-gray-200'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='font-medium text-[20px]'>Social Links</p>
                <div className='flex justify-center items-center gap-5 text-xl text-black'>
                    <div className='p-3 bg-white rounded-full'> <FaInstagramSquare /> </div>
                    <div className='p-3 bg-white rounded-full'> <FaFacebookSquare /> </div>
                    <div className='p-3 bg-white rounded-full'> <FaXTwitter /> </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto border-t border-gray-600 text-[16px] text-gray-400 pt-5 lg:pt-10 flex flex-col md:flex-row md:justify-around lg:justify-between items-center '>
                <h3 className=' '>© 2026 KeenKeeper. All rights reserved.</h3>
                <div className='flex items-center gap-3 md:gap-5 text-[14px] mt-3 md:mt-0'>
                    <p>Privacy Policy </p>
                    <p>Terms of Service </p>
                    <p>  Cookies </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;