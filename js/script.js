var table = document.getElementById("table");
var months = document.getElementById("months");
var monthNames = [ "Month","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var ulDays=document.getElementById("weekDays");
var days=document.getElementById("days");
var weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
function fillYears() {
    for (i = 1900; i < 2018; i++) {
        var option = document.createElement("option");
        option.text = i;
        option.value = i;
        years.appendChild(option);
    }


}
function fillMonths() {

    for (j =0 ; j <monthNames.length; j++) {
        var optionMonth = document.createElement("option");

        optionMonth.text = monthNames[j];
        optionMonth.value = monthNames[j];
        months.appendChild(optionMonth);

    }
    
}
function daysCreate(count) {

    table.textContent="";
    table.style.width = '100%';
    table.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    var tr = document.createElement("tr");
    for(i=0;i<weekDays.length;i++){
        var th = document.createElement("th");
        tr.appendChild(th);
        th.textContent = weekDays[i];
    }
    table.appendChild(tr);

    var newTr = document.createElement("tr");
    var newTr1 = document.createElement("tr");

    for(i=0;i<count;i++){

        if(i%7 == 0){

            var newTr1 = document.createElement("tr");

            table.appendChild(newTr1);
        }

            var td = document.createElement("td");
            td.textContent = i+1;

            newTr1.appendChild(td);




    }
    table.appendChild(newTr);
}
function create() {


    table.style.width = '100%';
    table.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    var tr = document.createElement("tr");
    for(i=0;i<weekDays.length;i++){
        var th = document.createElement("th");
        tr.appendChild(th);
        th.textContent = weekDays[i];
    }
    table.appendChild(tr);

    var year = years.value;
    var month = months.value;
    var index=monthNames.indexOf(month);

    if(year%4 === 0 && month == "February"){

            daysCreate(28);
    }
    else{
        var index=monthNames.indexOf(month);
        if(month == "February"){
           daysCreate(29);
        }

            else{
            daysCreate(31);
        }

    }


    if(month !== "February" && (index%2) == 0){
        daysCreate(30);
    }
    if(month !== "February" && index>7){
        if((index%2) == 0){
            daysCreate(31);
        }
    }


/*
    var lastRow = table.rows[ table.rows.length - 2 ];
    lastCells = lastRow.cells.length;

    if(lastCells !== 7){
        z=7-lastCells;
        next=index+1;
        nextMonth=monthNames[next];

        for (j =0 ; j <z; j++) {

                var firstRow = table.rows[0];
                firstRow.insertCell(0);
                console.log(nextMonth);



        }

    }*/




}

fillYears();
fillMonths();

months.addEventListener('change',function () {
    if(months.value !== "Month"){
        create();
    }
});
years.addEventListener('change',function () {
    if(months.value !== "Month"){
        create();
    }
});
