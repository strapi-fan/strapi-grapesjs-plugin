'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register({
    name: 'StrapiGrapeJS',
    plugin: 'grape-editor',
    type: 'richtext'
  })
};