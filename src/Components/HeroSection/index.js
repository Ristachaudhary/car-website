import React from 'react';
import "./style.css";
import {AiOutlineSearch} from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className='heroSection-container'>
      <form>
        <div className='form-div-container text'>
          <label className='label'>Where</label>
          <input type='text' placeholder='Search Location' className='location-search-input'/>
        </div>
        {/* <span className='form-span'></span> */}

        <div className='form-div-container from'>
        <label className='label'>From</label>
        <input type='date'/>

        </div>
        {/* <span className='form-span'></span> */}

        <div className='form-div-container until'>
        <label className='label'>Until</label>
        <input type='date' />
        </div>
        <div className='form-search'><AiOutlineSearch/></div>
         <button className='search-btn'>Search for cars</button>

      </form>
    </div>
  )
}

export default HeroSection