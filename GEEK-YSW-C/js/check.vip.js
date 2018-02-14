(function($m,xhr,$,layer,base64,config){
	
	var a = base64.decode(config.base_str);
	console.log(a);
	var md5 =$.md5('a');
	console.log(md5); 
	setInterval("check()"
		,10000)
	$m.plusReady(function(){
		
	});
	
})(mui, naxhr, jQuery,layer,cbase64,config);
var play_info_key = "play_info_key";
function check(){
		var a = getAndAddPlayCount();
		if(a>config.play_count){
			console.log(config.play_time_end_ms+"ms内最多只能看"+(config.play_count)+"次");
		}
		console.log(a);
	}
	function getNew(){
		var playInfoJsonNew = {count:1,time:new Date().getTime()};
		return JSON.stringify(playInfoJsonNew);
	}
	
	function getAndAddPlayCount(){
		var play_info = localStorage.getItem(play_info_key);
		if(play_info==null){
			localStorage.setItem(play_info_key,getNew());
			return 1;
		}
		var playInfoJson = JSON.parse(play_info);
		if(new Date().getTime()-playInfoJson.time>config.play_time_end_ms){
			localStorage.setItem(play_info_key,getNew());
			return 1;
		}
		playInfoJson.count = playInfoJson.count+1;
		localStorage.setItem(play_info_key,JSON.stringify(playInfoJson));
		return playInfoJson.count;
	}
			