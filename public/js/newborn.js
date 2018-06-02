$(document).ready(function () {

    //on click
    $("#searchbutton").click(function () {
        
        $("#definition").removeAttr("style");
        console.log("hello");

    });

    
    //close document.ready
    var orm = require("./config/orm.js");

    orm.all("posts")
    



});





