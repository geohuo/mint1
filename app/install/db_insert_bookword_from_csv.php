<!DOCTYPE html>
<html>
<head>
</head>
<body>
<h2>Insert to Index</h2>
<?php
include "./_pdo.php";
include "../path.php";
if(isset($_GET["from"])==false){
?>
<form action="db_insert_bookword_from_csv.php" method="get">
From: <input type="text" name="from" value="0"><br>
To: <input type="text" name="to" value="216"><br>
<input type="submit">
</form>
<?php
return;
}

$from=$_GET["from"];
$to=$_GET["to"];

$dirLog=_DIR_LOG_."/";
$dirXmlBase=_DIR_PALI_CSV_."/";

$filelist=array();
$fileNums=0;
$log="";
echo "<h2>doing : No.{$from} book </h2>";

global $dbh_word_index;
$dns = "sqlite:"._FILE_DB_BOOK_WORD_;
$dbh_word_index = new PDO($dns, "", "",array(PDO::ATTR_PERSISTENT=>true));
$dbh_word_index->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);

if(($handle=fopen("filelist.csv",'r'))!==FALSE){
	while(($filelist[$fileNums]=fgetcsv($handle,0,','))!==FALSE){
		$fileNums++;
	}
}
if($to==0 || $to>=$fileNums) $to=$fileNums-1;

    $bookword = array();
    
	if(($fpoutput=fopen(_DIR_CSV_PALI_CANON_WORD_."/{$from}_words.csv", "r"))!==FALSE){
		$count=0;
		while(($data=fgetcsv($fpoutput,0,','))!==FALSE){
            $book = $data[1];
            if(isset($bookword[$data[3]])){
                $bookword[$data[3]]++;
            }
            else{
                $bookword[$data[3]] = 1;
            }
			
			$count++;
		}        
    }

		// 开始一个事务，关闭自动提交
		$dbh_word_index->beginTransaction();
		$query="INSERT INTO bookword ('book','wordindex','count') VALUES ( ? , ? , ?  )";
		$stmt = $dbh_word_index->prepare($query);

        foreach ($bookword as $key => $value) {
            $stmt->execute(array($book,$key,$value));
        }
		// 提交更改 
		$dbh_word_index->commit();
		if (!$stmt || ($stmt && $stmt->errorCode() != 0)) {
			$error = $dbh_word_index->errorInfo();
			echo "error - $error[2] <br>";
			$log.="$from, $FileName, error, $error[2] \r\n";
		}
		else{
			echo "updata $count recorders.<br />";
			$log.="updata $count recorders.\r\n";
		}		



	$myLogFile = fopen($dirLog."insert_index.log", "a");
	fwrite($myLogFile, $log);
	fclose($myLogFile);
	

if($from>=$to){
	echo "<h2>齐活！功德无量！all done!</h2>";
}
else{
	echo "<script>";
	echo "window.location.assign(\"db_insert_bookword_from_csv.php?from=".($from+1)."&to=".$to."\")";
	echo "</script>";
	echo "正在载入:".($from+1)."——".$filelist[$from+1][0];
}
?>
</body>
</html>