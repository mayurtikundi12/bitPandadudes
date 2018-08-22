//get data for the table from backend
//next we have to add the data to the table by creating new rows
//for now iterating the object maybe json


var tableData = { array : [
  {date : '1/5/2018',
    title :'webdev',
    amount :50 ,
    deadline :'5/5/2018',
    status: 'done'
  },  {
      date : '1/5/2018',
      title :'webdev',
      amount :50 ,
      deadline :'20/4/2018',
      status: 'done'
    },
    {
      date : '1/5/2018',
      title :'java',
      amount :50 ,
      deadline :'10/4/2018',
      status: 'done'
    },  {
        date : '1/5/2018',
        title :'webdev',
        amount :100 ,
        deadline :'10/4/2018',
        status: 'waiting'
      }
      ,  {
          date : '1/5/2018',
          title :'security',
          amount :50 ,
          deadline :'22/5/2018',
          status: 'waiting'
        }
]
}

//logic for displaying in table once we have the data from the backend
//get the table body  element
var tbody = document.getElementById('tbody_id_order_data') ;
var tarray = tableData['array']
for (var innerObj in tarray) {
  //creating the row element
  var table_row = document.createElement('tr');
  tbody.appendChild(table_row);
  table_row.setAttribute('id',"tr_id_orders")
  var innerdata = tarray[innerObj]
  //for loop for iterating data
  for (var data in innerdata) {
    //creating td element and appending it to the table row
    var table_data = document.createElement('td');
    table_data.innerText = innerdata[data] ;
    table_row.appendChild(table_data)
  }
}
