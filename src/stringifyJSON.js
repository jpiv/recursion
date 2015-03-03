// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var stringifyed = "";

  if(Array.isArray(obj))
  {
    stringifyed += '[';
    stringifyed += obj[0] ? stringifyJSON(obj[0]) : '';
    for(var i = 1; i < obj.length; i++)
    {
      stringifyed += ',' + stringifyJSON(obj[i]);
    }
    stringifyed += ']';
  }
  else if(typeof obj === 'object' && obj !== null)
  {
    var firstTime = true;
    stringifyed += '{';
	  for(var key in obj)
	  {
      if (!(obj[key] instanceof Function) && obj[key] !== undefined)
      {
        if (firstTime)
        {
  	  	  stringifyed += '"' + key + '"' + ':' + stringifyJSON(obj[key]);
          firstTime = false;
        }
        else
          stringifyed += ',"' + key + '"' + ':' + stringifyJSON(obj[key]);
      }
	  }
    stringifyed += '}';
  }
  else if(typeof obj === "string")
    stringifyed += '"' + obj + '"';
  else
    stringifyed += obj;

  return stringifyed;
};
