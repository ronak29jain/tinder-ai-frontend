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

const MatchList = () => {
  return (<div className='rounded-lg shadow-lg p-4'>
    <h2 className='text-2xl font-bold mb-4'>MatchList</h2>
    {[
      {id: 1, firstName: 'John', lastName: 'Doe', imageUrl: './../mani_teja.jpg'}, 
      {id: 2, firstName: 'Mani', lastName: 'Teja', imageUrl: './../mani_teja.jpg'}, 
    ].map(match => (
      <li key={match.id} className='mb-2'>
        <button className='w-full rounded flex item-center hover:bg-gray-100' onClick={console.log("open chat 2")}>
          <img src={match.imageUrl} className='w-16 h-16 rounded-full mr-3, object-cover' alt={match.firstName} />
          <span>
            <h3 className='font-bold'>{match.firstName} {match.lastName}</h3>
          </span>
        </button>
      </li>
    ))}
  </div>)
}

function App() {
  return (<>
    <div className="max-w-md mx-auto">
      <nav className="flex justify-between">
        <User/>
        <MessageCircle/>
      </nav>
      {/* <ProfileSelector/> */}
      <MatchList />
    </div>
  </>)
}

export default App
