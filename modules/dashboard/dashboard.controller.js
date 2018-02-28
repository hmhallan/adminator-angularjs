'use strict';
angular.module('app.demo').controller('DashboardController', ['$scope', 'COLORS', function($scope, COLORS) {

    console.info("se");
        
    $scope.lineChart = {
        type: 'line',

        data: [
            [60, 50, 70, 60, 50, 70, 60],
            [70, 75, 85, 70, 75, 85, 70]
        ],

        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          
        datasets: [{
        label                : 'Series A',
        backgroundColor      : 'rgba(237, 231, 246, 0.5)',
        borderColor          : COLORS['deep-purple-500'],
        pointBackgroundColor : COLORS['deep-purple-700'],
        borderWidth          : 2,
        data                 : [60, 50, 70, 60, 50, 70, 60],
        }, {
        label                : 'Series B',
        backgroundColor      : 'rgba(232, 245, 233, 0.5)',
        borderColor          : COLORS['blue-500'],
        pointBackgroundColor : COLORS['blue-700'],
        borderWidth          : 2,
        data                 : [70, 75, 85, 70, 75, 85, 70],
        }],

  
        options: {
          legend: {
            display: false,
          },
        },
  
      };

	
}]);