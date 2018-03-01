const {Test} = require('./tests')

const opts = {
  testCycles: 10,
  fastMessageTime: 100,
  slowMessageTime: 1000
}

const CANspec = {
  state1: {


  },
  state2: {

  },
  state3: {

  }
}

const t = new Test(CANspec, opts)

Test.run()
