$(function () {
    let noRepeat;

    const getMail = () => {
        $.get('/api/admin', function (msgs) {
            noRepeat = msgs.length;
            $("#check-num").attr('class', 'btn wave').text(msgs.length);
            msgs = msgs.reverse();
            for (const msg of msgs) {
                let mailCheckbox = $("<input/>").attr('type', 'checkbox');
                let mailHead = $("<div>").attr({
                    class: 'col s6',
                    id: 'msg-head'
                }).text(msg.name);
                let mailBody = $("<div>").attr({
                    class: 'col s6',
                    id: 'msg-body'
                }).text(msg.email);
                //    let mail = mailLine.append(mailCheck)
                let mailLine = $("<div>").attr({
                    class: 'col s7',
                    id: 'msg-line'
                }).append(mailCheckbox, mailHead, mailBody);
                //    let wrapper = $("<div>").attr({class: 'col s4', id: 'msg-disp'});
                $("#msg-disp").before(mailLine);
            };
        });
    }

    $('#checkMail').on('click', function (event) {
        event.preventDefault();
        if (noRepeat > !$('#check-num').val()) {
            return null
            // console.log('negative');
        } else {
            console.log('positive');
            getMail()
        };
    })
    // const readIt = contactMsg.map(msg =>{
    //     console.log(msg);
    // })


    // console.log(readIt);


























});