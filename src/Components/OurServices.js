import '../Components/OurServices.css'
import hajj from '../Images/hajj.jpg'
import hotel from '../Images/hotel.jpg'
import visitVisa from '../Images/flight-bg.jpg'
import travelInsurance from '../Images/travelInsurance.jpg'


let OurServices = () =>{
    return(
            <div className="service-container">
  <h2>Our Services</h2>
  <section className="services">

    <div className="card">
      <div className="content">
        <div className="iconser">
          <img src={visitVisa} alt="" />
        </div>
        <div className="title">Visit Visa</div>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          reprehenderit.
        </p>
      </div>
    </div>

    <div className="card">
      <div className="content">
        <div className="iconser">
        <img src={travelInsurance} alt="" />
        </div>
        <div className="title">Travel Insurance</div>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          reprehenderit.
        </p>
      </div>
    </div>
    <div className="card">
      <div className="content">
        <div className="iconser">
        <img src={hotel} alt="" />
        </div>
        <div className="title">Hotel Reservation</div>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          reprehenderit.
        </p>
      </div>
    </div>
    <div className="card">
      <div className="content">
        <div className="iconser">
        <img src={hajj} alt="" />
        </div>
        <div className="title">Umrah Packages</div>
        <p className="info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
          reprehenderit.
        </p>
      </div>
    </div>
   
  </section>
</div>

        
    )
}
export default OurServices