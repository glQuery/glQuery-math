
// Extend glQuery if it is defined
if (glQuery != null)
  for(key in this)
    if (glQuery[key] == null)
      glQuery[key] = this[key];
return this;

})();

