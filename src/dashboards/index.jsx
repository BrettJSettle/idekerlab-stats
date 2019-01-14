import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/default.scss';

import NDExDashboard from '../widgets/components/NDExDashboard';
import SnpAnalyzerDashboard from '../widgets/components/SnpAnalyzerDashboard';
import CytoscapeDashboard from '../widgets/components/CytoscapeDashboard';
import DashboardRow from '../widgets/components/DashboardRow';

const dashboards = [
  {
    uri: 'ndex',
    name: 'NDEx Public Server',
    component: NDExDashboard,
  },
  {
    uri: 'snp_analyzer',
    name: 'SNP Analyzer',
    component: SnpAnalyzerDashboard,
  },
  {
    uri: 'cytoscape',
    name: 'Cytoscape',
    component: CytoscapeDashboard,
  },
];


ReactDOM.render(
  <div className="dashboard-list">
    {dashboards.map(dashboard => <DashboardRow key={dashboard.name} {...dashboard} />) }
  </div>
  ,
  document.getElementById('content'),
);
