import React from 'react'

function Achievements() {
  return (
    <div className='w-full bg-silver flex flex-row py-16 px-8 items-center justify-between  '>

        {/* left Box  */}
        <div className='w-[500px] flex flex-col gap-2 ml-6'>
            <h2 className='text-5xl font-bold text-d-grey leading-tight'>Helping a local <br/><span className="text-primary">business reinvent itself</span>
            </h2>

            <p className="text-grey text-base mt-2">We reached here with our hard work and dedication</p>
        </div>

        {/* Right Box */}
        <div className='w-[600px] grid grid-cols-2 gap-10 mr-20'>

            <div className='flex items-center gap-4'>
                <img src="public\Images\peopleicon.png" alt="" className="w-10 h-10 object-contain"/>
                <div className='flex flex-col'>
                    <h3 className='text-3xl font-bold text-d-grey'>2,245,341</h3>
                    <p className="text-grey text-sm">Members</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <img src="public\Images\handsicon.png" alt="" className="w-10 h-10 object-contain" />
                <div className='flex flex-col'>
                    <h3 className='text-3xl font-bold text-d-grey'>46,328</h3>
                    <p className="text-grey text-sm">Clubs</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <img src="public\Images\fingericon.png" alt="" className="w-10 h-10 object-contain" />
                <div className='flex flex-col'>
                    <h3 className='text-3xl font-bold text-d-grey'>828,867</h3>
                    <p className="text-grey text-sm">Event Bookings</p>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <img src="public\Images\cardicon.png" alt="" className="w-10 h-10 object-contain"/>
                <div className='flex flex-col'>
                    <h3 className='text-3xl font-bold text-d-grey'>1,926,436</h3>
                    <p className="text-grey text-sm">Payments</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achievements