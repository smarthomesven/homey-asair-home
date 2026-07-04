'use strict';

const Homey = require('homey');

module.exports = class AmericanStandardApp extends Homey.App {

  /**
   * onInit is called when the app is initialized.
   */
  async onInit() {
    this.log('American Standard Home app has been initialized');
  }

};
