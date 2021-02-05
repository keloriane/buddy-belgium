<?php
/*** Template Name: Intro Page*/

$method = $_SERVER['REQUEST_METHOD'];
$have_vat = HelpMe::get_request_value('vat');
$context = Timber::context();

if ($method == 'GET' && $have_vat) {
	if ($have_vat == 'no') {
		HelpMe::redirect('/non_pro');
	}
	if ($have_vat == 'yes') {
		$context['display_form'] = true;
	}
}

if ($method == 'POST') {
	$vat_number = HelpMe::get_request_value('vat_number');
	if ($vat_number == 'be 123') {
		HelpMe::redirect('/');
	} else {
		$context['display_form'] = true;
		$context['error'] = 'wrong vat number';
	}
}

Timber::render('/intro.twig', $context);

