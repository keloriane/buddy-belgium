<?php

/*** Template Name: SingleProduct Page*/

global $params;

Picz::add('arrow_left', 'angle-left.png');
Picz::add('arrow_right', 'angle-right.png');

$context = Timber::context();
$product = Gimy::customType(
	[
		'post_type' => 'products',
		'name' => $params["product"]
	]);
r($product);
$context['product'] = array_pop($product);
$context['images'] = Picz::getAll();
Timber::render('/single_product.twig', $context);


