<?php
//CONFIG VARIABLES
require_once 'config/env.php';
//COMPOSER AUTOLOADER
require_once $_ENV['PATH']->theme . 'vendor/autoload.php';
//THEME AUTOLOADER
require_once 'helpers/autoloader.php';
//CONFIG FILES
require_once 'config/assets.php';
require_once 'config/timber.php';
require_once 'config/router.php';
add_theme_support('post-thumbnail');
function create_product() {
	register_post_type( 'products' ,[
			'label' => 'products',
			'public' => true,
			'menu_position' => 3,
			'supports' => ['title', 'editor',],


		]
	);
}
add_action('init' , 'create_product');
