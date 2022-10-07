import React from 'react'
import './results.scss'

function Results(props) {
  return (
    <>
      <section>
        <pre>
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
        </pre>
      </section>
    </>
  )
}

export default Results;