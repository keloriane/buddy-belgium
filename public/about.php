<?php
/*** Template Name: About Page*/

$context = Timber::context();


$context['images'] = Picz::getAll();
$context['post'] = Gimy::post();
Timber::render('/about.twig', $context);

