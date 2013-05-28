$(document).ready(function() {
	$('#url_input').keypress(function(e) {
		switch(e.which) {
			case 10:
			case 13:
				var url = this.value;
				if(!(/^http:\/\//.test(url))) url = 'http://' + url;
				this.value = url;
				$('iframe').attr('src', this.value);
				break;
			default: break;
		}
	});
	
	$('#debug_input').keypress(function(e) {
		switch(e.which) {
			case 10:
			case 13:
				console.log(eval($(this).val()));
				break;
			default: break;
		}
	});
	
	$(this).click(function(e) {
		/*var $div = $('.frame'), $frame = $('iframe');
		alert(JSON.stringify($div.offset()) + ', ' + $div.width() + 'x' + $div.height() + "\n"
			+ JSON.stringify($frame.offset()) + ', ' + $frame.width() + 'x' + $frame.height());
		return;//*/
		var $contents = $('iframe').contents();
		console.log('iframe has ' + $contents.length);
		console.log($contents.find('*:not(body html)').length + ' lower tags');
		var selection = window.getSelection();
		console.info(selection);
		var range = selection.getRangeAt(0);
		console.info(range);
		var firstNode = range.startContainer;
		alert('You clicked on a ' + firstNode.tagName + '[.' + firstNode.className + ']');
	});
	
});
