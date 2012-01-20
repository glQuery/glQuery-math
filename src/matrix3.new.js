// Module for setting 3x3 matrix values

// Axis-angle rotation matrix using the right hand rule
m3.newAxisRotation = function(axis, angle) {
  var
  // Convert rotation to quaternion representation
  length = Math.sqrt(axis[0]*axis[0], axis[1]*axis[1], axis[2]*axis[2]),
  halfAngle = angle * 0.5,
  sinHalfOverLength = Math.sin(halfAngle) / length,
  x = axis[0] * sinHalfOverLength,
  y = axis[1] * sinHalfOverLength,
  z = axis[2] * sinHalfOverLength,
  w = Math.cos(halfAngle),
  // Convert quaternion to matrix representation
  xx = x*x, xy = x*y, xz = x*z, xw = x*w,
  yy = y*y, yz = y*z, yw = y*w,
  zz = z*z, zw = z*w;
  return [
    1 - 2 * (yy + zz), 2 * (xy + zw),     2 * (xz - yw),
    2 * (xy - zw),     1 - 2 * (xx + zz), 2 * (yz + xw),
    2 * (xz + yw),     2 * (yz - xw),     1 - 2 * (xx + yy)];
};

// Matrix identity
m3.newIdentity = function() {
  return [
    1.0, 0.0, 0.0,
    0.0, 1.0, 0.0,
    0.0, 0.0, 1.0];
};

// Right handed rotation matrices
m3.newRotationX = function(angle) {
  var
  c = Math.cos(angle),
  s = Math.sin(angle);
  return [
    1.0, 0.0, 0.0,
    0.0, c,   s,
    0.0,-s,   c
  ]
};

m3.newRotationY = function(angle) {
  var
  c = Math.cos(angle),
  s = Math.sin(angle);
  return [
    c,   0.0,-s,
    0.0, 1.0, 0.0,
    s,   0.0, c
  ]
};

m3.newRotationZ = function(angle) {
  var
  c = Math.cos(angle),
  s = Math.sin(angle);
  return [
    c,   s,   0.0,
   -s,   c,   0.0,
    0.0, 0.0, 1.0
  ]
};

m3.newRotationXY = function(angles) {
  /* TODO: Optimize
  var
  c0 = Math.cos(angles[0]),
  s0 = Math.sin(angles[0]),
  c1 = Math.cos(angles[1]),
  s1 = Math.sin(angles[1]);
  return [
    c1     , 0.0,-s_     ,
    s1 * s_, c_ , c_ * c_,
    s_ * s_,-s_ , c_ * c_
  ];//*/
  var result = [0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0];
  return m3.mul(result, m3.newRotationX(angles[0]), m3.newRotationY(angles[1]));
};

m3.newRotationYX = function(angles) {
  /* TODO: Optimize
  var
  c0 = Math.cos(angles[0]),
  s0 = Math.sin(angles[0]),
  c1 = Math.cos(angles[1]),
  s1 = Math.sin(angles[1]);
  return [
    c,   s*s,-s*c,
    0.0, c,   s,
    s,  -s*c, c*c
  ];//*/
  var result = [0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0];
  return m3.mul(result, m3.newRotationY(angles[0]), m3.newRotationX(angles[1]));
};

m3.newRotationXZ = function(angles) {
  /* TODO: Optimize
  var
  c0 = Math.cos(angles[0]),
  s0 = Math.sin(angles[0]),
  c1 = Math.cos(angles[1]),
  s1 = Math.sin(angles[1]);
  return [
    c,   s,   0.0,
   -c*s, c*c, s,
    s*s,-s*c, c
  ];//*/
  var result = [0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0];
  return m3.mul(result, m3.newRotationX(angles[0]), m3.newRotationZ(angles[1]));
};

m3.newRotationZX = function(angles) {
  /* TODO: Optimize
  var
  c0 = Math.cos(angles[0]),
  s0 = Math.sin(angles[0]),
  c1 = Math.cos(angles[1]),
  s1 = Math.sin(angles[1]);
  return [
    c,  s*c, s*s,
   -s,  c*c, c*s,
    s,  0.0, c    
  ];//*/
  var result = [0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0];
  return m3.mul(result, m3.newRotationZ(angles[0]), m3.newRotationX(angles[1]));
};

m3.newRotationYZ = function(angles) {
  /* TODO: Optimize
  var
  c0 = Math.cos(angles[0]),
  s0 = Math.sin(angles[0]),
  c1 = Math.cos(angles[1]),
  s1 = Math.sin(angles[1]);
  return [
    c*c, c*s, -s,
    -s,  c,   0.0,
    s*c, s*s, c
  ];//*/
  var result = [0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0];
  return m3.mul(result, m3.newRotationY(angles[0]), m3.newRotationZ(angles[1]));
};

m3.newRotationZY = function(angles) {
  /* TODO: Optimize
  var
  c0 = Math.cos(angles[0]),
  s0 = Math.sin(angles[0]),
  c1 = Math.cos(angles[1]),
  s1 = Math.sin(angles[1]);
  return [
    c*c,   s,-c*s,
   -s*c,   c, s*s,
      s, 0.0,   c
  ];//*/
  var result = [0.0,0.0,0.0, 0.0,0.0,0.0, 0.0,0.0,0.0];
  return m3.mul(result, m3.newRotationZ(angles[0]), m3.newRotationY(angles[1]));
};

