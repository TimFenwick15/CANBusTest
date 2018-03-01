This will hopefully be a testing framework for CAN bus applications. Just API ideas for now.

Idea is:
- Create CAN messages
- Create states
- While in a state, you expect to receive some messages regularly and some messages when you send CAN messages to the device
- The application will change state on some CAN messages, or if certain conditions on the data are fulfilled
- I'm going to attempt to use JavaScript and Node-ffi to interface with the PEAKCANBasic API for reading and writing CAN messages. If this isn't fast enough, I will need to use C/C++

