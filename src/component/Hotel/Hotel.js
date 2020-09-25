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



      <div className="mt-12">
                


<iframe src="https://www.google.com/maps/dir/Chattogram/Dhaka/@22.0682122,89.608882,6.63z/data=!4m14!4m13!1m5!1m1!1s0x30acd8a64095dfd3:0x5015cc5bcb6905d9!2m2!1d91.7831819!2d22.356851!1m5!1m1!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!2m2!1d90.4125181!2d23.810332!3e0" 
                width="450" 
                height="700" 
                frameBorder="0" 
                style={{ border: 0, marginTop: '20px', padding: '10px', borderRadius: '20px' }} 
                allowFullScreen="" 
                ariaHidden="false" 
                tabIndex="0">
                </iframe>


            </div>


      
    </div>
  );
};

export default Hotel;