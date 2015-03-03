// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  // your code here
  	var elements = [];
	var findElements = function (node)
  	{
  		var childNodes = node.childNodes;

  		if(node.classList)
  			{
				if(node.classList.contains(className))
				{
  					elements.push(node);
  				}
  			}

  		for(var i in childNodes)
  		{
  			findElements(childNodes[i]);
  		}
  	}
  	findElements(document.body);

  	return elements;
};
