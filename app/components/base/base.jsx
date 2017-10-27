import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import Navigation from '../navigation/navigation';

export default class Base extends React.Component {
  static propTypes = {
    children: React.PropTypes.element
  };

  render() {
    return (
      <section className="base">
          <Header />
          <div className="expand">
          {this.props.children}
          </div>
          <Footer />
      </section>
    );
  }
}
