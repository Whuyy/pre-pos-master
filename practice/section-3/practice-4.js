function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var new_count;
  var collection_c = [
       {key:"a",count:0},
       {key:"e",count:0},
       {key:"h",count:0},
       {key:"t",count:0},
       {key:"f",count:0},
       {key:"c",count:0},
       {key:"g",count:0},
       {key:"b",count:0},
       {key:"d",count:0}
       ];
  for (var x = 0; x < collection_a.length; x++)
  {
      for ( var y = 0; y < collection_c.length; y++)
      {        
          if( collection_a[x].length > 1 && collection_a[x][0] === collection_c[y].key )
             collection_c[y].count = parseInt(collection_c[y].count + collection_a[x][2]);        
             
          else if( collection_a[x] === collection_c[y].key)
             collection_c[y].count ++;
      }
  }
  
   for (var x = 0; x < collection_c.length; x++)
   {
       for (var y = 0; y < object_b['value'].length; y++)
       {
           if ( collection_c[x]['key'] === object_b['value'][y])
           {
               new_count = Math.floor( collection_c[x].count / 3);          
               if(new_count > 0)
                collection_c[x].count = collection_c[x].count - new_count;
           }
       }
   }
   return collection_c;
}
