glQueryMath.vec3 = {};
glQueryMath.vec3.add = function(result,a,b) {
  result[0] = a[0] + b[0]; 
  result[1] = a[1] + b[1];
  result[2] = a[2] + b[2]; 
  return result;
};
glQueryMath.vec3.sub = function(result,a,b) {
  result[0] = a[0] - b[0];
  result[1] = a[1] - b[1];
  result[2] = a[2] - b[2];
  return result;
};
glQueryMath.vec3.mul = function(result,a,b) {
  result[0] = a[0] * b;
  result[1] = a[1] * b;
  result[2] = a[2] * b;
  return result;
};
glQueryMath.vec3.div = function(result,a,b) {
  result[0] = a[0] / b;
  result[1] = a[1] / b;
  result[2] = a[2] / b;
  return result;
};
glQueryMath.vec3.neg = function(result,a) {
  result[0] = -a[0];
  result[1] = -a[1];
  result[2] = -a[2];
  return result;
};
glQueryMath.vec3.dot = function(a,b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
glQueryMath.vec3.cross = function(result,a,b) {
  result[0] = a[1] * b[2] - a[2] * b[1];
  result[1] = a[2] * b[0] - a[0] * b[2];
  result[2] = a[0] * b[1] - a[1] * b[0];
  return result;
};
glQueryMath.vec3.length = function(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
};
glQueryMath.vec3.normalize = function(result,a) {
  return glQueryMath.vec3.div(result, a, glQueryMath.vec3.length(a));
};

