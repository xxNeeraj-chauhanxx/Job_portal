import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className='text-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-30 flex items-center'>
            <div className='flex flex-col gap-6 my-10 mx-auto'>
                <h1 className='text-5xl font-bold text-white max-w-4xl mx-auto'>
                    Search, Apply &<br /> Achieve Your <span className='text-[#6A38C2]'>Career Goals</span>
                </h1>
                <p className='text-white text-lg max-w-2xl mx-auto'>
                    Our mission is to connect talented individuals with opportunities that align with their skills and aspirations.
                </p>
                <div className='flex w-[50%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-white'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full h-8 px-4'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 h-12">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;