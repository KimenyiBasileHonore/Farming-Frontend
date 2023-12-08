import React, { useState } from 'react';
import axios from 'axios';


function DonationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    // description: '',
    attachment: [],
  });


  const [submissionStatus, setSubmissionStatus] = useState(null);


  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: [...e.target.files],
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        if (key === 'attachment') {
          for (let i = 0; i < formData[key].length; i++) {
            formDataToSend.append('attachment', formData[key][i]);
          }
        } else {
          formDataToSend.append(key, formData[key]);
        }
      }
    }

    try {
      await axios.post('http://localhost:2023/api/donation/reports', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSubmissionStatus('success');
      alert('Request submitted successfully.');
      // Reset form fields
      setFormData({
        firstName: '',
        email: '',
        phone: '',
        // description: '',
        attachment: [],
      });
    } catch (error) {
      console.error(error);
      setSubmissionStatus('error');
      alert('Error submitting problem report.');
    }
  };

  return (
    <div className="font-serif bg-gray-300 rounded-lg ">
      <div className=" WEWE space-y-4 bg-blue rounded-lg shadow-md">
        <h2 className="text-3xl ml-52 font-semibold text-black mt-8 mb-4"> REQUEST FORM </h2>
        <br />
        {submissionStatus === 'success' ? (
          <div className="text-green-900 font-semibold">Submitted successfully.</div>
        ) : submissionStatus === 'error' ? (
          <div className="text-red-600">Error submitting report.</div>
        ) : null}

        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="flex w-82 -mx-3 mb-4">
            <div className="w-full sm:w-1/2 px-3 mb-4">
              <label htmlFor="firstName" className="block uppercase text-xs font-medium">
                Names:
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                required
              />
            </div>
            <div className="w-full sm:w-1/2 px-3 mb-4">
              <label htmlFor="email" className="block uppercase text-xs font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                required
              />
            </div>
            <div className="w-full sm:w-1/2 px-3 mb-4">
              <label htmlFor="phone" className="block  uppercase text-xs font-medium">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
                required
              />
            </div>
          </div>
          {/* <div className="w-full px-3 mb-4">
            <label htmlFor="description" className="block uppercase text-xs font-medium">
              Problem Description:
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Describe the problem..."
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              required
            ></textarea>
          </div> */}
          {/* <div className="w-full sm:w-1/2 px-3 mb-4">
            <label htmlFor="donationAmount" className="block uppercase text-xs font-medium">
              Payment Amount:
            </label>
            <input
              type="number"
              id="donationAmount"
              name="donationAmount"
              placeholder="Enter payment amount"
              value={formData.donationAmount}
              onChange={handleChange}
              className="w-full px-4 py-2 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
              required
            />
          </div> */}
          <div className="w-full px-3 mb-4">
            <label htmlFor="applicationLetter" className="block uppercase text-xs font-medium">
              <label htmlFor="role" className="block font-bold brown">
                <span style={{ fontWeight: 'bold' }}>Choose file</span>:
              </label> Copy of Id <br /> Copy of Land Title <br /> Application Letter <br/> Ikiciro cy ubudehe
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              multiple
              onChange={handleFileChange}
              className="w-full mt-2 text-gray-800 border rounded-md focus:outline-none focus:ring focus:ring-indigo-300"
            />



          </div>
          <div className="w-full px-3">
            <button
              type="submit"
              className="bg-black uppercase hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DonationForm;
