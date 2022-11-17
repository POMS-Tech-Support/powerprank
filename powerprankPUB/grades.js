/*get url values*/
const params = new URLSearchParams(window.location.search);
let name = [params.get('f'), params.get("l")];
let n = params.get("n");
/*get grade from user*/
if (n == null) {
  n = prompt("Enter a grade (use rMin-Max for random).", "");
  if (n == null || n == "") {
    throw new Error('Required');
  }
}
/*test grade for radom then split*/
let z = null;
if (/r(\d|\d\d|100)-(\d|\d\d|100)$/.test(n)) {
  z = n.replace("r", "").split("-");
}

/*get name*/
if (name[0] == null || name[1] == null) {
  rawname = prompt("Enter a name (first middle+last)", "first middle+last");
  if (/\w\+\w/.test(rawname)) {
    name = rawname.split("+");
    /*set name values*/
    document.getElementsByTagName("h1")[0].innerText = "Grades and Attendance: " + name[1] + ", " + name[0];
    document.getElementById("firstlast").innerText = name[0] + " " + name[1];
  }
}
/*set number values*/
const x = document.getElementsByClassName("bold");
for (var i = 0; i < x.length; i++) {
  let use = n;
  if (z != null) {
    use = Math.floor(Math.random() * (z[1] - z[0] + 1)) + parseInt(z[0]);
  }
  if (x[i].parentElement.innerHTML.includes("attendancedates")) { 
  } else {
    x[i].innerText = use + "\n" + use;
  }
};
0;
