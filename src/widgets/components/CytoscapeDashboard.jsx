import React from 'react';

import '../../styles/default.scss';

import Dashboard from '../dashboard';
import NumberWidget from '../number/widget';


export default function CytoscapeDashboard() {
  return (
    <Dashboard>
      <NumberWidget title="Windows Downloads" name="Cytoscape Windows Downloads" />
      <NumberWidget title="Mac Downloads" name="Cytoscape Mac Downloads" />
      <NumberWidget title="Linux Downloads" name="Cytoscape Linux Downloads" />
      <NumberWidget title="Windows32 Downloads" name="Cytoscape Windows32 Downloads" />
    </Dashboard>
  );
}
