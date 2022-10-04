import React from 'react';

import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Results from './components/Results';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: null,
      requestParams: {},
    };
  }

  callApi = (requestParams) => {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1'},
        {name: 'fake thing 2', url: 'http://fakethings.com/2'},
      ],
    };
    this.setState({data, requestParams});
  }

  render() {
    return (
      <>
        <Header />
        <span className='home-span'>
          <h2>Request Method: {this.state.requestParams.method}</h2>
          <h2>URL: {this.state.requestParams.url}</h2>
        </span>
        <Form handleApiCall={this.callApi} />
        <Results data={this.state.data} />
        <Footer />
      </>
    );
  }
}

export default App;
