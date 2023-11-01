Workflow CA - Noroff

Configurations:
Added ESLint and Prettier for consistent code formatting.
Implemented Jest for unit testing.
Implemented Cypress for end-to-end testing.
Set up Husky and lint-staged to automatically run ESLint and Prettier on commits.

Jest:

We'll automatically test the following features with unit tests:
The login function is tested to ensure it works and returns a valid token when provided with a valid email and password.
The logout function is tested to verify it clears the token from local storage.

Cypress:

We'll perform automated end-to-end tests on the following functionalities:
The user can log in with the login form with valid credentials.
The user cannot submit the login form with invalid credentials and is shown a message.
The user can log out with the logout button.
[![E2E Testing](https://github.com/jakotide/social-media-client/actions/workflows/e2e-testing.yml/badge.svg)](https://github.com/jakotide/social-media-client/actions/workflows/e2e-testing.yml)
