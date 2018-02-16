(function($m,$){
	//checkTime();
	
	//var md5 =$.md5('a');
	//console.log(md5); 
	
	setTimeout("checkCdInfo()"
		,10000);
	$m.plusReady(function(){
		
	});
	
	
})(mui, jQuery);
var onlineConfig = cache.getJSON("onlineConfig");
var play_info_key = "play_info_key";
function checkCdInfo(){
		if($("#video").length<=0){
			return true;
		}
		var cdInfo = JSON.parse(localStorage.getItem("cd_info"));
		if(cdInfo==null){
			cdInfo={endTime:-1};
		}
		//console.log(cdInfo.endTime);
		//console.log(cdInfo.endTime&&cdInfo.endTime>new Date().getTime());
		if(cdInfo.endTime>new Date().getTime()){
			return true;
		}
		//return true;
		var a = getAndAddPlayCount();
		console.log(a);
		if(a>onlineConfig.novip.count){
			checkPlay = layer.open({
			  content: '未激活的账户一天内最多只能看'+onlineConfig.novip.count+'次',
			  //style:'height:250px',
			  btn: '马上激活',
			  shadeClose: false,
			  yes: function(){
			  	window.location.href="login.html";
			  }
			});
		}
		return false;
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
		if(new Date().getTime()-playInfoJson.time>1000*60*60*24){
			localStorage.setItem(play_info_key,getNew());
			return 1;
		}
		playInfoJson.count = playInfoJson.count+1;
		localStorage.setItem(play_info_key,JSON.stringify(playInfoJson));
		return playInfoJson.count;
	}
	var start_size = 10;
	var start_len = 32;
	function getVipInfoJSON(code,mny){
		var code = (code+mny+"9527");
		console.log(code);
		var newCode = $.md5(crypt.decode(code).substr(start_size,start_len));
		var vipCode = newCode.substr(mny/10,8);
		//console.log(vipCode);
		return vipCode;
		
	}
			