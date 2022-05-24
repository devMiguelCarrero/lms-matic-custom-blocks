<?php

    class LMSCB_Blocks {

        public function init() {
            add_action( 'init' , [ $this , 'register' ] );
        }

        public function register() {
            register_block_type_from_metadata( LMSCB_BLOCKS_PATH . 'test-block-1' );
            register_block_type_from_metadata( LMSCB_BLOCKS_PATH . 'test-block-2' );
        }

        public static function instance() {
            return new LMSCB_Blocks();
        }


    }

    LMSCB_Blocks::instance()->init();