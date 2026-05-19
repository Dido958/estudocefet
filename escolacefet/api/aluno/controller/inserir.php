<?php
declare(strict_types=1);
require_once '../model/funcoesAluno';
require_once '../../util/funcoesUtil.php';

$info = file_get_contents('php://input');
$aluno = json_decode($info, true);

$nota1 = (float) $aluno['nota1']; $nota2 = (float) $aluno['nota2'];
$media = obterMedia($nota1, $nota2);
$grau = obterGrau($media)
?>