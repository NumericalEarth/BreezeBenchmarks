window.BENCHMARK_DATA = {
  "lastUpdate": 1771542432649,
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
          "id": "86e4c939939fa1b8723523607c6871c6db48d293",
          "message": "Add dynamics and microphysics benchmark suites",
          "timestamp": "2026-02-19T04:35:43Z",
          "url": "https://github.com/NumericalEarth/Breeze.jl/pull/482/commits/86e4c939939fa1b8723523607c6871c6db48d293"
        },
        "date": 1771542432306,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [F32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 112425750.73984426,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [F32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 110558545.03670351,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [F32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 109187419.45133872,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [F32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 131912293.01371337,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [F32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111126736.50237782,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [F32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111126736.50237782,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [F32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100909760.07135749,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [F32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14819076.907719137,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}