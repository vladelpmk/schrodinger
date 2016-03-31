require.config({
  paths: {
    // vendor libaries - for core
    'jquery': 'vendor/jquery/dist/jquery',
    'angular': 'vendor/angular/angular',
    'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',

    //components go here

  },
  // define dependencies among libraries
  shim: {
    'angular': {
      deps: ['jquery'],
      exports: 'angular'
    },
    'jquery': {
      exports: '$'
    },
    'bootstrap': ['jquery']
  }
});
