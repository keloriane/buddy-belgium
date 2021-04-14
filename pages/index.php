<?php
/** Template Name: Home Page*/

$context = Timber::context();
$product = Gimy::customType(['post_type' => 'category']);
$brands = Gimy::customType(['post_type' => 'marque']);
$activity = Gimy::customType(['post_type' => 'activities']);
$context["acf"] = new Timber\Post();
$context['product'] = $product;
$context['brands'] = $brands;
$context['activity'] = $activity;
Timber::render('/index.twig', $context);

