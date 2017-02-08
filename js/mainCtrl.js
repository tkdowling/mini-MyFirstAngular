angular.module('friendsList')
    .controller('mainCtrl', function($scope){
        $scope.friends = ['Dave', 'Dave', 'Jake', 'Mike', 'Caroline'];
        
        $scope.addFriend = function(newFriend){
            $scope.friends.push(newFriend);
            $scope.newFriendName = '';

        }
        
    });