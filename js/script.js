function validate() {
	let n = document.getElementById("fullname").value;
	let mail = document.getElementById("e").value;
	let s = document.getElementById("sel").value;
	let da = document.getElementById("d").value;
	let ev = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	var per = document.getElementById("persons").value;
	var dis = document.getElementById("discount").value;
	var radios = document.getElementsByName("terms");
	var formValid = false;

	var i = 0;
	while (!formValid && i < radios.length) {
		if (radios[i].checked) formValid = true;
		i++;
	}

	var checkboxes = document.querySelectorAll('input[type="checkbox"]');
	var checkedCount = 0;
	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			checkedCount++;
		}
	}

	if (n == "") {
		alert("Name field is empty");
		return false;
	} else if (!ev.test(mail)) {
		alert("please enter a  valid mail");
		return false;
	} else if (s === "selection") {
		alert("please select a valid option");
		return false;
	} else if (da == "") {
		alert("Please Select Date");
		return false;
	} else if (isNaN(per)) {
		alert("please eneter a valid number for number of persons");
		return false;
	} else if (checkedCount < 2) {
		alert("Please select at least 2 options.");
		return false;
	} else if (isNaN(dis)) {
		alert("please enter a valid coupen number");
		return false;
	} else if (!formValid) {
		alert("Please select Terms and  condition");
		return false;
	}
}
