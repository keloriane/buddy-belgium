<?php
/*** Template Name: About Page*/

$context = Timber::context();
$mainImage = Picz::get('pic.jpg');
Picz::add('pic', $mainImage);;
$context['images'] = Picz::getAll();
$context["team"]  = Gimy::customType(['post_type' => 'team']);
$context["about"] = Gimy::post()->custom;
Timber::render('/about.twig', $context);

