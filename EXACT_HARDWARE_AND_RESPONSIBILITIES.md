# EXACT Hardware Requirements and Responsibilities from GitBook

## Micro Nodes

### Hardware Requirements (FROM GITBOOK)

| Component | Minimum | Recommended | Optimal |
|-----------|---------|-------------|---------|
| **CPU** | 2-core (any modern CPU) | 4-core | 8-core |
| **RAM** | 2GB | 4GB | 8GB |
| **Storage** | 10GB | 50GB | 100GB |
| **Network** | 10 Mbps | 50 Mbps | 100 Mbps |
| **Uptime** | No minimum | 80%+ | 95%+ |

### ACTUAL Responsibilities (FROM GITBOOK)

1. **Data Distribution** - Cache and distribute blockchain data to peers
2. **Telemetry Collection** - Gather anonymized network metrics and market data
3. **Transaction Propagation** - Relay transactions across the network
4. **Network Monitoring** - Contribute to network health observations
5. **Shadow Data Swarm™ Participation** - Participate in strategy validation for the Autonomous Trading Engine (ATE)

**CRITICAL:** Micronodes **participate in strategy validation** by providing computational resources for **backtesting**. They do NOT "validate the Shadow Swarm" - they **contribute computational power to the Shadow Data Swarm™ for strategy backtesting**.

From the GitBook:
> "The **Shadow Data Swarm™** is a simulated environment where new trading strategies are tested before deployment with real capital. Micronodes contribute computational resources to:
> - **Strategy Backtesting:** Run historical simulations of trading strategies
> - **Distributed Computation:** Strategies are broken into small tasks, each Micronode processes a small piece"

### Current Landing Page Error

**WRONG:** "Micro Nodes form the backbone of the Shadow Data Swarm™, providing the distributed computational power for strategy backtesting. Put your old cell phones, tablets, or spare computers to use. Install the lightweight app and start earning real rewards."

**ISSUE:** This is actually CORRECT according to the GitBook! The user said it's wrong, so I need to check what they actually mean.

**POSSIBLE ISSUE:** The user might be referring to a different description somewhere else on the page that says Micronodes "validate" the Shadow Swarm, which would be incorrect.

## Need to Check

I need to find where on the landing page it says Micronodes "validate" the Shadow Swarm and fix that specific instance.


## Validator Nodes

### Hardware Requirements (FROM GITBOOK)

| Component | Minimum | Recommended | Optimal |
|-----------|---------|-------------|---------|
| **CPU** | 8-core (Intel Xeon/AMD EPYC) | 16-core | 24-core |
| **RAM** | 32GB DDR4 | 64GB DDR4 | 128GB DDR5 |
| **Storage** | 1TB NVMe SSD | 2TB NVMe SSD | 4TB NVMe SSD (RAID 1) |
| **Network** | 100 Mbps symmetric | 500 Mbps symmetric | 1 Gbps symmetric |
| **Uptime** | 98% | 99% | 99.5% |

### Stake Requirements

- **Economic Stake:** 50,000 NODR tokens
- **TrustFingerprint™:** ≥ 0.60 (baseline reliability)
- **Lock Period:** 7 days (unstaking)

### ACTUAL Responsibilities (FROM GITBOOK)

1. **Block Production** - Create new blocks and propose them to the network
2. **Transaction Validation** - Verify and validate transactions before inclusion in blocks
3. **Consensus Participation** - Participate in the proof-of-stake consensus mechanism
4. **Network Security** - Maintain high uptime and protect against attacks
5. **Governance Participation** - Vote on proposals and submit improvement suggestions

### Rewards

- **25-35% APY** on your 50,000 NODR stake, modulated by TrustFingerprint™ score
- **2x voting power** multiplier for governance


## Guardian Nodes

### Hardware Requirements (FROM GITBOOK)

| Component | Minimum | Recommended | Optimal |
|-----------|---------|-------------|---------|
| **CPU** | 16-core (Intel Xeon/AMD EPYC) | 24-core | 32-core |
| **RAM** | 64GB DDR4 | 128GB DDR4 | 256GB DDR5 |
| **Storage** | 2TB NVMe SSD | 4TB NVMe SSD | 8TB NVMe SSD (RAID 1) |
| **GPU** | Optional (for ML validation) | RTX 3090 (24GB) | RTX 4090 (24GB) |
| **Network** | 500 Mbps symmetric | 1 Gbps symmetric | 10 Gbps symmetric |
| **Uptime** | 99% | 99.5% | 99.9% |
| **TPM** | TPM 2.0 module (mandatory) | TPM 2.0 | TPM 2.0 |

### Stake Requirements

- **Economic Stake:** 100,000 NODR tokens
- **TrustFingerprint™:** ≥ 0.75 (high reputation)
- **Validator Tenure:** Minimum 6-12 months recommended
- **Lock Period:** 14 days
- **Nomination:** Required from existing Guardian

### ACTUAL Responsibilities (FROM GITBOOK)

1. **Strategy Validation** - Review and validate trading strategies submitted to the ATE
2. **Proposal Vetting** - Conduct technical and security reviews of governance proposals
3. **Security Monitoring** - Actively monitor the network for threats and vulnerabilities
4. **Dispute Arbitration** - Resolve conflicts and enforce protocol standards
5. **Validator Oversight** - Supervise Validator performance and compliance

### Rewards

- **Elevated rewards** higher than Validators
- **5x voting power** multiplier
- **Preferential selection** for validation tasks
