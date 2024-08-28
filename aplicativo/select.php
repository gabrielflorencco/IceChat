<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST, GET, PUT, PATCH, DELETE,OPTION');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000'); 
header('Access-Length: 0');
header('Content-Type: text/plain');

	$pdo = new PDO("mysql:host=localhost;dbname=aula", "root", "root"); 

    $senha = $_GET['senha'];
    $email = $_GET['email'];

    $sql = $pdo->query("select * from aluno WHERE email=\"$email\" AND senha = \"$senha\" ");

    //Para Leitura
    while($row = $sql->fetch()){
        $alunos[] = array(
            "codigo" => $row['codigo'],	
            "nome"=> $row['nome'],
            "email"=> $row['email'],
            "foto"=> $row['foto'],
            "status"=> "ok"
            );           
    }

    echo json_encode($alunos);
?>