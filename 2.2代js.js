// JavaScript Document

function rule(val){
	var firstNum = document.getElementById("firstInput");
	if (firstNum.value === "0"){
	    switch(val){
			 case".":
			     firstNum.value = firstNum.value+val;
			     break;
			 case"+":
			     firstNum.value = firstNum.value+val;
			     break;
			 case"-":
			     firstNum.value = firstNum.value+val;
			     break;
			 case"*":
			     firstNum.value = firstNum.value+val;
			     break;
			 case"/":
			     firstNum.value = firstNum.value+val;
			 break;
			 case"%":
				firstNum.value = firstNum.value+val;
				break;
			case"AC":
				firstNum.value = "";
				break;
			 default:
			     firstNum.value = 0;
			     break;
		}
	}
	else if(firstNum.value === "+"){
		firstNum.value = "";
	}
	else if(firstNum.value === "-"){
		firstNum.value = "";
	}
	else if(firstNum.value === "*"){
		firstNum.value = "";
	}
	else if(firstNum.value === "/"){
		firstNum.value = "";
	}
	else if (val === "AC"){
		firstNum.value = "";
	}
    else if(firstNum.value === "."){
		firstNum.value = "";
	}
	else{
		firstNum.value = firstNum.value+val;
	}

}
function theKey(valT){
	var median = new Array();
	var docA = document.getElementById("firstInput");
    median = docA.value;
	var add = median.indexOf('-');
	if(median.indexOf('-')  > -1){//查找+号在median里最后出现的位置，若没有，则数组为-1	
		var a = new Array();
		a = median.slice(0,median.indexOf('-'));
		var b = new Array();
		b = median.slice(median.indexOf('-'));
		b = b.slice(1);
		b = a - b;
		docA.value = b;
	}
    else if(median.indexOf('*') > -1){
		var a = new Array();
		a = median.slice(0,median.indexOf('*'));
		var b = new Array();
		b = median.slice(median.indexOf('*'));
		b = b.slice(1);
		b = a * b;
		docA.value = b;
	}
	else if(median.indexOf('/') > -1){
		var a = new Array();
		a = median.slice(0,median.indexOf('/'));
		var b = new Array();
		b = median.slice(median.indexOf('/'));;
		b = b.slice(1);
		b = a / b;
		docA.value = b;
	}
	else if(median.indexOf('%') > -1){
		var a = new Array();
		a = median.slice(0,median.indexOf('%'));
		var b = new Array();
		b = median.slice(median.indexOf('%'));
		b = b.slice(1);
		b = a % b;
		docA.value = b;
	}
	else if(median.indexOf('+') > -1){
		var a = new Array();
		a = median.slice(0,median.indexOf('+'));
		var b = new Array();
		b = median.slice(median.indexOf('+'));
		b = b.slice(1);
		docA.value = (parseFloat(a)+parseFloat(b));
	}
	
	
	
}
