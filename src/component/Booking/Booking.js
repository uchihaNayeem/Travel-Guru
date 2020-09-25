import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
import '../Booking/Booking.css'
const Booking = () => {


  const {dataId} = useParams()
  const placeDetails = fakeData.find(data => data.id === dataId)
  const {name, description, img} = placeDetails;

  return (
    
    <div  className="row d-flex justify-content-center align-items-center bookingBg ">
    <div className="col-sm-4">
        {/* <img style={{height:"200px", paddingTop:'1px'}} src={img} alt=""/> */}
        <h1 style={{fontSize:"75px", paddingBottom:"25px"}} className="colorWhite" >{name}</h1>
        <p className="colorWhite">{description}</p>
        
    </div>
    <div className="col-sm-4 form-style bgWhite">   
        <form> 
            <p >Origin</p>
            <input className="form-control" type="text"/>
            <br/>
            <p>Destination</p>
            <input className="form-control" type="text"/>
            <br/>
            <p>From</p>   
            <input className="form-control"  type="date" name="" id=""/> 
            <p>To</p>
            <input className="form-control"  type="date" name="" id=""/>
        </form>
        <br/>
        <div className='center'>
        <button type="button" class="btn btn-warning btn-lg "><Link to="/hotel">Start Booking</Link> </button>
        </div>
    </div>
</div>
  );
};

export default Booking;