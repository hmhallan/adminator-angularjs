'use strict';
angular.module('app.demo').controller('DemoCandendarController', ['$scope', function($scope) {

        var date = new Date();
        var d    = date.getDate();
        var m    = date.getMonth();
        var y    = date.getFullYear();

        $scope.options = {
            height   : 800,
            editable : true,
            header: {
              left   : 'month,agendaWeek,agendaDay',
              center : 'title',
              right  : 'today prev,next',
            },
            dayClick: function( date, jsEvent, view ){
                $scope.onClickDay(date, jsEvent, view);
            },
            eventClick: function( event, jsEvent, view ){
                $scope.onClickEvent(event, jsEvent, view);
            }
        };

        $scope.onClickDay = function( date, jsEvent, view ){
            console.info(date);
        };

        $scope.onClickEvent = function( event, jsEvent, view ){
            console.info(event);
        };

        $scope.events = [{
                title  : 'All Day Event',
                start  : new Date(y, m, 1),
                desc   : 'Meetings',
                bullet : 'success',
                }, {
                title  : 'Long Event',
                start  : new Date(y, m, d - 5),
                end    : new Date(y, m, d - 2),
                desc   : 'Hangouts',
                bullet : 'success',
                }, {
                title  : 'Repeating Event',
                start  : new Date(y, m, d - 3, 16, 0),
                allDay : false,
                desc   : 'Product Checkup',
                bullet : 'warning',
                }, {
                title  : 'Repeating Event',
                start  : new Date(y, m, d + 4, 16, 0),
                allDay : false,
                desc   : 'Conference',
                bullet : 'danger',
                }, {
                title  : 'Birthday Party',
                start  : new Date(y, m, d + 1, 19, 0),
                end    : new Date(y, m, d + 1, 22, 30),
                allDay : false,
                desc   : 'Gathering',
                }, {
                title  : 'Click for Google',
                start  : new Date(y, m, 28),
                end    : new Date(y, m, 29),
                desc   : 'Google',
                bullet : 'success',
        }];


	
}]);