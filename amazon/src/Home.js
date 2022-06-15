import React from 'react'
import './Home.css'
import Product from './Product'
const Home = () => {
  return (
    <div className='home'>
        <div className='home_container'>
      <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="">

      </img>
      <div className='home_row'>
           <Product
            title="the lean star" 
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            price={29.9}
            rating={5}
           />
           <Product
            title="Air jordan 1"
            image="https://images.pexels.com/photos/10195370/pexels-photo-10195370.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            price={100}
            rating={2}
           />
      </div>
       <div className='home_row'>
           <Product
            title="nike"
            image="https://images.pexels.com/photos/5584997/pexels-photo-5584997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={150}
            rating={4}
           />
           <Product
            title="nike"
            image="https://images.pexels.com/photos/6540927/pexels-photo-6540927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={100}
            rating={4}
           />
           <Product
            title="laptop"
            image="https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            price={1000}
            rating={4}
           />
      </div>
       <div className='home_row'>
              <Product
               title="Ipad"
               image="https://images.pexels.com/photos/1334598/pexels-photo-1334598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
               price={900}
               rating={4}
              />
      </div>
        </div>
  </div>
  )
}

export default Home