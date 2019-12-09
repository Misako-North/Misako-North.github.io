function exec(){
	var disp = "";
	var name = document.getElementById("sampleTxt").value;

	if(name == "" || name == undefined || name == null) {
		disp = "名前を入力してください。"
		document.getElementById("result").textContent = disp;
		
		return;
	}
	var bloodArray = ["A", "B", "O", "AB"];

	var element = document.getElementById("radio1");
	var radioNodeList = element.q1;
	var radio = radioNodeList.value;
	
	var age = "";
	var bType = "";
	
	// 名前だけ表示
	if(radio == "1"){
		disp = name + "さんですね。";

	// 名前 + 年齢
	} else if(radio == "2"){
		age = getRandomNumber(0, 100);
		disp = name + "さんは" 
				+ age + "歳とお見受けしました。";

	// 名前 + 年齢 + 血液型
	} else if(radio == "3"){
		bType = getRandomValue(bloodArray);
		age = getRandomNumber(0, 100);
		disp = name + "さんは" + age + "歳で、"
				+ bType + "型とお見受けしました。";
	} else {
		// 何もしない
	}

	document.getElementById("result").textContent = disp;
}

function getRandomValue(arr){
  var result = null;
  var len = arr.length;
  if(len > 0){
    result = arr[Math.floor(Math.random() * len)];
  }
  return result;
}

function getRandomNumber(min, max){
	return Math.floor(Math.random()*(max-min)+min);
}
