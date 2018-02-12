sap.ui.define([], function() {
  'use strict';

  return {
    delivery: function(measure, weight) {
      var i18nResource = this.getView()
        .getModel('i18n')
        .getResourceBundle();

      var result = '';

      if (measure == 'G') {
        weight = weight / 1000;
      }

      if (weight < 0.5) {
        result = i18nResource.getText('formatterMailDelivery');
      } else if (weight < 5000) {
        result = i18nResource.getText('formatterParcelDelivery');
      } else {
        result = i18nResource.getText('formatterCarrierDelivery');
      }

      return result;
    }
  };
});
