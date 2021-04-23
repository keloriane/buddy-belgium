<?php

function create_product()
{
	register_post_type('products', [
			'label' => 'products',
			'public' => true,
			'menu_position' => 3,
			'supports' => ['title', 'editor',],
			'show_in_graphql' => true,
			'hierarchical' => true,
			'graphql_single_name' => 'product',
			'graphql_plural_name' => 'products',
		]
	);
}

function create_category()
{
	register_post_type('category', [
			'label' => 'Category',
			'public' => true,
			'menu_position' => 3,
			'supports' => ['title'],
			'show_in_graphql' => true,
			'hierarchical' => true,
			'graphql_single_name' => 'category',
			'graphql_plural_name' => 'categories',
		]
	);
}

function create_brands()
{
	$args = array(
		'public' => true,
		'query_var' => 'marque',
		'rewrite' => array(
			'slug' => 'marques',
			'with_front' => false
		),
		'supports' => array(
			'title',
			'revisions'
		),
		'labels' => array(
			'name' => 'Marques',
			'singular_name' => 'Marque',
			'add_new' => 'Add New Marque',
			'add_new_item' => 'Add New Marque',
			'edit_item' => 'Edit Marque',
			'new_item' => 'New Marque',
			'view_item' => 'View Marque',
			'search_items' => 'Search Marques',
			'not_found' => 'No marques found',
			'not_found_in_trash' => 'No marques found in Trash',
				'menu_name' => __( 'Docs', 'brand' ),

		),
	);
	register_post_type('marque', $args);
}


function create_activities()
{
	$args = array(
		'public' => true,
		'query_var' => 'activities',
		'rewrite' => array(
			'slug' => 'activities',
			'with_front' => false
		),
		'show_in_graphql' => true,
		'hierarchical' => true,
		'graphql_single_name' => 'document',
		'graphql_plural_name' => 'documents',
		'supports' => array(
			'title',
			'revisions'
		),
		'labels' => array(
			'name' => 'Activities',
			'singular_name' => 'Activity',
			'add_new' => 'Add New Activity',
			'add_new_item' => 'Add New Activity',
			'edit_item' => 'Edit Activity',
			'new_item' => 'New Activity',
			'view_item' => 'View Activity',
			'search_items' => 'Search Activities',
			'not_found' => 'No activities found',
			'not_found_in_trash' => 'No activities found in Trash',
		),
	);
	register_post_type('activities', $args);
}


function produits_vrac () {
	register_post_type('products', [
			'label' => 'Produits vrac',
			'public' => true,
			'menu_position' => 5,
			'supports' => ['title', 'editor',],
			'show_in_graphql' => true,
			'hierarchical' => true,
			'graphql_single_name' => 'product',
			'graphql_plural_name' => 'products',
		]
	);
}function produits_paquet () {
	register_post_type('products', [
			'label' => 'Produits paquet',
			'public' => true,
			'menu_position' => 6,
			'supports' => ['title', 'editor',],
			'show_in_graphql' => true,
			'hierarchical' => true,
			'graphql_single_name' => 'product',
			'graphql_plural_name' => 'products',
		]
	);
}

function produits_page () {
	register_post_type('products', [
			'label' => 'Produits',
			'public' => true,
			'menu_position' => 6,
			'supports' => ['title', 'editor',],
			'show_in_graphql' => true,
			'hierarchical' => true,
			'graphql_single_name' => 'product',
			'graphql_plural_name' => 'products',
		]
	);
}
function produit_cat () {
	register_post_type('products',[
			'label' => 'Produits',
			'public' => true,
			'menu_position' => 6,
			'supports' => ['title', 'editor',],
			'show_in_graphql' => true,
			'hierarchical' => true,
			'graphql_single_name' => 'product',
		]
	);
}


add_action('init', 'create_product');
add_action('init', 'create_category');
add_action('init', 'create_activities');
add_action('init', 'create_brands');
add_action('init', 'produits_vrac');
add_action('init', 'produits_paquet');
add_action('init', 'produits_page');
add_action('init', 'produits_cat');

