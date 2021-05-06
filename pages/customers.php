<?php

/*** Template Name: Customers*/


$context = Timber::context();
$activity = Gimy::customType(['post_type' => 'activities']);
$context['activity'] = $activity;
$context["acf"] = Gimy::post()->custom;


Timber::render('customers.twig', $context);
