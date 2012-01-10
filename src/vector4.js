glQueryMath.vec4 = {};
glQueryMath.vec4.add = function(a,b,dest) {
  dest[0] = a[0] + b[0]; 
  dest[1] = a[1] + b[1];
  dest[2] = a[2] + b[2]; 
  dest[3] = a[3] + b[3];
  return dest;
};
glQueryMath.vec4.subtract = function(a,b,dest) {
  dest[0] = b[0] - a[0];
  dest[1] = b[1] - a[1];
  dest[2] = b[2] - a[2];
  dest[3] = b[3] - a[3];
  return dest;
};
glQueryMath.vec4.neg = function(a,dest) {
  dest[0] = -a[0];
  dest[1] = -a[1];
  dest[2] = -a[2];
  dest[3] = -a[3];
};
glQueryMath.vec4.dot = function(a,b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
};
glQueryMath.vec4.length = function(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3]);
};

