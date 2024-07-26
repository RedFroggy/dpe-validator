# DPE Validator

<div>
  <a href="https://www.redfroggy.fr"><img src="assets/logo.png" alt="RedFroggy"></a>
  <h4>A RedFroggy project</h4>
</div>
<br/>

<div>
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="Build with love"/></a>
  <a href="https://forthebadge.com"><img src="https://forthebadge.com/images/badges/made-with-javascript.svg" alt="Made with javascript"/></a>
</div>
<div>
  <a href="https://github.com/RedFroggy/dpe-validator/actions/workflows/build.yml"><img src="https://github.com/RedFroggy/dpe-validator/actions/workflows/build.yml/badge.svg" alt="Build badge"/></a>
   <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="Badge semantic release"/></a>
</div>

This Javascript library provide some utilities to valide a DPE

| Statements                                                                               | Branches                                                                             | Functions                                                                              | Lines                                                                          |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |

## Why ?

- Many DPEs do not always contain all the information necessary to establish scores and calculate losses for the affected housing units.
- Before being able to carry out processing on the data, it is often necessary to be able to detect potential anomalies or missing data
- 2 error levels will be reported:
  - **warning** for non-blocking errors allowing all or part of the DPE to be analyzed
  - **error** for blocking errors in data analysis (for example if no walls are present)
- 2 versions of the same DPEs can be analyzed in order to detect anomalies by comparing the data (for example window number which changes between the 2 versions)

## How to use it

- `npm install dpe-validator --save`
- A dpe can nom be analyzed based on its json :

```javascript
import { DpeValidator } from 'dpe-validator';

DpeValidator.validate({
    numero_dpe: "2344E0308327N",
    statut: "ACTIF",
    administratif: {...},
    ...
});
```

```json
[
  {
    "code": "NO_MURS_COLLECTION",
    "level": "WARNING"
  }
]
```

- Two dpe can be compared analyzed based on their json :

```javascript
import { DpeComparator } from 'dpe-comparator';

DpeComparator.compare(
  {
    mur_collection: [{}, {}],
    logement: {
      caracteristique_generale: {
        annee_construction: 1948
      }
    }
  },
  {
    mur_collection: [{}],
    logement: {
      caracteristique_generale: {
        annee_construction: 1970
      }
    }
  }
);
```

```json
{
  "size": {
    "mur_collection": { "is": 2, "was": 1 }
  },
  "values": {
    "annee_construction": {
      "is": 1948,
      "was": 1970
    }
  }
}
```

## Getting started

- `npm install` to get node dependencies
- `npm run build` to build the application

## Tests

### Unit tests

- `npm run test` to start Jest tests with coverage
- HTML and coverage reports are generated under the `coverage` and `coverage/lcov-report` folders.

## Code quality

`npm run qa:lint`. Will check your code based on `eslint.confi.js` config file
