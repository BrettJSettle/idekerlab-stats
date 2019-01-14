import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseWidget from '../base';

import './styles.scss';

export default class JsonWidget extends BaseWidget {
  constructor(props) {
    super(props);
    this.state = { value: {} };
  }

  render() {
    const classList = classNames(...this.classList, 'widget__json');

    const data = Object.keys(this.state.value)
      .map(key => <p key={key}>{key}: {JSON.stringify(this.state.value[key])}</p>);

    console.log(data[0]);
    return (
      <div className={classList}>
        <h1 className="widget__title">{this.props.title}</h1>
        <div className="widget__value">
          {data}
        </div>
        {this.state.updatedAt && <p className="widget__updatedAt">{this.state.updatedAt}</p>}
      </div>
    );
  }
}

JsonWidget.propTypes = {
  value: PropTypes.string,
};
