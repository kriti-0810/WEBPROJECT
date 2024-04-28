import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';
import './LuxuryCarSelection.css'; // Import the CSS styles from a separate file

function LuxuryCarSelection() {
    const navigate = useNavigate();
    // State variable to manage the selected luxury car
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
            alert("Please select a luxury car.");
        }
    };

    // Function to handle selection change
    const handleChange = (e) => {
        setSelectedCar(e.target.value);
    };

    return (
        <div className="form-container">
            <h1>Select Luxury Car</h1>
            <form onSubmit={handleSubmit} id="luxuryForm">
                {/* Luxury Car Selection */}
                <div>
                    <label htmlFor="luxuryCar">Select Luxury Car:</label>
                    <select
                        id="luxuryCar"
                        name="luxuryCar"
                        value={selectedCar}
                        onChange={handleChange}
                        required
                    >
                        <option value="">--Choose a Luxury Car--</option>
                        <option value="Mercedes S-Class">Mercedes S-Class - ₹5,000</option>
                        <option value="BMW 7 Series">BMW 7 Series - ₹5,000</option>
                        <option value="Audi A8">Audi A8 - ₹4,800</option>
                        <option value="Lexus LS">Lexus LS - ₹4,700</option>
                        <option value="Jaguar XJ">Jaguar XJ - ₹4,600</option>
                        <option value="Porsche Panamera">Porsche Panamera - ₹6,000</option>
                        <option value="Rolls Royce Phantom">Rolls Royce Phantom - ₹8,000</option>
                    </select>
                </div>

                {/* Submit Button */}
                <input type="submit" value="Confirm Selection" />
            </form>
        </div>
    );
}

export default LuxuryCarSelection;
