
	function test(){
		var h = document.getElementById('h');
		var m = document.getElementById('m');
		var s = document.getElementById('s');
		var myDate1 = new Date(2019,10,3,10,0,0);
		var time1=myDate1.getTime();

		var myDate2 = new Date();
		var time2=myDate2.getTime();

		var time=time1-time2;

		var secNum=1000;
		var minNum=60*secNum;
		var hourNum=60*minNum;
		var dayNum=24*hourNum;

		var day =Math.floor(time/dayNum);
		var hour = Math.floor(time%dayNum/hourNum);
		var min = Math.floor(time%hourNum/minNum);
		var sec = Math.floor(time%minNum/secNum);

		var str ='距离：2019/11/16 还有'+day+'天 '+ hour+'小时'+min+'分'+sec+'秒';
	    h.innerHTML= oddo(hour);
	    m.innerHTML= oddo(min);
	    s.innerHTML= oddo(sec);
	}
	setInterval('test()',1000)

function oddo(n){
	if (n<10){
		return "0"+n;
	}
	else{
		return n;
	}
	
}