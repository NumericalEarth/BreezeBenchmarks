window.BENCHMARK_DATA = {
  "lastUpdate": 1782776684773,
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
          "id": "c2f30ebff7fca0178b9ff1542dc52330b5d2c9cc",
          "message": "Add benchmarks for WENO scalar, model tendency",
          "timestamp": "2026-06-27T08:08:07Z",
          "url": "https://github.com/NumericalEarth/Breeze.jl/pull/805/commits/c2f30ebff7fca0178b9ff1542dc52330b5d2c9cc"
        },
        "date": 1782751197059,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121337578.89613199,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84628574.73901854,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65918099.239897415,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 134952374.2206341,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 134952374.2206341,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129228463.53731814,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129228463.53731814,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129228463.53731814,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115418443.11764152,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115418443.11764152,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91236051.3916084,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91236051.3916084,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85577898.72470936,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85577898.72470936,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 77041527.21107683,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 77041527.21107683,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72621018.70803757,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53647149.28365207,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6639977.138604102,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25151937.88280584,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO3/NVIDIA L4/Float32 vanilla",
            "value": 1405929954.057879,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO3/NVIDIA L4/Float32 reactant raise=true",
            "value": 1417069517.3579278,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO3/NVIDIA L4/Float32 reactant raise=false",
            "value": 1610359613.2345533,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO5/NVIDIA L4/Float32 vanilla",
            "value": 1027122144.2916261,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO5/NVIDIA L4/Float32 reactant raise=true",
            "value": 941977895.6674516,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO5/NVIDIA L4/Float32 reactant raise=false",
            "value": 1303829059.696215,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO7/NVIDIA L4/Float32 vanilla",
            "value": 740257415.5156838,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO7/NVIDIA L4/Float32 reactant raise=true",
            "value": 176996084.3826118,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO7/NVIDIA L4/Float32 reactant raise=false",
            "value": 884422534.3975155,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO9/NVIDIA L4/Float32 vanilla",
            "value": 535068459.7329012,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO9/NVIDIA L4/Float32 reactant raise=true",
            "value": 24699287.36119774,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO9/NVIDIA L4/Float32 reactant raise=false",
            "value": 601972515.5022881,
            "unit": "points/s"
          }
        ]
      },
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
          "id": "6ce097d78b4ed32111553046bcfe34194d8d2fb2",
          "message": "Add benchmarks for WENO scalar, model tendency",
          "timestamp": "2026-06-29T17:51:20Z",
          "url": "https://github.com/NumericalEarth/Breeze.jl/pull/805/commits/6ce097d78b4ed32111553046bcfe34194d8d2fb2"
        },
        "date": 1782758756641,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120902196.16837862,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84178335.15663004,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65197424.75055373,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136187721.62759203,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136187721.62759203,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 130620261.5540264,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 130620261.5540264,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 130620261.5540264,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 118849806.20780757,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 118849806.20780757,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93220836.90132663,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93220836.90132663,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 87902188.42804305,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 87902188.42804305,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 79715107.73826884,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 79715107.73826884,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 73659461.62702209,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53823661.73165035,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6656330.13837409,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26600635.867072765,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO5/NVIDIA L4/Float32 vanilla",
            "value": 1033471756.9833015,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO5/NVIDIA L4/Float32 reactant raise=true",
            "value": 922194540.8017323,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO5/NVIDIA L4/Float32 reactant raise=false",
            "value": 1290297811.3902214,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO7/NVIDIA L4/Float32 vanilla",
            "value": 738666011.190657,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO7/NVIDIA L4/Float32 reactant raise=true",
            "value": 176575686.9618284,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO7/NVIDIA L4/Float32 reactant raise=false",
            "value": 868665584.8829179,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO9/NVIDIA L4/Float32 vanilla",
            "value": 528319829.0237086,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO9/NVIDIA L4/Float32 reactant raise=true",
            "value": 24698660.712675545,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO9/NVIDIA L4/Float32 reactant raise=false",
            "value": 592342905.8132181,
            "unit": "points/s"
          }
        ]
      },
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
          "id": "553236497d8aba915c3ffc906b3d6737786c40d2",
          "message": "Add benchmarks for WENO scalar, model tendency",
          "timestamp": "2026-06-29T17:51:20Z",
          "url": "https://github.com/NumericalEarth/Breeze.jl/pull/805/commits/553236497d8aba915c3ffc906b3d6737786c40d2"
        },
        "date": 1782769798627,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121594290.35555314,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83543946.04794815,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65563913.56328338,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 128952660.32757007,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 128952660.32757007,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129945923.92859481,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129945923.92859481,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129945923.92859481,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115311479.98380594,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115311479.98380594,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91814963.24828145,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91814963.24828145,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85192884.20092627,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85192884.20092627,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75905897.59683591,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75905897.59683591,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 73824855.4581503,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53797563.76554568,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6660342.3090328295,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26676743.65405198,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO5/NVIDIA L4/Float32 vanilla",
            "value": 1030780250.9871132,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO5/NVIDIA L4/Float32 reactant raise=true",
            "value": 923613109.0265628,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO5/NVIDIA L4/Float32 reactant raise=false",
            "value": 1304786077.5666165,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO7/NVIDIA L4/Float32 vanilla",
            "value": 732869820.9443023,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO7/NVIDIA L4/Float32 reactant raise=true",
            "value": 176918719.81798854,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO7/NVIDIA L4/Float32 reactant raise=false",
            "value": 878333916.717824,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO9/NVIDIA L4/Float32 vanilla",
            "value": 530076955.62752444,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO9/NVIDIA L4/Float32 reactant raise=true",
            "value": 24704165.863881186,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency/Advection: WENO9/NVIDIA L4/Float32 reactant raise=false",
            "value": 599610252.9924551,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO5/NVIDIA L4/Float32 vanilla",
            "value": 6653889811.990026,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO5/NVIDIA L4/Float32 reactant raise=true",
            "value": 7857967324.541066,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO5/NVIDIA L4/Float32 reactant raise=false",
            "value": 8280285307.6059,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO5/NVIDIA L4/BFloat16 vanilla",
            "value": 5308459033.640057,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO5/NVIDIA L4/BFloat16 reactant raise=true",
            "value": 9902093477.580843,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO5/NVIDIA L4/BFloat16 reactant raise=false",
            "value": 8452108692.60756,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO7/NVIDIA L4/Float32 vanilla",
            "value": 4565762579.629993,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO7/NVIDIA L4/Float32 reactant raise=true",
            "value": 4415854019.962551,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO7/NVIDIA L4/Float32 reactant raise=false",
            "value": 5209836611.292874,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO7/NVIDIA L4/BFloat16 vanilla",
            "value": 3506276688.307825,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO7/NVIDIA L4/BFloat16 reactant raise=true",
            "value": 5424909445.888381,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO7/NVIDIA L4/BFloat16 reactant raise=false",
            "value": 5290627916.950479,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO9/NVIDIA L4/Float32 vanilla",
            "value": 3135592671.926263,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO9/NVIDIA L4/Float32 reactant raise=true",
            "value": 162723244.98930493,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO9/NVIDIA L4/Float32 reactant raise=false",
            "value": 3413277778.6819873,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO9/NVIDIA L4/BFloat16 vanilla",
            "value": 2191493463.426606,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO9/NVIDIA L4/BFloat16 reactant raise=true",
            "value": 2921325979.7033405,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency/Advection: WENO9/NVIDIA L4/BFloat16 reactant raise=false",
            "value": 3457238119.1811705,
            "unit": "points/s"
          }
        ]
      },
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
          "id": "7fc778fbeb85e8d631ae9da2e43213029097c1e3",
          "message": "Add benchmarks for WENO scalar, model tendency",
          "timestamp": "2026-06-29T17:51:20Z",
          "url": "https://github.com/NumericalEarth/Breeze.jl/pull/805/commits/7fc778fbeb85e8d631ae9da2e43213029097c1e3"
        },
        "date": 1782776683897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122760164.77092166,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85276198.26179302,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66466787.04721645,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136084810.96778664,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136084810.96778664,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128309552.46165329,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128309552.46165329,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128309552.46165329,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 113190088.39661923,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 113190088.39661923,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92253122.50232506,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92253122.50232506,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85138395.5883071,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85138395.5883071,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76522692.187715,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76522692.187715,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72839683.05578259,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53677472.2570903,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6757076.172640533,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26322272.621931147,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1058815101.8667462,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 944651680.4358326,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1340955830.15343,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 751467102.1267725,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 177137347.80922872,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 898340845.737099,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 541367021.8517426,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24702186.124307696,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 602577202.8408148,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6551453023.585558,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7357272849.263142,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8198949891.118644,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5173667255.431512,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 9943904228.697962,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8174334178.18718,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4451185622.311654,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4430989748.400564,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5204154584.696627,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3474332967.6114473,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5370032295.957724,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5262542173.194598,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3065201233.9016347,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162681576.9001147,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3322825020.4690676,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2158434935.5944324,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2847505219.029515,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3374220059.788712,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}