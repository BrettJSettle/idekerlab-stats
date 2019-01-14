import React from 'react';

import '../../styles/default.scss';

import Dashboard from '../dashboard';
import ProgressWidget from '../progress/widget';

export default function SnpAnalyzerDashboard() {
  return (
    <Dashboard>
      <ProgressWidget name="SnpAnalyzer" title="SNP Analyzer" />
    </Dashboard>
  );
}
