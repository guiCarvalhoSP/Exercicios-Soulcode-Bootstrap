$(document).ready(function () {

    setTimeout(() => {
        $("#alerta1").show();
        $("#alerta2").hide();
    }, 3000);

    setTimeout(() => {
        $("#alerta1").hide();
        $("#alerta2").show();
    }, 10000);
});
