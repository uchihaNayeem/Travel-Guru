import React from 'react';
import '../../component/Hotel/Hotel.css'
import Room1 from '../resourseTG/Image/Room1.png'
import Room2 from '../resourseTG/Image/Room2.png'
import Room3 from '../resourseTG/Image/Room3.png'

const Hotel = () => {
  return (

    <div className='styling'>

<div className="d-flex">
        <div className="col-md-5">
          <img src={Room1} width="60%" alt="Hotel 1" />
        </div>
        <div className="col-md-7">                {/* This are the list of our hotels.You can Select any.Details are there */}
          <h4>Light bright airy Stylish apt and safe peaceful stay</h4>
          <p>5 guests 3 bedrooms 3 beds 3 baths</p>
          <p>Wifi Air Conditioning kitchen</p>
          <p>Cancelation flexibility available</p>
          <h4> Rating: 4.9(20) <br/> Charge: $34/night</h4>
          <br/>
          <br/>
        </div>
      </div>
      <div className="d-flex">
        <div className="col-md-5">
          <img src={Room2} width="60%" alt="Hotel 2" />
        </div>
        <div className="col-md-7">
          <h4>Apartment in Lost Panorama</h4>
          <p>3 guests 3 bedrooms 2 beds 3 baths</p>
          <p>Wifi Air Conditioning kitchen</p>
          <p>Cancelation flexibility available</p>
          <h4>Rating: 4.8(10) <br/> Charge: $52/night</h4>
          <br/>
          <br/>
        </div>
      </div>
      <div className="d-flex">
        <div className="col-md-5">
          <img src={Room3} width="60%" alt="Hotel 3" />
        </div>
        <div className="col-md-7">
          <h4>AR Lounge and Pool</h4>
          <p>5 guests 3 bedrooms 2 beds 3 baths</p>
          <p>Wifi Air Conditioning kitchen</p>
          <p>Cancelation flexibility available</p>
          <h4> Rating: 4.9(25) <br/> Charge: $44/night</h4>
          <br/>
          <br/>
        </div>
      </div>
      
    </div>
  );
};

export default Hotel;