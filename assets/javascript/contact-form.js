$(function () {
    //Variables
    let name = $('#full-name');
    let email = $('#email');
    let query = $('#query');



    //Events
    $('#contact-form').on('submit', function (event) {
        console.log('event', event)
        event.preventDefault();
        let message = {
            name: name.val().trim(),
            email: email.val().trim(),
            msgbody: query.val().trim()
        }

        console.log(message);

        submitData(message.name, message.email, message.msgbody);

        name.val('');
        email.val('');
        query.val('');
    });


    //Functions
    function submitData(name, email, query) {
        $.post('/api/contact', {
            name: name,
            email: email,
            msgbody: query
        }).then(function (data) {
            alert('message sent');
        }).catch(err);
    }


















});