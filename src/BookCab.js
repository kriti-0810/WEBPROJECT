import React, { useState } from 'react';
import './BookCab.css'; // Import the CSS styles from a separate file

function BookCab() {
    // State variables to store form input values
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        date: '',
        time: '',
        pickupLocation: '',
        dropLocation: '',
        carType: ''
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
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        }

        // Phone validation
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(formData.phone.trim())) {
            newErrors.phone = 'Phone number must be 10 digits.';
        }

        // Email validation
        if (!formData.email.includes('@')) {
            newErrors.email = 'Invalid email address.';
        }

        // Date validation
        if (!formData.date) {
            newErrors.date = 'Date is required.';
        }

        // Time validation
        if (!formData.time) {
            newErrors.time = 'Time is required.';
        }

        // Pickup location validation
        if (!formData.pickupLocation.trim()) {
            newErrors.pickupLocation = 'Pickup location is required.';
        }

        // Drop location validation
        if (!formData.dropLocation.trim()) {
            newErrors.dropLocation = 'Drop location is required.';
        }

        // Car type validation
        if (!formData.carType) {
            newErrors.carType = 'Car type is required.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Returns true if there are no errors
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Validate the form data
        if (validateForm()) {
            alert('Booking request submitted successfully!');
            // Perform additional actions here (e.g., send the data to a server)
            // Reset form data if necessary
            setFormData({
                name: '',
                phone: '',
                email: '',
                date: '',
                time: '',
                pickupLocation: '',
                dropLocation: '',
                carType: ''
            });
        }
    };

    return (
        <div className="form-container">
            <h1>Book a Cab</h1>
            <form onSubmit={handleSubmit} id="bookingForm">
                {/* Name Field */}
                <div>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    {errors.name && <span id="nameError" className="error">{errors.name}</span>}
                </div>

                {/* Phone Field */}
                <div>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        required
                        pattern="^\d{10}$"
                    />
                    {errors.phone && <span id="phoneError" className="error">{errors.phone}</span>}
                </div>

                {/* Email Field */}
                <div>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    {errors.email && <span id="emailError" className="error">{errors.email}</span>}
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

                {/* Car Type Selection */}
                <div>
                    <label htmlFor="carType">Car Type:</label>
                    <select
                        id="carType"
                        name="carType"
                        value={formData.carType}
                        onChange={handleChange}
                        required
                    >
                        <option value="">--Select Car Type--</option>
                        <option value="Mini">Mini/Luxury</option>
                        <option value="Auto">Auto/Rickshaw</option>
                        <option value="SUV">SUV</option>
                    </select>
                    {errors.carType && <span id="carTypeError" className="error">{errors.carType}</span>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">Book Now</button>
            </form>
        </div>
    );
}

export default BookCab;
