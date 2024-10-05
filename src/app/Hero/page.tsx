import Image from "next/image";



export default function Heropage() {
    return (
      <div className="bg-gray-100 p-14 min-h-screen rounded-lg shadow-md">
         {/* Main Content */}
         <main className="p-7 bg-slate-300">
          <h2 className="text-4xl font-bold text-center">Welcome to My Website!</h2>
          <p className="mt-4 text-center ">
            This is my very first webpage built using <strong>Next.js</strong> and{" "}
            <strong>Tailwind CSS</strong>. I’m excited to start my journey in web
            development, and this site will be a space where I showcase my
            projects, share my learning experiences, and document my progress.
          </p>
          <p className="mt-4 text-center">
            Feel free to explore different pages using the navigation links in the
            header.
          </p>
          <p className="mt-4 text-center">
            Next.js helps me create fast, scalable websites with ease, and
            Tailwind CSS allows me to style everything beautifully without writing
            much custom CSS. I’m still learning, and this site will keep evolving
            as I gain more knowledge and skills.
          </p>
          <p className="font-semibold mt-4 text-center">
            Stay tuned for more updates and thank you for visiting!
          </p></main>
          <div className="rounded-lg shadow-md flex justify-center pt-5">
          <Image
          src="/poster.jpg"
          alt="Potfolio-img"
          height={400}
          width={360}
          priority 
         
          ></Image></div>
        
      
      </div>
    )}
  