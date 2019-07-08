'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var array=objectB.value;
	for(var i=0;i<array.length;i++){
		for(var j=0;j<collectionA.length;j++){
			if(collectionA[j].key==array[i]){
				collectionA[j].count=collectionA[j].count-parseInt(collectionA[j].count/3);
			}
		}
	}
  	return collectionA;
}
