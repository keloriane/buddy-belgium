<?php

$protectionCondition = !isset($_SESSION['allowed']) || $_SESSION['allowed'] !== true;

Routes::map('/about', function () use ($protectionCondition) {
	$route = function () {
		Routes::load('pages/about.php');
	};
	HelpMe::protectedRoute($protectionCondition, $route);
});

Routes::map('/example', function () use ($protectionCondition) {
	$route = function () {
		Routes::load('pages/example.php');;
	};
	HelpMe::protectedRoute($protectionCondition, $route);

});

Routes::map('/products/:product', function ($params) use ($protectionCondition) {
	$route = function () use ($params) {
		Routes::load('pages/single_products.php', $params);
	};
	HelpMe::protectedRoute($protectionCondition, $route);
});

Routes::map('/activities', function ($params) use ($protectionCondition) {
	$route = function () use ($params) {
		Routes::load('pages/activity.php', $params);
	};
	HelpMe::protectedRoute($protectionCondition, $route);
});

Routes::map('/activities/:activity', function ($params) use ($protectionCondition) {
	$route = function () use ($params) {
		Routes::load('pages/activity.php', $params);
	};
	HelpMe::protectedRoute($protectionCondition, $route);
});

Routes::map('/pro', function () use ($protectionCondition) {
	$route = function () {
		Routes::load('pages/index.php');
	};
	HelpMe::protectedRoute($protectionCondition, $route);
});


Routes::map('/', function ($params) {
	Routes::load('pages/intro.php', $params);
});

Routes::map('/contact', function () {
	Routes::load('pages/contact.php');
});

Routes::map('/unauthorized', function ($params) {
	Routes::load('pages/unauthorized.php', $params);
});

