window.BENCHMARK_DATA = {
  "lastUpdate": 1772214363095,
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
          "id": "2de8902cffb0acde5aa80ebad6c5bb1acfd16640",
          "message": "[benchmarks] Switch to WENO9 as default advection scheme",
          "timestamp": "2026-02-27T15:15:26Z",
          "url": "https://github.com/NumericalEarth/Breeze.jl/pull/497/commits/2de8902cffb0acde5aa80ebad6c5bb1acfd16640"
        },
        "date": 1772214362801,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO9/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 70433932.71639946,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO9/NVIDIA L4/1M_MixedEquilibrium",
            "value": 50221028.544881485,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO9/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 39331302.413298264,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/128x128x128",
            "value": 86936397.2353263,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO9/NVIDIA L4/nothing",
            "value": 76424144.4288928,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 76424144.4288928,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 66261409.454801746,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 13906014.145645538,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}