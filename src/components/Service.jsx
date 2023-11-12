import { useState, useEffect } from 'react';
import '../styles/Service.css';

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div id="services">
            {services.map(service => (
                <div key={service.id}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <p>price: ${service.price}</p>
                    <img src={service.img} alt={`Service: ${service.name}`} />
                </div>
            ))}
        </div>
    );
}
export default Services