# AI Traffic Signal Optimizer

A student prototype for adaptive traffic signal timing based on traffic density.

## Idea

The system represents an AI-assisted traffic signal controller:

**Traffic input → Density analysis → Signal timing → Priority handling**

For the prototype, vehicle counts are entered manually instead of using a live CCTV feed. The JavaScript logic estimates traffic density and assigns green-light time. An ambulance option demonstrates emergency priority.

## Features

- Four-lane traffic input
- Low / medium / high density classification
- Adaptive green-light timing
- Emergency ambulance priority
- Simple browser-based demo
- No external libraries required

## Run locally

Open `index.html` in a browser.

## GitHub Pages

This project can be hosted using GitHub Pages because it is a static HTML/CSS/JavaScript prototype.

## Note

This is a prototype/demo, not a production traffic-control system. A full implementation could add CCTV video processing, computer vision vehicle detection, ambulance detection, real-time signal hardware, and more advanced optimization algorithms.
