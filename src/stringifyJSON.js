// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj)  {
  if (typeof obj === 'undefined' || typeof obj === 'function') {
  	//do nothing
  	return undefined;
  }
  else if (typeof obj === 'string') {
  	return '\"' + obj + '\"';
  }
  else if (typeof obj === 'boolean') {
  	return '' + obj;
  }
  else if (typeof obj !== 'object') {
  	//if obj is not a object
  	return '' + obj;
  }
  else if (obj === null) {
  	//if obj is null
  	return 'null';
  }
  else if (Array.isArray(obj)){
  	//if obj is array
  	var content = '[';
  	for (var i = 0; i < obj.length; i++) {
  		content += stringifyJSON(obj[i]);
  		if (i != obj.length - 1) {
  			content += ',';
  		}
  	}
  	content = content + ']';
  	return content;
  }
  else {
  	//if obj is object and null
  	var content = '{';
  	var hasObj = false;
  	for (var key in obj) {
  		
  		var value = stringifyJSON(obj[key]);
  		if (typeof value !== 'undefined') {
  			hasObj = true;
  			content += '"' + key + '":' + value + ',';
  		}
  	}
  	//if obj is not empty, then delete the last ,
  	if (hasObj) {
  		content = content.slice(0,-1);
  	}
  	content = content + '}';
  	return content;
  }
}
