var v2 = gl.vec2 = {};
v2.add = function(result,a,b) {
  result[0] = a[0] + b[0]; 
  result[1] = a[1] + b[1];
  return result;
};
v2.subtract = function(result,a,b) {
  result[0] = a[0] - b[0];
  result[1] = a[1] - b[1];
  return result;
};
v2.mul = function(result,a,b) {
  result[0] = a[0] * b;
  result[1] = a[1] * b;
  return result;
};
v2.div = function(result,a,b) {
  result[0] = a[0] / b;
  result[1] = a[1] / b;
  return result;
};
v2.neg = function(result,a) {
  result[0] = -a[0];
  result[1] = -a[1];
};
v2.dot = function(a,b) {
  return a[0] * b[0] + a[1] * b[1];
};
v2.length = function(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
};

