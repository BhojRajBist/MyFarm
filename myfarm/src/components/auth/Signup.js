import React, { useState } from 'react';
import './Signup.css';
import Swal from 'sweetalert2';
import { useRegisterUserMutation } from '../../services/userAuthApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Term from '../Term';

function Signup({ onClose, onSigninClick }) {

    const [formData, setFormData] = useState({
        full_name: '',
        email: '',
        country: '',
        address: '',
        password: '',
        confirm_password: '',
        agreeToTerms: false // Add a state for tracking whether the user has agreed to the terms
    });

    const [showTerms, setShowTerms] = useState(false); // State to manage the visibility of the Terms component

    const [registerUser, { isLoading }] = useRegisterUserMutation();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async () => {
        try {
            if (!formData.agreeToTerms) {
                toast.error('Please agree to the Terms of Service.'); // Display error toast if terms are not agreed
                return;
            }
            
            // Proceed with registration if terms are agreed
            const res = await registerUser(formData);
            console.log('Registration response:', res);
            if (res.error) {
                // Handle registration errors
                console.error('Registration error:', res.error);
                throw new Error(res.error.data.detail || 'Something went wrong');
            }
            toast.success('An email has been sent to activate your account. Please proceed to activate your account using the link provided in the email.');
            onSigninClick();
        } catch (error) {
            console.error('Error during registration:', error);
            // Handle error
        }
    };

    const handleCloseClick = () => {
        onClose();
    };

    const handleSigninButtonClick = () => {
        onSigninClick();
    };

    const handleCloseTerms = () => {
      setShowTerms(false)
      };


    const handleTermsButtonClick = () => {
        setShowTerms(true); // Show the Terms component when the button is clicked
    };

    return (
        <div className="signup-container">
            {showTerms ? (
                <Term onClose={handleCloseTerms} />
            ) : (
                <>
                <div className="signup-form">
                <h2>Sign Up</h2>
                <div className="input-div">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="signup-input"
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                    />
                
                 
                    {/* End of checkbox */}
                    <input
                        type="email"
                        placeholder="Email"
                        className="signup-input"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        className="signup-input"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        placeholder="Address"
                        className="signup-input"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="signup-input"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="signup-input"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                    />
                       <label>
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                        />  I have read and agree to the <button className='term-button' onClick={handleTermsButtonClick}> Terms of Service</button>
                            </label>
                        </div>
                        <button className="signup-button" onClick={handleSubmit} disabled={isLoading}>
                            {isLoading ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </div>
                    <div className="signup-options">
                        <p>Already have an account? </p>
                        <button className="signin-button" onClick={handleSigninButtonClick}>
                            <i className="fa fa-sign-in"></i> Sign In
                        </button>
                    </div>
                    <button className="close-button" onClick={handleCloseClick}>
                        <i className="fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    );
}

export default Signup;
