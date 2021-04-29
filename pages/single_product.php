<?php

/*** Template Name: SingleProduct Page*/

global $params;

$context = Timber::context();
$product = Gimy::customType(
	[
		'post_type' => 'products',
		'name' => $params["product"]
	]);

$context['product'] = array_pop($product);

Timber::render('/single_product.twig', $context);


