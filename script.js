var selectedText;
$(document).ready(function(){
	$(this).dblclick(function(){
		 selectedText = getSelectionText();
		 $.ajax({
		 	type: 'Post',
		 	data: {selectedText:selectedText},
		 	url: 'process.php',

		 }).success(function(data){
		 	tooltipa(data);
		 })
	})

	
	
})
	
function getSelectionText() {
	    var text = "";
	    if (window.getSelection) {
	        text = window.getSelection().toString();
	    } else if (document.selection && document.selection.type != "Control") {
	        text = document.selection.createRange().text;
	    }
	    return text;
	}
function tooltipa(data){
	if(selectedText){
		$('.para').qtip({ // Grab some elements to apply the tooltip to
	    content: {
	        text: data
	    },
	    solo : false
	});

	}
}
