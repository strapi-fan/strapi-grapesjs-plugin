import webpagePlugin from 'grapesjs-preset-webpage';

export default {
    container: '#gjs',
    height: '500px',
    width: '100%',
    plugins: [webpagePlugin],
    storageManager: false,
    
    deviceManager: {
      devices:
      [
        {
          id: 'desktop',
          name: 'Desktop',
          width: '',
        },
        {
          id: 'tablet',
          name: 'Tablet',
          width: '768px',
          widthMedia: '992px',
        },
        {
          id: 'mobilePortrait',
          name: 'Mobile portrait',
          width: '320px',
          widthMedia: '575px',
        },
      ]
    },
    pluginsOpts: {
      'grapesjs-preset-webpage': {
        blocksBasicOpts: {
          blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video'],
          flexGrid: 1,
        },
        blocks: ['link-block', 'quote', 'text-basic'],
      },
    }
};