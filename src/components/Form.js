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

  const [errors, setErrors] = useState({});

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
    return regex.test(address) ? true : "Invalid address format.";
  }

  function validateName(name) {
    const regex = /^[A-Za-z ]+$/; 
    return regex.test(name) ? true : "Invalid input. Only letters and spaces are allowed.";
  }

  function validate() {
    let tempErrors = {};
    if (!formData.firstName.trim()) tempErrors.firstName = "First name is required.";
    else if (validateName(formData.firstName) !== true) tempErrors.firstName = validateName(formData.firstName);

    if (!formData.lastName.trim()) tempErrors.lastName = "Last name is required.";
    else if (validateName(formData.lastName) !== true) tempErrors.lastName = validateName(formData.lastName);

    if (!formData.DOB.trim()) tempErrors.DOB = "DOB is required.";
    else if (validateDOB(formData.DOB) !== true) tempErrors.DOB = validateDOB(formData.DOB);

    if (!formData.address.trim()) tempErrors.address = "Address is required.";
    else if (validateAddress(formData.address) !== true) tempErrors.address = validateAddress(formData.address);

    if (!formData.city.trim()) tempErrors.city = "City is required.";
    else if (validateName(formData.city) !== true) tempErrors.city = validateName(formData.city);

    if (!formData.state.trim()) tempErrors.state = "State is required.";
    else if (validateName(formData.state) !== true) tempErrors.state = validateName(formData.state);

    if (!formData.country.trim()) tempErrors.country = "Country is required.";
    else if (validateName(formData.country) !== true) tempErrors.country = validateName(formData.country);

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validate()) {
      window.alert("Submitted");
    }
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
                required
              />
              {errors.firstName && (
                <div className="mt-1 text-red-500 text-sm">{errors.firstName}</div>
              )}
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
                required
              />
              {errors.lastName && (
                <div className="mt-1 text-red-500 text-sm">{errors.lastName}</div>
              )}
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
                required
              />
              {errors.DOB && (
                <div className="mt-1 text-red-500 text-sm">{errors.DOB}</div>
              )}
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
                required
              />
              {errors.address && (
                <div className="mt-1 text-red-500 text-sm">{errors.address}</div>
              )}
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
                required
              />
              {errors.city && (
                <div className="mt-1 text-red-500 text-sm">{errors.city}</div>
              )}
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
                required
              />
              {errors.state && (
                <div className="mt-1 text-red-500 text-sm">{errors.state}</div>
              )}
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
                required
              />
              {errors.country && (
                <div className="mt-1 text-red-500 text-sm">{errors.country}</div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full py-3 bg-teal-700 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
