function count_same_elements(collection) {
  //在这里写入代码
 var new_array = [];
 var new_collection = [ {name:"a",summary:0},{name:"e",summary:0},{name:"h",summary:0},{name:"t",summary:0},{name:"f",summary:0},{name:"c",summary:0},{name:"g",summary:0},{name:"b",summary:0},{name:"d",summary:0}];
  for (var x = 0; x < collection.length; x++)
  {
      for ( var y = 0; y < new_collection.length; y++)
      {
          if( collection[x] === new_collection[y].name )
                 new_collection[y].summary= Number(new_collection[y].summary + 1 );
          else if(collection[x].length > 1)
          {                               
              new_array = collection[x].split(":");
              if( new_array[0] === new_collection[y].name && new_array.length > 1)             
                    new_collection[y].summary += Number(new_array[1]);            
              
              new_array = collection[x].split("-");
              if( new_array[0] === new_collection[y].name && new_array.length > 1)          
                   new_collection[y].summary += Number(new_array[1]);
             
              new_array = collection[x].split("[");
              if( new_array[0] === new_collection[y].name && new_array.length > 1)
              {
                 new_array= new_array[1].split("]");           
                 new_collection[y].summary += Number(new_array[0]);
              }                            
          }      
      }
  }
  return new_collection;
}
