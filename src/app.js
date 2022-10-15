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

 const callApi = (incomingObjectOnForm) => {
    setRequestParams(incomingObjectOnForm);
  }

useEffect(() => {
  async function fetchData() {
    console.log('USE EFFECT WAS CALLED');
    console.log('REQUEST PARAMETERS', requestParams);
    if(requestParams.method === 'GET') {
      await axios.get(requestParams.url).then((res) => {
        setData(res);
        console.log('RES: ', res);
        // console.log('DATA: ', JSON.stringify(data));
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
      });
    }
    
    if(requestParams.method === 'DELETE') {
      await axios.delete(requestParams.url).then((res) => {
        console.log('DELETE method was passed');
        console.log('METHOD', requestParams.method);
      });
    }

  }
  fetchData();
  }, [requestParams]);

  // const saved = localStorage.getItem('history');
  // const initialValue = JSON.parse(saved);
  // console.log('initialValue: ', initialValue);
  

  return (
    <>
      <Header />
      {/* {initialValue ? initialValue.map((x, key) => {
        return <h4 key={key}>{x}</h4>}
        ) : undefined} */}
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
