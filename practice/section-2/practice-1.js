'use strict';

function countSameElements(collection) {
    var count =new Array();
    //存储元素
    var objArray =new Array();

    //初始化
    for(var i=0;i<collection.length;i++){
      count[collection[i]]=0;
    } 
    //遍历collection
    for(var i=0;i<collection.length;i++){
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
