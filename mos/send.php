<?php
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$title = $_POST['title'];		
	if(!empty($_POST['type']) && $_POST['type'] == "callback" ) {

		$maillist = array('ruzelyanwt@mail.ru'); // добавить е-mail(ы)
		$subject = "Форма -'$title'";
		$message = "Имя: $name \n
					Номер телефона: $phone\n";
		foreach ($maillist as $mail) {
			mail($mail, $subject, $message, "Content-type:text/plain; charset = utf-8") or print "Не могу отправить письмо !!!";
		}
		unset($name,$phone,$title);	
	}
?>