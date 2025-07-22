import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Assignment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Employee Profile Form</h2>
      <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <input
            type="text"
            className="form-control"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {submittedData && (
        <div className="card mt-4 p-4 shadow-sm">
          <h4>Employee Profile</h4>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Department:</strong> {submittedData.department}</p>
        </div>
      )}
    </div>
  );
};

export default Assignment;
