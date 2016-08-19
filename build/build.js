let fs = require('fs');

let writeHtml = function(fileName, title) {
	let header = fs.readFileSync('header.html', 'utf8').replace('ID_TITLE', title);
	let footer = fs.readFileSync('footer.html', 'utf8');
	let html = fs.readFileSync(fileName, 'utf8');
	fs.writeFileSync('../' + fileName, header + html + footer);
}

writeHtml('index.html', 'Armory');
writeHtml('news.html', 'News');
writeHtml('gallery.html', 'Gallery');
writeHtml('buy.html', 'Buy');
writeHtml('support.html', 'Support');
