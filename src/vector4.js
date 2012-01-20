glQueryMath.vec4 = {};
glQueryMath.vec4.add = function(result,a,b) {
  result[0] = a[0] + b[0]; 
  result[1] = a[1] + b[1];
  result[2] = a[2] + b[2]; 
  result[3] = a[3] + b[3];
  return result;
};
glQueryMath.vec4.subtract = function(result,a,b) {
  result[0] = a[0] - b[0];
  result[1] = a[1] - b[1];
  result[2] = a[2] - b[2];
  result[3] = a[3] - b[3];
  return result;
};
glQueryMath.vec4.neg = function(result,a) {
  result[0] = -a[0];
  result[1] = -a[1];
  result[2] = -a[2];
  result[3] = -a[3];
};
glQueryMath.vec4.dot = function(a,b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};
glQueryMath.vec4.length = function(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
};

