index.html : content/input.json jade/index.jade stylesheets/style.css
	jade jade/index.jade -O content/input.json -o .

stylesheets/style.css : stylus/style.styl
	stylus stylus/style.styl -o stylesheets
