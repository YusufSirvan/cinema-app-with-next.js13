import Link from 'next/link'
import React from 'react'

const Card = () => {
    return (
        <div className='mt-2'>
            <div class="card " >
                <Link href='/Detail'><img src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/459543e33775972b85d72b253740f3c36c809ce05aaa19b6c1227231877e60e1._RI_V_TTW_.jpg" class="card-img-top " alt="..."/></Link>
                    <div class="card-body">
                        <h5 class="card-title">Movie Name</h5>
                        <h3>imdb rating</h3>
                    </div>
            </div>
        </div>
    )
}

export default Card