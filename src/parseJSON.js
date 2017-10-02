// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  console.log(json)
  if (json[0] === '[') {
  	var rest = json.substring(1,json.length)
  	var nextBracketIndex = rest.indexOf(']')
  	var first = json.slice(1,nextBracketIndex+1)
  	var list = first.split(', ');
  	console.log(list)
  }
  if (json[0] === '{') {
  	console.log(json)
  	var rest = json.substring(1,json.length)
  	var nextBracketIndex = rest.indexOf('}')
  	var first = json.slice(1,nextBracketIndex+1)
  	var list = first.split(', ');
  	var object = {};
  	for (var i = 0; i < list.length; i++) {
  	  var entry = list[i].split(': ');
  	  object[entry[0]] = entry[1];
  	}
  	console.log(object);
  }
};
