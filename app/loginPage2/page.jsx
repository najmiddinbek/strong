'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
    const history = useRouter();

    const handleInputChange = (event) => {
        const inputValue = event.target.value;

        if (inputValue === 'Chortoq2040') {
            history.push('/Sectorlar/3-sektor');
        }
    };

    return (
        <div>
            <div className="container">
                <form className='flex flex-col items-center h-[100vh] justify-center ' onChange={handleInputChange}>
                    <input className='border py-3 px-2 w-[40%] rounded-md' type="text" placeholder='Parolingizni kiriting' />
                    <button className='green rounded-md text-white py-2 px-10 cursor-pointer mt-2'>Kirish</button>
                </form>
            </div>
        </div>
    );
}

