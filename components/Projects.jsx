import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectItem from './ProjectItem';
import Cms from '../public/assets/projects/cms.png'
import Ecommerce from '../public/assets/projects/ecommerce.png'
import Game from '../public/assets/projects/game.png'
import ChatGPt from '../public/assets/projects/chatgptapp.png'
import DallE from '../public/assets/projects/dalleapp.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Graph CMS Blog App'
            backgroundImg={Cms}
            projectUrl='/cms'
            tech='React JS'
          />
          <ProjectItem
            title='E-Commerce Stripe App'
            backgroundImg={Ecommerce}
            projectUrl='/ecommerce'
            tech='React JS'

          />
          <ProjectItem
            title='Crypto NFT Game'
            backgroundImg={Game}
            projectUrl='/nft'
            tech='Next JS'

          />
          <ProjectItem
            title='ChatGPT-Donex Bot App'
            backgroundImg={ChatGPt}
            projectUrl='/chatgpt'
            tech='JavaScript'

          />
          
          <ProjectItem
            title='Dall-E Image Generation App'
            backgroundImg={DallE}
            projectUrl='/imggen'
            tech='Vite'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
