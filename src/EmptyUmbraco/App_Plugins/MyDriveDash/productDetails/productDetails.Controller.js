angular.
  module("umbraco").
  controller(
    "productDetailsController",
    function productDetailsController($scope, myDriveDashboardService) {
      $scope.productsDetails = [];
      $scope.errorMessage = '';

      getProductsDetails();

      function getProductsDetails() {
        myDriveDashboardService.getProductsDetails()
          .then(function (response) {
            response.data.forEach(x => {
              const infoProps = ['AlarmsInfo', 'ErrorCodesInfo', 'HotlinesInfo'];
              infoProps.forEach(infoProp => {
                let className = '';
                const error = x.Cultures.some((val) => !val[infoProp].Count);
                if (error) {
                  className = 'text-error';
                }
                else {
                  const warning = !x.Cultures.every((val, i, arr) => val[infoProp].Count === arr[0][infoProp].Count);
                  if (warning)
                    className = 'text-warning';
                }
                x.Cultures.forEach(cultureInfo => {
                  cultureInfo[infoProp].Class = className;
                })
              })
            });
            
            $scope.productsDetails = response.data;
          }, function (error, status) {
            debug(error, status);
          })
      }
    });