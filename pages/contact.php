<?php

/*** Template Name: Contact Page*/

$context = Timber::context();
$context['logo_center'] = 'http://localhost/buddy-belgium/wp-content/uploads/2021/02/logointro.png';
$context['prenom'] = 'kevin';

Timber::render('/contact.twig', $context);

