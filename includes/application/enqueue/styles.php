<?php

    class LMSCB_Enqueue_styles {

        function __construct() {
            $this->editor_assets = include LMSCB_BUILD_PATH . 'editor.asset.php';
            $this->script_assets = include LMSCB_BUILD_PATH . 'script.asset.php'; 
        }

        public function init() {
            add_action( 'admin_enqueue_scripts' , [ $this , 'admin_styles' ] );
            add_action( 'wp_enqueue_scripts' , [ $this , 'front_styles' ] );
            add_action( 'enqueue_block_assets' , [ $this , 'block_styles' ], 10 );
            add_action( 'enqueue_block_editor_assets' , [ $this , 'editor_styles' ], 5 );
        }

        public function editor_styles() {

            $enqueue = new LMSCB_EnqueueBuilder();
            $enqueue->setType('style')
					->setName( LMSCB_TEXTDOMAIN . '-editor-style' )
					->setPath( LMSCB_BUILD_URL . 'editor.css' )
					->setVer($this->editor_assets['version'])
					->setMedia('all')
					->enqueue();

        }

        public function block_styles() {
            $enqueue = new LMSCB_EnqueueBuilder();
            $enqueue->setType('style')
					->setName( LMSCB_TEXTDOMAIN . '-d-style' )
					->setPath( LMSCB_BUILD_URL . 'style-script.css' )
                    ->setDependencies(array(LMSCB_TEXTDOMAIN . '-editor-style'))
					->setVer($this->script_assets['version'])
					->setMedia('all')
					->enqueue();

            
        }

        public function front_styles() {

            $enqueue = new LMSCB_EnqueueBuilder();
            $enqueue->setType('style')
                    ->setName( LMSCB_TEXTDOMAIN . '-style' )
                    ->setPath( LMSCB_BUILD_URL . 'style-script.css' )
                    ->setVer($this->script_assets['version'])
                    ->setMedia('all')
                    ->enqueue();

            $enqueue = new LMSCB_EnqueueBuilder();
            $enqueue->setType('style')
                    ->setName( LMSCB_TEXTDOMAIN . '-editor-front-style' )
                    ->setPath( LMSCB_BUILD_URL . 'style-editor.css' )
                    ->setVer($this->script_assets['version'])
                    ->setMedia('all')
                    ->enqueue();

        }

        public function admin_styles() {
           
        }

        

        public static function instance() {
            return new LMSCB_Enqueue_styles();
        }

    }

    LMSCB_Enqueue_styles::instance()->init();