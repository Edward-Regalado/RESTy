import React, { createElement } from 'react';
import { render, screen } from '@testing-library/react';
import App from '../app';
import Header from '../components/Header/index.js';
import Footer from '../components/Footer/index.js';
import Results from '../components/Results/index.js';
import Form from '../components/Form/index.js';
import { act } from 'react-dom/test-utils';
import { unmountComponentAtNode } from 'react-dom';

// let container = null;

// beforeEach(() => {
//   container = document.createElement('div');
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

describe('Main App tests', () => {
  it('renders a header element', () => {
    // let container = <Header />
    let header = createElement(Header);
    render(header);
    expect(header).toBeTruthy();
    expect(screen.getByText('RESTy')).toBeTruthy();
    // expect(screen.getByText('RESTy')).toEqual('<h1>RESTy</h1>');
  });

  it('renders a footer element', () => {
    let footer = createElement(Footer);
    render(footer);
    expect(footer).toBeTruthy();
    // expect(screen.getByText('&copy; 2018')).toBeTruthy();
  })

  it('renders a results component', () => {
    let results = createElement(Results);
    render(results);
    expect(results).toBeTruthy();
    // expect(screen.getByText(2018)).toBeTruthy();
  })

  it('renders a form component', () => {
    let form = createElement(Form);
    render(form);
    expect(form).toBeTruthy();
    // expect(screen.getByText(2018)).toBeTruthy();
  })
});

