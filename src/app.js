import React, { useState } from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';

function App(){

const [data, setData] = useState(null);
const [requestParams, setRequestParams] = useState({});

 const callApi = (requestParams) => {
    // mock output
    const payload = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    setData(payload);
    setRequestParams(requestParams);
  }

  return (
    <>
      <Header />
      <span className='home-span'>
        <h2>Request Method: {requestParams.method}</h2>
        <h2>URL: {requestParams.url}</h2>
      </span>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  );
}

export default App;
