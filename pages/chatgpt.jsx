import Image from 'next/image';
import React from 'react';
import chatImg from '../public/assets/projects/chatgptapp.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const chatgpt = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={chatImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>ChatGPT-Donex Bot App</h2>
          <h3>Javascript / Node JS / OpenAi</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This application was built using Open Ai's Api's for chat GPT. This code is for a chatbot. 
            It imports two images, one for the user and one for the bot. 
            It then creates a form element and a chat container element. 
            It then defines functions to load dots while waiting for a response from the bot, type out the text of the bot's response, generate a unique ID, and create a chat stripe (a line of text in the chat). 
            Finally, it adds an event listener to the form so that when it is submitted or when enter is pressed, it calls the handleSubmit function. 
            The handleSubmit function takes in user input from the form and adds it to the chat container as a user chat stripe. 
            It then generates a unique ID and adds an empty bot chat stripe with that ID to the container. It then calls loader() on that empty stripe to add dots while waiting for a response from the bot. 
            When it receives that response, it clears any loading dots and types out the bot's response using typeText().
          </p>
          <a
            href='chat-gpt-ai-app-umber.vercel.app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </a>
          <a
            href='https://github.com/donsemz/chat-gpt-ai-app'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Code</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next.JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> OpenAi
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> CSS
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default chatgpt;
