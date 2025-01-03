
var findTheDifference = function(s, t) {
 for(let i of s)
 t=t.replace(i,'')
 return t
};
