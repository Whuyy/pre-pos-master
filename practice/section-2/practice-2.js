function count_same_elements(collection) {
  //在这里写入代码
   var collectionx = [ {key:"a",count:0},{key:"e",count:0},{key:"h",count:0},{key:"t",count:0},{key:"f",count:0},{key:"c",count:0},{key:"g",count:0},{key:"b",count:0},{key:"d",count:0}];
  for (var x = 0; x < collection.length; x++)
  {
      for ( var y = 0; y < collectionx.length; y++)
      {
          if( collection[x] === collectionx[y].key )
             collectionx[y].count ++;
          else if (collection[x][0] == collectionx[y].key && collection[x].length > 1)
             collectionx[y].count = parseInt(collectionx[y].count + collection[x][2]);
      }
  }
  return collectionx;
}
