require(['config'], () => {
  require(['infrastructure'], () => {
    require(['angular', 'app'], (angular, app) => {
      angular.bootstrap(document, [app.name]);
    });
  });
});
