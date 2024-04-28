import React, { useState } from 'react';
import './SignUp.css'; // Import the CSS styles from a separate file

function SignUp() {
    // State variables to manage form data and errors
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    // Function to handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Function to validate form data
    const validateForm = () => {
        const newErrors = {};

        // Name validation
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(formData.email)) {
            newErrors.email = 'Invalid email address.';
        }

        // Phone validation
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(formData.phone)) {
            newErrors.phone = 'Invalid phone number.';
        }

        // Password validation
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required.';
        }

        // Confirm password validation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Validate the form data
        if (validateForm()) {
            // Handle form submission here, e.g., send data to the server
            console.log('Form submitted with data:', formData);

            // Show a success message
            alert('Form submitted successfully!');

            // Reset the form data
            setFormData({
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: ''
            });
        }
    };

    return (
        <div className="form-container">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit} id="signUpForm">
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

                {/* Phone Number Field */}
                <div>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                    />
                    {errors.phone && <span id="phoneError" className="error">{errors.phone}</span>}
                </div>

                {/* Password Field */}
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Password"
                        required
                    />
                    {errors.password && <span id="passwordError" className="error">{errors.password}</span>}
                </div>

                {/* Confirm Password Field */}
                <div>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        required
                    />
                    {errors.confirmPassword && <span id="confirmPasswordError" className="error">{errors.confirmPassword}</span>}
                </div>

                {/* Submit Button */}
                <button type="submit" className="submit-btn">Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
