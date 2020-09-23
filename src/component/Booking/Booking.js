import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData'
const Booking = () => {


  const {dataId} = useParams()
  const placeDetails = fakeData.find(data => data.id === dataId)
  const {name, description} = placeDetails;

  return (
    
    <div  className="row d-flex justify-content-center align-items-center ">
    <div className="col-sm-4">
        <h1>{name}</h1>
        <p>{description}</p>
    </div>
    <div className="col-sm-4 form-style">   
        <form> 
            <p>Origin</p>
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
        <button type="button" class="btn btn-warning btn-lg "><Link to="/login">Start Booking</Link> </button>
    </div>
</div>
  );
};

export default Booking;