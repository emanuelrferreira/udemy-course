// with a constructor function, we can construct our object with parameters we pass into it

function WebsiteUrl(url) {
    this.url = url;
    this.showUrl = function() {
        console.log(this.url);
    }
};

let myWebsite = new WebsiteUrl('thisismywebsite.com');
myWebsite.showUrl();

// with an object literal you are unable to have a constructor, which means you are unable to initialise your object *****unless***** you add your own init function

let website = {
    init: function(url) {
        this.url = url;
    },
    showUrl: function (){
        console.log(this.url);
    }
};

website.init('ourCustomUrl.com');
website.showUrl();