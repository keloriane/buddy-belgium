<?php
/** Template Name: Home Page*/

$context = Timber::context();
$product = Gimy::customType(['post_type' => 'category']);
$brands = Gimy::customType(['post_type' => 'marque']);
$activity = Gimy::customType(['post_type' => 'activities']);
$context['product'] = $product;
$context['brands'] = $brands;
$context['activity'] = $activity;
var_dump(Gimy::post());
Timber::render('/index.twig', $context);

