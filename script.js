document.addEventListener("DOMContentLoaded", () => {
  const updateDateTime = () => {
    const currentTimeWAT = new Date().toLocaleTimeString("en-GB", {
      timeZone: "Africa/Lagos",
    });
    const currentDay = new Date().toLocaleString("en-us", { weekday: "long" });

    document.getElementById("currentTimeUTC").textContent = currentTimeWAT;
    document.getElementById("currentDay").textContent = currentDay;
  };

  updateDateTime();
  setInterval(updateDateTime, 1000); // Update every second
});
