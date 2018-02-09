sap.ui.define(['sap/ui/core/mvc/Controller', 'sap/m/MessageToast'], function(Controller, MessageToast) {
  'use strict';

  return Controller.extend('br.com.jmsstudio.sapui5.controller.App', {
    onExecute: function() {
      MessageToast.show('Processed executed.');
    },
  });
});
