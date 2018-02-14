sap.ui.define(
  [
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator',
    'br/com/jmsstudio/sapui5/model/formatter',
  ],
  function(Controller, MessageToast, Filter, FilterOperator, formatter) {
    'use strict';

    return Controller.extend('br.com.jmsstudio.sapui5.controller.App', {
      formatter: formatter,
      onExecute: function() {
        //read message from i18n config
        var view = this.getView();
        var bundle = view.getModel('i18n').getResourceBundle();
        var processName = view.getModel('mainPanel').getProperty('/process/name');
        var message = bundle.getText('popupMessage', [processName]);

        MessageToast.show(message);
      },

      onFilterProducts: function(event) {
        var filter = [];
        var query = event.getParameter('query');
        var listObj = this.getView().byId('productsList');
        var binding = listObj.getBinding('items');

        if (query) {
          filter.push(new Filter('ProductID', FilterOperator.Contains, query));
        }

        binding.filter(filter);
      },

      onItemSelected: function(event) {
        var selectedItem = event.getSource();
        var context = selectedItem.getBindingContext();
        var path = context.getPath();
        var panel = this.byId('pnlProductDetail');

        panel.bindElement({ path: path });
        panel.setVisible(true);
      },
    });
  }
);
