#!/usr/bin/env bash

for contract in "SimpleBEP20" "StandardBEP20" "BurnableERC20" "MintableERC20" "CommonERC20" "ServiceReceiver"
do
  npx surya inheritance dist/$contract.dist.sol | dot -Tpng > analysis/inheritance-tree/$contract.png

  npx surya graph dist/$contract.dist.sol | dot -Tpng > analysis/control-flow/$contract.png

  npx surya mdreport analysis/description-table/$contract.md dist/$contract.dist.sol

  npx sol2uml dist/$contract.dist.sol -o analysis/uml/$contract.svg
done
