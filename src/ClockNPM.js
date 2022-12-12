import React from 'react'
import Clock from "react-live-clock";
const ClockNPM = () => {
  return (
    <>
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none  text-white-900 md:text-5xl lg:text-6xl dark:text-white">
        {/* Formate can change from the Moment.js website */}
        <Clock format={"h:mm:ss a"} ticking={true} timezone={"Asis/Kolkatta"} />
      </h1>
      <center>
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-9 py-3 text-center mr-2 mb-2"
          onClick={stopFx()}
        >
          Stop
        </button>
        <button
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-9 py-3 text-center mr-2 mb-2"
          onClick={startFx()}
        >
          Start
        </button>
      </center>
    </>
  );
}

export default ClockNPM