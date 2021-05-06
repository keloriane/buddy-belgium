<?php
/*** Template Name: About Page*/

$context = Timber::context();

$context['images'] = Picz::getAll();
$context["team"]  = Gimy::customType(['post_type' => 'team']);
$context["about"] = Gimy::post()->custom;
var_dump($context['about']);
echo('helooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo');
Timber::render('/about.twig', $context);

