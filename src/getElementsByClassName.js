// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  if (document.body.classList.contains(className)) {
    result.push(document.body);
  }
  help(className, document.body.childNodes, result);
  return result;
}

var help = function(className, childNodes, result) {
  if (childNodes.length === 0) {
  	return;
  }
  else {
    for (var i = 0; i < childNodes.length; i++) {
      var thisElement = childNodes.item(i);
      if ((thisElement !== undefined && thisElement.classList !== undefined)
      	&& (thisElement.classList.contains(className))) {
      	result.push(thisElement);
      }
      help(className, thisElement.childNodes, result);
    }
    return;
  }
}
