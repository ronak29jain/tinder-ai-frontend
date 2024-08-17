import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {User, MessageCircle, X, Heart} from 'lucide-react';


const ProfileSelector = () => {
  return (<div className="rounded-lg overflow-hidden bg-white shadow-lg">
    <div className='relative'>
      <img src="./../mani_teja.jpg" />
      <div className='absolute bottom-0 left-0 right-0 text-white p-4 bg-gradient-to-t from-black'>
        <h2 className='text-3xl font-bold '>Mani Teja, 29</h2>
      </div>
    </div>

    <div className='p-4'>
      <p className='text-grey-600 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eum suscipit culpa accusantium impedit vel est consequatur magnam laudantium ipsum.</p>
    </div>

    <div className='flex justify-center space-x-5 p-4'>
      <button className='bg-red-500 rounded-full p-4 text-white hover:bg-red-700' 
        onClick={() => console.log("swipe left")}>
        <X size={24}/>
        
      </button>

      <button className='bg-green-500 rounded-full p-4 text-white hover:bg-green-700'
        onClick={() => console.log("swipe right")}>
        <Heart size={24}/>
      </button>
    </div>
  </div>)
}

function App() {
  return (<>
    <div className="max-w-md mx-auto">
      <nav className="flex justify-between">
        <User/>
        <MessageCircle/>
      </nav>
      <ProfileSelector/>
    </div>
  </>)
}

export default App
