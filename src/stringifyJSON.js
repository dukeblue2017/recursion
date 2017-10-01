// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  console.log('start.', 'obj:', obj, 'type:', typeof obj, 'typewstr', typeof (obj + ''))

  if (obj === null || obj === undefined) {
  	console.log('null block');
  	return obj + '';
  };

  if (Array.isArray(obj)) {
  	console.log('array block', obj, 'length:', obj.length);
  	if (obj.length === 0) {
  	  return '[]';
  	} else if (obj.length === 1) {
  	  var ans = stringifyJSON(obj[0]) + ']';	
  	} else {
  		var x = obj[0];
  		var y = obj.slice(1,obj.length);
  	    var a = stringifyJSON(x);
  	    var b = stringifyJSON(y);
  	    if (y.length > 0) {
  	    	var ans = a + ',' + b;
  	    } else if (y.length === 1) {
  	    	var ans = a + y[0];
  	    }
  	} return ('[' + ans);
  };  


  if (typeof (obj + '') === 'string') {
    console.log('string block', obj);
    var strobj = (obj + '');
    if (strobj[0] === '[' && strobj[strobj.length-1] === ']') {
    	return '[' + obj + ']';
    } else if (typeof obj === 'string') {
    	return '"' + obj + '"'
    } else {
  	    return obj + '';
    }
  };

};