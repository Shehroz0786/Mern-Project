import React from 'react';
import TicketForm from '../Components/TicketForm'
import Card from '../Components/Card'
import OurServices from '../Components/OurServices'
import Header from '../Components/Header'
import Footer from '../Components/Footer'


function Tickets() {
	return (
		<>
    <Header/>
    <TicketForm />
	<Card/>
	<OurServices />
	<Footer/>
			

		</>);
}
export default Tickets;
