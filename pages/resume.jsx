import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Abubakar (Don) | Resume</title>
        <meta
          name='description'
          content='I’m a fullstack developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Abubakar O. A. Semasaba (Don)</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/don-semasaba-86083157/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/donsemz/'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Teamworker <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Teamworker</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>FullStack Developer
            <span className='px-2'>|</span>C# (.Net Core, .Net Framework)
            <span className='px-2'>|</span>Python (SeleniumBase, Keras, FastAPI)
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React (React Hooks, ContextAPI, React Forms)
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Microsoft Azure (Azure DevOps)
            <span className='px-2'>|</span>TailwindCSS
            <span className='px-2'>|</span>RESTAPI
            <span className='px-2'>|</span>TensorFlow
            <span className='px-2'>|</span>Selenium
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            FNZ Group
            </span>
            <span className='px-2'>|</span>Shanghai, China
          </p>
          <p className='py-1 italic'>Analyst Developer, (Sept 2023 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Project: James Hay Project (JHP)
            </li>
            <li>
            Involved in the research, design, development, and modification of enterprise-wide systems and applications software.
            </li>
            <li>
            Played a pivotal role in the strategic planning of system deployment, ensuring compliance with software standards.
            </li>
            <li>
            Achieved a 2% increase in team project productivity, optimizing output efficiency.
            </li>
            <li>
            Drove the upgrade of legacy system modules, implementing a transition to modern architectural styles.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Northwestern Polytechnical University
            </span>
            <span className='px-2'>|</span>Xi'an, Shaanxi, China
          </p>
          <p className='py-1 italic'>Graduate Student Researcher and Software Developer, (Sept 2021 - Sept 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Project: Software Vulnerabilty Discovery using Knowledge Graphs
            </li>
            <li>
            Worked on publishing scientific research papers along with furthering studies on analysis of Deep Learning and its affects on Software Vulnerability Detection.
            </li>
            <li>
            Published over 3 high quality research papers within this project timeframe.
            </li>
            <li>
              Worked directly with a team managed by me and produce software 
              for research and design a variety of Deep Learning Models.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Inscale Asia
            </span>
            <span className='px-2'>|</span>Kuala Lumpur, Malaysia
          </p>
          <p className='py-1 italic'>Junior Software Developer (October 2016 - Sept 2018)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Projects: Danica E-Pension Cheque, SEB E-Pension Cheque, SEB Case Handling System, SEB Office Operations System
            </li>
            <li>
            Transformed existing software to correct errors, upgrade interfaces, and improve efficiency.
            </li>
            <li>
            Coordinated with project management staff on database development timelines and project scope.
            </li>
            <li>
            Collaborated on all stages of systems development lifecycle from requirement gathering to production releases.
            </li>
            <li>
            Cooperate diligently with other IT team members to plan, design, and develop smart solutions. While increasing overall company project outputs by 3%
            </li>
          </ul>
        </div>   
      </div>
    </>
  );
};

export default resume;
