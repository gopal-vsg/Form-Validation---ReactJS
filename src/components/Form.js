import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    DOB: '',
    address: '',
    city: '',
    state: '',
    country: ''
  });
  
  const [error, setError] = useState('');

  function validateDOB(dateString) {
    const regex = /^\d{2}-\d{2}-\d{4}$/;
    if (!regex.test(dateString)) return "Invalid date format. Use dd-mm-yyyy.";
    
    const [day, month, year] = dateString.split('-').map(Number);

    if (month < 1 || month > 12) return "Month must be between 01 and 12.";
    if (day < 1 || day > 31) return "Day must be between 01 and 31.";
    
    const currentYear = new Date().getFullYear();
    if (currentYear - year < 17) return "You must be at least 17 years old.";

    return true;
  }

  function validateAddress(address) {
    const regex = /^[A-Za-z0-9 ,/. -]+$/; 
    return regex.test(address) || "Invalid address format.";
  }

  function validate(details) {
    const regex = /^[A-Za-z ]+$/; 
    return regex.test(details) || "Invalid input. Only letters and spaces are allowed.";
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setError('');

    const dobValidation = validateDOB(formData.DOB);
    if (dobValidation !== true) {
      setError(dobValidation);
      window.alert(dobValidation);
      return;
    }

    const addressValidation = validateAddress(formData.address);
    if (addressValidation !== true) {
      setError(addressValidation);
      window.alert(addressValidation);
      return;
    }

    const cityValidation = validate(formData.city);
    if (cityValidation !== true) {
      setError(cityValidation);
      window.alert(cityValidation);
      return;
    }

    const stateValidation = validate(formData.state);
    if (stateValidation !== true) {
      setError(stateValidation);
      window.alert(stateValidation);
      return;
    }

    const countryValidation = validate(formData.country);
    if (countryValidation !== true) {
      setError(countryValidation);
      window.alert(countryValidation);
      return;
    }

    window.alert("Submitted");
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">User Details Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 text-left text-gray-700 font-medium">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label className="block mb-2 text-left text-gray-700 font-medium">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label className="block mb-2 text-left text-gray-700 font-medium">DOB (dd-mm-yyyy)</label>
            <input
              type="text"
              name="DOB"
              onChange={handleChange}
              value={formData.DOB}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="dd-mm-yyyy"
            />
          </div>
          <div>
            <label className="block mb-2 text-left text-gray-700 font-medium">Address</label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={formData.address}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your address"
            />
          </div>
          <div>
            <label className="block mb-2 text-left text-gray-700 font-medium">City</label>
            <input
              type="text"
              name="city"
              onChange={handleChange}
              value={formData.city}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your city"
            />
          </div>
          <div>
            <label className="block mb-2 text-left text-gray-700 font-medium">State</label>
            <input
              type="text"
              name="state"
              onChange={handleChange}
              value={formData.state}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your state"
            />
          </div>
          <div>
            <label className="block mb-2 text-left text-gray-700 font-medium">Country</label>
            <input
              type="text"
              name="country"
              onChange={handleChange}
              value={formData.country}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your country"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-6 w-full py-3 bg-teal-700 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
      {error && (
        <div className="mt-4 text-red-500 font-medium">
          {error}
        </div>
      )}
    </div>
    </div>
  );
}

export default Form;
