window.BENCHMARK_DATA = {
  "lastUpdate": 1782758757173,
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
      }
    ]
  }
}