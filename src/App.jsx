import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { User, MessageCircle, X, Heart } from 'lucide-react';
import React from 'react';


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
        <X size={24} />

      </button>

      <button className='bg-green-500 rounded-full p-4 text-white hover:bg-green-700'
        onClick={() => console.log("swipe right")}>
        <Heart size={24} />
      </button>
    </div>
  </div>)
}

const MatchList = ({ onSelectMatch }) => {
  return (<div className='rounded-lg shadow-lg p-4'>
    <h2 className='text-2xl font-bold mb-4'>MatchList</h2>
    <ul>
      {[
        { id: 1, firstName: 'John', lastName: 'Doe', imageUrl: './../mani_teja.jpg' },
        { id: 2, firstName: 'Mani', lastName: 'Teja', imageUrl: './../mani_teja.jpg' },
      ].map(match => (
        <li key={match.id} className='mb-2'>
          <button className='w-full rounded flex item-center hover:bg-gray-100' onClick={onSelectMatch}>
            <img src={match.imageUrl} className='w-16 h-16 rounded-full mr-3, object-cover' alt={match.firstName} />
            <span>
              <h3 className='font-bold'>{match.firstName} {match.lastName}</h3>
            </span>
          </button>
        </li>
      ))}
    </ul>
  </div>)
}

const ChatScreen = () => {
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      console.log("Sending message: ", input);
      setInput('');
    }
  }

  const sendMessageOnEnter = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  }

  return (<div className='rounded-lg shadow-lg p-4'>
    <h2 className='text-2xl font-bold mb-4'>Chat</h2>

    <div className='h-[50vh] rounded border overflow-y-auto mb-4 p-2'>
      {
        [
          "Hi there",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
          "How are you ?",
        ]
          .map((message, index) => (
            <div key={index}>
              <div className='mb-4 p-2 rounded border bg-gray-100'>{message}</div>
            </div>
          ))
      }
    </div>

    <div className='flex items-center justify-between'>
      {/* <img
        src='./../mani_teja.jpg'
        className='w-14 h-14 rounded-full p-2'
        alt='Mani Teja' /> */}

      <input
        className='border-2 border-gray-300 p-2 rounded w-full ml-2'
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={sendMessageOnEnter}
        placeholder='Type a message...' />

      <button
        className='bg-blue-500 rounded-full p-2 m-2 text-white hover:bg-blue-700'
        onClick={sendMessage}>
        Send
      </button>
    </div>
  </div>)
}

function App() {

  const [currentScreen, setCurrentScreen] = useState('Profile');

  const renderScreen = () => {
    switch (currentScreen) {
      case "Profile":
        return <ProfileSelector />;
      case "Matchlist":
        return <MatchList onSelectMatch={() => setCurrentScreen('Chat')} />;
      case "Chat":
        return <ChatScreen />;
      default:
        return <ProfileSelector />;
    };
  }

  return (<>
    <div className="max-w-md mx-auto">
      <nav className="flex justify-between">
        <User onClick={() => setCurrentScreen("Profile")} />
        <MessageCircle onClick={() => setCurrentScreen("Matchlist")} />
      </nav>
      {renderScreen()}
    </div>
  </>)
}

export default App
