import React, { useEffect, useState } from 'react';

import './app.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';
import axios from 'axios';

function App(){

const [data, setData] = useState(null); // gets returned in the from
const [requestParams, setRequestParams] = useState({});

// this function receives the form data from the form component and sets our requestParams object
const callApi = (incomingObjectOnForm) => {
  setRequestParams(incomingObjectOnForm);
  }


// use effect hook runs every time its dependency list changes
useEffect(() => {
  async function fetchData() {
    console.log('REQUEST PARAMETERS', requestParams);

    if(requestParams.method === 'GET') {
      await axios.get(requestParams.url).then((res) => {
        setData(res);
        console.log('RES: ', res);
      }).catch((err) => console.log('ERROR: ', err)); 
    }

    if(requestParams.method === 'POST') {
      await axios.post(requestParams.url, requestParams.body).then((res) => {
        setData(res);
        console.log('POST RES', res);
        console.log('METHOD: ', requestParams.method);
      }).catch((err) => console.log('ERROR: ', err));
    }
    
    if(requestParams.method === 'PUT') {
      await axios.put(requestParams.url).then((res) => {
        console.log('PUT method was passed');
        console.log('METHOD: ', requestParams.method);
      }).catch((err) => console.log('ERROR: ', err));
    }
    
    if(requestParams.method === 'DELETE') {
      await axios.delete(requestParams.url).then((res) => {
        console.log('DELETE method was passed');
        console.log('METHOD', requestParams.method);
      }).catch((err) => console.log('ERROR: ', err));
    }

  }
  // fetchData gets called when useEffect gets called
  fetchData();
  }, [requestParams]);  

  return (
    <>
      <Header />
      <span className='home-span'>
        <div className='url'>
          <h4>Method: {requestParams.method}</h4>
          <h4>URL: {requestParams.url}</h4>
        </div>
      </span>
      <Form handleRequestParams={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
