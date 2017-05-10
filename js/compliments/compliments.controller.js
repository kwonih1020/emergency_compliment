`use strict`;

(function(){
<<<<<<< HEAD
  var app = angular.module("angularcomp");
  app.controller("mainController", mainController);
=======
  var app = angular.module("emergencyComp");
  app.controller("complimentsController", ComplimentsController);
>>>>>>> ae821b0531309580e41774bc427e4096a168cf98

  function mainController(){
    var vm = this;
    var randomIndex = Math.floor(Math.random() * data.length)
<<<<<<< HEAD
+    vm.data = data[randomIndex];
=======
    vm.data = data[randomIndex];
>>>>>>> ae821b0531309580e41774bc427e4096a168cf98
  }

}());
