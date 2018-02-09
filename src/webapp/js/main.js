/**
 * Application bootstrap
 */
sap.ui.getCore().attachInit(function() {
  sap.ui.xmlview({ viewName: 'br.com.jmsstudio.sapui5.view.App' }).placeAt('content');
});
