var urls = {
    users: 'http://localhost:3000/api/users',
    accounts: 'http://localhost:3000/api/accounts',
    login: 'http://localhost:3000/api/login',
};

myApp.service('urlService', function(){
    
    this.urls = urls;
    
});
