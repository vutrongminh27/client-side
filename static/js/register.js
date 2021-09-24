(function($){
    "use strict";
    $(id="register-button").click(function(){
        let endpoint = "http://113.161.152.35:2089/api/customer/signup";
        $.ajax({
            type: "POST",
            url: endpoint,
            dataType: 'json',
            data: ({
                email : $("#exampleInputEmailID").val(),
                password: $("#exampleInputPassword").val(),
                address: $("#exampleAddress").val(),
                phone: $("#examplePhone").val(),
            })
        })
    })
})