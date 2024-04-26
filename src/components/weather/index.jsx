import { useState } from "react";
import Search from "../search";

export default function Weather() {
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeather() {
    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e"
      );
      const data = await response.json();
      console.log(data, "data");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSearch() {}
  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
    </div>
  );
}
