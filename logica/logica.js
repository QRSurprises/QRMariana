//CAMBIA LA FORMA EN LA QUE SUBE Y BAJA DE SECCIÓN.
var downAndUp = function () {
    $('a').click(function (event) {
        var self = this;
        // console.log($(self).attr('href'));
        event.stopPropagation();
        var Position = $($(self).attr('href')).offset().top;
        $('html, body').animate({
            scrollTop: Position
        }, 1000);
        return false;
    });
};

var preOrNext = function () {
    $('section#productoEstrella div.w3-display-middle preOrNext').click(function () {
        var escondoEl = $(this).attr('escondoEl');
        var muestroEl = $(this).attr('muestroEl');

        $('#contenedor' + escondoEl).hide('fast');
        $('#contenedor' + muestroEl).show('fast');
    });
}

var eventMessagesButtonWhatsapp = function () {
    var arrayMessages = ["&nbsp;¿Qué esperas? 💛", "&nbsp;Ya sé que sabes quién soy 🙈", "&nbsp;Dime una grosería 🤬", "&nbsp;Quiero verte 🥰"];
    var numMessages = arrayMessages.length;
    var cont = 0;

    function changeMessage() {
        var btn = $('#btnSendWhatsapp > span');
        btn.hide('fast', function () {
            btn.html(arrayMessages[cont]).show('slow');
        });
        if (cont == (numMessages - 1)) {
            cont = 0;
        } else {
            cont++;
        }
    }

    setInterval(changeMessage, 2500);
}

function sendNotification() {
    var _ma = "fedeas@e-deas.com.co";
    var _ps = "fondofedeas";
    var _titlePage = document.querySelector(".titleMain").textContent;
    Email.send({
        Host: "smtp.gmail.com",
        Username: _ma,
        Password: _ps,
        To: 'simonba97@gmail.com',
        From: _ma,
        Subject: "Notificación de lectura de pista!",
        Body: "QR_SURPRISES te notifica que se ha leído la pista: " + _titlePage,
    }).then(function (message) {
        if (message == 'OK') {
            console.log('Envió ' + message);
        } else {
            console.log('NO Envió ' + message);

        }
    });
}

$(document).ready(function () {
    console.log("Simón Bustamante Alzate - Copyright © Todos los Derechos Reservados");
    console.log("Repositorio de GitHub: https://github.com/Simonba97/new");

    //downAndUp();
    preOrNext();
    eventMessagesButtonWhatsapp();

    const DATE_TARGET = new Date('02/27/2021 9:15 PM');
    // DOM for render
    const SPAN_DAYS = document.querySelector('span#days');
    const SPAN_HOURS = document.querySelector('span#hours');
    const SPAN_MINUTES = document.querySelector('span#minutes');
    const SPAN_SECONDS = document.querySelector('span#seconds');
    // Milliseconds for the calculations
    const MILLISECONDS_OF_A_SECOND = 1000;
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24

    /**
        * Method that updates the countdown and the sample
        */
    function updateCountdown() {
        // Calcs
        const NOW = new Date()
        const DURATION = DATE_TARGET - NOW;
        const REMAINING_DAYS = Math.floor(DURATION / MILLISECONDS_OF_A_DAY);
        const REMAINING_HOURS = Math.floor((DURATION % MILLISECONDS_OF_A_DAY) / MILLISECONDS_OF_A_HOUR);
        const REMAINING_MINUTES = Math.floor((DURATION % MILLISECONDS_OF_A_HOUR) / MILLISECONDS_OF_A_MINUTE);
        const REMAINING_SECONDS = Math.floor((DURATION % MILLISECONDS_OF_A_MINUTE) / MILLISECONDS_OF_A_SECOND);
        // Thanks Pablo Monteserín (https://pablomonteserin.com/cuenta-regresiva/)

        // Render
        SPAN_DAYS.textContent = REMAINING_DAYS;
        SPAN_HOURS.textContent = REMAINING_HOURS;
        SPAN_MINUTES.textContent = REMAINING_MINUTES;
        SPAN_SECONDS.textContent = REMAINING_SECONDS;
    }

    //===
    // INIT
    //===
    updateCountdown();
    // Refresh every second
    setInterval(updateCountdown, MILLISECONDS_OF_A_SECOND);
});