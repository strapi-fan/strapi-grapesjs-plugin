// @ts-nocheck
import React from 'react';

import { Icon } from '@strapi/design-system/Icon';
import { Flex } from '@strapi/design-system/Flex';
import pluginPkg from '../../package.json';
import pluginId from './pluginId';
import PluginIcon from './components/PluginIcon';

const name = pluginPkg.strapi.displayName || pluginPkg.strapi.name;
console.info('plugin name', name);
export default {
  register(app) {
    app.customFields.register({
      name: 'StrapiGrapeJS',
      type: 'json',
      pluginId: 'grape-editor',
      icon: () => {
        return (
          <Flex justifyContent="center" alignItems="center" width={ 7 } height={ 6 } hasRadius aria-hidden>
            <Icon as={ PluginIcon } />
          </Flex>
        );
      },
      intlLabel: {
        id: 'grapeEditor.label',
        defaultMessage: 'Strapi GrapeJS'
      },
      intlDescription: {
        id:  'grapeEditor.description',
        defaultMessage: 'The rich text editor for every use case'
      },
      components: {
        Input: async () => import(/* webpackChunkName: "grape-input-component" */ './components/GrapeInput' ),
      },
    });
    console.info('registering plugin', pluginId);
  },

  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(`./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: data,
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
