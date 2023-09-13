import React from 'react';
import backgroundImage from './assets/1.avif'; // Replace with your image path

function Home() {
  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: 'calc(100vh - 64px)', // Adjust 64px to match your navbar height
    paddingTop: '64px', // Adjust 64px to match your navbar height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const contentStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add a semi-transparent background color
    padding: '20px', // Add padding to your content
    borderRadius: '8px', // Add rounded corners
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
  };

  return (
    <div style={containerStyle}>
      <div className="bg-blue py-8 px-12 text-blue text-4xl font-bold shadow-lg rounded-lg" style={contentStyle}>
        <h2 className="underline">Hello Educative!</h2>
        <p className="mt-4 text-lg">Unlock your learning potential.</p>
        <button className="mt-8 text-lg bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;
