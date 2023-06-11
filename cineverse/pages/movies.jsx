import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Link from 'next/link'

const Vizyon = () => {
  return (
    <div className='mt-5'>
        <Navbar/>
        <div className="text-center mt-2">
            <Link href='/movies' className="btn btn-outline-primary m-2">Movies</Link>
            <Link href='/soon' className="btn btn-outline-warning">Soon</Link>
        </div>
        <hr/>

        <div className='row'>
            <div className='col-6'>
                <Card/>
            </div>
            <div className='col-6'>
                <Card/>
            </div>
        </div>
        <div className='row mt-2'>
            <div className='col-6'>
                <Card/>
            </div>
            <div className='col-6'>
                <Card/>
            </div>
        </div>
      
    </div>
  )
}

export default Vizyon
