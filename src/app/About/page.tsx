export default function Aboutpage() {
  return (
    <div className="bg-gray-200 p-5 min-h-screen flex flex-col items-center">
      <h1 className="text-indigo-900 py-5 text-5xl font-sans font-bold text-center drop-shadow-md">
        MY SKILLS
      </h1>
      <p className='text-center p-5 m-4 max-w-2xl from-neutral-300 font-medium text-xl'>
        I aspire to become a full-stack developer, actively working towards this goal. 
        I have a solid foundation in TypeScript, JavaScript, HTML, and CSS, 
        along with proficiency in MS Office. Currently, I am diving deeper into modern web 
        development frameworks like Next.js and React.js while exploring Tailwind CSS for styling. 
        By honing these skills, I aim to create dynamic, responsive web applications 
        that provide a seamless user experience.
      </p>
  
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-8">
        {['HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'TAILWIND CSS', 'NEXT JS', 'REACT JS', 'MS OFFICE'].map((skill) => (
          <button 
            key={skill} 
            className="bg-blue-700 text-white border-2 rounded-lg p-4 font-semibold hover:bg-pink-900 transition duration-300 transform hover:scale-105 shadow-lg"
          >
            {skill}
          </button>
        ))}
      </div>
    </div>
  );
}
