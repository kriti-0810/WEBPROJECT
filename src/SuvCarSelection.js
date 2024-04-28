import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import './SuvCarSelection.css'; // Import the CSS styles from a separate file
import { useNavigate } from 'react-router-dom';

function SuvCarSelection() {
    const navigate = useNavigate();
    // State variable to manage the selected SUV car
    const [selectedCar, setSelectedCar] = useState('');
    // const navigate = useNavigate();
    
    
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        
        if (selectedCar) {
            alert(`You have selected: ${selectedCar}`);
            navigate('/booknow');
            
            // Redirect to the book page after confirming the selection
            // navigate.push('/book');
        } else {
            alert("Please select an SUV car.");
        }
    };

    // Function to handle selection change
    const handleChange = (e) => {
        setSelectedCar(e.target.value);
    };

    return (
        <div className="form-container">
            <h1>Select SUV Car</h1>
            <form onSubmit={handleSubmit} id="suvForm">
                {/* SUV Car Selection */}
                <div>
                    <label htmlFor="suvCar">Select SUV Car:</label>
                    <select
                        id="suvCar"
                        name="suvCar"
                        value={selectedCar}
                        onChange={handleChange}
                        required
                    >
                        <option value="">--Choose an SUV Car--</option>
                        <option value="Toyota Fortuner">Toyota Fortuner - ₹2,500</option>
                        <option value="Ford Endeavour">Ford Endeavour - ₹2,400</option>
                        <option value="Mahindra XUV500">Mahindra XUV500 - ₹2,300</option>
                        <option value="Hyundai Creta">Hyundai Creta - ₹2,000</option>
                        <option value="Tata Harrier">Tata Harrier - ₹2,200</option>
                    </select>
                </div>

                {/* Submit Button */}
                <input type="submit" value="Confirm Selection" />
            </form>
        </div>
    );
}

export default SuvCarSelection;
