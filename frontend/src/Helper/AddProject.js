import React, { useState } from 'react';
import axios from 'axios';
import './addproject.css';

export default function AddProject() {
  const [formData, setFormData] = useState({
    projectName: '',
    projectDescription: '',
    date: '',
    features: '',
    technology: '',
    webpageLink: '',
    gitRepoLink: '',
    mediumArticleLink: '',
    projectImage: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://localhost:5000/submit', formData)
      .then((response) => {
          console.log(formData)
        // Add any necessary success handling here
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        // Add error handling here
      });
  };
  

  return (
    <div>
      <div className="container">
        <div className="form-container">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="projectName">Project Name</label>
              <input
                type="text"
                className="form-control"
                id="projectName"
                name="projectName"
                placeholder="Enter project name"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="projectDescription">Project Description</label>
              <textarea
                className="form-control"
                id="projectDescription"
                name="projectDescription"
                rows="3"
                placeholder="Enter project description"
                onChange={handleInputChange}
              ></textarea>
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="features">Features</label>
              <input
                type="text"
                className="form-control"
                id="features"
                name="features"
                placeholder="Enter features"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="technology">Technology</label>
              <input
                type="text"
                className="form-control"
                id="technology"
                name="technology"
                placeholder="Enter technology"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="webpageLink">Webpage Link</label>
              <input
                type="text"
                className="form-control"
                id="webpageLink"
                name="webpageLink"
                placeholder="Enter webpage link"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="gitRepoLink">Git Repository Link</label>
              <input
                type="text"
                className="form-control"
                id="gitRepoLink"
                name="gitRepoLink"
                placeholder="Enter Git repo link"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="mediumArticleLink">Medium Article Link</label>
              <input
                type="text"
                className="form-control"
                id="mediumArticleLink"
                name="mediumArticleLink"
                placeholder="Enter Medium article link"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <div className="form-group">
              <label htmlFor="projectImage">Project Image</label>
              <input
                type="text"
                className="form-control"
                id="projectImage"
                name="projectImage"
                placeholder="Enter Project Image link"
                onChange={handleInputChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
