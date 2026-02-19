window.BENCHMARK_DATA = {
  "lastUpdate": 1771502189320,
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
          "id": "c95e5accd27c3470503c165f14252ebc6bd68d7e",
          "message": "Add dynamics and microphysics benchmark suites",
          "timestamp": "2026-02-19T04:35:43Z",
          "url": "https://github.com/NumericalEarth/Breeze.jl/pull/482/commits/c95e5accd27c3470503c165f14252ebc6bd68d7e"
        },
        "date": 1771502189058,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL [F32]/Advection: WENO5; Dynamics: anelastic; Microphysics: 1M_MixedEquilibrium/NVIDIA L4/512x512x256",
            "value": 111218680.26277268,
            "unit": "points/s"
          },
          {
            "name": "CBL [F32]/Advection: WENO5; Dynamics: anelastic; Microphysics: 1M_MixedNonEquilibrium/NVIDIA L4/512x512x256",
            "value": 111336645.75400148,
            "unit": "points/s"
          },
          {
            "name": "CBL [F32]/Advection: WENO5; Dynamics: anelastic; Microphysics: MixedPhaseEquilibrium/NVIDIA L4/512x512x256",
            "value": 112380933.14240423,
            "unit": "points/s"
          },
          {
            "name": "CBL [F32]/Advection: WENO5; Dynamics: anelastic; Microphysics: nothing/NVIDIA L4/128x128x128",
            "value": 135588767.7768026,
            "unit": "points/s"
          },
          {
            "name": "CBL [F32]/Advection: WENO5; Dynamics: anelastic; Microphysics: nothing/NVIDIA L4/384x384x256",
            "value": 118556915.33772114,
            "unit": "points/s"
          },
          {
            "name": "CBL [F32]/Advection: WENO5; Dynamics: anelastic; Microphysics: nothing/NVIDIA L4/768x768x256",
            "value": 102231026.56489588,
            "unit": "points/s"
          },
          {
            "name": "CBL [F32]/Advection: WENO5; Dynamics: anelastic; Microphysics: nothing/NVIDIA L4/512x512x256",
            "value": 113518506.62351078,
            "unit": "points/s"
          },
          {
            "name": "CBL [F32]/Advection: WENO5; Dynamics: compressible_splitexplicit; Microphysics: nothing/NVIDIA L4/512x512x256",
            "value": 14948604.91382192,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}