<?php
//CONFIG VARIABLES
session_start();
require_once 'config/env.php';
//COMPOSER AUTOLOADER
require_once $_ENV['PATH']->theme . 'vendor/autoload.php';
//THEME AUTOLOADER
require_once 'helpers/autoloader.php';
//CONFIG FILES


require_once 'config/assets.php';
function wpb_adding_scripts() {
	wp_register_script('my_amazing_script', get_template_directory_uri() . '/public/frontend-bundle.js');
	wp_enqueue_script('my_amazing_script');
}

add_action( 'wp_enqueue_scripts', 'wpb_adding_scripts', 999 );

require_once 'config/timber.php';
require_once 'config/router.php';
require_once 'config/custom_types.php';
register_nav_menus( array(
	'menu' => 'Navigation Menu',
	'customer_menu' => 'customer_menu',
) );
add_editor_style();


