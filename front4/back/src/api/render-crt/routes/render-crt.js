'use strict';

/**
 * render-crt router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::render-crt.render-crt');
