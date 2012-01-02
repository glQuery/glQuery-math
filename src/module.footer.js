
// Extend glQuery if it is defined
if (glQuery != null)
  for(var key in glQueryMath)
    if (glQuery[key] == null)
      glQuery[key] = glQueryMath[key];
return glQueryMath;

})();

