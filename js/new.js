window.onload=function(){
	showFunc();
	
	$(".fun").click(function(){
		var target=event.target.tagName.toUpperCase()!="I"?event.target:event.target.parentElement;
		$(".fun").removeClass("active");
		$(target).addClass("active");
		showFunc();
	});
}

function showFunc(){
	var details=$(".func");
	var data=$(".fun.active").data("detail");
	details.addClass("d-none");
	for(let detail of details){
		if(detail.getAttribute("name")==data){
			$(detail).removeClass("d-none");
		}
	}
}

