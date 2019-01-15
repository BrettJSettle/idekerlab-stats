import request from 'request-promise-native';

const options = {
  uri: 'http://public.ndexbio.org/rest/admin/status',
  headers: {
    'User-Agent': 'Metricio - NDEx',
  },
  json: true,
};

export const interval = '* * * * *'; // See https://crontab.guru/ for help
export const perform = async () => {
  const response = await request(options);

  const status = response.message === 'Online' ? 'success' : 'fail';
  return [
    {
      target: 'NDExPublicNetworkCount',
      data: {
        value: response.networkCount,
      },
    },
    {
      target: 'NDExPublicUserCount',
      data: {
        value: response.userCount,
      },
    },
    {
      target: 'NDExPublicGroupCount',
      data: {
        value: response.groupCount,
      },
    },
    {
      target: 'NDExPublicStatus',
      data: {
        outcome: status,
      },
    },
  ];
};
