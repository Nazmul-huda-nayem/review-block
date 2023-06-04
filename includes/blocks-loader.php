<?php
/**
 * @package BDT Blocks
 * Blocks Loader
 */

// Exit if accessed directly.
if ( !defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Blocks Loader Class
 */
class BDT_REVIEW_BLOCKS_LOADER {

    /**
     * Constructor
     */
    public function __construct() {
        
         // Register Blocks
        add_action( 'init', [ $this, 'register_blocks' ] );
        
        //Register Block Category
        if ( version_compare( BDT_REVIEW_WP_VERSION, '5.8', '>=' ) ) {
            add_filter( 'block_categories_all', [ $this, 'register_review_block_category' ], 99999, 2 );
        } else {
            add_filter( 'block_categories', [ $this, 'register_review_block_category' ], 99999, 2 );
        }

        // Enqueue Inline style on render block
        add_filter( 'render_block', [ $this, 'generate_inline_style_on_render_block' ], 10, 2 );

        // enqueue editor assets
        add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_editor_assets' ] );

        // enqueue assets for frontend
        add_action( 'enqueue_block_assets', [ $this, 'enqueue_assets' ] );
    }

    /**
     * Enqueue Editor Assets
     */
    public function enqueue_editor_assets(){
        wp_enqueue_script(
            'bdt-blocks-global-js',
            BDT_REVIEW_ADMIN_URL . './dist/global.js',
            [],
            BDT_REVIEW_VERSION,
            true
        );
    }

    /**
     * Enqueue Assets
     */
    public function enqueue_assets(){
        if( ! is_admin() ){
            wp_enqueue_script( 'bdt-review-blocks-rater', BDT_REVIEW_ADMIN_URL . './includes/assets/js/rater.min.js', ['jquery'], BDT_REVIEW_VERSION, true);
            wp_enqueue_script( 'bdt-review-blocks-frontend', BDT_REVIEW_ADMIN_URL . './includes/assets/js/plugin.js', ['jquery'], BDT_REVIEW_VERSION, true);
        }
        
    }

    /**
     * Blocks Category
     */
    public function register_review_block_category( $categories, $post ) {
        return array_merge(
            [
                [
                    'slug' => 'bdt-blocks',
                    'title' => __( 'BDThemes Review Block', 'bdt-review-blocks' )
                ],
            ],
            $categories
        );
    }

    /**
     * Load Blocks
     */
    public function register_blocks() {
        
        // get all blocks from includes/blocks/blocks.php
        require_once BDT_REVIEW_DIR_PATH . './includes/blocks/blocks.php';

        // Register Blocks
        if( ! empty( $bdt_review_blocks ) && is_array( $bdt_review_blocks ) ) {
            foreach( $bdt_review_blocks as $block ) {
                $this->register_single_block( $block );
            }
        }

    }

    /**
     * Register Single Block
     */
    public function register_single_block( $block ) {
        register_block_type(
            BDT_REVIEW_DIR_PATH . './build/blocks/' . $block['name'],
            isset( $block['args'] ) ? $block['args'] : []
        );
        
    }

    /**
     * Register Inline Style
     */
    function generate_inline_style_on_render_block($block_content, $block ) {

        if (isset($block['blockName']) && str_contains($block['blockName'], 'bdt/')) {
            if (isset($block['attrs']['blockStyle'])) {

                $style = $block['attrs']['blockStyle'];
                $handle = isset( $block['attrs']['uniqueId'] ) ? $block['attrs']['uniqueId'] : 'bdt-review-blocks';

                // convert style array to string
                if ( is_array($style) ) {
                    $style = implode(' ', $style);
                }

                // minify style to remove extra space
                $style = preg_replace( '/\s+/', ' ', $style );

                wp_register_style(
                    $handle,
                    false,
                    [],
                    BDT_REVIEW_VERSION
                );
                wp_enqueue_style( $handle );
                wp_add_inline_style( $handle, $style );

            }
        }
        return $block_content;
    }

}

new BDT_REVIEW_BLOCKS_LOADER();