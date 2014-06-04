//top.js
//name= strlist

var mItems = new Array();


onload = function() {
	init_proc();
	
	document.querySelector('#id-a-get').onclick = function() {
		click_getRss();
	}
	
	
}

//
//function
//
function init_proc()
{
	chrome.storage.local.get( 'strlist' ,  function(value) {
		if(value && value.strlist) {
console.log( value.strlist );
console.log( 'len='+ value.strlist.length );
		  mItems = value.strlist;
		}
	});
}

function click_getRss()
{
	var surl= 'http://www3.nhk.or.jp/rss/news/cat0.xml';
	var ctl=new ctlNews();
	ctl.load_rss(surl);
}


