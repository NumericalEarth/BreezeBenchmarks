window.BENCHMARK_DATA = {
  "lastUpdate": 1770439187164,
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
      },
      {
        "commit": {
          "author": {
            "email": "74800123+kaiyuan-cheng@users.noreply.github.com",
            "name": "kaiyuan-cheng",
            "username": "kaiyuan-cheng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78b2717c7436906138bd9f7998d31c06533a6f8d",
          "message": "Add dew point calculation (#446)\n\n* dew point calculation\n\n* Update src/Thermodynamics/vapor_saturation.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Update src/Thermodynamics/vapor_saturation.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* notation\n\n* solver parameter\n\n* fix\n\n* docstring\n\n* jldoctest\n\n---------\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-02-06T12:12:21-05:00",
          "tree_id": "4c05a582697dc2801f510220d0e9c48caf222609",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/78b2717c7436906138bd9f7998d31c06533a6f8d"
        },
        "date": 1770398613553,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 133557289.21354066,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 117868381.21839444,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 104492355.61695772,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "74800123+kaiyuan-cheng@users.noreply.github.com",
            "name": "kaiyuan-cheng",
            "username": "kaiyuan-cheng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb774a0f146adf997507d368e410fb4b31f38568",
          "message": "Enable ParcelDynamics to support microphysics_model_update (#445)\n\n* Enable parcel model mode to support direct field update\n\n* fix\n\n* Remove stale import\n\n* unifying the core microphysics.\n\n* Update src/ParcelModels/parcel_dynamics.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* update example\n\n* trailing whitespace\n\n* fix\n\n* fix\n\n* citation\n\n* Update src/Microphysics/dcmip2016_kessler.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update src/Microphysics/dcmip2016_kessler.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update src/Microphysics/dcmip2016_kessler.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* indent\n\n* update\n\n* clean up names\n\n* better variable name\n\n* fix\n\n---------\n\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-02-06T18:30:53-05:00",
          "tree_id": "27606ce29f86d6d1b34e24e8739e94563afed1b6",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/bb774a0f146adf997507d368e410fb4b31f38568"
        },
        "date": 1770421259136,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 133866478.72366744,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 117865116.16364688,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 102934622.27832063,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "74800123+kaiyuan-cheng@users.noreply.github.com",
            "name": "kaiyuan-cheng",
            "username": "kaiyuan-cheng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd473a8596960dd7d204b2b34a1003cab5eabda3",
          "message": "Use kernels for ParcelModel (#455)\n\n* clean up\n\n* clean up",
          "timestamp": "2026-02-06T23:28:59-05:00",
          "tree_id": "9c38f2122b83e23d589bbe398039c118c3b36e67",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/bd473a8596960dd7d204b2b34a1003cab5eabda3"
        },
        "date": 1770439186554,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 132623235.38136367,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 116397793.81684497,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 101676501.11484714,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}