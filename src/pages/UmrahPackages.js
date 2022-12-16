import './UmrahPackages.css'
import umrah from "../Images/hajj.jpg"
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function UmrahPackages() {
    return (
        <>
        <Header/>
        <div className='UmrahDiv'>
            <section className='umrah-img'>
                <div className="umrahCont">
                    <div className="main-img">
                        <img src={umrah} alt="nothing" />
                    </div>
                </div>
            </section>
            <section className='form-vl'>
                <h1>Sign Up for Umrah alerts and get notified !</h1>
                <form action="#" className='form'>
                    <input type='text' name='name' placeholder='YOUR NAME' className='umrah-input' />
                    <input type='e-mail' name='email' placeholder='E-MAIL' className='umrah-input' />
                    <input type='phone' name='phone' placeholder='NUMBER' className='umrah-input' />
                    <input type='submit' name='submit' value='Submit' className='sub-btn' />
                </form>
            </section>
            <section className='umrah-package'>
                <h1>Umrah Packages</h1>
                <p>These are the packages related to the policies of kingdom of saudia arabia, it can be improvise by notifying you.</p>
                <div className="package-divs">
                    <div className="package-d">
                        <img src={umrah} />
                    </div>
                    <div className="package-d">
                        <img src={umrah} />
                    </div>
                    <div className="package-d">
                        <img src={umrah} />
                    </div>

                </div>
            </section>

            <section className='hotel-package'>
                <h1>Umrah Packages</h1>
                <p>These are the packages related to the policies of kingdom of saudia arabia, it can be improvise by notifying you.</p>
                <div className="hotel-divs">
                    <div className="hotel-d">
                        <div className="img-div">
                            <img src={umrah} />
                        </div>
                        <div className="content-div">
                            <h3>Hotels in Makkah</h3>
                            <p>Starting from Rs.5000</p>
                            <br />
                            <hr style={{ margin: '25px 0' }} />
                            <div className='btn'>
                                <a href="#"><button>Boot Now</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-d">
                        <div className="img-div">
                            <img src={umrah} />
                        </div>
                        <div className="content-div">
                            <h3>Hotels in Maddina</h3>
                            <p>Starting from Rs.5000</p>
                            <br />
                            <hr style={{ margin: '25px 0' }} />
                            <div className='btn'>
                                <a href="#"><button>Boot Now</button></a>
                            </div>
                        </div>
                    </div>
                    <div className="hotel-d">
                        <div className="img-div">
                            <img src={umrah} />
                        </div>
                        <div className="content-div">
                            <h3>Hotels in Ri</h3>
                            <p>Starting from Rs.5000</p>
                            <br />
                            <hr style={{ margin: '25px 0' }} />
                            <div className='btn'>
                                <a href="#"><button>Boot Now</button></a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
        <Footer/>
        </>
    );
}

export default UmrahPackages;
