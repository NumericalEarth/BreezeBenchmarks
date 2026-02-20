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
| Hostname | 648ebea6d46a |

## Results

| Benchmark | Float | Grid | Time/Step (ms) | Steps/s | Points/s | Timestamp |
|-----------|-------|------|----------------|---------|----------|-----------|
| `CBL;grid:512x512x256;float-type:F32;dynamics:compressible_splitexplicit;advection:WENO5;closure:nothing;microphysics:nothing` | Float32 | 512×512×256 | 4471.74 | 0.22 | 1.50e+07 | 2026-02-20T01:53:21.002 |
