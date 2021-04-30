<?php
/*** Template Name: Products Page*/
global $params;
$context = Timber::context();
$products = Gimy::customType(['post_type' => 'products']);
/*$context['product'] = array_pop($product);*/
$context['products'] = $products;
/*r($products);*/

$products_vrac = [];
$products_package = [];
foreach ($products as $product) {

	$product_type = array_shift($product->custom["type"]);
	$ProductType = get_post($product_type);
	if ($ProductType->post_title == "Vrac") {
		$products_vrac [] = $product;


	} elseif ($ProductType->post_title == "Produits") {
		$products_package [] = $product;
	}
}

$context["vrac"] = $products_vrac;
$context["paquet"] = $products_package;

Timber::render('/products.twig', $context);
