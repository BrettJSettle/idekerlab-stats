import React from 'react';
import PropTypes from 'prop-types';

export default function DashboardRow(props) {
  const Component = props.component;
  return (
    <div className="dashboard-row">
      <h5 className="dashboard-title"><a href={props.uri}>{props.name}</a></h5>
      <Component />
    </div>
  );
}

DashboardRow.propTypes = {
  name: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  component: PropTypes.func.isRequired,
};

