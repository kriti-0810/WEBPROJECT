import React, { useState } from 'react';
import './SearchCab.css'; // Import the CSS styles from a separate file

function SearchCab() {
    // State variables to store form input values
    const [formData, setFormData] = useState({
        pickupLocation: '',
        dropLocation: '',
        date: '',
        time: '',
        cabType: ''
    });

    // State variables to store error messages
    const [errors, setErrors] = useState({});

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Function to validate the form data
    const validateForm = () => {
        const newErrors = {};

        // Pickup location validation
        if (!formData.pickupLocation.trim()) {
            newErrors.pickupLocation = 'Pickup location is required.';
        }

        // Drop location validation
        if (!formData.dropLocation.trim()) {
            newErrors.dropLocation = 'Drop location is required.';
        }

        // Date validation
        if (!formData.date) {
            newErrors.date = 'Date is required.';
        }

        // Time validation
        if (!formData.time) {
            newErrors.time = 'Time is required.';
        }

        // Cab type validation
        if (!formData.cabType) {
            newErrors.cabType = 'Cab type is required.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if there are no errors
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Validate the form data
        if (validateForm()) {
            alert('Searching for cabs...');
            // Perform additional actions here (e.g., send the data to a server or navigate to a results page)
        }
    };

    return (
        <div className="form-container">
            <h1>Search for a Cab</h1>
            <form onSubmit={handleSubmit} id="searchForm">
                {/* Pickup Location Field */}
                <div>
                    <input
                        type="text"
                        id="pickupLocation"
                        name="pickupLocation"
                        value={formData.pickupLocation}
                        onChange={handleChange}
                        placeholder="Pickup Location"
                        required
                    />
                    {errors.pickupLocation && <span id="pickupLocationError" className="error">{errors.pickupLocation}</span>}
                </div>

                {/* Drop Location Field */}
                <div>
                    <input
                        type="text"
                        id="dropLocation"
                        name="dropLocation"
                        value={formData.dropLocation}
                        onChange={handleChange}
                        placeholder="Drop Location"
                        required
                    />
                    {errors.dropLocation && <span id="dropLocationError" className="error">{errors.dropLocation}</span>}
                </div>

                {/* Date Field */}
                <div>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    {errors.date && <span id="dateError" className="error">{errors.date}</span>}
                </div>

                {/* Time Field */}
                <div>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                    {errors.time && <span id="timeError" className="error">{errors.time}</span>}
                </div>

                {/* Cab Type Selection */}
                <div>
                    <label htmlFor="cabType">Cab Type:</label>
                    <select
                        id="cabType"
                        name="cabType"
                        value={formData.cabType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">--Select Cab Type--</option>
                        <option value="Mini">Mini</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Luxury">Luxury</option>
                    </select>
                    {errors.cabType && <span id="cabTypeError" className="error">{errors.cabType}</span>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">Search</button>
            </form>
        </div>
    );
}

export default SearchCab;
