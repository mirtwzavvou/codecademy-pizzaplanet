app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
    	name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  $scope.mains = [
    {
    	name: 'Queen Margherita',
    	description: 'Two layers of mozzarella, special tomato sauce, bacon, gruyere, cream and thyme.',
    	price: 9.95
  	},
    {
    	name: 'Texas BBQ',
    	description:  'Two layers of mozzarella, BBQ sauce, bacon and ham.',
      price: 13.40
    },
    {
    	name: 'Bacon Delight',
      description: 'Two layers of mozzarella, special tomato sauce, bacon, black olives and fresh mushrooms.',
      price: 13.95
    }
  ];
  $scope.extras = [
    {
      name: 'BBQ Chicken Wings',
      description: 'BBQ chicken wings with BBQ sauce.',
      price: 5.40
    },
    {
      name: 'Onion Rings',
      description: 'Fried onion rings with blue cheese dip.',
      price: 3.50
    },
    {
    	name: 'Potato Wedges',
      description: 'Potato wedges with ketchup tomato sauce.',
      price: 4.95
    }
  ];
}]);
