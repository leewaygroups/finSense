angular.service('socialMediaService', function(){
    
    this.facebook = new facebookService();
    this.twitter = new twitter();
    this.twitter = new instagram();
    this.twitter = new linkedInService();
    
});