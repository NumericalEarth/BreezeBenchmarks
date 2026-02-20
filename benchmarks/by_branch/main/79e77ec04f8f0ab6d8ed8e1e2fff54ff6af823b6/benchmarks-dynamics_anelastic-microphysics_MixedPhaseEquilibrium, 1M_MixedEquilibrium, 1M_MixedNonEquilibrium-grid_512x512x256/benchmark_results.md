# Breeze.jl Benchmark Results

## System Information

| Property | Value |
|----------|-------|
| Julia | 1.12.4 |
| Oceananigans | 0.104.5 |
| Breeze | 0.3.3 |
| Architecture | GPU{CUDA.CUDAKernels.CUDABackend} |
| CPU | AMD EPYC 7R13 Processor (znver3) |
| Threads | 1 |
| GPU | NVIDIA L4 |
| CUDA | 13.0.0 |
| Hostname | e8ce461fb18a |

## Results

| Benchmark | Float | Grid | Time/Step (ms) | Steps/s | Points/s | Timestamp |
|-----------|-------|------|----------------|---------|----------|-----------|
| `CBL;grid:512x512x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:MixedPhaseEquilibrium` | Float32 | 512×512×256 | 601.59 | 1.66 | 1.12e+08 | 2026-02-20T01:46:22.465 |
| `CBL;grid:512x512x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:1M_MixedEquilibrium` | Float32 | 512×512×256 | 612.38 | 1.63 | 1.10e+08 | 2026-02-20T01:47:40.863 |
| `CBL;grid:512x512x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:1M_MixedNonEquilibrium` | Float32 | 512×512×256 | 620.99 | 1.61 | 1.08e+08 | 2026-02-20T01:48:58.364 |
