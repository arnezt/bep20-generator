# BEP20 Token Generator

[![CI](https://github.com/vittominacori/bep20-generator/workflows/CI/badge.svg?branch=master)](https://github.com/vittominacori/bep20-generator/actions/)
[![Coverage Status](https://coveralls.io/repos/github/vittominacori/bep20-generator/badge.svg?branch=master)](https://coveralls.io/github/vittominacori/bep20-generator?branch=master)
[![MIT licensed](https://img.shields.io/github/license/vittominacori/bep20-generator.svg)](https://github.com/vittominacori/bep20-generator/blob/master/LICENSE)

The new Smart Contract Generator for BEP20 Token.

## Try it

[https://vittominacori.github.io/bep20-generator](https://vittominacori.github.io/bep20-generator)


## Development


### Install dependencies

```bash
npm install
```


### Usage (using Truffle)

Open the Truffle console

```bash
npm run truffle:console
```


#### Compile

```bash
npm run truffle:compile
```


#### Test

```bash
npm run truffle:test
```


### Usage (using Hardhat)

Open the Hardhat console

```bash
npm run hardhat:console
```


#### Compile

```bash
npm run hardhat:compile
```


#### Test

```bash
npm run hardhat:test
```


### Code Coverage

```bash
npm run hardhat:coverage
```


## Linter

Use Solhint

```bash
npm run lint:sol
```

Use ESLint

```bash
npm run lint:js
```

Use ESLint and fix

```bash
npm run lint:fix
```


## Flattener

This allow to flatten the code into a single file

Edit `scripts/flat.sh` to add your contracts

```bash
npm run flat
```


## Analysis

Note: it is better to analyze the flattened code to have a bigger overview on the entire codebase. So run the flattener first.

### Describe

The `describe` command shows a summary of the contracts and methods in the files provided

```bash
npx surya describe dist/StandardBEP20.dist.sol
```

### Dependencies

The `dependencies` command outputs the c3-linearization of a given contract's inheirtance graph. Contracts will be listed starting with most-derived, ie. if the same function is defined in more than one contract, the solidity compiler will use the definition in whichever contract is listed first.

```bash
npx surya dependencies StandardBEP20 dist/StandardBEP20.dist.sol
```
### Generate Report

Edit `scripts/analyze.sh` to add your contracts

```bash
npm run analyze
```

The `inheritance` command outputs a DOT-formatted graph of the inheritance tree.

The `graph` command outputs a DOT-formatted graph of the control flow.

The `mdreport` command creates a markdown description report with tables comprising information about the system's files, contracts and their functions.

The `sol2uml` generates UML class diagram from Solidity contracts.


## License

Code released under the [MIT License](https://github.com/vittominacori/bep20-generator/blob/master/LICENSE).
