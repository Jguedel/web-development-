function Calculate(){
  var miles = document.getElementById("distance").value;
  var time = document.getElementById("pace").value;
  var sep = time.split(":");
  var min = sep[0];
  var sec = sep[1];
  var hour = 0;
  var minTracker = 0;
  var ans;
  for(var count = 1; count <= miles; count++){
    min = sep[0];
    sec = sep[1];
    min = min*count;
    sec = sec*count;
    //SECONDS PASS 60 (add to min)
    if (sec/60 >= 1) {
      minTracker = (Math.floor(sec/60));
      sec = sec%60;
    }

    //MIN PAST 60 (add to min)
    if (min/60 >= 1) {
      hour = (Math.floor(min/60));
      min = (min+minTracker)%60;
    }
    else {
      min = (min+minTracker);
    }
    //HOURS
    if (hour == 0) {
      ans = min +" : "+ sec;
      newRow(count,ans);
    }
    else{
      ans = hour + " : "+min +" : " + sec;
      newRow(count,ans);
    }

//LAST LINE IF .___
    if(1 > (miles - count) && (miles - count) > 0){
      min = sep[0];
      sec = sep[1];
      sec = (sec * miles)
      minTracker = (Math.floor(sec/60));
      console.log(minTracker);
      sec = sec%60;
      console.log(min, miles , minTracker);
      min = (min * miles + minTracker)%60;
      if (hour == 0) {
        ans = min +" : "+ sec;
        newRow(miles,ans);
      }
      else{
        ans = hour + " : "+min +" : " + sec;
        newRow(miles,ans);
      }
    }
  }
}

//new table row
function newRow(count, time) {
  var table = document.getElementById("myTable");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = count;
  cell2.innerHTML = time;
}
