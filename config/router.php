<?php

Routes::map('/', function ($params) {
	Routes::load('pages/index.php');
});

Routes::map('/about', function ($params) {
	Routes::load('pages/about.php');
});

Routes::map('/example', function ($params) {
	Routes::load('pages/example.php');
});

Routes::map('/products/:product', function($params){
	Routes::load('pages/single_products.php',$params);
});

Routes::map('/activities/:activity', function ($params) {
	Routes::load('pages/activity.php', $params);
});
