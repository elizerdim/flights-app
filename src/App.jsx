import { useEffect } from "react";

function App() {
  useEffect(() => {
    async function getFlights() {
      const url = "https://api.schiphol.nl/public-flights";
      try {
        const res = await fetch(url, {
          headers: {
            "Content-Type": "application/json",
            "app_id": "3bfc84de",
            "app_key": "73ba042c7b8c776652f970d8fa83ae25",
            "ResourceVersion": "v4"
          },
        });
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log("Failed to fetch data: ", err.message);
      }
    }

    getFlights();
  }, []);

  return <>App</>;
}

export default App;
