import React from 'react'
import './results.scss'

function Results(props) {
  return (
    <div className='container'>
      <section className='form-section'>
        <h4>
          {props.data ? props.data.map(x => 
            <h3>{x.name} {x.url}</h3>
            ) : []}
        </h4>
        {/* <h4>
          MAP ARRAY: {props.data ? JSON.stringify(props.data) : ''}
        </h4> */}
        {/* <pre>
          <h4>
            Count: {props.data ? JSON.stringify(props.data.count, undefined, 2) : null}
          </h4>
        </pre>
        <pre>
          <h4>
            Name: {props.data ? JSON.stringify(props.data.results[0].name, undefined, 2) : null}
          </h4>
        </pre>
        <pre>
          <h4>
            Name: {props.data ? JSON.stringify(props.data.results[1].name, undefined, 2) : null}
          </h4>
        </pre>
        <pre>
          <h4>
            Url: {props.data ? JSON.stringify(props.data.results[0].url, undefined, 2) : null}
          </h4>
        </pre>
        <pre>
          <h4>
            Url: {props.data ? JSON.stringify(props.data.results[1].url, undefined, 2) : null}
          </h4>
        </pre> */}
      </section>
    </div>
  )
}

export default Results;