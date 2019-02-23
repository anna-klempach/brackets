module.exports = function check(str, bracketsConfig) {
  // your solution

  let strArray = str.split('');
  let flag = 0;
  
  if (strArray.length % 2 !== 0) {
  	return false;
  }

  while (true) {

  	flag = 0;

  	for (var i = 0; i < bracketsConfig.length; i++) {

  		for (let right = strArray.length - 1; right >= 0; right--) {

	  		if ( strArray[right] == bracketsConfig[i][1] && strArray[right-1] == bracketsConfig[i][0]) {
	  			strArray.splice(right-1, 2);
	  			flag = 1;
	  		}

	  		if ( strArray.length === 0) {
	  			return true;
	  		}
  		}
  	}
  	
  	if(flag === 0) {
  		return false;
  	}  	
  }
}