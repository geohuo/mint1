<?php
// Require Composer's autoloader.
require_once '../../vendor/autoload.php';

// Require Composer's autoloader.
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require_once '../config.php';
require_once "../redis/function.php";
require_once "../public/function.php";

if (PHP_SAPI == "cli") {
	if ($argc == 2) {
		$email = $argv[1];
        $redis = redis_connect();
        if ($redis == false) {
            echo "no redis connect\n";
            exit;
		}
		$uuid= UUID::v4();
		$invitecode = "invitecode://".$uuid;
		$redis->set($invitecode,$email);
		$redis->expire($invitecode,7*20*3600);
		$SignUpLink="https://www.wikipali.org/ucenter/index.php?op=new&invite=".$uuid;
		$SignUpString="https://www.wikipali.org/ucenter/index.php?op=new&invite=".$uuid;

			// 打开文件并读取数据
		$irow=0;
		$strSubject = "";
		$strBody = "";
		if(($fp=fopen("invite_letter.html", "r"))!==FALSE){
			while(($data=fgets($fp))!==FALSE){
				$irow++;
				if($irow==1){
					$strSubject = $data; 
				}else{
					$strBody .= $data; 
				}
			}
			fclose($fp);
			echo "body load：";
		}
		else{
			echo "can not load body file. ";
		}

		$strBody = str_replace("%SignUpLink%",$SignUpLink,$body);
		$strBody = str_replace("%SignUpString%",$SignUpString,$body);

		//TODO sendmail

		//Create an instance; passing `true` enables exceptions
		$mail = new PHPMailer(true);

		try {
			//Server settings
			$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
			$mail->isSMTP();                                            //Send using SMTP
			$mail->Host       = Email["Host"];                     //Set the SMTP server to send through
			$mail->SMTPAuth   = Email["SMTPAuth"];                                   //Enable SMTP authentication
			$mail->Username   = Email["Username"];                     //SMTP username
			$mail->Password   = Email["Password"];                               //SMTP password
			$mail->SMTPSecure = Email["SMTPSecure"];            //Enable implicit TLS encryption
			$mail->Port       = Email["Port"];                                    //TCP port to connect to 465; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

			//Recipients
			$mail->setFrom(Email["From"], Email["Sender"]);
			$mail->addAddress($email);     //Add a recipient Name is optional

			//Attachments
			//$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
			//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

			//Content
			$mail->isHTML(true);                                  //Set email format to HTML
			$mail->Subject = $strSubject;
			$mail->Body    = $strBody;
			$mail->AltBody = $strBody;

			$mail->send();
			echo 'Message has been sent';
		} catch (Exception $e) {
			echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
		}
	}else{
		echo "email?";
	}
}else{
	echo ":-)";
}
?>