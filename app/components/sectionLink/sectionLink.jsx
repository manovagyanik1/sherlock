import React from 'react';
import {Link} from 'react-router';

export default class SectionLink extends React.Component {
    static propTypes = {
        name: React.PropTypes.string,
        url: React.PropTypes.string,
    };

    render() {
        const {name, url} = this.props;
        return (
            <Link className="section-link"
                  activeClassName="section-active-link"
                  to={url}>
                {name}
            </Link>
        );
    }
};
