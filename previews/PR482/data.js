window.BENCHMARK_DATA = {
  "lastUpdate": 1771498542683,
  "repoUrl": "https://github.com/NumericalEarth/Breeze.jl",
  "entries": {
    "Breeze.jl Benchmarks": [
      {
        "commit": {
          "author": {
            "name": "NumericalEarth",
            "username": "NumericalEarth"
          },
          "committer": {
            "name": "NumericalEarth",
            "username": "NumericalEarth"
          },
          "id": "8ea8af0029c3e5941d62c1de474316efc2a33371",
          "message": "Add dynamics and microphysics benchmark suites",
          "timestamp": "2026-02-19T04:35:43Z",
          "url": "https://github.com/NumericalEarth/Breeze.jl/pull/482/commits/8ea8af0029c3e5941d62c1de474316efc2a33371"
        },
        "date": 1771498542463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL;grid:512x512x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:1M_MixedEquilibrium/NVIDIA L4/512x512x256",
            "value": 111752589.00394438,
            "unit": "points/s"
          },
          {
            "name": "CBL;grid:512x512x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:1M_MixedNonEquilibrium/NVIDIA L4/512x512x256",
            "value": 112784075.17976908,
            "unit": "points/s"
          },
          {
            "name": "CBL;grid:512x512x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:MixedPhaseEquilibrium/NVIDIA L4/512x512x256",
            "value": 111836251.05853483,
            "unit": "points/s"
          },
          {
            "name": "CBL;grid:128x128x128;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:nothing/NVIDIA L4/128x128x128",
            "value": 134700204.56350076,
            "unit": "points/s"
          },
          {
            "name": "CBL;grid:384x384x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:nothing/NVIDIA L4/384x384x256",
            "value": 118450407.51555093,
            "unit": "points/s"
          },
          {
            "name": "CBL;grid:768x768x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:nothing/NVIDIA L4/768x768x256",
            "value": 101174686.15252204,
            "unit": "points/s"
          },
          {
            "name": "CBL;grid:512x512x256;float-type:F32;dynamics:anelastic;advection:WENO5;closure:nothing;microphysics:nothing/NVIDIA L4/512x512x256",
            "value": 112481711.3908295,
            "unit": "points/s"
          },
          {
            "name": "CBL;grid:512x512x256;float-type:F32;dynamics:compressible_splitexplicit;advection:WENO5;closure:nothing;microphysics:nothing/NVIDIA L4/512x512x256",
            "value": 15012390.904707586,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}
