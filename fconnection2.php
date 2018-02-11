<?php
 
 
function fConnect()
{
 $fdbhost = "localhost";
 $fdbuser = "root";
 $fdbpass = "";
 $fdbname = "fff";
 
 // Create connection
 $fconn = new mysqli($fdbhost, $fdbuser, $fdbpass, $fdbname) or die($fconn->connect_error);
 
 return $fconn;
}
 
?>