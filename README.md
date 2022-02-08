# Prima Take-Home Test

## About:

React-typescript component that displays a Timeline of events by order of occurance, bottom to top. On Desktop, the events are to be staggered inbetween two branches, whereas on mobile they would collapse to a single branch (see [Wireframes](#the-end-result).)

Every 5 seconds a new event is added on top of the Timeline, up to a defined max. After the cap has been reached, the last event is to be removed also.

Each Event is made of a:

- time
- title
- description

## To run:

Clone the repo and from a terminal within the app root folder, enter:

```
yarn
```

then:

```
yarn start
```

App will be viewable on http://localhost:3000

## Wireframes:

### Wireframe for Desktop

[`<img src="timeline-desktop.jpg" width="600"/>`](timeline-desktop.jpg)

### Wireframe for Mobile

[`<img src="timeline-mobile.jpg" width="200"/>`](timeline-mobile.jpg)
