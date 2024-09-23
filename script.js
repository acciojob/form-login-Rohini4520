function getFormvalue() {
    //Write your code here
	//alert(fName.value +" "+ lName.value);
 const val = document.querySelectorAll("input");
	let fName= val[0].value;
	let lName = val[1].value;
	alert(fName +" "+ lName);
}
