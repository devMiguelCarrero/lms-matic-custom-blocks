<?php
/*
Plugin Name: LMS Matic Custom Blocks
Plugin URI: #
Description: Wordpress plugin made to manage custom Gutenberg blocks for LMS-Matic Wordpress Theme
Version: 1.0.2
Author: devMiguelCarrero
Author URI: #
License: OSLv3
Requires at least: 4.0
Text Domain: lms-matic-custom-blocks
Domain Path: /lms-matic-custom-blocks/
*/

/* Copyright 2022
This program is free licensed software (MIT); 
*/

//error_reporting(E_ALL);
//ini_set("display_errors", 1); 

if (!function_exists('add_action')) {
	echo 'Hi there!  I\'m just a plugin, not much I can do when called directly.';
	exit;
}

define('LMSCB_TEXTDOMAIN', 'lms-matic-custom-blocks');
define('LMSCB_VERSION', '1.0.2');
define('LMSCB_SITE_URL', get_site_url() . '/');
define('LMSCB_PLUGIN_PATH', plugin_dir_path(__FILE__));
define('LMSCB_ACHIEVEMENTS_PATH', plugin_dir_path(__FILE__) . DIRECTORY_SEPARATOR);
define('LMSCB_PLUGIN_URL', plugin_dir_url(__FILE__) . DIRECTORY_SEPARATOR);
define('LMSCB_INCLUDES_PATH', LMSCB_ACHIEVEMENTS_PATH . 'includes' . DIRECTORY_SEPARATOR);
define('LMSCB_APPLICATION_PATH', LMSCB_INCLUDES_PATH . 'application' . DIRECTORY_SEPARATOR);
define('LMSCB_ENQUEUE_PATH', LMSCB_APPLICATION_PATH . 'enqueue' . DIRECTORY_SEPARATOR);
define('LMSCB_BLOCKS_PATH', LMSCB_APPLICATION_PATH . 'blocks' . DIRECTORY_SEPARATOR);
define('LMSCB_CONFIG_PATH', LMSCB_INCLUDES_PATH . 'config' . DIRECTORY_SEPARATOR);
define('LMSCB_BUILD_PATH', LMSCB_ACHIEVEMENTS_PATH . 'build' . DIRECTORY_SEPARATOR);
define('LMSCB_BUILD_URL', LMSCB_PLUGIN_URL . 'build' . '/');
$dummy_text = esc_attr__('dd', 'lms-matic-custom-blocks');

require_once(LMSCB_INCLUDES_PATH . 'lms-matic-custom-blocks-install.php');
