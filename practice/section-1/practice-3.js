'use strict';

function collectSameElements(collectionA, objectB) {
  var collection =new Array();
  var objectM=null;
  for(var i=0;i<collectionA.length;i++){
    objectM=objectB.value;
    for(var j=0;j<objectM.length;j++){
      if(objectM[j]==collectionA[i]){
        collection.push(collectionA[i]);
      }
    }
  }
  return collection;
}
