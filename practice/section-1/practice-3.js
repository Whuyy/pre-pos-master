var collection_c = [];
function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  
  for( var x = 0; x < collection_a.length; x++)
  {
     isEqual(collection_a[x],object_b)
  }
  
   return collection_c;
}

function isEqual(item,object_b)
{
    for ( var y = 0; y < object_b['value'].length; y++)
      {
          if ( item === object_b['value'][y] )
             collection_c.push(item);
      }
}