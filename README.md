# Network:
## topics:
- Net module
- Dgram module
- DNS module

- Readline module
- Process module
- TTY module
- Path module

## Networking concepts:
- We need to understand this topics before creating Network applications.
### Basics of networking:
- The most basic thing in a networking is a switch. => connect via ethernet cable. => to accept the interaction your pc has to have a [networkingCard] => have a MAC address burned on it.

### ISP: Internet service provider
- fibertel... etc => somehow their cables (a los que vos estas conectado) estan connnected to this whole vast network called internet.

- 127.0.0.1 => loop back address = localhost
### IP address => El router o cual sea la fuente de connection te va a otorgar certain IP address. 
``` momento en el que cambias de conneccion momento en el que cambia tu IP address
```
### Understanding the networking layers:
networking: way of communication between computers. y la network mas grande hoy en dia se llama internet.

# NET MODULE:
- Lowest level in Node.js to do networking. 
Letz use it to create a TCP server.
`All the networrking modules in Node are built in top of the net module.`4Example: [http]