import React from 'react'

export default function Foot() {
  return (
    <div className='flex flex-col min-h-screen'>
        <footer className='mt-auto flex justify-around font-semibold bg-black text-slate-200   px-2 py-5'>

        <a className='hover:bg-slate-800' href  ="https://www.facebook.com/">Facbook</a>
        <a className='hover:bg-slate-800' href ="https://www.instagram.com/">Instagram</a>
        <a className='hover:bg-slate-800' href ="https://github.com/">Github</a>
        <a className='hover:bg-slate-800' href ="https://www.linkedin.com">Linkedin</a>
        </footer>
      
    </div>
  )
}
