import React from 'react'

const About = () => {
    return (
        <div className="container my-5">
          <h1 className="text-center mb-4">About iNotebook</h1>
          <p className="lead">
            iNotebook is an easy-to-use online notes-taking app designed to help you manage your thoughts and tasks efficiently. Whether it's personal journaling or tracking your daily to-dos, iNotebook helps you stay organized.
          </p>
    
          <h2 className="mt-5">Key Features</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Create and manage daily notes effortlessly.</li>
            <li className="list-group-item">Edit or delete notes with a simple interface.</li>
            <li className="list-group-item">Organize notes using tags for quick access.</li>
            <li className="list-group-item">Securely store and access your notes anytime.</li>
          </ul>
    
          <h2 className="mt-5">How to Use iNotebook</h2>
          <p>
            <strong>1.</strong> To add a note, fill out the title, description, and tag fields and click "Add Note."
            <br />
            <strong>2.</strong> Your notes will be displayed below with options to edit or delete.
            <br />
            <strong>3.</strong> Use the navigation bar to switch between the Home and About pages.
          </p>
    
          <h2 className="mt-5">Data Security</h2>
          <p>
            We take your privacy seriously. Your notes are securely saved, ensuring that your personal information stays safe.
          </p>
        </div>
      );
}

export default About