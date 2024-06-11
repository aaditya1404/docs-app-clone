import Foreground from '@/components/Foreground';
import Background from '@/components/Background';
import React from 'react'
// import Background from '@/components/background';

const HomePage = () => {
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  )
}

export default HomePage;
