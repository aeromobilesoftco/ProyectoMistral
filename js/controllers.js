angular.module('app.controllers', ['ngCordova','app.services'])
  
.controller('inicioMistralEconoCtrl', ['$scope', '$stateParams',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('registrarGastosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('registrarObligacionesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('opcionesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

$scope.frmsopor={};

$scope.clkblanso=function(frmsopor){
	console.log(frmsopor.sel.$modelValue);
	console.log(frmsopor.comen.$modelValue);

	var selen=frmsopor.sel.$modelValue;
	var comenta=frmsopor.comen.$modelValue;

	selen="";
	comenta="";
}

}])
   
.controller('mistralEconoCtrl', ['$scope', '$stateParams', '$cordovaFacebook', '$cordovaDialogs', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaFacebook,$cordovaDialogs) {

$scope.clkinicio=function()
{

		document.addEventListener("deviceready", function () 
		{
		  $cordovaFacebook.login(["public_profile", "email", "user_friends"])
		    .then(function(success) {

				  $cordovaDialogs.alert('Dato retornado: ', 'Atencion!!', 'Aceptar')
				    .then(function() {
				      // callback success
				    });
		    }, function (error) {
		      // error
		    });
		}, false);	
}

}])
   
.controller('registrarIngresosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('registrarDeudasCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('simuladorDeGananciasCtrl', ['$scope', '$stateParams','$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaDialogs) {

$scope.simlimpia={};

$scope.clksimlim=function(){

	$scope.simgan = angular.copy($scope.simlimpia);

}
// Se llama a la funcion para que se ejecute como una recarga de pagina
$scope.clksimlim();

}])
   
.controller('contactenosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('soporteYAyudaCtrl', ['$scope', '$stateParams', '$cordovaEmailComposer', '$location', '$cordovaDevice', '$cordovaDialogs',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams,$cordovaEmailComposer,$location,$cordovaDevice,$cordovaDialogs) {

$scope.frmsopor={};

$scope.clkenviar=function(frmsopor)
{

	console.log(frmsopor.sel.$modelValue);
	console.log(frmsopor.comen.$modelValue);

	var selen=frmsopor.sel.$modelValue;
	var comenta=frmsopor.comen.$modelValue;

	if (selen==null || comenta==null) 
	{
		document.addEventListener("deviceready", function () 
		{
		  $cordovaDialogs.alert('Debe seleccionar un motivo y escribir un texto', 'Atencion!!', 'Aceptar')
		    .then(function() {
		      // callback success
		    });
		}, false);
	}
	else
	{
	document.addEventListener("deviceready", function () {

	// Muestro las caracteristicas del equipo que me reporta la falla
	// Dispositivo
	var model = $cordovaDevice.getModel();
	var plata = $cordovaDevice.getPlatform();
	var sisop = $cordovaDevice.getVersion();
    	
    // Declaro las variables con Scope y los recupero con getitem
    $scope.dis=model;
    $scope.mar=plata;
    $scope.so=sisop;

		 $cordovaEmailComposer.isAvailable().then(function() {
		   // is available
		 }, function () {
		   // not available
		 });

		  var email = {
		    to: 'gerencia@aeromobilesoft.com.co',
		    subject: frmsopor.sel.$modelValue,
		    body: '<h2>Hola!!!</h2>'
		    + '<h3>'+ 'Lamentamos que estes teniendo estos inconvenientes. Nos reportas que tienes inconvenientes con: ' +'</h3>'
		    + '<h3>'+ frmsopor.comen.$modelValue +'</h3>'
		    + ' <h1>Informacion Dispositivo</h1>' 
		    + '<h3>'+' Modelo:' +$scope.dis  +'</h3>'
		    + '<h3>'+' Sistema operativo: '+ $scope.mar +'</h3>'
		    + '<h3>'+' Version SO: '+$scope.so +'</h3>'
		    + '<h5><font color="red"> Atencion: AeroMobileSoft En cumplimiento de la ley 1582 de 2012. La cual establece la privacidad,proteccion y buen manejo de los datos. queda absolutamente comprometida en que los datos aqui suministrador por voluntad propia del usuario. solo seran usados para brindar mejoramiento y mantenimiento de dicha obligacion. El usuario acepta VOLUNTARIAMENTE entregar esta informacion.' + '</h5>',
		    isHtml: true
		  };

		 $cordovaEmailComposer.open(email).then(null, function () {
		   // user cancelled email
		 });
	}, false);		
	}
}

}])
   
.controller('informesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('reporteGeneralCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
 .controller('comunidadCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])