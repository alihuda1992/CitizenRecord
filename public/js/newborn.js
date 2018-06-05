$(document).ready(function () {

    //on click
    $("#searchbutton").click(function () {
        let searchInfo = {
            zipcode : $("#zip").val().trim(),
            agency : `%${$("#agency").val().trim()}%`,
            agent_name :`%${$("#agent_name").val().trim()}%`,
            badgeid : `%${$("#badgeid").val().trim()}%`
        };

        $.post("/api/search",searchInfo,function(data){
            console.log(data)
                // loop through in here
                for (let i=0;i<data.length;i++) {
                    $("#targetdiv").append(`<p>${data[i].incidentdate}</p>`);
                    $("#targetdiv").append(`<p>${data[i].agency}</p>`);
                    $("#targetdiv").append(`<p>${data[i].content}</p>`);
                }
        })

        

    });


});





