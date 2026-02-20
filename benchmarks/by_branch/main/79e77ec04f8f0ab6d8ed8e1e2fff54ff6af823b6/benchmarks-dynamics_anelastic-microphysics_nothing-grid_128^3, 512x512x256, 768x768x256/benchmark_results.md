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
| Hostname | 9b99d67a493a |

## Results

| Benchmark | Float | Grid | Time/Step (ms) | Steps/s | Points/s | Timestamp |
|-----------|-------|------|----------------|---------|----------|-----------|
| `CBL;grid:128x128x128;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:nothing` | Float32 | 128×128×128 | 15.97 | 62.63 | 1.31e+08 | 2026-02-20T01:45:23.276 |
| `CBL;grid:512x512x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:nothing` | Float32 | 512×512×256 | 597.48 | 1.67 | 1.12e+08 | 2026-02-20T01:46:50.422 |
| `CBL;grid:768x768x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:nothing` | Float32 | 768×768×256 | 1460.74 | 0.68 | 1.03e+08 | 2026-02-20T01:49:52.610 |
