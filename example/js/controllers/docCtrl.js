app.controller('DocCtrl', function($scope) {

  $scope.pdfName = 'Jornal';
  $scope.pdfUrl = 'pdf/jornal.pdf';
  $scope.scroll = 0;

  $scope.getNavStyle = function(scroll) {
    if(scroll > 100) return 'pdf-controls fixed';
    else return 'pdf-controls';
  }

});
