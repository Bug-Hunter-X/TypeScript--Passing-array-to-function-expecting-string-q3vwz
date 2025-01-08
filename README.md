# TypeScript Bug: Passing Array to String Function

This repository demonstrates a common TypeScript error: passing an array to a function that expects a string as an argument.  The bug occurs because the function `greeter` is defined to accept a string, but an array is provided as input.  The solution involves type checking and either modifying the function or the input data to be compatible.

## How to reproduce

1. Clone this repository.
2. Open `bug.ts` in your TypeScript compiler.
3. You'll see a compile-time error indicating type mismatch.

## Solution

The solution is in `bugSolution.ts`