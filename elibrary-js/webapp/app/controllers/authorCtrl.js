(function () {
    'use strict';

    angular.module('App')
        .controller('AuthorCtrl', AuthorCtrl);

    function AuthorCtrl(authorService) {
        var vm = this;

        vm.authorBooks = [];

        var authorName = "Leo Alex";
        authorService.getAuthorBooks(authorName)
            .then(authorFunction);

        function authorFunction(authorBooks) {
            if (angular.isArray(authorBooks)){
                vm.authorBooks = authorBooks;
            } else {
                vm.authorBooks = [authorBooks];
            }
        }
    }

}());