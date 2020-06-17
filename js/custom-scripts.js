$(document).ready(function () {

    $("label.switch").addClass(function () {
        if ($(this).children("input").is('[checked]')) {
            return "input-checked";
        } else if (!$(this).children("input").is('[checked]')) {
            return "";
        }
    });

});