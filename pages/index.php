<?php
/*** Template Name: Home Page*/

$context = Timber::context();


$context['product'] = Gimy::customType(['post_type' => 'products']);







Timber::render( '/index.twig',$context);

