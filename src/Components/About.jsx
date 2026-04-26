import React from 'react'

function About() {
  return (
    
    <div className='w-full py-16 px-8 md:px-24 flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 bg-white'>
        
       
        <div className='w-full md:w-1/2 flex justify-center'>
           
            <img 
              src="/Images/rafiki.png" 
              alt="Pixel grade Image"
              className='w-[80%] md:w-full max-w-[400px]' 
            />
        </div>

       
        <div className='w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left gap-6'>
         
         <h2 className='text-d-grey text-3xl md:text-4xl font-bold leading-tight'>
            The unseen of spending three <br className="hidden md:block"/> years at Pixelgrade
         </h2>

         <p className='text-grey text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
         </p>

         <div>
            <button className='bg-primary py-3 px-8 text-white rounded hover:opacity-90 transition-all'>
                Learn More
            </button>
         </div>
         
        </div>
    </div>
  )
}

export default About