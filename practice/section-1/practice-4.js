'use strict';

function collectSameElements(collectionA, objectB) {
  var collection =new Array();
  var keys=new Array();
  var objectM=null;
  objectM=objectB.value;
  for(var i=0;i<collectionA.length;i++){
    keys.push(collectionA[i].key);
  }
  for(var m=0;m<keys.length;m++){
    for(var j=0;j<objectM.length;j++){
      if(objectM[j]==keys[m]){
        collection.push(keys[m]);
      }
    }
  }
  return collection;
}
