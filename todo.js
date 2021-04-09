var uncheckCount = 0

function todoDisplay() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhr.onload = function()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            document.getElementById("head").innerHTML = "List of Tasks";
            var response = JSON.parse(this.responseText);
            var output = "<table id=myTable >"+
                        "<tr>"+
                            "<th>"+"User ID"+"</th>"+
                            "<th>"+"ID"+"</th>"+
                            "<th>"+"Task"+"</th>"+
                            "<th>"+"Status of Completion"+"</th>"+

                        "</tr>";
                                
           for (var j=0; j<response.length; j++)
           {
               output = output+
                            "<tr>"+
                                "<td>"+response[j].userId+"</td>"+
                                "<td>"+response[j].id+"</td>"+
                                "<td>"+response[j].title+"</td>";

                if(response[j].completed == true)
                {
                    output = output+
                                `<td><input type = "checkbox" checked disabled=true></td></tr>`;
                }
                
                else 
                {
                    uncheckCount = uncheckCount+1;
                    output = output + 
                    `<td><input type="checkbox" onchange= "checkTick();" id = "check${uncheckCount}" ></td>
                    </tr>`;
                }
                                

           }   

           output = output + "</table>";
           document.getElementById("demo").innerHTML = output;


        }
    };

    xhr.send();


};

function checkTick(){
    var promise = new Promise(function(resolve,reject){
        checkCount = 0;
        for(i=1; i<=uncheckCount; i++){
            if(document.getElementById("check"+i).checked == true){
                checkCount = checkCount+1;
            }

            if(checkCount == 5){
                resolve();
            }

            else {
                continue;
            }
        }

    });

    promise.then(function () {
        setTimeout(function () {
            alert("Congrats! 5 Tasks have been Successfully Completed!");
        }, 10)
    });
}