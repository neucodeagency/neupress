<html>
<head>
  <title><?php bloginfo( 'name' ); ?><?php wp_title( '|' ); ?></title>

  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="msapplication-TileColor" content="#ffffff">
  <meta name="msapplication-TileImage" content="<?= path('assets/images/ms-icon-144x144.png') ?>">
  <meta name="theme-color" content="#ffffff">

  <link rel="apple-touch-icon" sizes="57x57" href="<?= path('assets/images/apple-icon-57x57.png') ?>">
  <link rel="apple-touch-icon" sizes="60x60" href="<?= path('assets/images/apple-icon-60x60.png') ?>">
  <link rel="apple-touch-icon" sizes="72x72" href="<?= path('assets/images/apple-icon-72x72.png') ?>">
  <link rel="apple-touch-icon" sizes="76x76" href="<?= path('assets/images/apple-icon-76x76.png') ?>">
  <link rel="apple-touch-icon" sizes="114x114" href="<?= path('assets/images/apple-icon-114x114.png') ?>">
  <link rel="apple-touch-icon" sizes="120x120" href="<?= path('assets/images/apple-icon-120x120.png') ?>">
  <link rel="apple-touch-icon" sizes="144x144" href="<?= path('assets/images/apple-icon-144x144.png') ?>">
  <link rel="apple-touch-icon" sizes="152x152" href="<?= path('assets/images/apple-icon-152x152.png') ?>">
  <link rel="apple-touch-icon" sizes="180x180" href="<?= path('assets/images/apple-icon-180x180.png') ?>">
  <link rel="icon" type="image/png" sizes="192x192"  href="<?= path('assets/images/android-icon-192x192.png') ?>">
  <link rel="icon" type="image/png" sizes="32x32" href="<?= path('assets/images/favicon-32x32.png') ?>">
  <link rel="icon" type="image/png" sizes="96x96" href="<?= path('assets/images/favicon-96x96.png') ?>">
  <link rel="icon" type="image/png" sizes="16x16" href="<?= path('assets/images/favicon-16x16.png') ?>">
  <link rel="manifest" href="<?= path('assets/images/manifest.json') ?>">
  <link rel="stylesheet" type="text/css" href="<?= path('assets/stylesheets/main.min.css'); ?>">
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">

  <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>
<body>

<nav class="nav visible-lg">
  <?php
    wp_nav_menu( array(
      'theme_location' => 'header',
      'container'      => 'ul',
      'menu_class'     => 'nav-items',
      'exclude'        => '',
    ));
  ?>
</nav>

<nav class="nav hidden-lg">
  <?php
    wp_nav_menu( array(
      'theme_location' => 'header',
      'container'      => 'ul',
      'menu_class'     => 'nav-items',
      'exclude'        => '',
    ));
  ?>
</nav>
