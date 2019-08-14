const lamp = { state: 'off', pluggedIn: true };

function switchOn(lamp) {
  return Object.assign({}, lamp, { state: 'on' });
}

function switchOff(lamp) {
  return Object.assign({}, lamp, { state: 'off' });
}
