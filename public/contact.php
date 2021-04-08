<?php
/*** Template Name: Contact Page*/

$context = Timber::context();
$context['imageTitle'] = 'http://localhost/pixelStudio/wp-content/uploads/2021/02/Contacttitle.png';
$context['map'] = 'http://localhost/pixelStudio/wp-content/uploads/2021/02/map-1.png';
Timber::render( '/contact.twig', $context );

