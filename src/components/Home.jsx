import { useEffect, useState } from 'react';
import '../styles/Home.css';

function Home() {
    const [hospitals, setHospitals] = useState([]);

    // fetch data from api
    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(response => response.json())
            .then(data => setHospitals(data));
    }, []);

    return (
        <div className="home-container">
            <img className="hospital-image" src="http://i.imgur.com/RKbG9jq.jpg" alt="" />
            <h1 className="title">SmartCare Consultancy Agency</h1>
            <p className="description">Best in Africa </p>
            {/* map out the pictures */}
            
            <h1 className='down'>About Us</h1>
            <button className='btn'>Our Services</button>
        </div>
    );
}

export default Home;
