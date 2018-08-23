## Table of Contents
1. [Requirements](#requirements)
2. [Getting Started](#getting-started)

## Requirements
* node `8.11.4`
* yarn `^0.27.5`

## Configuration (dev machine)
- Git clone this repository
```bash
$ git clone git@github.com:Kelvinmijaya/tokopedia-devcamp.git
```

## Getting Started

After confirming that your development environment meets the specified [requirements](#requirements),
you can start the site by running these commands:

```bash
$ yarn && yarn start                # Install project dependencies, Compile and launch
```
or

```bash
$ npm && npm start                # Install project dependencies, Compile and launch
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn run <script>`|Description|
|------------------|-----------|
|`start` |Serves your app at `localhost:3000`. HMR will be enabled.|
|`build`|Compiles the application to disk (`~/build` by default).|
|`test`|Runs all tests in sequence|
***Important note:***