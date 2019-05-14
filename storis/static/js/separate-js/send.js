$(document).ready(function () {


    $('.send button').click(function (e) {

        e.preventDefault();


        var parent = $(this).parents("form");


        $('body').find('form:not(this)').children('label').removeClass('red'); //удаление всех сообщение об ошибке(валидатора)

        var page = $('input[name="page"]').val().match(/(?:\/)(.{1})(?:\/.*)$/i); //берем ссылку на страницу из поля input[name='page']



        if (page == null) {
            var url = "send.php"; //если целевая
        } else {
            var url = "../send.php"; //если /a/ или /b/
        }

        var answer = checkForm(parent.get(0)); //ответ от валидатора
        if (answer != false) {

            parent.removeClass("error");

            if ($('input[name="presentation"]', $form).prop("checked")) {
                $(".present").val("Получить презинтацию");
            } else {
                $(".present").val("Не получать презинтацию");
            }

            var $form = $(this).parents("form"),
                name = $('input[name="name"]', $form).val(),
                phone = $('input[name="phone"]', $form).val(),
                sbt = $('input[type="submit"]', $form).attr("name"),
                submit = $('input[name=' + sbt + ']', $form).val();

            var ref = $('input[name="referer"]').val();
            var formname = $('input[name="formname"]', $form).val();
            $.ajax({
                type: "POST",
                url: url,
                dataType: "json",
                data: "name=" + name + "&phone=" + phone + "&" + sbt + "=" + submit + "&formname=" + formname + "&ref=" + ref //добавить параметр +"&имя"+имя_переменной
            }).always(function () {
                if (page == null) {

                    $(".request").html("<div class='success-ms'><span>Спасибо!</span></div>");

                }
            });
        } else {
            parent.addClass("error");
        }

    });



});

