import React from 'react'
import Navbar from './components/Navbar'

const Detail = () => {
  return (
    <div className='mt-5'>
        <Navbar/>
        <div className='mt-3'>
            <h3 className='m-3'>Movie Name</h3>
        </div>
        <hr/>
        <div>
            <h3 className='m-3'>4DX  GoldClass IMAX  MPX</h3>
        </div>
        <hr/>

        <div className='row'>
            <div className='col-4'>
                <img className='w-100 m-2' src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/459543e33775972b85d72b253740f3c36c809ce05aaa19b6c1227231877e60e1._RI_V_TTW_.jpg" alt="" />
            </div>

            <div className='col-8'>
                <h5> icons </h5>
                <h3>Director:</h3>
                <h3>Actors:</h3>


            </div>

        </div>
      
        <button type="button" class="btn btn-dark btn-lg btn-block m-2 ">Buy a Ticket</button>

        <hr/>
        <div>
            <h3>Date:</h3>
            <h3>Time:</h3>
            <h3>Genre:</h3>

        </div>

      
    </div>
  )
}

export default Detail
