function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var new_count;
   for (var x = 0; x < collection_a.length; x++)
   {
       for (var y = 0; y < object_b['value'].length; y++)
       {
           if ( collection_a[x]['key'] === object_b['value'][y])
           {
               new_count = Math.floor( collection_a[x].count / 3);          
               if(new_count > 0)
                collection_a[x].count = collection_a[x].count - new_count;
           }
       }
   }
   return collection_a;
}
