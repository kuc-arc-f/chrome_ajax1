//top.js


onload = function() {
	document.querySelector('#id-a-get').onclick = function() {
		click_getRss();
	}
	
}

//
//function
//

function click_getRss()
{
	var surl= 'http://www3.nhk.or.jp/rss/news/cat0.xml';
	var ctl=new ctlNews();
	ctl.load_rss(surl);
}


