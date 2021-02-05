<?php
/*** Template Name: Home Page*/

$context = Timber::context();
$product = Gimy::customType(['post_type' => 'products']);
$brands = Gimy::customType(['post_type' => 'marque']);

$context['product'] = $product;
$context['brands'] = $brands;

Timber::render('/index.twig', $context);

