import React from 'react'

const Carousel = () => {
  return (
    <div className='mt-2'>

      <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://img.chip.com.tr/rcman/Cw940h529q95gm/storage/files/images/2023/02/17/john-wick-chapter-4-fragman-w6kN.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://img.chip.com.tr/rcman/Cw940h529q95gm/storage/files/images/2023/02/17/john-wick-chapter-4-fragman-w6kN.jpg" class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src="https://img.chip.com.tr/rcman/Cw940h529q95gm/storage/files/images/2023/02/17/john-wick-chapter-4-fragman-w6kN.jpg" class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-target="#carouselExampleFade" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-target="#carouselExampleFade" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>

    </div>
  )
}

export default Carousel
