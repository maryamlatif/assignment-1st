import React from 'react';

export default function Foot() {
  return (
    <div className='flex flex-col min-w-0.5'>
      <footer className='mt-auto flex justify-around font-semibold bg-slate-800 text-slate-200 px-2 py-5'>
        <a className='hover:bg-slate-800' href="https://www.facebook.com/mariam.latif.543" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a className='hover:bg-slate-800' href="https://www.instagram.com/mariam.latif" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a className='hover:bg-slate-800' href="https://github.com/maryamlatif " target="_blank" rel="noopener noreferrer">Github</a>
        <a className='hover:bg-slate-800' href="https://www.linkedin.com/in/maham-latif-48732927a" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
}
