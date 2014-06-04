
var mMAX_CountItem=5;


  function ctlNews() {
  	  this.name = 'ctlNews';
  }
  
	ctlNews.prototype.load_rss = function(  surl ) {
		var items  =new Array();
console.log(  'surl=' + surl );
		$.ajax({
		    url: surl,
		    type: 'get',
		    dataType: 'xml',
		    timeout: 5000,
		    success: function(xml, status) {
		        if (status === 'success') {
		            var row = 0;
		            var data = [];
		            var nodeName;
		            $(xml).find('item').each(function() {
		                data[row] = {};
		                //get-childre
		                $(this).children().each(function() {
		                    //nodeName
		                    nodeName = $(this)[0].nodeName;
		                    data[row][nodeName] = {};
		                    // sttr
		                    attributes = $(this)[0].attributes;
		                    for (var i in attributes) {
		                        data[row][nodeName][attributes[i].name] = attributes[i].value;
		                    }
		                    //text
		                    data[row][nodeName]['text'] = $(this).text();
		                });
		                row++;
		            });
		            var ict= 0;
		            for (i in data) {
		            	var itm= new Item( );
		            	itm.title= data[i].title.text;
		            	itm.url  = data[i].link.text;
		            	if(ict < mMAX_CountItem){
			            	items[i] =itm;
console.log( 'lnk='+ itm.title );
console.log( 'url='+ itm.url );
		            	}
		            	ict++;
		            }
		        } //if_stat_success.
				$(this).delay( 500 ).queue(function() {
					disp_news(items);
					$(this).dequeue();
				});
		    }
		});

	};
  
  ctlNews.prototype.tstfunc = function( ) {
  	  console.log('tst_func');
  };

	
//
//function
//
function disp_news(items)
{
	for(var i = 0; i < items.length ; i++){
		var body= $('table#id-table1');
		var trObj =  $('<tr></tr>');
		
		var tdObj =  $('<td></td>');
		var a_tag =  $('<a href="'+ items[i].url +'" target="_blank">'+ items[i].title +'</a>');
		
		var tdObj02 =  $('<td align="right"></td>');
		var sAtag02 =  '<a href="'+ items[i].url +'" target="_blank">';
		    sAtag02 += ' <button class="btn btn-default" style="margin-left:10px;">';
		    sAtag02 += '   <i class="glyphicon glyphicon-chevron-right"></i>';
		    sAtag02 += ' </button>';
		    sAtag02 += '</a>';
		    	
		tdObj.append(a_tag);
		tdObj02.append( $(sAtag02) );
			
		trObj.append(tdObj);
		trObj.append(tdObj02);
		body.append(trObj);
	}
}
 
 