import React, { useState } from 'react';
import './RequestCab.css'; // Import the CSS styles from a separate file

function RequestCab() {
    // State variables to store form input values
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        pickup: '',
        drop: '',
        date: '',
        time: ''
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

        // Name validation
        if (formData.name.length < 3) {
            newErrors.name = 'Name must be at least 3 characters long.';
        }

        // Phone validation
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = 'Please enter a valid phone number.';
        }

        // Pickup location validation
        if (!formData.pickup.trim()) {
            newErrors.pickup = 'Pickup location cannot be empty.';
        }

        // Drop location validation
        if (!formData.drop.trim()) {
            newErrors.drop = 'Drop location cannot be empty.';
        }

        // Date validation
        const selectedDate = new Date(formData.date);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0); // Reset time component
        if (isNaN(selectedDate.getTime()) || selectedDate < currentDate) {
            newErrors.date = 'Please choose a valid date.';
        }

        // Time validation
        if (!formData.time) {
            newErrors.time = 'Please choose a valid time.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if there are no errors
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Validate the form data
        if (validateForm()) {
            // Handle form submission here (e.g., send data to the server)
            console.log('Form submitted with data:', formData);
            
            // Show a success message
            alert('Your request has been submitted successfully!');
            
            // Reset the form
            setFormData({
                name: '',
                phone: '',
                pickup: '',
                drop: '',
                date: '',
                time: ''
            });
        }
    };

    return (
        <div className="request-container">
            <h1>Request a Cab</h1>
            <form onSubmit={handleSubmit} id="request-form">
                {/* Name Input */}
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                    />
                    {errors.name && <span className="error" id="name-error">{errors.name}</span>}
                </div>

                {/* Phone Number Input */}
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Your phone number"
                        required
                    />
                    {errors.phone && <span className="error" id="phone-error">{errors.phone}</span>}
                </div>

                {/* Pickup Location Input */}
                <div className="form-group">
                    <label htmlFor="pickup">Pickup Location:</label>
                    <input
                        type="text"
                        id="pickup"
                        name="pickup"
                        value={formData.pickup}
                        onChange={handleChange}
                        placeholder="Pickup location"
                        required
                    />
                    {errors.pickup && <span className="error" id="pickup-error">{errors.pickup}</span>}
                </div>

                {/* Drop Location Input */}
                <div className="form-group">
                    <label htmlFor="drop">Drop Location:</label>
                    <input
                        type="text"
                        id="drop"
                        name="drop"
                        value={formData.drop}
                        onChange={handleChange}
                        placeholder="Drop location"
                        required
                    />
                    {errors.drop && <span className="error" id="drop-error">{errors.drop}</span>}
                </div>

                {/* Date and Time Inputs */}
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                    {errors.date && <span className="error" id="date-error">{errors.date}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                    />
                    {errors.time && <span className="error" id="time-error">{errors.time}</span>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">Submit Request</button>
            </form>
        </div>
    );
}

export default RequestCab;
