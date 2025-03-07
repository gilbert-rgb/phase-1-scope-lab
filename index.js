// Declare customerName in global scope
var customerName = 'bob';


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}


function setBestCustomer() {
    window.bestCustomer = 'not bob';
}


function overwriteBestCustomer(newFavorite) {
    window.bestCustomer = newFavorite;
}

const leastFavoriteCustomer = 'some value';


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; 
}
