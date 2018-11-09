(function () {
  angular.module("vsCodePresentation", [])
    .controller("homeController", function ($scope, $http) {
      $scope.users = [];

      $http.get("http://localhost:3000/api/users").then(success);
      function success(response) {
        $scope.users = response.data;
      }

    });
})();