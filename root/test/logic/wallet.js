// get the wallet balance from the backend and put it in wallet Balance
//get the wallet table data and display it into the table



//getting balance from the backend
//placing the balance value in the balance para



var tableData = { array : [
  {date : '1/5/2018',
    title :'webdev',
    amount :50 ,
    status: 'done'
  },  {
      date : '1/5/2018',
      title :'webdev',
      amount :50 ,
      status: 'done'
    },
    {
      date : '1/5/2018',
      title :'java',
      amount :50 ,
      status: 'done'
    },  {
        date : '1/5/2018',
        title :'webdev',
        amount :100 ,
        status: 'waiting'
      }
      ,  {
          date : '1/5/2018',
          title :'security',
          amount :50 ,
          status: 'waiting'
        }
]
}




//logic for displaying in table once we have the data from the backend
//get the table body  element
var tbody = document.getElementById('tbody_id_wallet_data') ;
var tarray = tableData['array']
for (var innerObj in tarray) {
  //creating the row element
  var table_row = document.createElement('tr');
  tbody.appendChild(table_row);
  table_row.setAttribute('class',"tr_id_wallet")
  var innerdata = tarray[innerObj]
  //for loop for iterating data
  for (var data in innerdata) {
    //creating td element and appending it to the table row
    var table_data = document.createElement('td');
    table_data.innerText = innerdata[data] ;
    table_row.appendChild(table_data)
  }
}
