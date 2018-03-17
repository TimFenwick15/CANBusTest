const mockMode = true
const CANApplication = mockMode ? require('./mockCANBusApplication') : null
const uninitialise = channel => CANApplication.uninitialise(channel)
const initialise = channel => CANApplication.initialise(channel)
const readCAN = channel => CANApplication.readCAN(channel)
const writeCAN = (channel, CANMessage) => CANApplication.writeCAN(channel, CANMessage)
const makeCANMessage = (ID, messgaeType, dataLength, dataArray) => {
  return {
    ID,
    messageType,
    dataLength,
    dataArray
  }
}
const makeState = state => {
  return {
    state
  }
}
module.exports = {
  initialise,
  uninitialise,
  readCAN,
  writeCAN,
  makeCANMessage,
  makeState
}
