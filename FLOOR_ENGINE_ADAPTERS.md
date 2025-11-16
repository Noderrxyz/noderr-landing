# Floor Engine Adapters - From Codebase

**Location:** `/home/ubuntu/noderr-protocol/contracts/contracts/adapters/`

## Identified Adapters (7 found)

1. **AaveFlashLoanAdapter.sol** - Flash loan integration with Aave
2. **BalancerAdapter.sol** - Liquidity provision on Balancer
3. **BalancerFlashLoanAdapter.sol** - Flash loan integration with Balancer
4. **CurveAdapter.sol** - Liquidity provision and yield farming on Curve
5. **GMXAdapter.sol** - Perpetual trading integration with GMX
6. **UniswapV3Adapter.sol** - Liquidity provision on Uniswap V3
7. **dYdXAdapter.sol** - Perpetual trading integration with dYdX

## Analysis

The user mentioned "10 adapters" but I only found 7 in the contracts/adapters directory. Possible explanations:

1. **Some adapters may be in development** and not yet committed
2. **Some adapters may be in different directories** (e.g., core/ or strategies/)
3. **The count may include planned adapters** not yet implemented

## Floor Engine Strategy Breakdown (from TERMINOLOGY_GUIDE.md)

According to the official terminology guide, Floor Engine should include:

### Staking (30-40% allocation)
- Lido
- Rocket Pool
- Frax
- Native ETH staking
- Base, Avalanche staking

### Lending (20-30% allocation)
- Aave V3 ✓ (AaveFlashLoanAdapter found)
- Compound V3
- Morpho
- Spark

### Liquidity Provision (15-20% allocation)
- Uniswap V3 ✓ (UniswapV3Adapter found)
- Curve ✓ (CurveAdapter found)
- Balancer ✓ (BalancerAdapter found)

### Yield Farming (10-12% allocation)
- Curve ✓ (CurveAdapter found)
- Convex
- Yearn
- Beefy

## Missing Adapters

Based on the documentation, these adapters are mentioned but not found in the codebase:

1. **Lido** (staking)
2. **Rocket Pool** (staking)
3. **Compound V3** (lending)
4. **Morpho** (lending)
5. **Spark** (lending)
6. **Convex** (yield farming)
7. **Yearn** (yield farming)
8. **Beefy** (yield farming)

## Conclusion

The Floor Engine is a **modular system of DeFi protocol adapters** that plug into the core protocol to generate baseline yield. Currently, 7 adapters are implemented in the codebase, with more likely planned or in development.

The key messaging for the landing page should emphasize:
- **Modular adapter architecture**
- **Diversified across multiple battle-tested protocols**
- **75-92% of AUM allocated to low-risk DeFi integrations**
- **Automated rebalancing and risk management**
