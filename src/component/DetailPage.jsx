import React, { useState } from 'react'
import { events } from '../../data';
import { useParams } from 'react-router-dom';

export default function DetailPage() {
  
      const { id } = useParams();
    const event = events.find(p => p.id === parseInt(id));
    const imageCount = event.images.length;
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleLeft = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? imageCount - 1 : prev - 1
        );
    };

    const handleRight = () => {
        setCurrentIndex((prev) =>
            prev === imageCount - 1 ? 0 : prev + 1
        );
    }

    return (
    <div className=' flex flex-row justify-center items-center'>

         <div className='sm:w-[60%] w-[90%]    grid grid-cols-1 items-start gap-2 py-5'>
      <div className='  overflow-clip  flex flex-col'>
                        <div className='w-[100%] rounded-2xl  overflow-clip  flex relative'>
                            {event.images.map((image, key) => (
                                <img
                                    className="flex transition-transform duration-1000 ease-in-out "
                                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                                    key={key} src={image} alt="" />
                            ))

                            }
                            <i
                                onClick={handleLeft}
                                className='md:text-2xl sm:text-lg text-md md:p-2 p-1 top-1/2 left-0 absolute bg-blue-50  rounded-[50%] fa-solid fa-angle-left' ></i>

                            <i
                                onClick={handleRight}
                                className='md:text-2xl sm:text-lg text-md md:p-2 p-1 top-1/2 right-0 absolute bg-blue-50  rounded-[50%] fa-solid fa-angle-right' ></i>
                        </div>
                        <div className='pl-2 flex flex-col gap-2 py-5'>
                                <p className='lg:text-4xl md:text-3xl text-2xl font-bold'>{event.name}</p>
                                <p className='lg:text-2xl md:text-xl text-lg font-medium'>Location and Time</p>
                            <div className=' flex flex-col gap-2 py-5'>
                                <p className='lg:text-xl md:text-lg text-lg '><i className='fa-solid fa-calendar-week'></i> {event.dateTime}</p>
                                <p className='lg:text-xl md:text-lg text-lg '><i className='fa-solid fa-location-dot'></i> {event.venue}</p>
                            </div>
                                <p className='lg:text-2xl md:text-xl text-lg font-medium'>Decription</p>
                            <div className='flex flex-col gap-3'>
                                <p className='text-lg font-light '>{event.description}</p>
                            </div>
                        </div>

                    </div>

    </div>
    
    </div>

  )
}
