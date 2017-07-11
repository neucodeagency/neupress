<?php

add_theme_support( 'post-thumbnails' );

function path($file_path) {
  return '/wp-content/themes/neupress/' . $file_path;
}

function import_path($file_path) {
  return get_template_part($file_path);
}

register_nav_menus(
  array(
    "header" => ("Header Menu"),
    "footer" => ("Footer Menu")
  )
);

?>
