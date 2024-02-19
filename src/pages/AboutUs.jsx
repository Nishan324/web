import React from 'react';
import Navbar1 from "./navbar";
import Footer from "./footer";
import Panel from "./panel";
import 'bootstrap/dist/css/bootstrap.min.css';

const AboutUs = () => {
  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Founder', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    { id: 2, name: 'Jane Smith', role: 'Lead Developer', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    { id: 3, name: 'Alice Johnson', role: 'Designer', bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...' },
    // Add more team members
  ];

  return (
    <div>
      <Navbar1 />
      <Panel />

      <div className="container mt-4">
        <h2>About Us</h2>
        <p className="lead">
          Welcome to our About Us page! We are a dedicated team of professionals passionate about delivering quality products and services to our customers.
        </p>

        <h3>Our Team</h3>
        <div className="row">
          {teamMembers.map(member => (
            <div key={member.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{member.role}</h6>
                  <p className="card-text">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
