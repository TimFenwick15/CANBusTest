const {Test} = require('./test')

// initialise the test class
const test = new Test({
  testCycles: 10, // default 10
  timeout: 60 * 1000, // default 60s
  messageCycleTimes: [100, 1000] // default 10, 1000
})

// Define your CAN messages
const message1 = test.makeCANMessage({sentEvery: 100, ID: 0x00, messageType: 0x00, length: 8,
  dataArray: [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ]})
const message2 = test.makeCANMessage({sentEvery: 100, ID: 0x00, messageType: 0x00, length: 8,
  dataArray: [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ]})
const message3 = test.makeCANMessage({sentEvery: 100, ID: 0x00, messageType: 0x00, length: 8,
  dataArray: [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ]})
const message4 = test.makeCANMessage({sentEvery: 100, ID: 0x00, messageType: 0x00, length: 8,
  dataArray: [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ]})
const message5 = test.makeCANMessage({sentEvery: 100, ID: 0x00, messageType: 0x00, length: 8,
  dataArray: [ 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00 ]})

// Define your states
const state1 = test.makeState({
  alwaysSends: [message1],
  sometimesSends: [
    {
      whenReceiving: message2,
      thenSend: message3
    }
  ],
  finally: {
    whenReceiving: message4,
    thenGoToState: 'State2' // either you will have to build your states in reverse order, or pass a string. Ew...
  }
})
const state2 = test.makeState({
  alwaysSends: [message5]
})

// Run a test!
test.runFrom(state1)
