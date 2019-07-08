'use strict';

function countSameElements(collection) {
 	var count =new Array();
  	//存储元素
  	var objArray =new Array();

  	//初始化
  	for(var i=0;i<collection.length;i++){
  		//以下为过滤数组中的特殊字符串
  		//过滤’-‘
  		if(collection[i].indexOf('-')!=-1){
  			var str= collection[i].split('-');
  			//‘-‘前面的字符为统计的字符，’-‘后面的数字为初始个数
  			collection[i]=str[0];
  			//处理字符串中分离出来的字符，下面会再计数一次，故先把数量-1
  			count[collection[i]]=str[1]-1;
  		}else if(collection[i].indexOf(':')!=-1){
  			//过滤’:‘
  			var str= collection[i].split(':');
  			//‘：‘前面的字符为统计的字符，’：‘后面的数字为初始个数
  			collection[i]=str[0];
  			//处理:中分离出来的字符，下面会再计数一次，故先把数量-1
  			count[collection[i]]=str[1]-1;
  		}else if(collection[i].indexOf('[')!=-1&&collection[i].indexOf(']')!=-1){
  			//首先把前一部分分出来
  			var str= collection[i].split('[');
  			collection[i]=str[0];
  			//其次把后面一部分分出来
  			var str1= str[1].split(']');
  			//处理[]中分离出来的元素，下面会再计数一次，故先把数量-1
  			if(count[collection[i]]!=0){
  				count[collection[i]]=count[collection[i]]+Number(str1[0])-1;
  			}else{
  				count[collection[i]]=Number(str1[0])-1;
  			}
  			
  		}else{
  			//其他正常情况的初始个数都为0
  			if(count[collection[i]]){
  				count[collection[i]]=count[collection[i]]+0;
  			}else{
  				count[collection[i]]=0;
  			}
  		}
  	} 
  	//遍历collection
  	for(var i=0;i<collection.length;i++){
  		//字符的个数都加1，此处也包括之前分离出来的，这里会再计数一个，因此上面需要-1
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
  	  obj.name=objArray[m];
  	  obj.summary=count[objArray[m]];
  	  collectionArray.push(obj);
    }

  	return collectionArray;
}
