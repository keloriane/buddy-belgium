<?php

Themer::init();
Themer::addStyle('global_css', get_theme_file_uri('/public/frontend.css'));
Themer::addStyle('global_css', get_theme_file_uri('/public/frontend.css'));
Themer::addScript('frontend-script', get_theme_file_uri('/public/frontend-bundle.js'), NULL, '1.0', true);
add_theme_support('post-thumbnail');
