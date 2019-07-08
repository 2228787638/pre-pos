'use strict';

function collectSameElements(collectionA, collectionB) {
  var collection=new Array();
  for(var z=0;z<collectionA.length;z++){
    for(var i=0;i<collectionB.length;i++){
      for(var j=0;j<collectionB[i].length;j++){
        if(collectionA[z]==collectionB[i][j]){
          collection.push(collectionA[z]);
        }
      }
    }
  }
  return collection;
}
