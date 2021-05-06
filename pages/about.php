<?php
/*** Template Name: About Page*/
$context = Timber::context();

$context['images'] = Picz::getAll();
$context["team"]  = Gimy::customType(['post_type' => 'teams']);
$context["about"] = Gimy::post()->custom;
Timber::render('/about.twig', $context);

