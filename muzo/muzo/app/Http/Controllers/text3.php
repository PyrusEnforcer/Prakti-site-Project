<?php

$index = ['VAR1', 'VAR2'];
$integers = [1, 2];

$i = 3;

$index[$i] = 'VAR3';
$integers[$i] = 3;


echo $index[$i];
echo $integers[$i];