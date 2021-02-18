<?php
//CONFIG VARIABLES
session_start();
require_once 'config/env.php';
//COMPOSER AUTOLOADER
require_once $_ENV['PATH']->theme . 'vendor/autoload.php';
//THEME AUTOLOADER
require_once 'helpers/autoloader.php';
//CONFIG FILES
require_once 'config/assets.php';
require_once 'config/timber.php';
require_once 'config/router.php';
require_once 'config/custom_types.php';

