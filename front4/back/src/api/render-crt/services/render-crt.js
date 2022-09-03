'use strict';

/**
 * render-crt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::render-crt.render-crt');
