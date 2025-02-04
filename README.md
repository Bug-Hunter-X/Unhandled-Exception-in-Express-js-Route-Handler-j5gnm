# Unhandled Exception in Express.js Route Handler

This repository demonstrates a common error in Express.js route handlers: the lack of input validation. The code attempts to access an array using a user ID from the request parameters without checking if the ID is valid.  This can lead to runtime errors if the provided ID doesn't exist in the array.

## Bug
The `bug.js` file contains the erroneous code.  It attempts to directly access the `users` array using the `userId` without verifying whether `userId` is a valid index or if the `users` array even exists.

## Solution
The `bugSolution.js` file shows how to fix this issue by adding input validation.  It checks if `userId` is a valid number and if a user with that ID exists before accessing the `users` array, thereby preventing unexpected crashes or errors.