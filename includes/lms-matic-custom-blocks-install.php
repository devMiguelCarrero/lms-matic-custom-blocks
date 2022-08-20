<?php
if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}
/**
 * Wordpress Boilerplate Code by Mike
 * @author  devMiguelCarrero
 * @package lms-matic
 */

class LMSCB_Archievments_Install
{
	public function init()
	{
		//$this->load_language_setup();
		add_action('plugins_loaded', [$this, 'load_language_setup'], 100);
		//add_action('wp_enqueue_scripts', [$this, 'load_language_setup'], 100);
	}

	public function load_language_setup()
	{
		load_plugin_textdomain(LMSCB_TEXTDOMAIN, false, LMSCB_TEXTDOMAIN . '/languages/');
	}

	public static function instance()
	{
		return new LMSCB_Archievments_Install();
	}
}

LMSCB_Archievments_Install::instance()->init();

require_once(LMSCB_CONFIG_PATH . 'Config.php');
require_once(LMSCB_ENQUEUE_PATH . 'Enqueue.php');
require_once(LMSCB_BLOCKS_PATH . 'Blocks.php');
