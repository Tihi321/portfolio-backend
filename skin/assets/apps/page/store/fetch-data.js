/* global portfolioDashboard */
import React, {useState, useEffect} from 'react';
import {getDashboardOptions} from '../helpers/fetch-api';

const FetchData = React.createContext([{}, () => {}]);

const FetchDataProvider = (props) => {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [data, setdata] = useState({});

  useEffect(() => {

    // fetch dashboard data from dashoard endpoint.
    const fetchData = () => {

      const {
        root,
        getPageOptionsApi,
      } = portfolioDashboard;

      fetch(root + getPageOptionsApi)
        .then((response) => {
          return response.json();
        })
        .then((myJson) => {
          const apiData = getDashboardOptions(myJson);

          setdata(apiData);
          setDataLoaded(true);
        });
    };

    fetchData();
  }, []);

  return (
    <FetchData.Provider value={{
      dataLoaded,
      data,
    }}>
      {props.children}
    </FetchData.Provider>
  );
};

export {FetchData, FetchDataProvider};
