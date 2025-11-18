import React from 'react'
import ContactHero1 from "../Contact/ContactHero1/ContactHero1"
import ContactHero2 from "../Contact/ContactHero2/ContactHero2"
import MohaliMap from "../Contact/ContactHero3/ContactHero3"

const Contact = () => {
  return (
    <>
    <div className='bg-offWhite-5911  p-1'>
    <div>
      <ContactHero1/>
    </div>
    <div>
    <ContactHero2/>
    </div>
    <div>
        <MohaliMap/>
    </div>
    </div>
    </>
  )
}

export default Contact
