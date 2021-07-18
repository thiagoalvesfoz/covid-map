import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import CovidMap from "./CovidMap";
import Legend from "./Legend";
import LoadCountriesTask from "../tasks/LoadCountriesTask";
import legendItems from "../entities/LegendItems";
import axios from 'axios';

const Covid19 = () => {
  const [countries, setCountries] = useState([]);
  const legendItemsInReverse = [...legendItems].reverse();

  const load = () => {
    const loadCountriesTask = new LoadCountriesTask();
    loadCountriesTask.load(setCountries);
  };

  const fetch = () => {
    axios.get('http://localhost:8080/servicos').then(response => console.log(response.data));
  } 

  useEffect(load, []);
  useEffect(fetch, []);

  return (
    <div>
      {countries.length === 0 ? (
        <Loading />
      ) : (
        <div>
          <CovidMap countries={countries} />
          <Legend legendItems={legendItemsInReverse} />
        </div>
      )}
    </div>
  );
};

export default Covid19;
