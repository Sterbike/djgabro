import React, { useEffect, useState } from 'react'

const Contact = ({data}) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileCheck = /Mobi|Android/i.test(navigator.userAgent);
    setIsMobile(mobileCheck);
  }, []);

  return (
    <div className="lg:mt-12 mt-5 flex flex-col gap-10">
      <h1 className='lg:text-3xl text-xl'>Telefonszám: <a href={isMobile ? `tel:${data.Telefonszam}` : null} className='underline'>{data.Telefonszam}</a></h1>
      <h1 className='lg:text-3xl text-xl'>Email: <a href={isMobile ? `mailto:${data.Email}`: null} className='underline'>{data.Email}</a></h1>
    {isMobile? (
      <p className='text-sm italic'>a linkre kattintva felveheted velem a kapcsolatot.</p>
    ) : (null)}
    </div>
  )
}

export default Contact