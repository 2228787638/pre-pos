'use strict';

function countSameElements(collection) {
	var count =new Array();
  	//存储元素
  	var objArray =new Array();

  	//初始化
  	for(var i=0;i<collection.length;i++){
  		if(collection[i].indexOf('-')!=-1){
  			var str= collection[i].split('-');
  			//‘-‘前面的字符为统计的字符，’-‘后面的数字为初始个数
  			collection[i]=str[0];
  			//处理d-5中分离出来的d，下面会再计数一次，故先把数量-1
  			count[collection[i]]=str[1]-1;
  		}else{
  			//其他正常情况的初始个数都为0
  			count[collection[i]]=0;
  		}
  	} 
  	//遍历collection
  	for(var i=0;i<collection.length;i++){
  		//字符的个数都加1，此处也包括之前分离出来的d，这里会再计数一个
  		count[collection[i]]++;
  		if(objArray.indexOf(collection[i])==-1){
  			objArray.push(collection[i]);
  		}
  	} 
  	//输出的对象数组
  	var collectionArray = new Array();
	//遍历count数组
    for(var m=0;m<objArray.length;m++){
  	  var obj = new Object();
  	  obj.key=objArray[m];
  	  obj.count=count[objArray[m]];
  	  collectionArray.push(obj);
    }

  	return collectionArray;
}
