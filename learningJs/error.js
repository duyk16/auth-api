function throwErr() {
  throw 'err';
}
try {
  throwErr();
} catch (e) {
  console.log('error catched:', e);
}


function throwErr2() {
  throw new Error('hi');
}
try {
  throwErr2();
} catch (e) {
  console.log('new Error(e) catched', e);
}

// throwErr();
throwErr2();
console.log('continue');
