<?php
class LMSCB_Enqueue_scripts
{

	function __construct()
	{
		$this->editor_assets = include LMSCB_BUILD_PATH . 'editor.asset.php';
		$this->script_assets = include LMSCB_BUILD_PATH . 'script.asset.php';
	}

	public function init()
	{
		add_action('enqueue_block_editor_assets', [$this, 'editor_scripts']);
		add_action('admin_enqueue_scripts', [$this, 'admin_scripts']);
		add_action('wp_enqueue_scripts', [$this, 'front_scripts']);
		//add_action('init', [$this, 'script_translations']);
	}

	public function script_translations()
	{
		wp_set_script_translations(LMSCB_TEXTDOMAIN . '-s-main-script', LMSCB_TEXTDOMAIN);
		wp_set_script_translations(LMSCB_TEXTDOMAIN . '-s-editor-script', LMSCB_TEXTDOMAIN);
	}

	public function editor_scripts()
	{
		$enqueue = new LMSCB_EnqueueBuilder();
		$enqueue->setType('script')
			->setName(LMSCB_TEXTDOMAIN . '-s-editor-script')
			->setPath(LMSCB_BUILD_URL . 'editor.js')
			->setDependencies($this->editor_assets['dependencies'])
			->setVer($this->editor_assets['version'])
			->setInFooter(true)
			->enqueue();
		$enqueue->localizeScript(array(
			'LMSCB_URLs' => LMSCB_URLs::instance()->get_array(),
			'LMSCB_post_info' => LMSCB_Post::instance()->get_posts_info()
		));
	}

	public function front_scripts()
	{
		$enqueue = new LMSCB_EnqueueBuilder();
		$enqueue->setType('script')
			->setName(LMSCB_TEXTDOMAIN . '-s-main-script')
			->setPath(LMSCB_BUILD_URL . 'script.js')
			->setDependencies($this->script_assets['dependencies'])
			->setVer($this->script_assets['version'])
			->setInFooter(true)
			->enqueue();
		$enqueue->localizeScript(array(
			'LMSCB_URLs' => LMSCB_URLs::instance()->get_array(),
			'LMSCB_post_info' => LMSCB_Post::instance()->get_posts_info()
		));
	}

	public function admin_scripts()
	{
	}

	public static function instance()
	{
		return new LMSCB_Enqueue_scripts();
	}
}

LMSCB_Enqueue_scripts::instance()->init();
