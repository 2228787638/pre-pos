'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var count =new Array();
  	//存储元素
  	var objArray =new Array();

  	//初始化
  	for(var i=0;i<collectionA.length;i++){
  		if(collectionA[i].indexOf('-')!=-1){
  			var str= collectionA[i].split('-');
  			//‘-‘前面的字符为统计的字符，’-‘后面的数字为初始个数
  			collectionA[i]=str[0];
  			//处理d-5中分离出来的d，下面会再计数一次，故先把数量-1
  			count[collectionA[i]]=str[1]-1;
  		}else{
  			//其他正常情况的初始个数都为0
  			count[collectionA[i]]=0;
  		}
  	} 
  	//遍历collection
  	for(var i=0;i<collectionA.length;i++){
  		//字符的个数都加1，此处也包括之前分离出来的d，这里会再计数一个
  		count[collectionA[i]]++;
  		if(objArray.indexOf(collectionA[i])==-1){
  			objArray.push(collectionA[i]);
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

    var objArray = objectB.value;
    for(var i=0;i<objArray.length;i++){
		for(var j=0;j<collectionArray.length;j++){
			if(collectionArray[j].key==objArray[i]){
				collectionArray[j].count=collectionArray[j].count-parseInt(collectionArray[j].count/3);
			}
		}
	}
    return collectionArray;
}
