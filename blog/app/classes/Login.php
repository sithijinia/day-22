<?php


namespace App\classes;

use App\classes\Database;


class Login
{
    public function  adminLoginCheck($data){
        $email = $data['email'];
        $password =md5($data['password']);

        $sql = "SELECT *FROM users WHERE email = '$email' AND password = '$password' ";
         if(mysqli_query(Database::dbConnection(),$sql)){

             $queryResult = mysqli_query(Database::dbConnection(),$sql);
             $user = mysqli_fetch_assoc($queryResult);

             echo '<pre>';
             print_r($user);



         }else{
             die("Query Problem".mysqli_error(Database::dbconnection()));
         }
    }
}