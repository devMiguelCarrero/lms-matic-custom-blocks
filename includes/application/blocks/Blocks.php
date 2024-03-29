<?php

class LMSCB_Blocks
{

	public function init()
	{
		add_action('init', [$this, 'register']);
	}

	public function register()
	{
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'section-inner');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'section-container');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'section-title');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'testimonial-carousel');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'tutoring-list');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'call-to-action-list');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'simple-call-to-action');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'highlighter-arrow');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'review-form');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'review-form-options');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'features/feature');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'features');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'add-to-cart-button');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'ajax-comments-block');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'pricing-tables');
		register_block_type_from_metadata(LMSCB_BLOCKS_PATH . 'accordion-tabs');
	}

	public static function instance()
	{
		return new LMSCB_Blocks();
	}
}

LMSCB_Blocks::instance()->init();
