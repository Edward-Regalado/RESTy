import React, { useState } from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

import './form.scss';

let history = [];

function Form(props) {

  const [method, setMethod ] = useState('');
  const [url, setUrl ] = useState('');
  const [body, setBody ] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // sending this object as an argument to our callApi inside our app.js
    const formData = {
      method: method, // set 'GET" method
      url: url, // set URL path
      body: body, // set body
      // headers: {
      //   'Content-Type': 'application/json'
      // }
    }
    if(url != null){
      history.push(url);
      console.log('history url pushed: ', history);
      let item = JSON.stringify(history);
      localStorage.setItem('history', item);
    }

    props.handleRequestParams(formData);
  }

  // sets URL once the 'Go' button is clicked
  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
    console.log('URL updated: ', url);
  };

  // sets Method once the method button is clicked
  const onMethodChange = (event) => {
    event.preventDefault();
    setMethod(event.target.value);
    console.log('method updated: ', method);
  };

  // sets the body
  const onBodyChange = (event) => {
    event.preventDefault();
    setBody(event.target.value);
    console.log('body updated: ', body);
  }

  const onClear = (event) => {
    console.log('clear history');
  };

  const getHistory = (event) => {
    
    const saved = localStorage.getItem('history');
    const initialValue = JSON.parse(saved);
    // console.log('initialValue: ', initialValue);
    
    let select = document.getElementById('getHistory');

    for(let i = 0; i < initialValue.length; i++) {
         let opt = initialValue[i];
         let element = document.createElement('option');
         element.textContent = opt;
         element.value = opt;
         select.appendChild(element);
      }
    }
  

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span id='URL'>URL: </span>
          <input name='url' type='text' onChange={(event) => onUrlChange(event)}/>
          <button type="submit">GO!</button>
        </label>
        <span className="methods">
          <button id="get" onClick={(event) => onMethodChange(event)} value='GET'>GET</button>
          <button id="post" onClick={(event) => onMethodChange(event)} value='POST'>POST</button>
          <button id="put" onClick={(event) => onMethodChange(event)} value='PUT'>PUT</button>
          <button id="delete" onClick={(event) => onMethodChange(event)} value='DELETE'>DELETE</button>
          <button id="clear" onClick={(event) => onClear(event)} value='DELETE'>Clear</button>
        </span>
      <div className='text-container'>
        {method === 'POST' ? 
          <textarea name='textarea' onChange={(event) => onBodyChange(event)} rows={5} cols={70} minLength={1} maxLength={600} placeholder='json body here...' /> : null
        }
      </div>

      <div className='history'>
        <select id="getHistory" onClick={(event) => getHistory(event)}>
          <option>history</option>
        </select>
      </div>
      </form>
    </>
  )
}

export default Form;
