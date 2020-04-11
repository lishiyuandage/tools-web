window.onload=function(){
	showFunc();
	
	$(".func").click(function(){
		var target=event.target.tagName.toUpperCase()!="I"?event.target:event.target.parentElement;
		$(".func").removeClass("active");
		$(target).addClass("active");
		showFunc();
	});
	
	$("form").submit(function(){
		var ele=event.target;
		$.get({
			url:ele.action,
			data:{
				"url":ele.elements["url"],
				"data":ele.elements["data"]
			},
			success:function(data){
				if(data.state==1){
					if(typeof data.data!="undefined" && data.data.length > 0){
						$(".result").innerHTML=data.data;
					}else{
						$(".result").innerHTML=data.data;
					}
				}else{
					$(".result").innerHTML=data.message;
				}
			}
		});
		return false;
	});
	$("select[name=type]").change(function(){
		var data=event.target.value;
		if(data=="编码"){
			event.target.parentElement.parentElement.parentElement.setAttribute("action","thunder/encode");
		}else{
			event.target.parentElement.parentElement.parentElement.setAttribute("action","thunder/decode");
		}
	});
}

function showFunc(){
	var forms=document.forms;
	var data=$(".func.active").data("fun");
	$(forms).addClass("d-none")
	forms[data].setAttribute("class","");
}

