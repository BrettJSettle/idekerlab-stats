import React from 'react';

import Dashboard from '../../widgets/dashboard';
import NumberWidget from '../../widgets/number/widget';
import BuildStatusWidget from '../../widgets/build-status/widget';

export default function NDExDashboard() {
  return (
    <Dashboard>
      <BuildStatusWidget name="NDExPublicStatus" title="NDEx Public Status" />
      <NumberWidget name="NDExPublicNetworkCount" title="NDEx Public Network Count" />
      <NumberWidget name="NDExPublicUserCount" title="NDEx Public User Count" />
      <NumberWidget name="NDExPublicGroupCount" title="NDEx Public Group Count" />
    </Dashboard>
  );
}
