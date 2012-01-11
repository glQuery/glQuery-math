glQueryMath.vec3 = {};
glQueryMath.vec3.add = function(dest,a,b) {
  dest[0] = a[0] + b[0]; 
  dest[1] = a[1] + b[1];
  dest[2] = a[2] + b[2]; 
  return dest;
};
glQueryMath.vec3.sub = function(dest,a,b) {
  dest[0] = a[0] - b[0];
  dest[1] = a[1] - b[1];
  dest[2] = a[2] - b[2];
  return dest;
};
glQueryMath.vec3.mul = function(dest,a,b) {
  dest[0] = a[0] * b;
  dest[1] = a[1] * b;
  dest[2] = a[2] * b;
  return dest;
};
glQueryMath.vec3.div = function(dest,a,b) {
  dest[0] = a[0] / b;
  dest[1] = a[1] / b;
  dest[2] = a[2] / b;
  return dest;
};
glQueryMath.vec3.neg = function(dest,a) {
  dest[0] = -a[0];
  dest[1] = -a[1];
  dest[2] = -a[2];
  return dest;
};
glQueryMath.vec3.dot = function(a,b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
};
glQueryMath.vec3.cross = function(dest,a,b) {
  dest[0] = a[1] * b[2] - a[2] * b[1];
  dest[1] = a[2] * b[0] - a[0] * b[2];
  dest[2] = a[0] * b[1] - a[1] * b[0];
  return dest;
};
glQueryMath.vec3.length = function(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
};
glQueryMath.vec3.normalize = function(dest,a) {
  return glQueryMath.vec3.div(dest, a, glQueryMath.vec3.length(a));
};

