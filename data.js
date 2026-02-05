window.BENCHMARK_DATA = {
  "lastUpdate": 1770333990423,
  "repoUrl": "https://github.com/NumericalEarth/Breeze.jl",
  "entries": {
    "Breeze.jl Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "gregory.leclaire.wagner@gmail.com",
            "name": "Gregory L. Wagner",
            "username": "glwagner"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8d43b2219d5849024f2934429a46cbd8e2356802",
          "message": "Add a benchmarking subpackage (#426)",
          "timestamp": "2026-02-05T02:11:08Z",
          "tree_id": "b6cd687e79d2c94ca4d71b0f1e43cf5b1550dd51",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/8d43b2219d5849024f2934429a46cbd8e2356802"
        },
        "date": 1770258115341,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 133764848.08011279,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 117276968.35235105,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 99892583.22570062,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "765740+giordano@users.noreply.github.com",
            "name": "Mosè Giordano",
            "username": "giordano"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "30aea5d84a256e7d67df7d4a08f0e5923903ea05",
          "message": "[CI] Use benchmarking Docker image for benchmarking job (#450)\n\n* [CI] Use benchmarking Docker image for benchmarking job\n\n* [CI] Also fix path of workflow file triggering benchmark job",
          "timestamp": "2026-02-05T23:11:52Z",
          "tree_id": "241cf67bfc8f101ca7f2934ebcb0418ba53d23be",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/30aea5d84a256e7d67df7d4a08f0e5923903ea05"
        },
        "date": 1770333990034,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 136197243.66902915,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 119559779.98916125,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 102552287.20045123,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}