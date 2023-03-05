let selectedRow = null;
let p = null;
let arr = [
  { id: 1, name: "rina", surname: "mankad", phonenum: 6472868345 },
  { id: 2, name: "rita", surname: "sandha", phonenum: 6472868344 },
  { id: 3, name: "gita", surname: "patel", phonenum: 6472868343 },
  { id: 4, name: "mina", surname: "acharya", phonenum: 6472868342 },
  { id: 5, name: "jiya", surname: "thakkar", phonenum: 6472868341 },
];

let html = "";
arr.map((x) => {
  html += "<tr><td>" + x.id + "</td>";
  html += "<td>" + x.name + "</td>";
  html += "<td>" + x.surname + "</td>";
  html += "<td>" + x.phonenum + "</td>";
  html +=
    "<td><input type='button' id='ed' value='edit' class='btn btn-primary' onClick='edit(this)'></input> <input type='button' id='del' value='delete' class='btn btn-primary' onClick='deleteItem(this)'></input></td></tr>";
});
document.getElementById("tbody").innerHTML = html;



function add() {
  let nm = document.getElementById("n").value;
  let snm = document.getElementById("s").value;
  let pnm = document.getElementById("p").value;
  let arr1 = arr;
  let htm = "";
  arr1.map((x) => {
    htm += "<tr><td>" + x.id + "</td>";
    htm += "<td>" + x.name + "</td>";
    htm += "<td>" + x.surname + "</td>";
    htm += "<td>" + x.phonenum + "</td>";
    htm +=
      "<td><input type='button' id='ed' value='edit' class='btn btn-primary' onClick='edit(this)'></input>&nbsp<input type='button' id='del' value='delete' class='btn btn-primary' onClick='deleteItem(this)'></input></td></tr>";
  });
  if(nm==null||snm==null||pnm==null||nm==""||snm==""||pnm==""){
    alert("please add a value");
  }
  else
  {
  let a = arr1.push({
    id: arr1.length + 1,
    name: nm,
    surname: snm,
    phonenum: pnm,
  });
  // console.log(a);
  let b = arr1[a - 1];
  htm += "<tr><td>" + b.id + "</td>";
  htm += "<td>" + b.name + "</td>";
  htm += "<td>" + b.surname + "</td>";
  htm += "<td>" + b.phonenum + "</td>";
  htm +=
    "<td><button onClick='edit(this)' id='ed' class='btn btn-primary'>edit</button>&nbsp<button id='del' onClick='deleteItem(this)' class='btn btn-primary'>delete</button></td></tr>";
  document.getElementById("tbody").innerHTML = htm;
}
}

let deleteItem = (e) => {
  p = e.parentElement.parentElement.rowIndex;
  // console.log(p);
  e.parentElement.parentElement.remove();
  arr.splice(p - 1, 1);
  for (i = 0; i < arr.length; i++) {
    arr[i].id = i + 1;
  }
};

function resetForm() {
  document.getElementById("n").value = "";
  document.getElementById("s").value = "";
  document.getElementById("p").value = "";
  document.getElementById("search").value = "";
  selectedRow = null;
}

function edit(e)
{
  // let model="<div><form>name:<input type='text' id='am' onClick='add()'></input>surname:<input type='text' id='sn' onClick='add()'></input>phonenum:<input type='text' id='pn'onClick='add()'></input><button onClick='update(this)'>update</button></form></div>"
  // document.getElementById("body").innerHTML=model;
  let p = null;
  p = e.parentElement.parentElement.rowIndex;
  selectedRow = e.parentElement.parentElement;
  document.getElementById("n").value = selectedRow.cells[1].innerHTML;
  document.getElementById("s").value = selectedRow.cells[2].innerHTML;
  document.getElementById("p").value = selectedRow.cells[3].innerHTML;
};

function update(event) {
 event.preventDefault();
  let i = selectedRow.cells[0].innerHTML;
  console.log(i);
  selectedRow.cells[1].innerHTML = document.getElementById("n").value;
  selectedRow.cells[2].innerHTML = document.getElementById("s").value;
  selectedRow.cells[3].innerHTML = document.getElementById("p").value;
  let n = selectedRow.cells[1].innerHTML;
  let s = selectedRow.cells[2].innerHTML;
  let num = selectedRow.cells[3].innerHTML;
  console.log(n)
  arr.find((x) => x.id == i).name = n;
  arr.find((x) => x.id == i).surname = s;
  arr.find((x) => x.id == i).phonenum = num;
  resetForm();
}

function search() {
  let s = document.getElementById("search").value;
  let v = s.toLowerCase();
  let rows = document.getElementsByTagName("tr");

  for (var i = 1; i < rows.length; i++) {
    for (var j = 0; j < 4; j++) {
      var name = rows[i].cells[j].innerHTML.toString();
      if (name.indexOf(v) == 0) {
        console.log(name);
        rows[i].style.display = "";
        break;
      } else {
        rows[i].style.display = "none";
      }
    }
  }
  resetForm();
}


//search
//var name = rows[i].getElementsByTagName("td");
// if (name.indexOf(v) == 0) {
//    console.log(rows[i].textContent);
//   rows[i].style.display = "";
// } else if (name.indexOf(v) == -1 && v.length >= 1) {
//   rows[i].style.display = "none";

//delete

// let tb=document.getElementsByTagName("tr");
// for (let i = 0; i < tb.length; i++) {
//   console.log((i + 1) + " " + tb[i].rowIndex + "");
// };

// for(let i=1;i<arr.length;i++)
// {
//   id=document.getElementById("tbody").rows[i];
//   console.log(id);
// }
// let del= document.getElementById("del").addEventListener('click',function (){
// for (let i = 0; i < tb.length; i++) {
//   console.log((i + 1) + " " + tb[i].rowIndex + "");
//   arr.splice(tb[i].rowIndex);
// };

// var table = document.getElementById("tbody");
// var index=0;
//  for(var key in table){
//   if( parseInt( key ) !== index )
//   {
//       arr[index] = arr[key];
//       ++index;
//   }
//  }
//  arr.splice(index);

//console.log(arr.splice(,1))
// let butt=document.getElementById("del");
// let arr1=[butt.parentElement.parentElement.textContent];
//  document.getElementById("del").