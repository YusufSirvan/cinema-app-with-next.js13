import React from 'react'
import Card from './components/Card'
import Carousel from './components/Carousel'
import Link from 'next/link'
import Navbar from './components/Navbar'


const Home = () => {

    

    return (
        <div>
            <Navbar/>
            <Carousel/>

            <div className="text-center mt-2">
                <Link href='/movies' className="btn btn-outline-primary m-2">Movies</Link>
                <Link href='/soon' className="btn btn-outline-warning">Soon</Link>

            </div>
            <div className="row">
                <div className="col">
                    <Card/>
                </div>

                <div className="col">
                    <Card/>
                </div>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Link href='/movies'className="btn btn-dark btn-lg btn-block mt-3 mb-3" to="/vizyonda" >All Movies</Link>
            </div>
        </div>
    )
}

export default Home
