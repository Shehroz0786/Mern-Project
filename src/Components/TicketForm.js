import { useState } from 'react'
import './TicketForm.css'

function TicketForm() {

let [newenb , setnewenb] = useState(document.getElementById('returning'));

let Handle = () =>{
    setnewenb(newenb.disabled = true);
}
let newHandle = () =>{
    setnewenb(newenb.disabled = false);
}

    return (
    
    <div className="form-container">

                <form action="">

                    <div className='travelStatus'>
                        <label htmlFor="roundtrip">
                            <span>Roundtrip</span>
                            <input onClick={newHandle} name='travelStatus' id='roundtrip' type="radio" />
                        </label>

                        <label htmlFor="oneway">
                            <span>One way</span>
                            <input onClick={Handle} name='travelStatus' id='oneway' type="radio" />
                        </label>

                        <label htmlFor="multicity">
                            <span>Multi-City</span>
                            <input onClick={newHandle} name='travelStatus' id='multicity' type="radio" />
                        </label>
                    </div>

                    <div className="flying-div">
                        <label htmlFor="flyFrom">
                            <span>Flying From</span>
                            <input id="flyFrom" type="text" placeholder='City or airport' />
                        </label>
                        <label htmlFor="flyTo">
                            <span>Flying to</span>
                            <input id="flyTo" type="text" placeholder='City or airport' />
                        </label>
                    </div>

                    <div className="date-div">

                        <div className='travelDest'>

                            <label htmlFor="departing">
                                <span>Departing</span>
                                <input id="departing" type="date" />
                            </label>

                            <label htmlFor="returning">
                                <span>Returning</span>
                                <input id="returning" type="date" />
                            </label>

                        </div>

                        <div className="passenger">

                            <label htmlFor="adults">
                                <span>Adults (18+)</span>
                                <select name="" id="adults">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </label>

                            <label htmlFor="adults">
                                <span>Children (18+)</span>
                                <select name="" id="adults">
                                    <option value="0">0</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </label>


                        </div>


                    </div>

                    <div className='travelClass'>

                        <label htmlFor="travelClass">
                            <span>Travel Class</span>
                            <select name="" id="travelClass">
                                <option value="economyClass">Economy Class</option>
                                <option value="businessClass">Business Class</option>
                                <option value="firstClass">First Class</option>
                            </select>
                        </label>

                        <label htmlFor="">
                        <span><br/></span>
                           <button>Show Flights</button>
                        </label>

                    </div>

                </form>

            </div>


    )

}
export default TicketForm