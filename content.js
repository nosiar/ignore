
var blacklist = ["강윤구"];

function removeComments() {
	var comments = $(".CommentList .User");

	comments.each(function() {
		if( $.inArray($(this).text(), blacklist ) > -1)
			$(this).parent().parent().remove();
	});
	
	var uls = $(".CommentList ul");

	uls.each(function() {
	   	if($(this).children().length == 0)
			$(this).remove();
	});
}

function removeArticle() {
	var writers = $(".ListWriter");
	
	writers.each(function() {
		if( $.inArray($(this).text(), blacklist ) > -1)
			$(this).parent().remove();

	});
}

removeArticle();
removeComments();

$("#Comment").bind('DOMNodeInserted', function (event) {
	var user = $(event.target).find(".User");
	if( $.inArray(user.text(), blacklist) > -1)
		user.parent().parent().remove();	
});
