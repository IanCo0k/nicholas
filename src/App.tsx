import React from 'react';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Reflection from './components/Reflection';
import Endorsements from './components/Endorsements';
import resume from './assets/resume.pdf';
import script1 from './assets/script1.pdf';
import logo from './assets/logo.png';
import script2 from './assets/script2.pdf';
import { AiOutlineDownload } from 'react-icons/ai';


const HeroSection: React.FC = () => {
  return (
    <div className='bg-gray-800 text-gray-200 min-h-screen'>
      <Navbar />
      <div className="relative justify-center flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8">
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <div className="text-left">
            <div className='flex w-full justify-center p-2'><img src={logo} alt="Nick Martin Logo" className="md:w-40 md:h-40 w-20 h-20 rounded-full" /></div>
            <h2 className="text-5xl mb-4 text-center md:text-8xl font-extrabold leading-10 tracking-tight text-gray-200 sm:text-5xl sm:leading-none">
              Nick Martin
            </h2>
            <h3 className='text-2xl text-center text-gray-400 leading-10'>Producer and broadcasting student at Central Michigan University</h3>
            {/* My Work section */}
            <div className="mt-5">
              <div className="flex justify-center space-x-4">
                <PdfLink title="Resume" url={resume} />
                <PdfLink title="Script #1" url={script1} />
                <PdfLink title="Script #2" url={script2} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
          <div className="relative w-full p-3 rounded md:p-8">
            <div className="rounded-lg aspect-square overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Tqp9mWMwAw4"
                title="Random YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Skills />
      <Reflection />
      <Endorsements />
    </div>
  );
};

const PdfLink: React.FC<{ title: string; url: string }> = ({ title, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-gray-100 border-2 border-blue-200 bg-gray-700 hover:cursor-pointer hover:bg-gray-600 flex items-center rounded-full p-2 text-sm hover:text-gray-200">
      <AiOutlineDownload className="text-2xl font-bold inline-block mx-2 mr-1" />
      {title}
    </a>
  );
};

export default HeroSection;
