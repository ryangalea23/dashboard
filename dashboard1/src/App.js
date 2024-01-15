import React, { useEffect, useState } from 'react';
import './App.css';



    function getFacilityNumber(url) {
      const parts = url.split("/");
      const facilityIndex = parts.findIndex(part => part === "facilities") + 1;
      return facilityIndex < parts.length ? parts[facilityIndex] : null;
    }

    function App() {
      const [facilityNumber, setFacilityNumber] = useState(null);

      useEffect(() => {
        const receiveMessage = (event) => {
          if (event.origin !== 'https://api.goicon.com') {
            return;
          }

          if (event.data && event.data.url) {
            console.log("Received URL: ", event.data.url);
            const extractedFacilityNumber = getFacilityNumber(event.data.url);
            console.log("Facility Number: ", extractedFacilityNumber);
            setFacilityNumber("998"); // Update state with the extracted facility number extractedFacilityNumber
          }
        };

        window.addEventListener('message', receiveMessage, false);

        return () => {
          window.removeEventListener('message', receiveMessage, false);
        };
      }, []);

const handleButtonClick = (path) => {
  // Construct the full URL by concatenating the master app's URL and the relative path
  const fullURL = 'https://api.goicon.com' + path;
  
  // Update the URL within the iframe
  window.location.href = fullURL;
};

      
    

      return (
        <div className="App">
        <div className="header-container">
          <img src="https://www.shellpoint.org/wp-content/uploads/2022/11/sp_logo.png" alt="Logo" className="logo"/>
          <em className="subheader">Resident Portal</em>
        </div>
  
        <div className="button-container">
          <button className="button-style" onClick={() => handleButtonClick(`/facilities/998/social/announcements`)}>
            <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/announcement/v6/24px.svg?download=true" alt="Announcement Icon" className="icon-style"/>
            <br /> Announcements
          </button>
  
          <button className="button-style" onClick={() => handleButtonClick(`/facilities/998/social/check-ins`)}>
            <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/login/v1/24px.svg?download=true" alt="Check-In Icon" className="icon-style"/>
            <br /> Check-In
          </button>
  
          <button className="button-style" onClick={() => handleButtonClick(`/facilities/998/social/events/calendar/`)}>
            <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/event_note/v1/24px.svg?download=true" alt="Calendar Icon" className="icon-style"/>
            <br /> Calendar
          </button>
  
          <button className="button-style" onClick={() => handleButtonClick(`/facilities/998/social/content-library`)}>
            <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/article/v9/24px.svg?download=true" alt="Content Icon" className="icon-style"/>
            <br /> Content
          </button>
  
          <button className="button-style" onClick={() => handleButtonClick(`/facilities/998/social/reservation-forms`)}>
            <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/event/v1/24px.svg?download=true" alt="Reservations Icon" className="icon-style"/>
            <br /> Reservations
          </button>
  
          <button className="button-style" onClick={() => handleButtonClick(`/facilities/998/social/users`)}>
            <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/contact_phone/v1/24px.svg?download=true" alt="Directory Icon" className="icon-style"/>
            <br /> Directory
          </button>
  
          <button className="button-style" onClick={() => handleButtonClick(`/facilities/998/social/groups`)}>
            <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/group/v1/24px.svg?download=true" alt="Groups Icon" className="icon-style"/>
            <br /> Groups
          </button>
  
          <button className="button-style" onClick={() => handleButtonClick(`/facilities/998/social/worxhub`)}>
            <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/build/v1/24px.svg?download=true" alt="Maintenance Icon" className="icon-style"/>
            <br /> Maintenance
          </button>
  
          <button className="button-style" onClick={() => handleButtonClick(`/facilities/998/social/forms`)}>
            <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/directions_bus/v1/24px.svg?download=true" alt="Bus Icon" className="icon-style"/>
            <br /> Forms & Requests
          </button>
        </div>
      </div>
      );
      
}

export default App;
