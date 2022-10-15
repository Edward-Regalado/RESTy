import React from 'react'
import './results.scss'

function Results(props) {

  return (
    <div className='container'>
      <section className='form-section'>
        <pre>
          <h4>
            {props.data ? JSON.stringify(props.data, undefined, 2) : "Please enter an API in the URL box, select a request method and hit Go!"}
          </h4>
        </pre>
      </section>
    </div>
  )
}

export default Results;