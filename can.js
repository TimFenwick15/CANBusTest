const uninitialise = channel => {}
const initialise = channel => {}
const readCAN = channel => {}
const writeCAN = channel => {}
const CANMessage = (ID, messgaeType, dataLength, dataArray) => {
  return {
    ID,
    messageType,
    dataLength,
    dataArray
  }
}

module.exports = {
  initialise,
  uninitialise,
  readCAN,
  writeCAN
}
