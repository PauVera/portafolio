$(function () {
    /* Habilita el uso de tooltips */
    $('[data-toggle="tooltip"]').tooltip();

    /* Esconde el menú desplegable una vez apretado un enlace */
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    /* Cambia la clase active del menú y vuelve a top al evento click */
    $('.nav-link').click(function(){
        $('.nav-item').removeClass('active');
        $(this).parent().addClass('active');
        window.scrollTo(0,0);
    });
})