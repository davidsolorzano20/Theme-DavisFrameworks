#!/usr/bin/env bash

echo 'Create Index.html'
touch index.html
echo '<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DavisTheme</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <style type="text/css">
    html, body {
      background-color: #fff;
      color: #636b6f;
      font-weight: 100;
      height: 100vh;
      margin: 0;
    }
    h1.texto {
      font-size: 8em;
      text-align: center;
      margin-top: 20%;
      text-blink: 0.1px;
    }
  </style>

</head>
<body>
<div class="container">
  <div class="container-fluid">

  </div>
  <div class="row">
    <h1 class="texto">DavisTheme</h1>
  </div>
</div>

<script src="assets/libraries/jquery.min.js"></script>
<script src="assets/libraries/bootstrap.min.js"></script>
<script src="assets/libraries/semantic.min.js"></script>
<script src="assets/libraries/freewall.js"></script>
</body>
</html>' >> index.html

echo 'Rename Semantic css to scss and font-awesome'
mv bower_components/font-awesome/css/font-awesome.min.css bower_components/font-awesome/css/_awesome.scss
mv bower_components/semantic/dist/semantic.min.css bower_components/semantic/dist/_semantic.scss
echo 'Add Configuration Atomic Design'
mkdir css
mkdir assets
cd assets
touch style.scss
echo '@import "../bootstrap-sass/sass/bootstrap";
@import "../bootstrap-sass/sass/awesome.scss";
@import "semantic/semantic.scss";
@import "pattern-lab/00_atoms/01-images";
@import "pattern-lab/01_molecules/01-navigation";
@import "pattern-lab/02_organisms/01-article";
@import "pattern-lab/03_templates/01-landing-page";' >> style.scss

mkdir images
mkdir js
mkdir pattern-lab
cd pattern-lab

mkdir 00_atoms
cd 00_atoms
touch _01-images.scss
cd ..

mkdir 01_molecules
cd 01_molecules
touch _01-navigation.scss
cd ..

mkdir 02_organisms
cd 02_organisms
touch _01-article.scss
cd ..

mkdir 03_templates
cd 03_templates
touch _01-landing-page.scss
