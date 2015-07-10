angular.module('app').controller("MainController", function(){
    var vm = this;
    vm.name = 'AngularJS';
    vm.searchInput = '';
        vm.cars = [
        {
            name: 'Jaguar',
            year: 2011,
            favorite: true
        },
        {
            name: 'BMW',
            year: 2012,
            favorite: false
        },
        {
            name: 'Honda',
            year: 2014,
            favorite: true
        },
        {
            name: 'Lincoln',
            year: 2013,
            favorite: true
        },
        {
            name: 'Audi',
            year: 2015,
            favorite: false
        }
    ];

vm.orders = [
    {
        id: 1,
        name: 'Year Ascending',
        key: 'year',
        reverse: false
    },
    {
        id: 2,
        name: 'Year Descending',
        key: 'year',
        reverse: true
    },
    {
        id: 3,
        name: 'Name Ascending',
        key: 'name',
        reverse: false
    },
    {
        id: 4,
        name: 'Name Descending',
        key: 'name',
        reverse: true
    }
];
vm.order = vm.orders[0];

vm.new = {};
vm.addCar = function() {
    vm.cars.push(vm.new);
    vm.new = {};
};

});