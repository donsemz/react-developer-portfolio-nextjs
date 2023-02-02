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
            <span className='px-2'>|</span>C# (.Net Core)
            <span className='px-2'>|</span>Python (SeleniumBase, Keras, FastAPI)
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>Microsoft Azure
            <span className='px-2'>|</span>TailwindCSS
            <span className='px-2'>|</span>RESTAPI
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Northwestern Polytechnical University
            </span>
            <span className='px-2'>|</span>Xi'an, Shaanxi, China
          </p>
          <p className='py-1 italic'>Graduate Student Researcher and Software Developer, (Sept 2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Project: Software Vulnerabilty Discovery using Knowledge Graphs
            </li>
            <li>
            Work on publishing scientic research papers along with furthering studies on analysis
             of Deep Learning and its affects on Software Vulnerability Detection.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
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
            Danica Pension LPADC (Inscale Asia)
            </span>
            <span className='px-2'>|</span>Kuala Lumpur, Malaysia
          </p>
          <p className='py-1 italic'>Junior Software Developer (June 2018 - Sept 2018)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Projects: Danica E-Pension Cheque
            </li>
            <li>
            Investigation, design, and implement scalable applications for data identication, analysis, retrieval, and indexing.
            </li>
            <li>
            Cooperate diligently with other IT team members to plan, design, and develop smart solutions.
            </li>
            <li>
            Continually updated a leadership resume and honed skills by participating in various management trainings
            </li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            SEB Pension LPADC (Inscale Asia)
            </span>
            <span className='px-2'>|</span>Kuala Lumpur, Malaysia
          </p>
          <p className='py-1 italic'>Junior Software Developer (Sept 2016 - June 2018)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Projects: SEB E-Pension Cheque, Case Handling System, Office Operations System
            </li>
            <li>
            Consulted regularly with team on project status, proposals, and technical issues.
            </li>
            <li>
            Transformed existing software to correct errors, upgrade interfaces, and improve efficiency.
            </li>
            <li>
            Honed skills in leadership, learning, adaptation, and teamwork.
            </li>
          </ul>
        </div>
      
      </div>
    </>
  );
};

export default resume;
