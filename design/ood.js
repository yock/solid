class Lamp {
  constructor() {
    this.state = 'off';
    this.pluggedIn = true;
  }

  switchOn() {
    this.state = 'on';
  }

  switchOff() {
    this.state = 'off';
  }
}
