<?php
/*** Template Name: Marques Page*/

$context = Timber::context();
$brands = Gimy::customType(['post_type' => 'marque']);
$products = Gimy::customType(['post_type' => 'products']);
$customProduct = new stdClass();
$brand_products =  [];


foreach ($brands as $brand) {
	$currentBrand = new stdClass();
	$currentBrand->name = $brand->post_title;
	$currentBrand->description = $brand->custom['description'];
	$currentBrand->url = $brand->url;
	$currentBrand->products = [];
	$brandId = $brand->id;
	foreach ($products as $product) {
		$productBrandId = intval($product->custom['brand']);
		if ($brandId === $productBrandId){
			$currentBrand->products[] = $product;
		}
	}
	$brand_products[] = $currentBrand;
}


$context['brands'] = $brand_products;
Timber::render('/marques.twig', $context);

