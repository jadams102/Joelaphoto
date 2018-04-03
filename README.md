# Patreon

Rebuild of Patreon.com
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

#### By **Joel Adams**

## Description

This is a rebuild of the website Patreon.com. The site will allow "creators" to post images to a feed, and allow other site users to view that feed. Creator page and posting may be accessed through the "Log In" link in the navbar.

*GitHub repo:* https://github.com/joelaphoto/PatreonRebuild

### Completed Features
1. Static Top Navbar
3. Image/Text Posting through image URL's

### Features in Progress
1. Landing/Welcome Page
2. Creator Page

### Planned Features
1. User Feed w/ Posts
2. Image/Text Posting through Firebase

## Setup/Installation Requirements
Requires Node.js, Angular CLI

1. Download or clone Github respository.
2. Create a file called api-keys.ts in src/app/
3. Login to Firebase and create a project, select add to web app, and copy the provided code formatted as the following into api-keys.ts:
```
export const config = {
  apiKey: 'XXXXXXXXXXXXXXXXXX',
  authDomain: 'XXXXXXXXXXXXXXXX',
  databaseURL: 'XXXXXXXXXXXXXXXX',
  projectId: 'XXXXXXXXXXXXXXXX',
  storageBucket: 'XXXXXXXXXXXXXXX',
  messagingSenderId: 'XXXXXXXXXXXXXXX'
};
```
2. Run $ npm install in command line, terminal, or GitBash.
3. Run $ ng serve

## Known Bugs
* No known bugs at this time.

## Technologies Used
* Node.js
* Angular
* Javascript
* Atom
* Webpack

## Support and contact details

_Please contact  the creator through Github.com: joelaphoto_

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **Joel Adams**
