# Incorrect State Update in React

This example demonstrates a common mistake in React: directly modifying a state variable instead of using the setter function provided by `useState`.

## Problem

Directly modifying the `count` variable in the `useEffect` hook will not trigger a re-render, as React doesn't detect changes made outside the `setState` function.

## Solution

The correct approach is to use the `setCount` function to update the state.  This will trigger React's update mechanism, causing the component to re-render with the updated count.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that the count will not update.