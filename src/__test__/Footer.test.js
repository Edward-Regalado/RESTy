const { createElement } = require('react');

const { cleanup, fireEvent, render, screen } = require('@testing-library/react');

// const Footer = require('../components/Footer');
const Header = require('../components/Header/index.js');

afterEach(cleanup);

describe('Header', () => {
  it('can render a header', () => {
    // const testComponent = render(<Header siteName='RESTy' headerText='RESTy'/>);
    render(<Header />);
    // render(
      createElement(Header, {siteName: "RESTy", headerText: 'RESTy' })
    // );
    const linkElement = screen.getByText(/RESTy/);
    expect(linkElement).toBeInTheDocument();
  });
})
