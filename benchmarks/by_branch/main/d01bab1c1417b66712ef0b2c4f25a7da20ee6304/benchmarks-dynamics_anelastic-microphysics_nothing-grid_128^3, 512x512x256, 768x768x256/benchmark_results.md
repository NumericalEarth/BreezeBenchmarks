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
| Hostname | 25faaf169ff3 |

## Results

| Benchmark | Float | Grid | Time/Step (ms) | Steps/s | Points/s | Timestamp |
|-----------|-------|------|----------------|---------|----------|-----------|
| `CBL;grid:128x128x128;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:nothing` | Float32 | 128×128×128 | 16.04 | 62.34 | 1.31e+08 | 2026-02-20T02:07:32.583 |
| `CBL;grid:512x512x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:nothing` | Float32 | 512×512×256 | 604.41 | 1.65 | 1.11e+08 | 2026-02-20T02:09:00.031 |
| `CBL;grid:768x768x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:nothing` | Float32 | 768×768×256 | 1517.71 | 0.66 | 9.95e+07 | 2026-02-20T02:12:07.810 |
