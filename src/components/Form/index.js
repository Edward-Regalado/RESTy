import React, { useState } from 'react';

import './form.scss';

function Form(props) {

  const [method, setMethod ] = useState('');
  const [url, setUrl ] = useState('');
  // const [method, setMe ] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      method: method, // set 'GET" method
      url: url, // set URL path
    }
    props.getURLandMethod(formData);
  }

  // set URL once the 'Go' button is clicked
  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onMethodChange = (event) => {
    event.preventDefault();
    setMethod(event.target.value);
  };

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
        </span>
      </form>
    </>

  )

}

export default Form;