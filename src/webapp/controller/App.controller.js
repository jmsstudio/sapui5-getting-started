sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'br/com/jmsstudio/sapui5/model/formatter'
  ],
  function(Controller, MessageToast, formatter) {
    'use strict';

    return Controller.extend('br.com.jmsstudio.sapui5.controller.App', {
      formatter: formatter,
      onExecute: function() {
        //read message from i18n config
        var view = this.getView();
        var bundle = view.getModel('i18n').getResourceBundle();
        var processName = view
          .getModel('mainPanel')
          .getProperty('/process/name');
        var message = bundle.getText('popupMessage', [processName]);

        MessageToast.show(message);
      }
    });
  }
);
