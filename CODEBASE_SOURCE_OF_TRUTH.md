# Definitive Source of Truth - From Smart Contract Code

**Source:** `/home/ubuntu/noderr-protocol/contracts/contracts/core/NodeRegistry.sol`
**Last Updated:** Recent commits from last 7 days (commit `d2e0dc0`: "fix: correct ALL stake requirements across codebase")

## EXACT Stake Requirements (FROM SMART CONTRACT CODE)

```solidity
// Lines 81-103 of NodeRegistry.sol

MICRO:
- minTrustFingerprint: 0.30
- minStake: 0 NODR
- requiresElection: false

VALIDATOR:
- minTrustFingerprint: 0.60
- minStake: 50,000 NODR
- requiresElection: false

GUARDIAN:
- minTrustFingerprint: 0.75
- minStake: 100,000 NODR
- requiresElection: true (Requires Oracle Committee approval)

ORACLE:
- minTrustFingerprint: 0.90
- minStake: 500,000 NODR
- requiresElection: true (Requires Oracle Committee approval)
```

## Recent Critical Commits (Last 7 Days)

1. **d2e0dc0** - "fix: correct ALL stake requirements across codebase"
2. **0b48750** - "fix: correct Validator storage requirement from 500TB to 500GB-1TB"
3. **b2d0fd6** - "Complete ATS/ATE/Floor Engine terminology overhaul and documentation integration"
4. **b7876ec** - "Fix: Replace all remaining noderr.io references with noderr.xyz"

## Key Findings

### Storage Requirements Were WRONG
- **OLD (WRONG):** 500TB for Validators
- **NEW (CORRECT):** 500GB-1TB for Validators

This was fixed in commit `0b48750` just days ago, which explains why documentation might still be wrong.

### Terminology Standardization
Commit `b2d0fd6` completed "ATS/ATE/Floor Engine terminology overhaul" - this is the most recent authoritative source for how to describe the autonomous trading system.

### Domain Change
All `.io` references were replaced with `.xyz` in commit `b7876ec`.

## What This Means for Landing Page

1. **Stake amounts are CORRECT** in the current landing page (50k, 100k, 500k)
2. **Storage requirements need to be updated** - Validators should show 500GB-1TB, not 500TB
3. **Terminology is critical** - Need to check the ATS/ATE/Floor Engine terminology commit to see exact wording
4. **All links must use .xyz** not .io

## Next Steps

1. Read the ATS/ATE terminology commit to get exact wording
2. Update all hardware specs based on the corrected storage commit
3. Verify all other technical details against the actual contract code


## Official Terminology (FROM TERMINOLOGY_GUIDE.md - Nov 14, 2025)

### Autonomous Trading System (ATS)
**Definition:** The complete Noderr Protocol intelligent trading ecosystem encompassing all components from strategy generation to execution and yield optimization.

**Scope:** 100% of protocol operations

**When to use:** When describing the complete system, overall protocol capabilities, multiple components working together.

### Autonomous Trading Engine (ATE)
**Definition:** The active trading execution component within the ATS responsible for deploying approved algorithmic strategies with real capital.

**Capital Allocation:** 8-25% of total AUM
**Target APY:** 8-15%
**Risk Profile:** MEDIUM

**When to use:** When specifically referring to active trading execution, order routing, live strategy deployment.

### Floor Engine
**Definition:** The baseline yield generation component within the ATS responsible for deploying capital across low-risk DeFi protocols.

**Responsibilities:**
- Staking (30-40% allocation): Lido, Rocket Pool, Frax, Native ETH
- Lending (20-30% allocation): Aave V3, Compound V3, Morpho, Spark
- Liquidity Provision (15-20% allocation): Uniswap V3, Curve, Balancer
- Yield Farming (10-12% allocation): Curve, Convex, Yearn, Beefy

**Capital Allocation:** 75-92% of total AUM
**Target APY:** 5-15%
**Risk Profile:** LOW

## Three-Layer Architecture

```
Autonomous Trading System (ATS) - Complete Ecosystem
│
├── Layer 1: Strategy Generation & Validation
│   ├── Evolutionary Algorithms (strategy creation)
│   ├── Reinforcement Learning (strategy optimization)
│   └── Node Network Governance (Oracle/Guardian/Validator/Micronode)
│
├── Layer 2: Floor Engine (Baseline Yield - 75-92% AUM)
│   ├── Staking (30-40% allocation)
│   ├── Lending (20-30% allocation)
│   ├── Liquidity Provision (15-20% allocation)
│   └── Yield Farming (10-12% allocation)
│
└── Layer 3: Autonomous Trading Engine (Active Trading - 8-25% AUM)
    ├── Arbitrage
    ├── Market Making
    ├── Trend Following
    └── Statistical Arbitrage
```

## Total Protocol Yield Formula

**Total Protocol Yield = Floor Engine Yield + ATE Yield**

**Example:**
- Floor Engine: 80% AUM × 8% APY = 6.4% contribution
- ATE: 20% AUM × 12% APY = 2.4% contribution
- **Total Protocol APY: 8.8%**

## Landing Page Implications

1. **Hero section should emphasize ATS** (the complete system), not just "autonomous trading"
2. **Floor Engine must be prominently featured** as a key differentiator
3. **ATE should be described as execution layer**, not the whole system
4. **Yield composition should be explained** (Floor + ATE = Total)


## Storage Requirement Correction (FROM COMMIT 0b48750)

**Commit:** `0b48750` - "fix: correct Validator storage requirement from 500TB to 500GB-1TB"

**Finding:** The previous hardware requirement of 500TB for Validators was incorrect and has been officially corrected in the codebase documentation.

**Corrected Specification:**
- **Minimum:** 500 GB
- **Recommended:** 1 TB

**Landing Page Implication:** The `NodeRequirements.tsx` component must be updated to reflect this corrected specification. The current version is likely showing the outdated 500TB figure, which is a significant error.
