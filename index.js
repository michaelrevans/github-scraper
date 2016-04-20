var app = angular.module('githubApp', []);

app.controller('ListController', ['$scope', function($scope) {

          $scope.len = 0;

          $scope.repos = []

          $scope.submit = function(usr) {
            var requrl = 'https://api.github.com/users/' + usr + '/repos';
            $.ajax({
              type: 'GET',
              url: requrl,
              success: function(repositories) {
                $scope.repos = repositories;
                $scope.len = repositories.length
                $scope.usr = usr;
                if ($scope.len == 0) {
                  $('#invalid').hide(200);
                  $('#results').hide(200);
                  $('#no-results').show(200);
                } else {
                  $('#no-results').hide(200);
                  $('#invalid').hide(200);
                  $('#results').show(200);
                }
              },
              error: function() {
                console.log("Invalid username");
                $('#no-results').hide(200);
                $('#results').hide(200);
                $('#invalid').show(200);
              },
              async: false
            })
          };

}]);
