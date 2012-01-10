glQueryMath.vec2 = {};
glQueryMath.vec2.add = function(a,b,dest) {
  dest[0] = a[0] + b[0]; 
  dest[1] = a[1] + b[1];
  return dest;
};
glQueryMath.vec2.subtract = function(a,b,dest) {
  dest[0] = b[0] - a[0];
  dest[1] = b[1] - a[1];
  return dest;
};
glQueryMath.vec2.neg = function(a,dest) {
  dest[0] = -a[0];
  dest[1] = -a[1];
};
glQueryMath.vec2.dot = function(a,b) {
  return a[0] * b[0] + a[1] * b[1];
};
glQueryMath.vec2.length = function(a) {
  return Math.sqrt(a[0] * a[0] + a[1] * a[1]);
};

