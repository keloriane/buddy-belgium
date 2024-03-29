<?php

/*** Template Name: Product Page*/

global $params;

$context = Timber::context();
$categoryArray = Gimy::customType(
	[
		'post_type' => 'category',
		's' => ucfirst($params["category"])
	]);

$category = array_shift($categoryArray);
$products = Gimy::customType(['post_type' => 'products']);
$customProduct = new stdClass();
$category_products = [];
$currentCategory = new stdClass();
$currentCategory->name = $category->post_title;
$currentCategory->description = $category->custom['description'];
$currentCategory->image = $category->image;
$currentCategory->products = [];
$categoryId = $category->id;
foreach ($products as $product) {
	$productCategoryId = intval($product->custom['category']);
	$count=0;
	if ($categoryId === $productCategoryId) {
		$currentCategory->products[] = $product;
	}
}

$category_products[] = $currentCategory;
$context['category'] = $currentCategory;

Timber::render('/category.twig', $context);


