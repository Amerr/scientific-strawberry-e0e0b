import React from 'react';
import _ from 'lodash';

import {getData, Link, withPrefix} from '../utils';

export default class BlogPostCategory extends React.Component {
    render() {
        let category = _.get(this.props, 'category', null);
        let category_data = getData(this.props.pageContext.site.data, category);
        return (
            category_data.link ? (
            <Link to={withPrefix(category_data.link)}>{category_data.title}</Link>
            ) : 
            <span>{category_data.title}</span>
            
        );
    }
}
