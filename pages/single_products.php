<?php

/*** Template Name: Product Page*/

$context = Timber::context();


$context['product'] = Gimy::customType(['post_type' => 'products']);
Timber::render( '/products.twig',$context);
