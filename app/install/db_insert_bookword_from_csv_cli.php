<?php
/*
生成 巴利原文段落表
 */
require_once __DIR__."/../path.php";
require_once __DIR__.'/../public/_pdo.php';


echo "Insert Pali Text To DB".PHP_EOL;

if ($argc != 3) {
	echo "help".PHP_EOL;
	echo $argv[0]." from to".PHP_EOL;
	echo "from = 1-217".PHP_EOL;
	echo "to = 1-217".PHP_EOL;
	exit;
}
$_from = (int) $argv[1];
$_to = (int) $argv[2];
if ($_to > 217) {
	$_to = 217;
}


$dirLog = _DIR_LOG_ . "/";
$dirXmlBase = _DIR_PALI_CSV_ . "/";

$filelist = array();
$fileNums = 0;
$log = "";

global $dbh_word_index;
$dns = _FILE_DB_BOOK_WORD_;
$dbh_word_index = new PDO($dns, _DB_USERNAME_, _DB_PASSWORD_, array(PDO::ATTR_PERSISTENT => true));
$dbh_word_index->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

if (($handle = fopen(__DIR__."/filelist.csv", 'r')) !== false) {
    while (($filelist[$fileNums] = fgetcsv($handle, 0, ',')) !== false) {
        $fileNums++;
    }
}
if ($_to == 0 || $_to >= $fileNums) {
    $_to = $fileNums ;
}

for ($from=$_from-1; $from < $_to; $from++) { 
    echo "doing ".($from+1).PHP_EOL;

    $bookword = array();

    if (($fpoutput = fopen(_DIR_CSV_PALI_CANON_WORD_ . "/{$from}_words.csv", "r")) !== false) {
        $count = 0;
        while (($data = fgetcsv($fpoutput, 0, ',')) !== false) {
            $book = $data[1];
            if (isset($bookword[$data[3]])) {
                $bookword[$data[3]]++;
            } else {
                $bookword[$data[3]] = 1;
            }

            $count++;
        }
    }
    #删除原来的数据
    $query = "DELETE FROM "._TABLE_BOOK_WORD_." WHERE book = ?";
    $stmt = $dbh_word_index->prepare($query);
    $stmt->execute(array($book));
    if (!$stmt || ($stmt && $stmt->errorCode() != 0)) {
        $error = $dbh_word_index->errorInfo();
        echo "error - $error[2]".PHP_EOL;
        $log .= "$from, $FileName, error, $error[2] \r\n";
    }else{
        // 开始一个事务，关闭自动提交
        $dbh_word_index->beginTransaction();
        $query = "INSERT INTO "._TABLE_BOOK_WORD_." (book , wordindex , count) VALUES ( ? , ? , ?  )";
        $stmt = $dbh_word_index->prepare($query);

        foreach ($bookword as $key => $value) {
            $stmt->execute(array($book, $key, $value));
        }
        // 提交更改
        $dbh_word_index->commit();
        if (!$stmt || ($stmt && $stmt->errorCode() != 0)) {
            $error = $dbh_word_index->errorInfo();
            echo "error - $error[2]".PHP_EOL;
            $log .= "$from, $FileName, error, $error[2] \r\n";
        } else {
            echo "updata $count recorders.".PHP_EOL;
            $log .= "updata $count recorders.\r\n";
        }	
    }

    /*
    $myLogFile = fopen($dirLog . "insert_index.log", "a");
    fwrite($myLogFile, $log);
    fclose($myLogFile);
    */
}
echo "齐活！功德无量！all done!".PHP_EOL;

?>
