import React from 'react';

export default function Educationpage() {
  return (
    <div className='bg-slate-200 pt-5 min-h-screen flex flex-col items-center rounded-lg shadow-md'>
      <h1 className='text-black text-5xl font-serif font-bold mb-4 drop-shadow-md'>
        Education
      </h1>
      <p className='text-center p-5 m-4 max-w-3xl from-neutral-300 font-serif text-xl'>
        I am currently pursuing an IT course at GIAIC, enhancing my skills for a career as a full-stack developer. 
        I hold a bachelor&apos;s degree from Govt Karachi University and completed my intermediate studies at S.M.B Fatimah Jinnah College. 
        My educational journey began with my matriculation from GOVT Girls School, providing me with a solid foundation in technology.
      </p>

      <ul className='list-disc list-inside text-center font-semibold text-sky-900 text-xl'>
        <li className='mb-3'>
          <span className='text-2xl'>GIAIC</span>
          <br />
          IT Course (2024)
        </li>
        <li className='mb-3'>
          <span className='text-2xl'>Govt Karachi University</span>
          <br />
          Bachelor&apos;s Degree (2019-2021)
        </li>
        <li className='mb-3'>
          <span className='text-2xl'>S.M.B Fatimah Jinnah College</span>
          <br />
          Intermediate Studies in Arts (2017-2019)
        </li>
        <li className='mb-3'>
          <span className='text-2xl'>GOVT Girls School</span>
          <br />
          Matriculation in Arts (2015-2017)
        </li>
      </ul>

      <div className="flex justify-center mt-6 pb-4">
        <button className="bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800 transition duration-300 shadow-md">
          Download Resume
        </button>
      </div>
    </div>
  );
}
