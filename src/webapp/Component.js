sap.ui.define(['sap/ui/core/UIComponent'], function(UIComponent) {
  'use strict';

  return UIComponent.extend('br.com.jmsstudio.sapui5.Component', {
    metadata: {
      manifest: 'json'
    },
    init: function() {
      //calls parent init function
      UIComponent.prototype.init.apply(this, arguments);
    }
  });
});
