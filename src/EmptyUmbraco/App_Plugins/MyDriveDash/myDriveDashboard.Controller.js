angular.module("umbraco").controller('myDriveDashboardController',
    function myDriveDashboardController($scope, $http) {

        $scope.uploadFile = function () {
            var fd = new FormData();
            fd.append('file', $scope.myFile);

            $http.post('/umbraco/api/AlarmsImportApi/ImportAlarms?culture=en-US', fd, {
                withCredentials: true,
                headers: {
                    'Content-Type': undefined
                },
                transformRequest: angular.identity
            }).then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        };
    });