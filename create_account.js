$(document).ready(function() {

        $(".eye-icon").click(function() {
                var confirmPassword = $("#confirmPassword");
                var fieldType=confirmPassword.attr("type");

                if (fieldType === "password")
                 {
                        confirmPassword.attr("type", "text");
                }else{
                        confirmPassword.attr("type", "password");
                }
        });
});