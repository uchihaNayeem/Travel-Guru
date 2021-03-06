import React from 'react';
import '../Home/Home.css'
import Sajek from '../../component/resourseTG/Image/Sajek.png'
import Sreemongol from '../../component/resourseTG/Image/Sreemongol.png'
import sundorbon from '../../component/resourseTG/Image/sundorbon.png'
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
// import Sajek from '../../src/resourseTG/Image/Sajek.png'
// import  from '../../src/resourseTG/Image/Sreemongol.png'
// import sundorbon from '../../src/resourseTG/Image/'



const Home = () => {
  return (
    <div className='homeBackground'>
      <h1 className='trasparent'> .</h1>
      <h1 className='trasparent'> .</h1>
      <h1 className='trasparent'> .</h1>
      <h1 className='trasparent'> .</h1>
      <div className="d-flex flex-row-reverse" >
            <div class="card" style={{width:"25%"}}>
                <img src={Sajek} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Cox's Bazar</h5>
                    <button class="btn btn-warning"> <Link to={`/booking/${fakeData[0].id}`}>Book Here</Link> </button>
                </div>
            </div>

            <div class="card" style={{width:"25%"}}>
                <img src={Sreemongol} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Sreemongol</h5>
                    <button class="btn btn-warning"><Link to={`/booking/${fakeData[1].id}`}>Book Here</Link></button>
                </div>
            </div>

            <div class="card" style={{width:"25%"}}>
                <img src={sundorbon} class="card-img-top" alt="..."></img>
                <div class="card-body">
                    <h5 class="card-title">Sundorban</h5>
                    <button class="btn btn-warning"><Link to={`/booking/${fakeData[2].id}`}>Book Here</Link></button>
                </div>
            </div>     
      </div>
      <h1 className='trasparent'> .</h1>
      <h1 className='trasparent'> .</h1>
      <h1 className='trasparent'> .</h1>
      <h1 className='trasparent'> .</h1>  
      
    </div>
  );
};

export default Home;