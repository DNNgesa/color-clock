import React from 'react';
import { format } from 'date-fns';
import './App.css';

function App() {
  const now = new Date();
  const dateRow = format(now, 'EEEE, MMMM do, yyyy'); 
  const timeRow = format(now, 'hh:mm:ss a');          
  const zoneRow = format(now, 'zzzz');               

  return (
    <div className="clock-wrapper">
      <div className="clock-card">
        <p className="clock-date">{dateRow}</p>
        <p className="clock-time">{timeRow}</p>
        <p className="clock-zone">{zoneRow}</p>
      </div>
    </div>
  );
}

export default App;
