<?php
/*** Template Name: About Page*/

$context = Timber::context();
//$mainImage = Picz::get('pic.jpg');
//Picz::add('pic', $mainImage);;

$test = Gimy::customType(['post_type' => 'team']);

var_dump($test);
$context['images'] = Picz::getAll();
$context["team"]  = Gimy::customType(['post_type' => 'team']);
$context["about"] = Gimy::post()->custom;
Timber::render('/about.twig', $context);

