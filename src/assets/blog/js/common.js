//登录函数
function login(user,pwd){
	if(empty(user) || empty(pwd)){
		alert(user+'...'+pwd)
	}else{
		alert("手机号密码均不能为空！") 
    	return false; 
	}
}


//是否为空
function empty(val){
	if(val != ''){
   		return val;
	}else{
		return false;		
	}
}

//检查类型
function regCheck(val,type){

}

