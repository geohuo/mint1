<?php
require_once '../config.php';

class Hostsetting
{
    public $dbh;
    public function __construct()
    {
        $dns = "" . _FILE_DB_HOSTSETTING_;
        $this->dbh = new PDO($dns, "", "", array(PDO::ATTR_PERSISTENT => true));
        $this->dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }

    public function get($key)
    {
        if ($this->dbh) {
            $query = "SELECT value FROM setting WHERE key= ? ";
            $stmt = $this->dbh->prepare($query);
            $stmt->execute(array($key));
            $row = $stmt->fetch(PDO::FETCH_NUM);
            if ($row) {
                return $row[0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    public function set($key, $value)
    {
        if ($this->dbh) {
            $query = "UPDATE setting SET value = ?  WHERE key= ? ";
            $stmt = $this->dbh->prepare($query);
            $stmt->execute(array($value, $key));
            if (!$stmt || ($stmt && $stmt->errorCode() != 0)) {
                $error = PDO_ErrorInfo();
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }
}
