#!/usr/bin/env bash

for contract in "SimpleBEP20" "StandardBEP20" "BurnableERC20" "MintableERC20" "CommonERC20"
do
  npx truffle-flattener contracts/token/BEP20/$contract.sol > dist/$contract.dist.sol
done

npx truffle-flattener contracts/service/ServiceReceiver.sol > dist/ServiceReceiver.dist.sol
