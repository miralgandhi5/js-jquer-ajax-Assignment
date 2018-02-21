$(document).ready(function(){
	 function getData() {
            $.ajax({
                type:"GET",
                url:"https://reqres.in/api/users/10",
                dataType:"json",
                success: function(data) {
                    console.log(data);
                    $('#divAjax').html("id :" + data.data.id + "name : " + data.data.first_name + " last name: " + data.data.last_name + " avatar is <img src="+data.data.avatar+"></img>");

                },
                failure: function(error){
                    console.log(error);

                }

            })
        }

     
   getData();
})