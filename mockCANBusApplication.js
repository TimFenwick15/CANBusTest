class App {
  constructor() {
    this.channels = {}
  }
  testChannel(channel) {
    return channel.toString() in this.channels
  }
  addChannel(channel) {
    if (!this.testChannel(channel)) {
      this.channels[channel.toString()] = {initialised: false}
    }
  }
  initialiseChannel(channel) {
    if (this.testChannel(channel)) {
      this.channels[channel.toString()].initialised = true
    }
  }
  uninitialiseChannel(channel) {
    if (this.testChannel(channel)) {
      this.channels[channel.toString()].initialised = false
    }
  }
  emitCAN(channel) {
    if (this.testChannel(channel)) {
      
    }
  }
  writeCAN(channel) {
    if (this.testChannel(channel)) {

    }

  }

}
module.exports = {
  App
}