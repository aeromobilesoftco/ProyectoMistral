angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('opciones.inicioMistralEcono', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicioMistralEcono.html',
        controller: 'inicioMistralEconoCtrl'
      }
    }
  })

  .state('opciones.registrarGastos', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registrarGastos.html',
        controller: 'registrarGastosCtrl'
      }
    }
  })

  .state('opciones.registrarObligaciones', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registrarObligaciones.html',
        controller: 'registrarObligacionesCtrl'
      }
    }
  })

  .state('opciones', {
    url: '/side-menu21',
    templateUrl: 'templates/opciones.html',
    controller: 'opcionesCtrl'
  })

  .state('mistralEcono', {
    url: '/page4',
    templateUrl: 'templates/mistralEcono.html',
    controller: 'mistralEconoCtrl'
  })

  .state('opciones.registrarIngresos', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registrarIngresos.html',
        controller: 'registrarIngresosCtrl'
      }
    }
  })

  .state('opciones.registrarDeudas', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/registrarDeudas.html',
        controller: 'registrarDeudasCtrl'
      }
    }
  })

  .state('opciones.simuladorDeGanancias', {
    url: '/page8',
    views: {
      'side-menu21': {
        templateUrl: 'templates/simuladorDeGanancias.html',
        controller: 'simuladorDeGananciasCtrl'
      }
    }
  })

  .state('contactenos', {
    url: '/page9',
    templateUrl: 'templates/contactenos.html',
    controller: 'contactenosCtrl'
  })

  .state('opciones.soporteYAyuda', {
    url: '/page10',
    views: {
      'side-menu21': {
        templateUrl: 'templates/soporteYAyuda.html',
        controller: 'soporteYAyudaCtrl'
      }
    }
  })

  .state('opciones.informes', {
    url: '/page11',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informes.html',
        controller: 'informesCtrl'
      }
    }
  })

  .state('opciones.reporteGeneral', {
    url: '/page12',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reporteGeneral.html',
        controller: 'reporteGeneralCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page4')

  

});