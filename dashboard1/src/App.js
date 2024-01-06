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
          if (event.origin !== 'http://expected-origin.com') {
            return;
          }

          if (event.data && event.data.url) {
            console.log("Received URL: ", event.data.url);
            const extractedFacilityNumber = getFacilityNumber(event.data.url);
            console.log("Facility Number: ", extractedFacilityNumber);
            setFacilityNumber(extractedFacilityNumber); // Update state with the extracted facility number
          }
        };

        window.addEventListener('message', receiveMessage, false);

        return () => {
          window.removeEventListener('message', receiveMessage, false);
        };
      }, []);


      return (
        <div className="App">
          <h2 className="sonida_layout_color--tertiary">
            <img src="https://api.goicon.com/social/editors/download/sp_logo_reverse_modern_complete1-xZeDorezeW-1704244572926.png" alt="Logo" className="logo"/>
            <em>Resident Portal</em>
          </h2>
      
          <table className="centered">
            <tbody>
              <tr>
                <td>
                  <a href={`https://api.goicon.com/facilities/${facilityNumber}/social/announcements`} className="button-link">
                    <button className="button-style">
                      <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/announcement/v6/24px.svg?download=true" alt="Announcement Icon" className="icon-style"/>
                      <br /> Announcements
                    </button>
                  </a>
                </td>
                <td>
                  <a href={`https://api.goicon.com/facilities/${facilityNumber}/social/pages/14478`} className="button-link">
                    <button className="button-style">
                      <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/login/v1/24px.svg?download=true" alt="Check-In Icon" className="icon-style"/>
                      <br /> Check-In
                    </button>
                  </a>
                </td>
                <td>
                  <a href={`https://api.goicon.com/facilities/${facilityNumber}/social/events/calendar/`} className="button-link">
                    <button className="button-style">
                      <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/event_note/v1/24px.svg?download=true" alt="Calendar Icon" className="icon-style"/>
                      <br /> Calendar
                    </button>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href={`https://api.goicon.com/facilities/${facilityNumber}/social/content-library`} className="button-link">
                    <button className="button-style">
                      <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/article/v9/24px.svg?download=true" alt="Content Icon" className="icon-style"/>
                      <br /> Content
                    </button>
                  </a>
                </td>
                <td>
                  <a href={`https://api.goicon.com/facilities/${facilityNumber}/social/reservation-forms`} className="button-link">
                    <button className="button-style">
                      <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/event/v1/24px.svg?download=true" alt="Reservations Icon" className="icon-style"/>
                      <br /> Reservations
                    </button>
                  </a>
                </td>
                <td>
                  <a href={`https://api.goicon.com/facilities/${facilityNumber}/social/users`} className="button-link">
                    <button className="button-style">
                      <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/contact_phone/v1/24px.svg?download=true" alt="Directory Icon" className="icon-style"/>
                      <br /> Directory
                    </button>
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href={`https://api.goicon.com/facilities/${facilityNumber}/social/groups`} className="button-link">
                    <button className="button-style">
                      <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/group/v1/24px.svg?download=true" alt="Groups Icon" className="icon-style"/>
                      <br /> Groups
                    </button>
                  </a>
                </td>
                <td>
                  <a href={`https://api.goicon.com/facilities/${facilityNumber}/social/worxhub`} className="button-link">
                    <button className="button-style">
                      <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/build/v1/24px.svg?download=true" alt="Maintenance Icon" className="icon-style"/>
                      <br /> Maintenance
                    </button>
                  </a>
                </td>
                <td>
                  <a href={`https://api.caremerge.com/facilities/${facilityNumber}/social/pages/6233`} className="button-link">
                    <button className="button-style">
                      <img src="https://fonts.gstatic.com/s/i/materialiconsoutlined/directions_bus/v1/24px.svg?download=true" alt="Bus Icon" className="icon-style"/>
                      <br /> Transportation
                    </button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
      
}

export default App;
