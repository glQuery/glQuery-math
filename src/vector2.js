glQueryMath.vec2 = {};
glQueryMath.vec2.add = function(result,a,b) {
  result[0] = a[0] + b[0]; 
  result[1] = a[1] + b[1];
  return result;
};
glQueryMath.vec2.subtract = function(result,a,b) {
  result[0] = a[0] - b[0];
  result[1] = a[1] - b[1];
  return result;
};
glQueryMath.vec2.neg = function(result,a) {
  result[0] = -a[0];
  result[1] = -a[1];
};
glQueryMath.vec2.dot = function(a,b) {
  return a[0] * b[0] + a[1] * b[1];
};
glQueryMath.vec2.length = function(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
};

