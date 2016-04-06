var collection_c = [];
function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  
  for( var x = 0; x < collection_a.length; x++)
  {
     isEqual(collection_a[x],collection_b[0])
  }
  
   return collection_c;
}

function isEqual(item,collection_b)
{
    for ( var y = 0; y < collection_b.length; y++)
      {
          if ( item === collection_b[y] )
             collection_c.push(item);
      }
}