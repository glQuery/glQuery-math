var m3 = gl.matrix3 = {};

m3.mul = function(result,a,b) {
  var r = MathMemoryPool.matrix3[0];
  r[0*3+0] = a[0*3+0] * b[0*3+0] + a[0*3+1] * b[1*3+0] + a[0*3+2] * b[2*3+0];
  r[0*3+1] = a[0*3+0] * b[0*3+1] + a[0*3+1] * b[1*3+1] + a[0*3+2] * b[2*3+1];
  r[0*3+2] = a[0*3+0] * b[0*3+2] + a[0*3+1] * b[1*3+2] + a[0*3+2] * b[2*3+2];
  r[1*3+0] = a[1*3+0] * b[0*3+0] + a[1*3+1] * b[1*3+0] + a[1*3+2] * b[2*3+0];
  r[1*3+1] = a[1*3+0] * b[0*3+1] + a[1*3+1] * b[1*3+1] + a[1*3+2] * b[2*3+1];
  r[1*3+2] = a[1*3+0] * b[0*3+2] + a[1*3+1] * b[1*3+2] + a[1*3+2] * b[2*3+2];
  r[2*3+0] = a[2*3+0] * b[0*3+0] + a[2*3+1] * b[1*3+0] + a[2*3+2] * b[2*3+0];
  r[2*3+1] = a[2*3+0] * b[0*3+1] + a[2*3+1] * b[1*3+1] + a[2*3+2] * b[2*3+1];
  r[2*3+2] = a[2*3+0] * b[0*3+2] + a[2*3+1] * b[1*3+2] + a[2*3+2] * b[2*3+2];
  for (var i = 0; i < 9; ++i)
    result[i] = r[i];
  return result;
}

// Rotate transformations for matrices in right-handed coordinate systems
m3.rotateX = function(result, a, angle) {
  // TODO: Optimize
  return m3.mul(result, a, m3.newRotationX(angle));
};

m3.rotateY = function(result, a, angle) {
  // TODO: Optimize
  return m3.mul(result, a, m3.newRotationY(angle));
};

m3.rotateZ = function(result, a, angle) {
  // TODO: Optimize
  return m3.mul(result, a, m3.newRotationZ(angle));
};

m3.rotateXY = function(result, a, angles) {
  // TODO: Optimize
  return m3.mul(result, a, m3.newRotationXY(angles));
};

m3.rotateYX = function(result, a, angles) {
  // TODO: Optimize
  return m3.mul(result, a, m3.newRotationYX(angles));
};

m3.rotateXZ = function(result, a, angles) {
  // TODO: Optimize
  return m3.mul(result, a, m3.newRotationXZ(angles));
};

m3.rotateZX = function(result, a, angles) {
  // TODO: Optimize
  return m3.mul(result, a, m3.newRotationZX(angles));
};

m3.rotateYZ = function(result, a, angles) {
  // TODO: Optimize
  return m3.mul(result, a, m3.newRotationYZ(angles));
};

m3.rotateZY = function(result, a, angles) {
  // TODO: Optimize
  return m3.mul(result, a, m3.newRotationZY(angles));
};

