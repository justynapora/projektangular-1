export default class HomeController {
  constructor($scope, $firebaseArray) {
  var  ref = new Firebase("https://angularexample1.firebaseio.com/");
$scope.todos = $firebaseArray (ref);
  }
}