<?php

    class LMSCB_Blocks {

        public function init() {
            add_action( 'init' , [ $this , 'register' ] );
        }

        public function register() {
            register_block_type_from_metadata( LMSCB_BLOCKS_PATH . 'section-inner' );
            register_block_type_from_metadata( LMSCB_BLOCKS_PATH . 'section-container' );
            register_block_type_from_metadata( LMSCB_BLOCKS_PATH . 'section-title' );
            register_block_type_from_metadata( LMSCB_BLOCKS_PATH . 'testimonial-carousel' );
        }

        public static function instance() {
            return new LMSCB_Blocks();
        }


    }

    LMSCB_Blocks::instance()->init();