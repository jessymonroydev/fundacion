import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function GoatCounter() {
  const [views, setViews] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchStats = async () => {
      const url = "https://fundacionvolveranacer.goatcounter.com/api/v0/stats/total";
      const apiKey = "1th9qgte6s4821nnuwz78giigyaiq4ugq2b0ln9mor44sggqc4";

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setViews(data); // Almacena los datos en el estado
        console.log(`GoatCounter: Stats for ${location.pathname}`, data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchStats();
  }, [location]);

  return (
    <div>
      <h2>Visitas: {views ? views.total : "Cargando..."}</h2>
    </div>
  );
}
