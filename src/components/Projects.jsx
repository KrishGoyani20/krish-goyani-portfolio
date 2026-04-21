import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section-reveal">
      <h2>Featured Work</h2>
      <div className="grid">
        <div className="card project-card glass">
          <img
            src="https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="PG Management System"
          />
          <h3>PG Management System</h3>
          <p>A comprehensive mobile platform designed to streamline accommodation management, bookings, and facility tracking.</p>
        </div>

        <div className="card project-card glass">
          <img
            src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Shayari App"
          />
          <h3>Shayari App</h3>
          <p>An elegant application for discovering, sharing, and saving poetic verses, featuring a clean UI and personalized feeds.</p>
        </div>

        <div className="card project-card glass">
          <img
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Chat Application"
          />
          <h3>Chat Application</h3>
          <p>A seamless, realtime communication platform built with Firebase backend ensuring instant message delivery.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
