(function(){
    angular.module('app.layout').controller('HeaderController', 
    		['$scope', function($scope){


            
    $scope.toggleSidebar = function(){
        $('.app').toggleClass('is-collapsed');
    } 

    $scope.toggleSearch = function(){
        $('.search-box, .search-input').toggleClass('active');
        $('.search-input input').focus();
    }

}]);
}).call(this);