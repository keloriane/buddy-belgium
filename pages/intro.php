<?php

use Ddeboer\Vatin\Validator;

/*** Template Name: Intro Page*/

$method = $_SERVER['REQUEST_METHOD'];
$context = Timber::context();
$context['logo_center'] = 'http://localhost/buddy-belgium/wp-content/uploads/2021/02/logointro.png';
$context['logo_top_left'] = 'http://localhost/buddy-belgium/wp-content/uploads/2021/02/logobuddytexr.png';
$have_vat = HelpMe::get_request_value('vat');

if ($method == 'GET' && $have_vat) {
	if ($have_vat == 'je suis particulier') {
		HelpMe::redirect('/customer');
	}
	if ($have_vat == 'je suis professionnel') {
		$context['display_form'] = true;
	}
}

if ($method == 'POST') {
	$vat_number = HelpMe::get_request_value('vat_number');
	$vat_validator = new Validator;
	$isVatValid = $vat_validator->isValid($vat_number);

	if ($isVatValid) {
		$_SESSION['allowed'] = true;
		HelpMe::redirect('/pro');
	}
}

Timber::render('/intro.twig', $context);

