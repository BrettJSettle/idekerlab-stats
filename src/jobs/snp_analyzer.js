import request from 'request-promise-native';

const options = {
  uri: 'http://nbgwas.ucsd.edu/rest/v1/snp_analyzer/status',
  headers: {
    'User-Agent': 'Metricio - SNP Analyzer',
  },
  json: true,
};

export const interval = '* * * * *'; // See https://crontab.guru/ for help
export const perform = async () => {
  const response = await request(options);
  let value = response.percent_disk_full;
  if (response.status !== 'ok') {
    value = -1;
  }
  return [
    {
      target: 'SnpAnalyzer',
      data: {
        progress: value,
        fill: response.status === 'ok' ? 'green' : 'red',
      },
    },
  ];
};
