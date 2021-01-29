<?php

function create_product() {
	register_post_type( 'products' ,[
			'label' => 'products',
			'public' => true,
			'menu_position' => 3,
			'supports' => ['title', 'editor',],


		]
	);
}

function create_brands() {
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
		),
	);
	register_post_type( 'marque', $args );
}

add_action('init' , 'create_product');
add_action( 'init', 'create_brands' );
