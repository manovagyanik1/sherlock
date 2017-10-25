import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className='amazon-crp-bar'>
            <div className='container'>
                <div className='row'>
                    <div className='col s12'>
                        <ul className='amazon-crp-inline-list left'>
                          <li><a href='/' id='amazon-crp-logo'>Sherlock</a></li>
                            <li className='amazon-crp-dropdown' data-dropdown='#mode-dropdown'>
                            <span id='modeHolder'>Mode:
                                {/* <jsp:invoke fragment="pageMode" /> */}
                            </span>
                                <div className="amazon-crp-dropdown-content" id="mode-dropdown">
                                    <ul>
                                        <li><a href="/asker">Create Tasks</a></li>
                                        <li><a href="/dashboard/opsmanager">Manage Tasks</a></li>
                                        <li><a href="/tasker">My Tasks</a></li>
                                    </ul>
                                </div></li>
                            {/* <jsp:invoke fragment="pageSpecificHeaderLeftElements" /> */}
                        </ul>
                        <ul className='amazon-crp-inline-list right'>
                            {/* <jsp:invoke fragment="pageSpecificHeaderRightElements" /> */}
                        </ul>
                        <div className='clearfix'></div>
                    </div>
                </div>
            </div>
        </div>
      </header>
    );
  }
}
