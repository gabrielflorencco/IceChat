<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST, GET, PUT, PATCH, DELETE,OPTION');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000'); 
header('Access-Length: 0');
header('Content-Type: text/plain');

	$pdo = new PDO("mysql:host=localhost;dbname=aula", "root", "root"); 

    $nome = $_GET["nome"];
    $email = $_GET["email"];
    $senha = $_GET["senha"];

    $sql = $pdo->query("insert into aluno(`codigo`, `nome`, `email`,`senha`,`foto`) VALUES  (NULL,\"$nome\",\"$email\",\"$senha\", NULL) ");
    echo json_encode("tudo certo");
?>