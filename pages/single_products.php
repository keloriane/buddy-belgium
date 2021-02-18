<?php

/*** Template Name: Product Page*/

global $params;

$context = Timber::context();
$context['product'] = Gimy::customType(['post_type' => 'products']);
$map = array_filter( $context['product'] ,function ($value)use($params){
	if($value->slug === $params['product']) {
		return $value;
	}
});

$product_details = array_shift($map);
$context["product_details"] = $product_details;

Timber::render( '/products.twig',$context);


