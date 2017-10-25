import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
            <div className='amazon-crp-bar'>
              <div className='container'>
                  <div className='row'>
                      <div className='col s12'>
                          <ul className='amazon-crp-inline-list'>
                              <li><a href='/' id='amazon-crp-logo'>Sherlock</a></li>
                              <li>© 2016 Amazon.com, Inc or its affiliates</li>
                              <li><a href="https://tt.amazon.com/quicklink/Q000487813" target="_blank">
                                  Open A Trouble Ticket</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
    );
  }
}
