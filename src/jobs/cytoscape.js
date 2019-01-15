import request from 'request-promise-native';

const options = {
  uri: 'https://api.github.com/repos/cytoscape/cytoscape/releases',
  headers: {
    'User-Agent': 'Metricio - SNP Analyzer',
  },
  json: true,
};

const release = 'Cytoscape 3.7.1 final release';
const prefix = 'Cytoscape_3_7_1';

export const interval = '* * * * *'; // See https://crontab.guru/ for help
export const perform = async () => {
  const response = await request(options);
  const assets = {};
  response.forEach(rel => {
    assets[rel.name] = {};
    rel.assets.forEach(asset => {
      const { name } = asset;
      if (!name.toLowerCase().startsWith('cytoscape')) {
        return;
      }
      assets[rel.name][name] = asset.download_count;
    });
  });

  return [
    {
      target: 'Cytoscape Windows Downloads',
      data: {
        value: assets[release][prefix.concat('_windows_64bit.exe')],
      },
    },
    {
      target: 'Cytoscape Mac Downloads',
      data: {
        value: assets[release][prefix.concat('_macos.dmg')],
      },
    },
    {
      target: 'Cytoscape Linux Downloads',
      data: {
        value: assets[release][prefix.concat('_unix.sh')],
      },
    },
    {
      target: 'Cytoscape Windows32 Downloads',
      data: {
        value: assets[release][prefix.concat('_windows_32bit.exe')],
      },
    },
  ];
};
