<?php 
// Require Composer's autoloader.
require_once '../../vendor/autoload.php';

#域名设置
define(WWW_DOMAIN_NAME,"sg.wikipali.org");
define(RPC_DOMAIN_NAME,"rpc.wikipali.org");
/*
电子邮件设置
PHPMailer
*/
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
define("Email", ["SMTPDebug"=>SMTP::DEBUG_SERVER,//Enable verbose debug output DEBUG_OFF
				 "Host"=>"smtp.gmail.com",//Set the SMTP server to send through
				 "SMTPAuth"=>true,//Enable SMTP authentication
				 "Username"=>'your@gmail.com',//SMTP username
				 "Password"=>'your_password',//SMTP password
				 "SMTPSecure"=>PHPMailer::ENCRYPTION_SMTPS,//Enable implicit TLS encryption
				 "Port"=>465,//TCP port to connect to 465; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`
				 "From"=>"your@gmail.com",
				 "Sender"=>"sender"
				 ]);

/*
数据库设置
*/
define("Database",[
	"type"=>"pgsql",
	"port"=>5432,
	"name"=>"mint",
	"sslmode" => "disable",
	"user" => "postgres",
	"password" => "123456"
]);

#数据库
# 数据库基本参数 pgsql sqlite
define("_DB_ENGIN_", "pgsql");
define("_DB_HOST_", "localhost");
define("_DB_NAME_", "mint");
define("_DB_PORT_", "5432");
define("_DB_USERNAME_", "postgres");
define("_DB_PASSWORD_", "123456");


/*
Redis 设置，
使用集群
*/
define("Redis",[
	"hosts" => ["127.0.0.1:6376", "127.0.0.1:6377", "127.0.0.1:6378"],
	"password" => "",
	"db" => 0,
	"prefix"=>"aaa://"
]);
				

?>