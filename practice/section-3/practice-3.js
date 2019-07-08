'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var count =new Array();
    //存储元素
    var objArray =new Array();

    //初始化
    for(var i=0;i<collectionA.length;i++){
      count[collectionA[i]]=0;
    } 
    //遍历collection
    for(var i=0;i<collectionA.length;i++){
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
