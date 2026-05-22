window.BENCHMARK_DATA = {
  "lastUpdate": 1779442097137,
  "repoUrl": "https://github.com/NumericalEarth/Breeze.jl",
  "entries": {
    "Breeze.jl Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "navidcy@users.noreply.github.com",
            "name": "Navid C. Constantinou",
            "username": "navidcy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ade36ece8a18a355c345418d4250b605c55b6aff",
          "message": "Homogenise math formatting in docstrings + few moar tweaks (#606)",
          "timestamp": "2026-04-08T13:37:38+10:00",
          "tree_id": "e35be70038ebfd3180cae8f3fe328e9dda6ca135",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/ade36ece8a18a355c345418d4250b605c55b6aff"
        },
        "date": 1775620821217,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108541758.20418745,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77005494.78003214,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47855642.11610097,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121380088.05672337,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121380088.05672337,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113055221.43144378,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113055221.43144378,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113055221.43144378,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 103100558.49223508,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 103100558.49223508,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80982741.53530104,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80982741.53530104,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 75479227.68424955,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 75479227.68424955,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65273370.016604334,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65273370.016604334,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14860517.662495375,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliot@aeolus.earth",
            "name": "Eliot Quon",
            "username": "ewquon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "df3ba496523fb067770feca3d657626f2dc4644e",
          "message": "Add closure prognostic hooks for LASD support (#618)\n\n* Add closure prognostic hooks for LASD (DynamicSmagorinsky) support\n\nDynamicSmagorinsky with LagrangianAveraging requires two Oceananigans hooks\nthat Breeze was not calling:\n\n- initialize_closure_fields!: seeds the Lagrangian averages (𝒥ᴸᴹ, 𝒥ᴹᴹ)\n  from the initial velocity field after set!. Without this, the relaxation\n  time scale T → ∞ and the blending weight ϵ → 0, so the averages can\n  never pick up instantaneous values.\n\n- step_closure_prognostics!: advances the Lagrangian averages each time\n  step (back-track, interpolate, blend). For LASD, compute_coefficient_fields!\n  is explicitly a no-op — all work happens here.\n\nBoth hooks are no-ops for non-LASD closures (constant Smagorinsky, AMD, etc.),\nso existing simulations are unaffected.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Add DynamicSmagorinsky to turbulence closure tests\n\nTest that DynamicSmagorinsky produces non-zero eddy viscosity after one\ntime step with a velocity gradient. This would have caught the missing\nstep_closure_prognostics! and initialize_closure_fields! hooks.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Bump patch version\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-08T07:42:27-06:00",
          "tree_id": "584fbcc63245812c3be5a2a5798fd30c136ae15b",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/df3ba496523fb067770feca3d657626f2dc4644e"
        },
        "date": 1775657053413,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108829153.37141581,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77713812.42368074,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48787496.16689854,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 119978251.38464558,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 119978251.38464558,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112593483.74840541,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112593483.74840541,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112593483.74840541,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 103418830.2908255,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 103418830.2908255,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 78695004.3219105,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 78695004.3219105,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74241067.82859983,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74241067.82859983,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64456560.973033436,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64456560.973033436,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14582950.045058087,
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
          "id": "fc48f543d3dd61a3333840b41686c95411b79f5b",
          "message": "Clean up TerrainFollowingDiscretization (#621)\n\n* Clean up TerrainFollowingDiscretization (#592)\n\n- Rename Ω̃/ρΩ̃ struct fields to contravariant_vertical_velocity/momentum\n  for consistency with other verbose English field names in CompressibleDynamics\n- Remove underscore prefix from non-kernel helper functions (follow_terrain!,\n  set_topography!, terrain pressure gradient helpers, reference state helpers)\n- Eliminate advecting_momentum alias; inline transport_momentum(model) calls\n- Add Ω̃ and ρΩ̃ entries to notation.md\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Update docs/src/terrain_following_coordinates.md\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Rename transport_momentum to advecting_momentum\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-04-08T16:22:47-04:00",
          "tree_id": "46c2a90585d1da288f6960f9ecd30a0292f0ef78",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/fc48f543d3dd61a3333840b41686c95411b79f5b"
        },
        "date": 1775680786401,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107990762.1206549,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76367252.5108247,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47804611.35347234,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120585388.61816853,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120585388.61816853,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112324309.32017317,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112324309.32017317,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112324309.32017317,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 100336773.40877526,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100336773.40877526,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79390034.80008522,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79390034.80008522,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74110482.1810113,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74110482.1810113,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65280590.04279408,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65280590.04279408,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14830496.867318941,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "navidcy@users.noreply.github.com",
            "name": "Navid C. Constantinou",
            "username": "navidcy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44a8cf8964da34c8decbc5599643be4d18349e74",
          "message": "Use prettysummary in show method when `radiation.surface_properties.surface_temperature !isa ConstantField` (#620)\n\n* use prettysummary when radiation.surface_properties.surface_temperature isa Field\n\n* cleaner\n\n* debug\n\n* print(io, ...)",
          "timestamp": "2026-04-09T08:54:10+10:00",
          "tree_id": "4496e6a203dbda817ce641270b1df24b65d4d7bf",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/44a8cf8964da34c8decbc5599643be4d18349e74"
        },
        "date": 1775689873306,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107834124.31204967,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76147346.43892269,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 46019601.64979313,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121464395.35428698,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121464395.35428698,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112748725.95718578,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112748725.95718578,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112748725.95718578,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102071285.32880984,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102071285.32880984,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80851783.32714899,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80851783.32714899,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74967893.81995343,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74967893.81995343,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64901459.83494137,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64901459.83494137,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14908967.708412616,
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
          "id": "795dfe17cec05156fa83b27457311a20d187295a",
          "message": "Fix physics bugs found by Bug Crawl (#625) (#626)\n\n* Fix standard-pressure hydrostatic reference state\n\n* Fix bottom-up moisture borrowing index: max(2, Nz) → min(2, Nz)\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix virtual_potential_temperature Poisson exponent: Rᵐ/cᵖᵐ → Rᵈ/cᵖᵈ\n\nThe standard definition of θᵥ uses the dry-air Poisson exponent κ = Rᵈ/cᵖᵈ,\nnot the moist exponent Rᵐ/cᵖᵐ. The moist exponent systematically underestimates\nθᵥ and N², affecting turbulence closure buoyancy gradients.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix moisture_fractions NamedTuple fallback to include ice-phase species\n\nThe fallback accumulated only liquid species (qᶜˡ, qʳ) and called\nMoistureMassFractions(qᵛᵉ, qˡ), silently setting ice to zero.\nAdd ice accumulation (qᶜⁱ + qˢ) so mixed-phase NamedTuple states\nproduce correct MoistureMassFractions.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix ∂z_b grid-staggering inconsistency: use logarithmic derivative\n\nReplace g·∂z(ϑ)/ϑ with g·∂z(log ϑ), which is mathematically equivalent\nbut avoids dividing a face-located derivative by a center-located value.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix ice latent heat sign in moist static energy diagnostic: +ℒⁱᵣqⁱ → −ℒⁱᵣqⁱ\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix missing ϵᵈᵛ factor in saturation_total_specific_moisture: pᵛ⁺/(…) → ϵᵈᵛpᵛ⁺/(…)\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix Clausius-Clapeyron docstring: log[(Δcᵝ/Rᵛ)(T/Tᵗʳ)] → (Δcᵝ/Rᵛ) log(T/Tᵗʳ)\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Replace haskey+ternary with get dispatch in NamedTuple moisture_fractions\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Revert \"Fix virtual_potential_temperature Poisson exponent: Rᵐ/cᵖᵐ → Rᵈ/cᵖᵈ\"\n\nThis reverts commit 29f1ce6b57ee786f3586af092078bc80d513cac4.\n\n* Update src/AtmosphereModels/atmosphere_model_buoyancy.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* split arguments\n\n* Remove trailing whitespace in atmosphere_model_buoyancy.jl\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Update doctest expected values after Poisson exponent revert\n\nThe revert of the virtual_potential_temperature Poisson exponent\n(ce27bd89) changed downstream thermodynamic computations, shifting\ndiagnostic output values for static energy, equivalent/stability\nequivalent potential temperature, dewpoint temperature, and\nrelative humidity.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-04-10T16:01:40-04:00",
          "tree_id": "76a4320b4aca021f88565b8b97460c1344d2e704",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/795dfe17cec05156fa83b27457311a20d187295a"
        },
        "date": 1775852516082,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107422843.77302328,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 75844887.81150267,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47071856.547455385,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 119605325.13871531,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 119605325.13871531,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 110982876.37285328,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 110982876.37285328,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 110982876.37285328,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 99457551.46040192,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 99457551.46040192,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 78135644.43894933,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 78135644.43894933,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73907745.32678272,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73907745.32678272,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65815563.6381035,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65815563.6381035,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14891290.925335158,
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
          "id": "b677940854a8fb9eb8347dc54f6c4420554d66ed",
          "message": "[CI] Update all GPU jobs to use julia v1.12.6 (#629)",
          "timestamp": "2026-04-14T15:47:41+02:00",
          "tree_id": "e55aba2ea92c256d16211c9489047722343b83e7",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b677940854a8fb9eb8347dc54f6c4420554d66ed"
        },
        "date": 1776175495327,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107154726.14120275,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76325227.88164873,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47492741.646983504,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120586965.38523775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120586965.38523775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112346128.10700458,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112346128.10700458,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112346128.10700458,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102635492.46824814,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102635492.46824814,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79946773.77493526,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79946773.77493526,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74955012.51895119,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74955012.51895119,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65274801.19096081,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65274801.19096081,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14265835.440653495,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliot@aeolus.earth",
            "name": "Eliot Quon",
            "username": "ewquon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b896ff3c67968bd0fe4ddcc120db94c0990738cc",
          "message": "Call `materialize_advection` for WENO GPU compatibility (#631)\n\nOceananigans v0.106.6 refactored WENO to defer the weight computation\ntype (WCT) as `Nothing` until the grid architecture is known. The new\n`materialize_advection` function resolves `Nothing` to the appropriate\nbackend-optimized division on GPU. All Oceananigans models already call\nthis, but AtmosphereModel was never updated — causing an InvalidIRError\n(`unsupported dynamic function invocation (call to newton_div)`) when\nrunning WENO advection on GPU.\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-15T18:50:13-07:00",
          "tree_id": "c98061045cc6d7547b4fbff7de70ae26d0df8255",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b896ff3c67968bd0fe4ddcc120db94c0990738cc"
        },
        "date": 1776305236759,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108242127.75295651,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77815148.6042031,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48384048.848003715,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 123783379.64193268,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 123783379.64193268,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113728406.58419725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113728406.58419725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113728406.58419725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102696921.91483752,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102696921.91483752,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 82996386.28346694,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 82996386.28346694,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 76497254.52077812,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 76497254.52077812,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 66542305.23130492,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 66542305.23130492,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14986869.635673422,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "silvestri.simone0@gmail.com",
            "name": "Simone Silvestri",
            "username": "simone-silvestri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "940de555e108d443878f96b4486132e5affa516f",
          "message": "Update Project.toml (#632)",
          "timestamp": "2026-04-16T14:12:57+02:00",
          "tree_id": "dc95f292e1082f078a39ea8b2e825427894071df",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/940de555e108d443878f96b4486132e5affa516f"
        },
        "date": 1776342599666,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 110153937.2302687,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 79144883.79460198,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 49836487.56271128,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 123812133.84908466,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 123812133.84908466,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 115084942.49205503,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 115084942.49205503,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 115084942.49205503,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 106968679.01647866,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 106968679.01647866,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 83336856.4168715,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 83336856.4168715,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 78559458.71527489,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 78559458.71527489,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 67926243.94186929,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 67926243.94186929,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15084562.835774526,
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
          "id": "742d7e002eae85746b6952443ef93c5d8bfba590",
          "message": "Allow Oceananigans v0.107 (#639)",
          "timestamp": "2026-04-18T12:15:02+01:00",
          "tree_id": "a2163aff22be553be163f8c235eeaad81aac7550",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/742d7e002eae85746b6952443ef93c5d8bfba590"
        },
        "date": 1776511924970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 106816495.13880861,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 75989151.88970765,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47856056.82024914,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 122539165.41137873,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 122539165.41137873,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113778075.84713502,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113778075.84713502,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113778075.84713502,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 103228393.13963507,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 103228393.13963507,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80345770.60479034,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80345770.60479034,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 75265910.31708162,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 75265910.31708162,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65932377.892193586,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65932377.892193586,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14913414.335185885,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "navidcy@users.noreply.github.com",
            "name": "Navid C. Constantinou",
            "username": "navidcy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3463eb8524658ccbdb4ea2d3cc17d10c303d0b0f",
          "message": "Update Oceananigans version to 0.107.1 (#641)",
          "timestamp": "2026-04-20T17:44:34+10:00",
          "tree_id": "96fca644cbfdd92b92648c7126e2a51f0be00a8c",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/3463eb8524658ccbdb4ea2d3cc17d10c303d0b0f"
        },
        "date": 1776672068311,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108564577.75478579,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76987652.726962,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48104407.235053524,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120812778.6935463,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120812778.6935463,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113436983.01267199,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113436983.01267199,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113436983.01267199,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 104977124.05473143,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 104977124.05473143,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79921071.44811404,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79921071.44811404,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 75377452.79221371,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 75377452.79221371,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 66315119.085804015,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 66315119.085804015,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14817747.084976217,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34ea2e2ef141c8ebf3869005770a9b84a5a68992",
          "message": "Bump CUDA in /benchmarking (#637)\n\nUpdates the requirements on  and [CUDA](https://github.com/JuliaGPU/CUDA.jl) to permit the latest version.\n\nUpdates `CUDA` to 6.0.0\n- [Release notes](https://github.com/JuliaGPU/CUDA.jl/releases)\n- [Commits](https://github.com/JuliaGPU/CUDA.jl/compare/v5.0.0...v6.0.0)\n\nUpdates `CUDA` to 6.0.0\n- [Release notes](https://github.com/JuliaGPU/CUDA.jl/releases)\n- [Commits](https://github.com/JuliaGPU/CUDA.jl/compare/v5.0.0...v6.0.0)\n\nUpdates `CUDA` to 6.0.0\n- [Release notes](https://github.com/JuliaGPU/CUDA.jl/releases)\n- [Commits](https://github.com/JuliaGPU/CUDA.jl/compare/v5.0.0...v6.0.0)\n\nUpdates `CUDA` to 6.0.0\n- [Release notes](https://github.com/JuliaGPU/CUDA.jl/releases)\n- [Commits](https://github.com/JuliaGPU/CUDA.jl/compare/v5.0.0...v6.0.0)\n\n---\nupdated-dependencies:\n- dependency-name: CUDA\n  dependency-version: 6.0.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CUDA\n  dependency-version: 6.0.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CUDA\n  dependency-version: 6.0.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CUDA\n  dependency-version: 6.0.0\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-04-20T13:03:38+02:00",
          "tree_id": "09657df94e34fac336b8f94663a75ae2409b61db",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/34ea2e2ef141c8ebf3869005770a9b84a5a68992"
        },
        "date": 1776684042049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 106827465.91624257,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 75829026.67295545,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47608005.338589676,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 123165653.13630852,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 123165653.13630852,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 114991902.58746022,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 114991902.58746022,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 114991902.58746022,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 105459504.62815174,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 105459504.62815174,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 81844218.17848106,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 81844218.17848106,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 76606018.82265967,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 76606018.82265967,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 67055410.57829128,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 67055410.57829128,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14800896.613708684,
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
          "id": "de2fd4868d79131913428f95d721cf9394518d30",
          "message": "Avoid use of at-doc macro inside structs (#642)\n\nIn Julia v1.13, using at-doc inside struct to attach the docstring to an inner\nconstructor causes an extra hidden field to be added to the struct itself, due\nto macro expansion rules.  Doesn't look like this is going to be changed\nupstream, so we have to work around it: luckily the fix is backward compatible,\nwe only lose the convenience of having the docstring right above the constructor\ndefinition.",
          "timestamp": "2026-04-20T17:06:00+02:00",
          "tree_id": "eb320d4c27f44e58e2bb6316037ca1325cab027a",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/de2fd4868d79131913428f95d721cf9394518d30"
        },
        "date": 1776698583277,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107025034.2134877,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 75464708.097063,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 46573311.63014996,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 123861422.9854942,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 123861422.9854942,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 114786612.85577664,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 114786612.85577664,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 114786612.85577664,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102966363.0703411,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102966363.0703411,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80635934.80971353,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80635934.80971353,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74756809.33076945,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74756809.33076945,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64153137.79876256,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64153137.79876256,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14581322.132660698,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliot@aeolus.earth",
            "name": "Eliot Quon",
            "username": "ewquon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1ecf55acbdd7bd444dd968197e92be403029c0d1",
          "message": "Drop :grid from default_included_properties; test no-warning init (#645)\n\n* No need to explicitly include grid\n\nAfter https://github.com/CliMA/Oceananigans.jl/pull/5486\n\n* Add regression test for JLD2Writer duplicate-grid warning\n\nVerifies that initializing a JLD2Writer attached to an AtmosphereModel\nemits no warnings, and that the resulting file contains a single\nserialized grid matching the model grid plus serialized\nthermodynamic_constants. Guards against regressions of #643.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Update test/output_writers.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-04-20T18:20:01-06:00",
          "tree_id": "5532950823bdae2485553df522cb124ffb727fe4",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/1ecf55acbdd7bd444dd968197e92be403029c0d1"
        },
        "date": 1776731820179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108510684.67277808,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76917196.30427165,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48519775.69164383,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120988585.77821875,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120988585.77821875,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113475699.8399242,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113475699.8399242,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113475699.8399242,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 103629309.20577726,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 103629309.20577726,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79625460.82625835,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79625460.82625835,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74927401.08700632,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74927401.08700632,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65900549.90618717,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65900549.90618717,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14638948.191666098,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliot@aeolus.earth",
            "name": "Eliot Quon",
            "username": "ewquon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27d81200169adcc3b3b512320adab2eb59f4e8f1",
          "message": "Register atan, atand, mod as binary operations on Fields (#644)\n\n* Register atan, atand, mod as binary operations on Fields\n\nLets atmospheric diagnostics like wind direction be expressed as\n`mod(270 - atand(v, u), 360)` directly on Fields, rather than falling\nback to `interior(...)` with `@.` broadcasting.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* No import\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* DROP ME: use Oceananigans from dev branch\n\n* Require newer version of Oceananigans\n\n* Simplify `AbstractOperations` module\n\n* Only allow Oceananigans v0.107\n\n* DROP ME: set Oceananigans source everywhere else\n\n* Cleanup ugly wind dir calc\n\n* Revert \"DROP ME: set Oceananigans source everywhere else\"\n\nThis reverts commit 0011b4e8cc6505fcdc04918c6fb337972bdc3308.\n\n* Revert \"DROP ME: use Oceananigans from dev branch\"\n\nThis reverts commit f04bb859cb219c89e4b76e7a839af47f1fabd57a.\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-04-20T20:27:11-06:00",
          "tree_id": "593c9c3bf071c227468480597cef0c2fbe0fca26",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/27d81200169adcc3b3b512320adab2eb59f4e8f1"
        },
        "date": 1776739439867,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108458975.00302033,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77336322.79450737,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48735093.48799004,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121044726.46951473,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121044726.46951473,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113286853.48211801,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113286853.48211801,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113286853.48211801,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 100828527.28539482,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100828527.28539482,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 77329690.13825507,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 77329690.13825507,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 71316612.44391686,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 71316612.44391686,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 63014609.18639941,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 63014609.18639941,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14659847.750521963,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliot@aeolus.earth",
            "name": "Eliot Quon",
            "username": "ewquon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d00303a572ce089b4200d28482f77a5ba142eb1",
          "message": "Fix Lagrangian-averaged `DynamicSmagorinsky` clock-stage wiring: step_closure_prognostics! after tick_stage! (#646)\n\n* Call step_closure_prognostics! after final tick_stage!\n\nDynamicSmagorinsky() (Lagrangian averaging) was producing ~0 eddy\nviscosity because Oceananigans's LASD kernel gates on\n`clock.stage == 1` (dynamic_coefficient.jl:454). Breeze was calling\n`step_closure_prognostics!` just before the terminal `tick_stage!`,\nso the hook fired at `clock.stage == 2` and the kernel returned\nwithout updating 𝒥ᴸᴹ or 𝒥ᴹᴹ. The Lagrangian averages stayed at\ntheir `initialize_closure_fields!` seed forever, leaving νₑ ~ 1e-10.\n\nSwap the two calls in all three timesteppers so stage is back to 1\nwhen the closure prognostics advance.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Test that DynamicSmagorinsky Lagrangian averages advance\n\nThe existing `@test maximum(abs, νₑ) > 0` passes even when\n`step_closure_prognostics!` never fires, because\n`initialize_closure_fields!` seeds 𝒥ᴸᴹ with a non-zero spatial mean\n(or the `minimum_numerator` floor), which produces a tiny-but-positive\nνₑ on the first compute.\n\nAdd a stronger assertion that `𝒥ᴸᴹ` differs from its (spatially\nuniform) initialization seed after one time step. Under the previous\ncall-site bug this array was byte-identical to the seed; under the\nfix the per-cell Lagrangian update introduces spatial variation.\n\nAlso inject a horizontal (x, y) perturbation into the initial ρu so\nthat the test filter sees non-trivial structure — with `ρu = z/100`\nonly, Lᵢⱼ vanishes and 𝒥ᴸᴹ sits at the floor regardless of whether\nthe hook runs.\n\nVerified on GPU Float64:\n  pre-fix tree:  𝒥ᴸᴹ unchanged (3.77e-21 → 3.77e-21) ⇒ assertion fails\n  post-fix tree: 𝒥ᴸᴹ changes (3.77e-21 → range [1e-32, 1.3e-9]) ⇒ passes\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-04-21T13:50:02-06:00",
          "tree_id": "4d9829198775926a1fd3277ae44d4901e392fedd",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/2d00303a572ce089b4200d28482f77a5ba142eb1"
        },
        "date": 1776802040485,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107536287.48835959,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77225227.48403406,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 46836489.74682654,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 123657456.45218031,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 123657456.45218031,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 115438057.26115482,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 115438057.26115482,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 115438057.26115482,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 105933401.9823478,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 105933401.9823478,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79965090.72319241,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79965090.72319241,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 77271899.12042531,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 77271899.12042531,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 66352795.8511031,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 66352795.8511031,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15326807.659286154,
            "unit": "points/s"
          }
        ]
      },
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
          "id": "30dc2d02a15e59c7567e2a22dc8f0111dd8d1761",
          "message": "Add FilteredSurfaceVelocities for computing bulk boundary conditions from a time-averaged state (#541)\n\n* Add filtered surface state for bulk boundary conditions\n\nTemporally filter near-surface velocity and scalar fields before\nfeeding them to bulk flux formulas. This mitigates spurious u*-u'\ncorrelations and resolution dependence (Shin, Yang & Howland 2025;\nNishizawa & Kitamura 2018).\n\nNew types:\n- FilteredSurfaceVelocities: 2D fields with exponential filter + optional\n  fixed reference height interpolation\n- FilteredSurfaceScalar: same for scalar fields (auto-created during\n  materialization when filtered_velocities is provided)\n\nAll bulk BC structs (BulkDragFunction, BulkSensibleHeatFluxFunction,\nBulkVaporFluxFunction) gain an optional filtered_velocities keyword.\nPolynomialCoefficient gains a height-aware callable for reference height\noverride. Fully backward compatible (defaults to nothing everywhere).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* cosmetic improvements\n\n* Wire update_boundary_conditions\\! into AtmosphereModel update_state\\!\n\nAdd deduplication-tracked filtered surface state updates during\ntime-stepping by extending Oceananigans' update_boundary_condition\\!\ndispatch for BulkDrag, BulkSensibleHeatFlux, and BulkVaporFlux BCs.\n\n- Add last_update Ref{Tuple{Int,Int}} to FilteredSurfaceVelocities\n  and FilteredSurfaceScalar for (iteration, stage) deduplication\n- Add update_boundary_conditions.jl with per-BC-type dispatch methods\n- Call update_boundary_conditions\\! in update_state\\! after\n  compute_auxiliary_variables\\!\n- Use FilteredSurfaceVelocities in prescribed SST example (τ=10min)\n- Update tests to use default_arch and test_float_types()\n- Rename kernel variables to unicode (û, v̂, f̂, uⁿ, vⁿ, fⁿ)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Remove trailing blank line in filtered_surface_state.jl\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add tests for filtered surface state coverage\n\nTests height interpolation, wind speed dispatch with\nFilteredSurfaceVelocities, evaluation_height helper,\nsummary methods, and update_filtered_surface_state\\! with Nothing.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add Shin et al. (2025) and Nishizawa & Kitamura (2018) bib entries\n\nFixes docs build failure from missing DocumenterCitations keys\nreferenced in the prescribed SST example.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Use KernelParameters for filtered surface kernels; add initialize\\! extension\n\n- Replace fill_halo_regions\\! with KernelParameters(1:N+1) to compute\n  filtered values at face points directly\n- Use Oceananigans.Fields.interpolate for height interpolation (curvilinear-safe)\n- Add Oceananigans.initialize\\! extension for AtmosphereModel to initialize\n  filtered surface state before the first time step\n- Guard against Inf Δt in update_filtered_surface_state\\! (called during\n  set\\! before any valid time step)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Make FilteredSurfaceVelocities and FilteredSurfaceScalar GPU-compatible\n\nParameterize last_update field type and dereference Ref in\nAdapt.adapt_structure, following the Oceananigans BoundaryAdjacentMean\npattern. On GPU the field holds a plain Tuple{Int, Int} (bitstype)\ninstead of Ref{Tuple{Int, Int}} (not bitstype).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* change filtering timescale to 1hour\n\n* Add tests for filtered surface state coverage\n\nTest initialize\\!, Adapt.adapt_structure, filtered_kernel_parameters,\nupdate_filtered_surface_state\\! deduplication/isinf guard,\ninitialize_boundary_condition\\! fallback, and full model lifecycle\nwith BulkDrag/BulkSensibleHeatFlux/BulkVaporFlux filtered BCs.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add tests verifying temporal filtering produces lagged response\n\nTest that the exponential filter lags behind a step change in velocity\n(and scalar), and that the filter converges after many updates. Also\ntest that filtered velocities lag during model time stepping by manually\nperturbing fv and confirming the update moves it toward the actual\nvelocity without jumping there.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Test that drag flux uses filtered velocity via BoundaryConditionOperation\n\nVerify the exact drag flux τ = -Cᴰ (U_f² + g²) ρu / U_f is computed\nwith the filtered wind speed U_f, not the instantaneous velocity.\nAlso verify filtered velocity updates lag during model time stepping.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix adapt_structure idempotency for GPU halo filling\n\nDuring GPU halo filling, FilteredSurfaceVelocities/FilteredSurfaceScalar\nget adapted twice through a nested adaptation chain. The first adaptation\nconverts Ref{Tuple} to Tuple, but the second tried to index a plain Tuple\nwith [], causing MethodError. Add _deref helper that handles both Ref and\nTuple, making adapt_structure idempotent. Add double-adaptation tests.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @navidcy\n\n* add show methods for FilteredSurfaceVelocities, FilteredSurfaceScalar\n\n* Apply suggestion from @glwagner\n\n* Fix GPU scalar indexing in polynomial bulk coefficient tests\n\nWrap test body with @allowscalar to allow scalar indexing of GPU\narrays in tests that call PolynomialCoefficient and wind_speed²\nfunctions outside of kernels.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-04-22T15:03:47+10:00",
          "tree_id": "ea463d8b072e28e55e5728712c5241ecae2ba587",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/30dc2d02a15e59c7567e2a22dc8f0111dd8d1761"
        },
        "date": 1776835251966,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108228499.31741585,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76931014.23161219,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48636643.775768586,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121785459.48621659,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121785459.48621659,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 114332893.43800868,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 114332893.43800868,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 114332893.43800868,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 104637266.0210542,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 104637266.0210542,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80116980.95718615,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80116980.95718615,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74742890.90009099,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74742890.90009099,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65487698.965657115,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65487698.965657115,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14962802.0845356,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "12664448+bischtob@users.noreply.github.com",
            "name": "Nawibot",
            "username": "bischtob"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa5c52a1426ca30ce092d3dc95ccae2cfbec35ae",
          "message": "Fix bulk sensible heat flux potential temperature conversion (#651)",
          "timestamp": "2026-04-22T17:08:16-06:00",
          "tree_id": "8d05ebb4507f18b7c5517394baf80b5bd464a9a1",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/aa5c52a1426ca30ce092d3dc95ccae2cfbec35ae"
        },
        "date": 1776900380807,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108322894.39215107,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77565394.68742663,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 49551516.06997416,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120624043.05867292,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120624043.05867292,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111871162.90547788,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111871162.90547788,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111871162.90547788,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 101076858.75321522,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101076858.75321522,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79076209.4056736,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79076209.4056736,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 72886733.83983462,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 72886733.83983462,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 63751999.841256045,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 63751999.841256045,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15174206.43032357,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "navidcy@users.noreply.github.com",
            "name": "Navid C. Constantinou",
            "username": "navidcy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c74f1db0bf8517c0298763709fc8d4cb9e268f7",
          "message": "Bump version from 0.4.7 to 0.4.8 (#650)\n\nto capture #541",
          "timestamp": "2026-04-23T10:41:02+10:00",
          "tree_id": "1f39d9c67e61651be59b21ee427f98aae566ac00",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/5c74f1db0bf8517c0298763709fc8d4cb9e268f7"
        },
        "date": 1776905935565,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107031126.17018065,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76516392.92141266,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47725315.91869928,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121437303.97892952,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121437303.97892952,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112741947.79762936,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112741947.79762936,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112741947.79762936,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102955790.19598939,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102955790.19598939,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80139780.1381831,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80139780.1381831,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 75040369.41518508,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 75040369.41518508,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65599190.2076451,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65599190.2076451,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14959332.67590317,
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
          "id": "1ccbb30ab70b83bd1d090a2a3dca1f189f1328d7",
          "message": "[benchmarking] Compatibility for CUDA.jl v6 (#652)",
          "timestamp": "2026-04-23T17:33:16+01:00",
          "tree_id": "aff5b5a421cae43a674e29f5f23f1917185e74c0",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/1ccbb30ab70b83bd1d090a2a3dca1f189f1328d7"
        },
        "date": 1776963107146,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108215579.27596146,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77060400.02830613,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48655563.912278436,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120593319.11047237,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120593319.11047237,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112630694.16387199,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112630694.16387199,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112630694.16387199,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102846284.08134812,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102846284.08134812,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 78369847.57883915,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 78369847.57883915,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73276785.72424963,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73276785.72424963,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65000814.887831934,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65000814.887831934,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14810998.969802232,
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
          "id": "54c7f34ec53d37b37bffb8a6af05a32f29d5629b",
          "message": "Fix formulation of virtual potential temperature / bugs from #625 bug crawl (#656)\n\n* Fix bulk sensible heat flux comparing potential temperature to actual temperature\n\nThe PotentialTemperatureFlux path in bulk_sensible_heat_difference was computing\nθ - T₀, mixing potential temperature with actual surface temperature. Now converts\nT₀ to surface potential temperature θ₀ = T₀ / Π₀ via the Exner function before\ncomputing the difference, consistent with reference_states.jl surface_density.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Reapply \"Fix virtual_potential_temperature Poisson exponent: Rᵐ/cᵖᵐ → Rᵈ/cᵖᵈ\"\n\nThis reverts commit ce27bd891f4cbf07aa5b87fd0115035b01442757.\n\n* Fix sign error in LiquidIcePotentialTemperatureFormulation docstring\n\nThe exponent in the θˡⁱ definition was positive, which would make θˡⁱ\nlarger than dry θ when condensate is present. Physically, evaporating/\nsublimating condensate cools the parcel, so θˡⁱ < θ. The actual code\nin Thermodynamics/dynamic_states.jl was already correct; only the\ndocstring formula was wrong.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix sign of buoyancy flux in static energy tendency\n\nMoist static energy obeys ∂ₜ(ρᵣe) + ∇·(ρᵣe u) = -ρᵣwb + Sₑ\n(Pauluis 2008), but the tendency was using +buoyancy_flux. Also\nswitch advection to the conservative c_div_ρU form consistent with\nthe other formulations.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Revert \"Fix bulk sensible heat flux comparing potential temperature to actual temperature\"\n\nThis reverts commit 6e7c67016dbb208bbd842e88d6040649675048c4.\n\n* Fix Kessler microphysics Exner function reference pressure\n\nThe DCMIP2016 Kessler kernel used surface_pressure (101325 Pa default)\nas the Exner function reference, but Π = (p/pˢᵗ)^(Rᵐ/cᵖᵐ) is defined\nagainst standard_pressure (1e5 Pa default) — the convention used\neverywhere else in the codebase. With defaults, this produced a ~0.38%\nerror in Π at p = 80 kPa and a ~1.2 K bias in the T ↔ θˡⁱ conversion\ndriving saturation adjustment, condensation, and rain evaporation.\n\nThe existing test masked the bug by setting surface_pressure = 1e5,\nmaking it equal to standard_pressure.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Remove stale mixture_heat_capacity imports in AtmosphereModels\n\nThe only caller in the top-level AtmosphereModels module was removed in\n8b72364b (virtual_potential_temperature Poisson exponent fix), leaving\nthe imports stale and failing the ExplicitImports QA test.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Update docs/src/anelastic_dynamics.md\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-04-24T19:12:25-04:00",
          "tree_id": "d781571f872bacd11226c8e9e80665fd3edf0972",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/54c7f34ec53d37b37bffb8a6af05a32f29d5629b"
        },
        "date": 1777073417452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107328345.98380007,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 75876233.81437522,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47346820.55732178,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 119721569.95464261,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 119721569.95464261,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111602442.07470594,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111602442.07470594,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111602442.07470594,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 100600468.52592734,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100600468.52592734,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 77469846.82033195,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 77469846.82033195,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 72871966.66619003,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 72871966.66619003,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65234693.10970784,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65234693.10970784,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14869116.540211285,
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
          "id": "c2e035fd9e9cf7d63190294e3f59828ec0670c0c",
          "message": "Revert \"Register atan, atand, mod as binary operations on Fields (#644)\" (#658)\n\n* Revert \"Register atan, atand, mod as binary operations on Fields (#644)\"\n\nThis partially reverts commit 27d81200169adcc3b3b512320adab2eb59f4e8f1.\n\n* Explicitly require Oceananigans v0.107.4",
          "timestamp": "2026-04-25T06:02:01+01:00",
          "tree_id": "cdd9b0fa5fe52fda2d6f4b90578be18389722f2d",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/c2e035fd9e9cf7d63190294e3f59828ec0670c0c"
        },
        "date": 1777094340504,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108357618.89421669,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77318148.9537883,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48925229.09136839,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 122023953.4962598,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 122023953.4962598,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111439170.23282973,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111439170.23282973,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111439170.23282973,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 96555839.67491741,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 96555839.67491741,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 76566267.4168792,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 76566267.4168792,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 71196827.77709381,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 71196827.77709381,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 61297621.025589004,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 61297621.025589004,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14932786.499744236,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "34ad373d05d567fdcda852a29fa736b946d16478",
          "message": "Bump CloudMicrophysics in / (#586)\n\n* Bump CloudMicrophysics in /\n\nUpdates the requirements on  and [CloudMicrophysics](https://github.com/CliMA/CloudMicrophysics.jl) to permit the latest version.\n\nUpdates `CloudMicrophysics` to 0.33.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.33.0)\n\nUpdates `CloudMicrophysics` to 0.33.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.33.0)\n\nUpdates `CloudMicrophysics` to 0.33.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.33.0)\n\nUpdates `CloudMicrophysics` to 0.33.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.33.0)\n\nUpdates `CloudMicrophysics` to 0.33.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.33.0)\n\n---\nupdated-dependencies:\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.33.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.33.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.33.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.33.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.33.0\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* Remove type parameter from `SB2006`\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-04-25T12:47:54+01:00",
          "tree_id": "b605583e42d073243c84d6966448c16f88db4765",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/34ad373d05d567fdcda852a29fa736b946d16478"
        },
        "date": 1777118681941,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108480946.52560359,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77152246.58206613,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48384839.80622672,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 119905084.25869057,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 119905084.25869057,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112922903.91840374,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112922903.91840374,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112922903.91840374,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 103332587.00324734,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 103332587.00324734,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79912050.04532468,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79912050.04532468,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73852754.05143715,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73852754.05143715,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64701830.78517476,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64701830.78517476,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14373217.125219941,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1cb37f61c575781f9d9ec2b1c78114a1fa12da0c",
          "message": "Bump CloudMicrophysics in / (#636)\n\nUpdates the requirements on  and [CloudMicrophysics](https://github.com/CliMA/CloudMicrophysics.jl) to permit the latest version.\n\nUpdates `CloudMicrophysics` to 0.34.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.34.0)\n\nUpdates `CloudMicrophysics` to 0.34.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.34.0)\n\nUpdates `CloudMicrophysics` to 0.34.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.34.0)\n\nUpdates `CloudMicrophysics` to 0.34.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.34.0)\n\nUpdates `CloudMicrophysics` to 0.34.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.34.0)\n\n---\nupdated-dependencies:\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.34.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.34.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.34.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.34.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.34.0\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-04-25T13:19:12+01:00",
          "tree_id": "5765db8117135fc998b5995790fa527cfcb1196e",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/1cb37f61c575781f9d9ec2b1c78114a1fa12da0c"
        },
        "date": 1777120575559,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107736358.34111941,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76145696.88807741,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48036611.228299856,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120863345.35498048,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120863345.35498048,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112991032.3114481,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112991032.3114481,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112991032.3114481,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102754974.71279728,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102754974.71279728,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79456742.88155547,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79456742.88155547,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74284141.05476871,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74284141.05476871,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65063049.232574575,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65063049.232574575,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15001891.728752814,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7b255e99dc1e61d263043a5f2d1962d8523b81fc",
          "message": "Bump CloudMicrophysics in / (#638)\n\nUpdates the requirements on  and [CloudMicrophysics](https://github.com/CliMA/CloudMicrophysics.jl) to permit the latest version.\n\nUpdates `CloudMicrophysics` to 0.35.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.35.0)\n\nUpdates `CloudMicrophysics` to 0.35.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.35.0)\n\nUpdates `CloudMicrophysics` to 0.35.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.35.0)\n\nUpdates `CloudMicrophysics` to 0.35.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.35.0)\n\nUpdates `CloudMicrophysics` to 0.35.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.35.0)\n\n---\nupdated-dependencies:\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.35.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.35.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.35.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.35.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.35.0\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-04-25T13:59:22+01:00",
          "tree_id": "c545e7dd3ca3b8586b86fce3c76236c191702bd6",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/7b255e99dc1e61d263043a5f2d1962d8523b81fc"
        },
        "date": 1777122819847,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 109596504.6470381,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78571391.91801982,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 49837381.59446764,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120027694.197013,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120027694.197013,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111614526.18549849,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111614526.18549849,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111614526.18549849,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 101261943.2529047,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101261943.2529047,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 78516091.13429615,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 78516091.13429615,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74232749.17331292,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74232749.17331292,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65247051.50071706,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65247051.50071706,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14229914.429420179,
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
          "id": "0f80d66f9d1992b21d95f325132fa159dc5c4bf6",
          "message": "Add `eltype` and `architecture` methods for `AtmosphereModel` (#661)\n\n* Add methods `eltype` and `architecture` methods for `AtmosphereModel`\n\n* Exercise all float types in model construction tests",
          "timestamp": "2026-04-28T06:57:12+01:00",
          "tree_id": "2413a93f3c8217846f1763bf68fb6fe5782896fe",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/0f80d66f9d1992b21d95f325132fa159dc5c4bf6"
        },
        "date": 1777356872633,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 109234763.41792902,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77966772.89353658,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 49398906.806046106,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 118943288.26651289,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 118943288.26651289,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111769925.32236627,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111769925.32236627,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111769925.32236627,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 100514624.64780855,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100514624.64780855,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 77115143.87128429,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 77115143.87128429,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73269298.06813478,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73269298.06813478,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 63874251.52544577,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 63874251.52544577,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15014905.278169356,
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
          "id": "b0e3e87afe3e46fba49060b032f96fc9f16f3a1e",
          "message": "[benchmarking] Support AMD GPUs (#660)",
          "timestamp": "2026-04-28T08:01:31+01:00",
          "tree_id": "78b0818cb09c42361fc02be855c943ba79747ceb",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b0e3e87afe3e46fba49060b032f96fc9f16f3a1e"
        },
        "date": 1777360762018,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108095429.54948182,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76467155.27371895,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48672217.95852321,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121640055.53819701,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121640055.53819701,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112776397.64114775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112776397.64114775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112776397.64114775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102130937.52953571,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102130937.52953571,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 78029328.88301976,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 78029328.88301976,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73121665.61122563,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73121665.61122563,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64715411.396533825,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64715411.396533825,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15045970.89127548,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "navidcy@users.noreply.github.com",
            "name": "Navid C. Constantinou",
            "username": "navidcy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8b2c0be757b94cc574152eb94fd95d074221975",
          "message": "Fix summary and docs for FilteredBCs (#662)\n\n* cleaner\n\n* fix summary + docs\n\n* add remark about FilteredSurfaceScalar\n\n* code alignment\n\n* chmod 644\n\n* bit more explanation\n\n* Fix formatting and clarify variable definitions\n\n* fix latex rendering\n\n* fix latex rendering\n\n* fix latex rendering",
          "timestamp": "2026-04-30T17:29:16+10:00",
          "tree_id": "32a2cc8463dcb4ba811cb6d27a93835648739597",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b8b2c0be757b94cc574152eb94fd95d074221975"
        },
        "date": 1777535230970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108641733.94143651,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77058302.89946292,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48696370.777907446,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121758423.20614807,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121758423.20614807,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112808031.7693511,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112808031.7693511,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112808031.7693511,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 101304030.94183855,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101304030.94183855,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79602843.56684725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79602843.56684725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73568591.85267235,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73568591.85267235,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64669281.55527093,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64669281.55527093,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15124088.212214515,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "navidcy@users.noreply.github.com",
            "name": "Navid C. Constantinou",
            "username": "navidcy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "acf694e07de506e046f4b278415f970273c11771",
          "message": "Improve citation formatting in polynomial_bulk_coefficient.jl (#663)\n\nUpdated citation formatting for clarity in comments.",
          "timestamp": "2026-04-30T09:12:39+01:00",
          "tree_id": "5514562a1ab27f7baa1bd10a778ad39377c40c3f",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/acf694e07de506e046f4b278415f970273c11771"
        },
        "date": 1777537818098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108436993.02829717,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76715902.71573639,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47741700.892424874,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121524772.02333295,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121524772.02333295,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111937187.1757186,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111937187.1757186,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111937187.1757186,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 99926100.00238724,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 99926100.00238724,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79761355.30982588,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79761355.30982588,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73619346.61466537,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73619346.61466537,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65067704.25773156,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65067704.25773156,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15137279.812881373,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "926c3bd16aaefe8423d3a1ce897dabb0c66f0b40",
          "message": "Bump benchmark-action/github-action-benchmark from 1.21.0 to 1.22.0 (#665)\n\nBumps [benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark) from 1.21.0 to 1.22.0.\n- [Release notes](https://github.com/benchmark-action/github-action-benchmark/releases)\n- [Changelog](https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/benchmark-action/github-action-benchmark/compare/a7bc2366eda11037936ea57d811a43b3418d3073...a60cea5bc7b49e15c1f58f411161f99e0df48372)\n\n---\nupdated-dependencies:\n- dependency-name: benchmark-action/github-action-benchmark\n  dependency-version: 1.22.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-01T02:54:01+01:00",
          "tree_id": "9ee55634b442993deec187015e2317a4e25d070f",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/926c3bd16aaefe8423d3a1ce897dabb0c66f0b40"
        },
        "date": 1777601433214,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 109406299.29623139,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77262924.33218397,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47909675.07237294,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121392139.05075823,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121392139.05075823,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 114407029.50623696,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 114407029.50623696,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 114407029.50623696,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 104090311.97412142,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 104090311.97412142,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79525793.68850829,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79525793.68850829,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 75030435.85166857,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 75030435.85166857,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65597997.07631253,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65597997.07631253,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15124156.93411749,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2d62afdd0ce129cc4854bcec540ead6e622cc69d",
          "message": "Bump actions/upload-artifact from 7.0.0 to 7.0.1 (#666)\n\nBumps [actions/upload-artifact](https://github.com/actions/upload-artifact) from 7.0.0 to 7.0.1.\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/bbbca2ddaa5d8feaa63e36b76fdaad77386f024f...043fb46d1a93c77aae656e7c1c64a875d1fc6a0a)\n\n---\nupdated-dependencies:\n- dependency-name: actions/upload-artifact\n  dependency-version: 7.0.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-05-01T07:32:40+01:00",
          "tree_id": "208d96eba40ce73ddbffe7421e3b798623d8d83b",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/2d62afdd0ce129cc4854bcec540ead6e622cc69d"
        },
        "date": 1777618241879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 109491065.69522613,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77211712.73503199,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48491655.2932974,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 119654682.92096539,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 119654682.92096539,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111513058.3971925,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111513058.3971925,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111513058.3971925,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 98935782.86782697,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 98935782.86782697,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 76812087.87687205,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 76812087.87687205,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 70864069.34386688,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 70864069.34386688,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 61834423.589493975,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 61834423.589493975,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15371512.263924979,
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
          "id": "fb710007ab8b5d5e881c21740c028e5736746193",
          "message": "Allow passing the float type as argument to `SplitExplicitTimeDiscretization` (#678)\n\n* Allow passing the float type as argument to `SplitExplicitTimeDiscretization`\n\nThis makes it easier to construct the object with a different float type.\n\n* More strictly enforce constructor of `SplitExplicitTimeDiscretization`\n\n* Use consistent float type in benchmarks",
          "timestamp": "2026-05-07T08:54:59+01:00",
          "tree_id": "36c2a76d17dcbb0a69719ef758993572ebc97c38",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/fb710007ab8b5d5e881c21740c028e5736746193"
        },
        "date": 1778141536931,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107942424.76018311,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76560911.35396165,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 48199579.98982842,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120868774.22717898,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120868774.22717898,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111288256.23207201,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111288256.23207201,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111288256.23207201,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 98013434.48417331,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 98013434.48417331,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 77592280.16441613,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 77592280.16441613,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 72792130.83079039,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 72792130.83079039,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64395510.44744257,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64395510.44744257,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14621385.026969995,
            "unit": "points/s"
          }
        ]
      },
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
          "id": "764fe0a800bd74262a6bbef267e1acca2e249b0f",
          "message": "Use default FloatType in SplitExplicitTimeDiscretization constructor (#681)",
          "timestamp": "2026-05-07T09:35:10-07:00",
          "tree_id": "0f84b8bb7f1977e2c3bbf683bd429ed28f41c5df",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/764fe0a800bd74262a6bbef267e1acca2e249b0f"
        },
        "date": 1778172521186,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108087117.46067236,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76800796.70015916,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 49364404.38878916,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 119474548.26603386,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 119474548.26603386,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112322324.09166801,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112322324.09166801,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112322324.09166801,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 101386116.63464162,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101386116.63464162,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 78271882.82609357,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 78271882.82609357,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73358722.80378696,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73358722.80378696,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64589698.84767083,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64589698.84767083,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15235105.242075613,
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
          "id": "d978c46862d40a209283993a3b8576607944749d",
          "message": "Use consistent float type when launching `_update_pressure_and_average!` (#680)\n\n* Use consistent float type when launching `_update_pressure_and_average!`\n\n* Set Δt to grid precision in benchmarking code",
          "timestamp": "2026-05-07T20:07:54+02:00",
          "tree_id": "f4226bc499535a38cb2bc31d0fed90f79244eb8f",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/d978c46862d40a209283993a3b8576607944749d"
        },
        "date": 1778178333881,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107866670.89456204,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 75981854.38428123,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47662155.226996586,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120878150.1396951,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120878150.1396951,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112483892.33638954,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112483892.33638954,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112483892.33638954,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102070379.37070622,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102070379.37070622,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79026864.099046,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79026864.099046,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73730623.72971633,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73730623.72971633,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64684630.276831105,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64684630.276831105,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 19844063.114872545,
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
          "id": "10c0d0b69bf7239e9a58a50da3c05c7423679b79",
          "message": "Support Metal GPUs in benchmarks (#682)",
          "timestamp": "2026-05-08T21:49:39+01:00",
          "tree_id": "cf5b5063ba6f3c3014af2700f71901028873d962",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/10c0d0b69bf7239e9a58a50da3c05c7423679b79"
        },
        "date": 1778274532293,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122683319.74997191,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85967234.89737397,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 46815341.56951172,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 131035998.83185375,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 131035998.83185375,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127617073.31375326,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127617073.31375326,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127617073.31375326,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114950913.25025046,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114950913.25025046,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91940254.20251797,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91940254.20251797,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86017751.94020711,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86017751.94020711,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76582013.9668617,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76582013.9668617,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 20478567.386080384,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "danielkytezable@gmail.com",
            "name": "dkytezab",
            "username": "dkytezab"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa50373bf840843dd4364b5d6f4c2999621c3130",
          "message": "Adds benchmarking for Reactant vs. Vanilla `AtmosphereModel` (#677)\n\n* Add Reactant vs vanilla GPU benchmarking path\n\nWires a Reactant execution path into BreezeBenchmarks alongside the existing\neager (CUDA / KA) path so the two can be compared head-to-head on GPU.\n\n- `convective_boundary_layer` accepts a `topology` kwarg (default PPB\n  preserves the existing CI matrix; PBB is exercised by the new row).\n- `BenchmarkResult` gains `backend` and `compile_time_seconds` fields. JSON\n  output and the markdown report surface both columns.\n- `benchmark_time_stepping` branches on `arch isa ReactantState`: the Reactant\n  path compiles `time_step!(model, Δt)` once with `Reactant.@compile sync=true`\n  (compile time recorded separately) and then drives the timed loop through a\n  new `many_compiled_time_steps!`.\n- `synchronize_device(::ReactantState)` is a no-op since `sync=true` blocks\n  per call. `BenchmarkMetadata` records GPU info under ReactantState too.\n- `run_benchmarks.jl` adds `--backend vanilla,reactant` and `--topology PPB,PBB`\n  flags and iterates over backend × topology in `Iterators.product`.\n- Reactant pinned to 0.2.203 (matching the root project) in\n  benchmarking/Project.toml.\n- Benchmarks.yml grows a matrix row: compressible_explicit + WENO5 +\n  1M_MixedNonEquilibrium + PBB across 128x128x64, 256x256x128, 384x384x192\n  with both backends, on aws-linux-nvidia-gpu-l4.\n\nCo-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>\n\n* Compile the full stepping loop with raise=true via @trace\n\nReplaces the per-step Reactant compile with a single program that traces\nthrough all `time_steps` iterations, matching the recipe used by\ntest/reactant_weno_compilation.jl:\n\n- Adds `step_loop!(model, Δt, Nsteps)` decorated with\n  `@trace mincut=true checkpointing=true track_numbers=false for ... end`\n  so Reactant lowers the entire loop into one XLA program.\n- `benchmark_time_stepping` compiles `step_loop!` with\n  `Reactant.@compile raise=true raise_first=true sync=true` and records the\n  compile cost separately. Warmup and the timed phase each consist of a\n  single execution of the compiled program (which itself runs `time_steps`\n  iterations). `--warmup_steps` continues to control the vanilla eager loop\n  but is not used by the Reactant path.\n- Imports `@trace` in BreezeBenchmarks so `step_loop!` parses outside an\n  active compile (where it expands to an eager loop).\n\nCo-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>\n\n* Load Reactant before CUDA so ReactantCUDAExt activates correctly\n\nThe Reactant ecosystem convention (mirrored by test/reactant_weno_compilation.jl)\nis `using Reactant` before `using CUDA` so that Reactant's CUDA extension\nregisters its kernel-compilation hooks before CUDA initializes its own\nGPUCompiler pipeline. Reorders imports in BreezeBenchmarks.jl and\nrun_benchmarks.jl accordingly.\n\nCo-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>\n\n* Add --simplified to skip GeostrophicForcing and drag BCs on Reactant\n\nThe CBL benchmark builds a `GeostrophicForcing` and field-dependent surface\ndrag boundary conditions; both fail to materialize on `ReactantState`\n(`set!(::Nothing, ::BinaryOperation)` from `materialize_atmosphere_model_forcing`).\nThis is an upstream gap — the existing Reactant tests in the repo\n(`reactant_correctness.jl`, `reactant_weno_compilation.jl`) avoid forcings\nentirely.\n\nAdds a `simplified::Bool=false` kwarg to `convective_boundary_layer` that\nskips the geostrophic body forcing and the drag BCs (keeps the constant\nheat-flux BC and Coriolis). Wires through a `--simplified` CLI flag and\nthreads it into the new Reactant-vs-vanilla CI matrix row via a per-row\n`extra_flags` field. Existing matrix rows pass `extra_flags: ''` so their\nbehavior is unchanged.\n\nCo-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>\n\n* Run Reactant-vs-vanilla benchmark in Float64\n\nThe @trace stepping loop fails to lower with a Float32 grid because the\nClock fields stay Float64, producing an MLIR while-body return-type\nmismatch. Force Float64 on this matrix row only; other rows keep the\nscript default of Float32.\n\nCo-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>\n\n* Group Reactant-vs-vanilla benchmark in dashboard aggregator\n\n* Pass FT to make_dynamics in benchmark loop\n\n* Add forward+backward AD benchmark via Enzyme + Reactant\n\nTrims the Reactant-vs-vanilla forward sweep to the largest grid\n(384x384x192) and adds a fifth matrix entry that benchmarks reverse-mode\nAD through the same @trace checkpointed step loop. The AD path is gated\nto the Reactant backend, no microphysics, single small grid, and a\nsmall Nsteps so the gradient compile + memory stay bounded.\n\n* Drop AD benchmark to Nsteps=4 to fit MLIR compile RAM\n\n* Shrink AD benchmark grid to 64x64x32\n\n* Drop mincut=true from AD trace (host-RAM cost during MLIR compile)\n\n* Drop Reactant-vs-vanilla forward grid to 256x256x128\n\n* Drop AD benchmark to single timestep (matches test pattern)\n\n* Fix Float64 Δt leak in stepping calls; dedup metadata GPU branch\n\nThe Reactant restructuring of benchmark_time_stepping in c2a42efd had\nits own version of the warmup/run dispatch, so the merge from main took\nthe \"ours\" side and dropped #680's Δt_FT fix from the eager\nmany_time_steps! path. compressible_splitexplicit + Float32 was\nstepping with a Float64 Δt again, promoting acoustic substepper\narithmetic to Float64 and regressing ~33%. Pass Δt_FT consistently to\nall stepping entry points (vanilla many_time_steps!, Reactant\ncompiled_loop!, and grad_loss!).\n\nAlso dedup metadata.jl per giordano: the ReactantState+CUDA branch was\nidentical to the GPU{CUDABackend} branch, fold into one condition.\n\n* DROP ME: Push preview\n\n* Revert \"DROP ME: Push preview\"\n\nThis reverts commit f3073cd2c511d74fa5fc6e863220f062e90d4722.\n\n---------\n\nCo-authored-by: Claude Opus 4.7 <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-05-09T13:06:01+01:00",
          "tree_id": "f00d8cd3ef647427916edf6d7490662fdc7d4f81",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/fa50373bf840843dd4364b5d6f4c2999621c3130"
        },
        "date": 1778330069209,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 124050544.24038777,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85989410.72248508,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 46271532.26876713,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133204863.84394643,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133204863.84394643,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128418696.20499809,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128418696.20499809,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128418696.20499809,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114960040.97318533,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114960040.97318533,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92618047.1281409,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92618047.1281409,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85908845.54007488,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85908845.54007488,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75768870.82984956,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75768870.82984956,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 4014149.4161605644,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 5052493.600698293,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2519234.553399212,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 20638518.019812588,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "silvestri.simone0@gmail.com",
            "name": "Simone Silvestri",
            "username": "simone-silvestri"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c018ba028a87eb139bca15dce02ba57c92bf0fbd",
          "message": "Add some docs explaining different assumptions behind saturation humidity computation (#690)\n\n* add some docs\n\n* Update docs/src/thermodynamics.md\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update src/AtmosphereModels/Diagnostics/saturation_specific_humidity.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update src/Thermodynamics/vapor_saturation.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update src/Thermodynamics/vapor_saturation.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* correct docs\n\n* remove L&Y\n\n* Remove trailing whitespace\n\n---------\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-05-12T00:41:53+01:00",
          "tree_id": "1ae2116cf8c03b8765ccfa1d9e273c7eb7a7124f",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/c018ba028a87eb139bca15dce02ba57c92bf0fbd"
        },
        "date": 1778544394114,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 124317767.01961687,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 87191579.90586278,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47827154.73334047,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133286949.53713709,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133286949.53713709,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127722287.1485463,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127722287.1485463,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127722287.1485463,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 113159501.69494087,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 113159501.69494087,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91552491.30141795,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91552491.30141795,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84379668.77391979,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84379668.77391979,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 72260683.38408694,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 72260683.38408694,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 4018718.5453367424,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 5128895.192073085,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2498996.4700378384,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 20587566.307454903,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "danielkytezable@gmail.com",
            "name": "dkytezab",
            "username": "dkytezab"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05c8fafbb0522e9c7cbc72dc89d0523083cd6810",
          "message": "Add AD component to acoustic wave example (#565)\n\n* Update acoustic_wave.jl\n\n* Update Project.toml\n\n* Update acoustic_wave.jl\n\n* Update acoustic_wave.jl\n\n* Apply suggestions from code review\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update acoustic_wave.jl\n\n* Update acoustic_wave.jl\n\n* Add finite differences verification\n\n* Update acoustic_wave.jl\n\n* Fixed loss computation\n\n* DROP ME: temporarily check out commit on Oceananigans\n\n* [CI] Use Julia v1.11.9 for building the docs\n\n* [CI] Increase timeouts for building the docs\n\n* Resolve ambiguity of Markdown links\n\n* Actually display figures\n\n* Add more links\n\n* Build the docs again with Julia v1.12\n\n* Set `JULIA_PKG_SERVER_REGISTRY_PREFERENCE` everywhere\n\n* Temporarily disable PkgServer entirely\n\n* Require Oceananigans v0.106.1 for the docs\n\n* Update acoustic_wave.jl\n\n* Resolve merge conflict\n\n* Update acoustic_wave.jl\n\n* Update acoustic_wave.jl\n\n---------\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-05-12T15:09:50-07:00",
          "tree_id": "69f4ed6cea4eac6d59ec14499f2a6aabf339871e",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/05c8fafbb0522e9c7cbc72dc89d0523083cd6810"
        },
        "date": 1778625556670,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122507934.5906608,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84700551.76975007,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 45829144.829319276,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133516744.7687157,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133516744.7687157,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129126968.35381861,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129126968.35381861,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129126968.35381861,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115701896.59807333,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115701896.59807333,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92420239.95661892,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92420239.95661892,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 87532164.63927339,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 87532164.63927339,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 78509911.56156372,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 78509911.56156372,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 4013075.9269985864,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4897955.461021911,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2483673.8408254078,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 20461349.267835885,
            "unit": "points/s"
          }
        ]
      },
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
          "id": "d602e3edc786701ea6e0d920f17a0d4f0e5f872b",
          "message": "Acoustic substepping cleanup: typed AcousticDampingStrategy + new default + BW example (#622)\n\n* Rebuild acoustic substepper branch without validation outputs\n\n* Fix vertical damping notation in substepper docs\n\n* Avoid duplication\n\n* Match MPAS first acoustic substep sequencing\n\n* Allow direct GPU sponge coefficient test\n\n* Document split-explicit outer step cap\n\n* Document LES timestep limits for split explicit runs\n\n* Mask normal momentum tendencies on bounded faces\n\n* Revert bounded-face tendency masking\n\n* Update substepper stability documentation\n\n* Test acoustic parameter float conversion\n\n* Test acoustic vertical tridiagonal coefficients\n\n* Tighten latitude-longitude metric drift test\n\n* Apply frozen pressure gradient on first acoustic substep\n\n* Clarify first substep pressure-gradient comment\n\n* Clarify upper sponge ramp documentation\n\n* Allow traditional spherical Coriolis\n\n* Seed compressible pressure with kernels\n\n* Update docs/src/compressible_dynamics.md\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Update docs/src/compressible_dynamics.md\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Update docs/src/compressible_dynamics.md\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Update docs/src/compressible_dynamics.md\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Update src/AtmosphereModels/dynamics_interface.jl\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Update src/TimeSteppers/acoustic_runge_kutta_3.jl\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Restore microphysics update in model state refresh\n\n* Use frozen gamma coefficient in substepper test\n\n* Update src/AtmosphereModels/dynamics_interface.jl\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Trim stale substepper review comments\n\n* Prune acoustic substepper diagnostic experiments\n\n* Remove redundant substepper boundary masks\n\n* Reject removed tuple damping API\n\n* Trim stale substepper investigation comments\n\n* Temper substepper damping documentation\n\n* Update docs/src/compressible_dynamics.md\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Update src/CompressibleEquations/acoustic_substepping.jl\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Update src/CompressibleEquations/time_discretizations.jl\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Update src/CompressibleEquations/acoustic_substepping.jl\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Make acoustic substep CFL configurable via `acoustic_cfl`\n\n`SplitExplicitTimeDiscretization` and `AcousticSubstepper` now carry an\n`acoustic_cfl` field (default `0.5`, the ERF/WRF target — equivalent to\nthe previous hardcoded \"safety factor of 2\"). `compute_acoustic_substeps`\ntakes it as an argument and computes\n\n    N ≈ ⌈ Δt · ℂᵃᶜ / (ν · Δxₘᵢₙ) ⌉\n\nso smaller `ν` produces more substeps. Constructor rejects\n`acoustic_cfl ≤ 0`. Default-preserves every existing simulation\nbyte-identically.\n\nWhile touching the function, also align with `docs/src/appendix/notation.md`:\n`cs` → `ℂᵃᶜ` (and `c_s` → `\\mathbb{C}^{ac}` in docstring math).\n\nAddresses PR #622 review comment from @ewquon.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix baroclinic wave documentation links\n\n* Fix Aqua ambiguity in acoustic transport\n\n* Remove trailing docs whitespace\n\n* Do not use anelastic models on Metal GPUs\n\n* Tweak reference value for max w on different systems\n\n* Avoid scalar indexing inside kernel\n\n* More at-inbounds\n\n* Even more at-inbounds\n\n* Revert \"More at-inbounds\"\n\nThis reverts commit e07eec80fa8181c0c92653465c45e4af7091bceb.\n\n* Revert \"Even more at-inbounds\"\n\nThis reverts commit 5d33b9cca9690a8b8becb124ba090c39d6ecd1ec.\n\n* Fix split explicit docs anchor and remove unused reference code\n\n---------\n\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-13T12:25:37-06:00",
          "tree_id": "f26b6750b071bde2f35993277f5f7639e663a58b",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/d602e3edc786701ea6e0d920f17a0d4f0e5f872b"
        },
        "date": 1778698324849,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122878307.8789267,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84773062.64597525,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 46288243.29487956,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133384662.83062579,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133384662.83062579,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129010378.02305709,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129010378.02305709,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129010378.02305709,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115797094.92369357,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115797094.92369357,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93073823.7070957,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93073823.7070957,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 87655433.47740944,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 87655433.47740944,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76659954.9290484,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76659954.9290484,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 4023725.7953903205,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4809340.887157359,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2480663.8167951647,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25121890.11513472,
            "unit": "points/s"
          }
        ]
      },
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
          "id": "674ddcecd6c4781a8476363ed8b099d907c9d16c",
          "message": "Add `AbstractSolarPosition` for unified solar-zenith control (#692)\n\n* Add AbstractSolarPosition for unified solar-zenith control\n\nReplace the orthogonal `coordinate`/`epoch` keywords on\n`RadiativeTransferModel` with a single `solar_position` keyword whose\nvalue is a subtype of the new `AbstractSolarPosition`:\n\n  • `ApparentSolarPosition(; coordinate=nothing, epoch=nothing)` — the\n    time-varying case (today's default behavior). `coordinate` and\n    `epoch` move from top-level kwargs to fields of this type, which is\n    where they were always semantically scoped.\n\n  • `FixedCosineZenith(cos_zenith)` — constant cos(θ_z). Appropriate for\n    idealized radiative-convective equilibrium and forcing-shape\n    studies; works with numeric clocks without requiring an epoch.\n\nThe cosine-zenith BC array is filled at construction by dispatch on the\nsolar position, so per-step `update_solar_zenith_angle!` is a no-op when\nthe sun is fixed.\n\nThree improvements come from the typed lattice:\n\n  1. The previously broken combination of `coordinate`/`epoch=nothing`\n     with a floating-point clock now raises an actionable\n     `ArgumentError` pointing users at the three legal alternatives.\n\n  2. The \"epoch only matters when sun is apparent\" implicit contract is\n     made structural — `FixedCosineZenith` literally has no `epoch`\n     field, so the irrelevant-epoch state is unrepresentable.\n\n  3. The `RadiativeTransferModel` struct drops two fields and two type\n     parameters in favor of one `solar_position` field.\n\nDocs: Substantially expanded the \"Solar zenith angle\" section of\n`docs/src/radiative_transfer.md` with a comparison table of the\nsubtypes, worked examples covering all three modes (DateTime clock,\nnumeric clock + epoch, fixed cos(θ_z)), guidance on choosing\ncos(θ_z) values for idealized work, and an explicit note that scaling\n`solar_constant` is *not* equivalent to scaling cos(θ_z) for the SW\nheating-rate profile because of slant-path absorption. Also updated the\n`RadiativeTransferModel` constructor docstring to document the new\nkeyword and show its `Base.show` rendering in the doctest.\n\nMigrated the two existing callers of `coordinate`/`epoch`\n(`test/radiation_scheduling.jl`, `examples/radiative_convection.jl`)\nto `ApparentSolarPosition(coordinate=…, epoch=…)`. Added tests for the\nnew type lattice and for the three radiation-update paths, including\nthat the previously-silent failure now produces an actionable error.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix @test_throws scope: AtmosphereModel construction fires first radiation update\n\nThe actionable-error testset wrapped only `set!` in `@test_throws`, but\n`AtmosphereModel(...)` itself triggers a first-iteration radiation\nupdate via `update_state!`. The `ArgumentError` was raised during\nconstruction and escaped the test, registering as \"Got exception\noutside of a @test\" rather than a successful assertion.\n\nWrap both `AtmosphereModel(...)` and `set!` together so whichever call\nraises is caught.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Stabilize solar_position show output across Float32/Float64\n\nThe macOS doctest job runs `radiation_interface.jl`'s constructor\nexample with `Oceananigans.defaults.FloatType = Float32` (state\ninherited from a prior test). The grid's inferred `(λ, φ)` then becomes\n`(0.0f0, 45.0f0)`, which `Base.show` on a tuple renders with the `f0`\nsuffix — breaking the doctest's Float64-formatted expected output.\n\nSwitch `ApparentSolarPosition`/`FixedCosineZenith` show methods to use\n`Oceananigans.Utils.prettysummary` for numeric fields, which strips the\n`f0` suffix. The displayed string is now identical for Float32 and\nFloat64 grids, matching the convention used elsewhere in the codebase\n(`ConstantField(300.0)` and friends).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add DiurnalSolarPosition for idealized diurnal-cycle simulations\n\nA third concrete subtype of `AbstractSolarPosition` covering the case\nbetween the calendar-driven `ApparentSolarPosition` and the constant\n`FixedCosineZenith`: an analytical diurnal cycle parameterized by a\nfixed latitude, fixed declination, day length, and an optional noon\noffset.\n\n  cos(θ_z) = sin(φ) sin(δ) + cos(φ) cos(δ) cos(ω),\n  ω        = 2π (t - t_noon) / day_length\n\nCommon parameter choices (paper-language):\n\n  • Perpetual equinox at 30°N:\n        DiurnalSolarPosition(latitude = 30)\n  • Perpetual June-solstice analog at 45°N:\n        DiurnalSolarPosition(latitude = 45, declination = 23.5)\n  • 10-hour fast rotator starting at sunrise:\n        DiurnalSolarPosition(latitude    = 0,\n                             day_length  = 10 * 3600,\n                             noon_offset = 5  * 3600)\n\nImplementation:\n\n  • New `DiurnalSolarPosition{FT}` struct (no <:Number constraint —\n    keeps Reactant / non-Number AD types working). Integer inputs are\n    promoted to floats so physical quantities behave sensibly; mixed\n    inputs (e.g. `latitude = 45, declination = 23.5`) promote to a\n    common type via `promote(float.(args)...)`.\n  • `update_solar_zenith_angle!(_, ::DiurnalSolarPosition, _, clock)`\n    computes the analytical formula. `cos` is periodic so no `mod`\n    over the day length is needed.\n  • DateTime clocks are rejected with an actionable `ArgumentError`\n    — pairing a calendar clock with this idealized cycle is\n    semantically ambiguous.\n  • Gray-optics latitude reads from `DiurnalSolarPosition.latitude`\n    (not the grid), so the τ_e/τ_p latitude weighting stays\n    consistent with the diurnal cos(θ_z) calculation.\n  • Clear-sky / all-sky longitude falls back to grid coordinates\n    (longitude doesn't appear in the diurnal formula, but RRTMGP\n    still needs per-column λ for gas-state bookkeeping).\n  • Also removed the existing `FT<:Number` constraint from\n    `FixedCosineZenith` for consistency.\n\nDocs: a new \"Idealized diurnal cycle\" subsection in\n`docs/src/radiative_transfer.md` with worked examples, the math, and\nexplicit notes on the numeric-clock requirement, `noon_offset` choices,\nand gray-optics latitude handling. The subtype comparison table now\nlists all three modes.\n\nTests: four new testsets covering construction (including Float32\npreservation and mixed-type promotion), the noon/midnight/periodicity\nphysics, perpetual-solstice declination, and the DateTime-clock\nrejection.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add direct show-method coverage for AbstractSolarPosition subtypes\n\nA small `@testset` invokes `repr(...)` on each subtype variant (default\nApparentSolarPosition, ApparentSolarPosition with explicit coordinate,\nApparentSolarPosition with explicit epoch, FixedCosineZenith, and\nDiurnalSolarPosition). This covers the `Base.show` methods plus the\n`_show_coordinate` / `_show_epoch` helpers — paths previously exercised\nonly through docstring jldoctests, and thus invisible to coverage on\nplatforms that skip doctests. Doubles as a regression guard for the\ndisplay format.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Anchor DiurnalSolarPosition precision to typeof(latitude)\n\nThe previous constructor promoted via `promote(float.(args)...)`. With\ninteger defaults, `DiurnalSolarPosition(latitude = Float32(30))` produced\nall-Float64 fields because the Float32 latitude got promoted up to match\nthe Float64-from-`float(0)` defaults — the opposite of what a user\nworking in Float32 expects.\n\nSwitch to anchoring precision on `FT = float(typeof(latitude))` and\nconverting each field (or its default) to that type. Now:\n\n  • Int latitude         → Float64 throughout (unchanged)\n  • Float32 latitude     → Float32 throughout (was Float64)\n  • Float64 latitude     → Float64 throughout (unchanged)\n  • Mixed types          → all converted to the latitude-derived type\n\nThe corresponding Float32-preservation test now passes; the show\ndoctests continue to render `30.0°`, `23.5°`, etc. as before.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Switch DiurnalSolarPosition to FT-positional constructor pattern\n\nMatch the established Breeze convention (`IdealGas`, `TetensFormula`,\n`StabilityFunctionParameters`, …) where precision is selected by a\npositional `FT::DataType = Oceananigans.defaults.FloatType` argument\ninstead of inferred from one of the inputs:\n\n    DiurnalSolarPosition(latitude = 30)            # FT = defaults.FloatType\n    DiurnalSolarPosition(Float32, latitude = 30)   # explicit Float32\n\nDefaults (declination, day_length, noon_offset) become plain numeric\nliterals — they're routed through `convert(FT, ...)` like every other\nfield, so they automatically adopt the requested precision.\n\nTest updated to:\n  • Use `Oceananigans.defaults.FloatType = FT` (the convention from\n    test_float_types()) for the default-precision case.\n  • Exercise the positional Float32 override explicitly.\n\nThis replaces the earlier `float(typeof(latitude))` heuristic, which had\nthe right intent but didn't match the rest of the codebase and made the\n\"what precision do I get?\" question depend on argument type rather than\non an explicit, copy-pasteable knob.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-13T12:56:40-06:00",
          "tree_id": "f5aebaccd1595fd2e70962a9ff4fb391166ec55a",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/674ddcecd6c4781a8476363ed8b099d907c9d16c"
        },
        "date": 1778700096723,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120929946.391437,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83901200.79763764,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 45574900.43608815,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 132279702.80974776,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 132279702.80974776,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129009824.6063415,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129009824.6063415,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129009824.6063415,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 117217933.44828764,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 117217933.44828764,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92795777.4277851,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92795777.4277851,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 87879350.71869673,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 87879350.71869673,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 78442410.20574965,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 78442410.20574965,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 4022991.1550602596,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4793924.73849946,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2494991.4386951486,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25231599.155029885,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliot@aeolus.earth",
            "name": "Eliot Quon",
            "username": "ewquon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fb6b8d997c03c1d6d542750751c51214cc418831",
          "message": "Add vapor_gas_constant to Breeze.jl exports (#699)",
          "timestamp": "2026-05-14T08:33:46-06:00",
          "tree_id": "a8a030f76a45b4583bb6049ee246d75bdaea174a",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/fb6b8d997c03c1d6d542750751c51214cc418831"
        },
        "date": 1778770722799,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121546732.9554914,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84260807.465951,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 45497498.24427066,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 123525879.89790021,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 123525879.89790021,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 130386570.8484399,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 130386570.8484399,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 130386570.8484399,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 117654821.6204166,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 117654821.6204166,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 94379958.05080052,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 94379958.05080052,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 88658065.12631032,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 88658065.12631032,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 78746092.03135175,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 78746092.03135175,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 4023608.4912421075,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4840712.55251749,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2468854.7992339525,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25381500.994108357,
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
          "id": "1728c2d9cc90cc7e3b8b662a0e02900a35ac8704",
          "message": "[CI] Give names to steps in benchmarks job (#701)",
          "timestamp": "2026-05-14T18:40:17+02:00",
          "tree_id": "1be04cdd3467578cdf744a5f3ff6c47939ef29a5",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/1728c2d9cc90cc7e3b8b662a0e02900a35ac8704"
        },
        "date": 1778778295601,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122492226.43484688,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85633825.95246768,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47017701.555091575,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120635113.1804866,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120635113.1804866,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128307148.68181725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128307148.68181725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128307148.68181725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115589217.21115956,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115589217.21115956,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92690182.64988673,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92690182.64988673,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86517861.61712652,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86517861.61712652,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76774719.0263748,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76774719.0263748,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 4021773.333718324,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4912521.685609132,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2461835.8347372487,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25350626.579997286,
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
          "id": "cfda0eef5c47a3ed6f61b2b785c6221c09fcf4a1",
          "message": "Fuse multi-output microphysical tendencies for GPU performance (#676)\n\n* Fuse multi-output microphysical tendencies for GPU performance\n\nThe MPNE1M and WPNE2M schemes both have a single bundle function\n(`mpne1m_tendencies`, `wpne2m_tendencies`) that returns all prognostic\ntendencies, plus per-tracer `microphysical_tendency` dispatchers that each\ncall the bundle and extract one field. With one tendency-kernel launch per\nprognostic field, the bundle was being recomputed once per tracer per RK\nstage — five times per cell for MPNE1M, six times for WPNE2M — even though\neach call returns identical values.\n\nThis change adds a `compute_microphysical_tendencies!(model)` interface\n(no-op by default) that schemes can override to write all bundled tendency\ncontributions in one fused launch. MPNE1M and WPNE2M now override\n`grid_microphysical_tendency` to zero (so per-tracer kernels skip the\nmicrophysics term) and provide a fused kernel that computes the bundle\nonce per cell and `+=`s every output into the corresponding `Gⁿ` field.\n\nOn H100, splitting_supercell.jl (Float32, 168×168×40, AcousticSSPRungeKutta3)\nshows a 1.26× steady-state speedup for MPNE1M and 1.52× for WPNE2M. The 2M\ncase benefits more because (a) one extra tracer in the bundle, (b) coupled\nα-limiters cross-couple every process rate so the compiler has very little\nto prune via DCE, (c) the Abdul-Razzak–Ghan aerosol activation contains\nexpensive transcendentals (`erf`, `log`).\n\nSwitches `examples/splitting_supercell.jl` from Kessler to WPNE2M to\ndemonstrate the fused path on a non-trivial 2M scheme; the animation is\nextended to 5 panels (w, qᶜˡ, nᶜˡ, qʳ, nʳ).\n\nTests: cloud_microphysics_1M and cloud_microphysics_1M_warm_ice_deposition\ntest sets pass with the fused implementation.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Update src/AtmosphereModels/microphysics_interface.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Unify microphysics interface around compute_microphysical_tendencies!\n\nReplace the dual `grid_microphysical_tendency` + `compute_microphysical_tendencies!`\ninterface with a single entry point. The model now invokes microphysics solely via\n`compute_microphysical_tendencies!`, called after the per-tracer dynamics kernels\nhave written advection + diffusion + forcing to `Gⁿ`.\n\nSchemes plug in by extending one of two methods:\n\n* `microphysical_tendency` (state-based, per-name) for schemes whose tendencies\n  factor naturally per-prognostic. The default `compute_microphysical_tendencies!`\n  launches a single fused kernel that builds the microphysical and thermodynamic\n  states once per cell and `+=`s `microphysical_tendency` for each prognostic name\n  into the corresponding `G` field.\n\n* `compute_microphysical_tendencies!(microphysics, model)` directly, for bundle\n  schemes (MPNE1M, WPNE2M) that compute many process rates feeding multiple\n  prognostic tendencies in one pass.\n\nRemoves `grid_microphysical_tendency` from the dynamics tendency kernels\n(`scalar_tendency`, `potential_temperature_tendency`, `static_energy_tendency`)\nand from the public API. The MPNE1M/WPNE2M zero-overrides on\n`grid_microphysical_tendency` are no longer needed.\n\nZMCM's `:ρqᵉ` precipitation-removal tendency moves from the grid-indexed\noverride to the state-based `microphysical_tendency`.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Revert splitting_supercell example to main\n\nDrop the MPNE1M/2M experiments from the example file. The microphysics\nrefactor work belongs in the source modules; the example remains on the\nKessler scheme used by DCMIP2016 on main.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Document fused-kernel microphysics override path\n\nAdds a walkthrough page (`developer/microphysics/fused_example.md`)\nthat re-implements example.md's `ExplicitMicrophysics` via the override\npath so the two extension points can be compared on identical physics.\nCloses the doc gap flagged in PR #676 review.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Update docs/src/developer/microphysics/fused_example.md\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update docs/src/developer/microphysics/fused_example.md\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update docs/src/developer/microphysics/fused_example.md\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update docs/src/developer/microphysics/fused_example.md\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update docs/src/developer/microphysics/fused_example.md\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update docs/src/developer/microphysics/fused_example.md\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Remove `import`s from docs\n\n* Align fused-kernel walkthrough with existing developer microphysics docs\n\nBrings the new page in line with example.md and overview.md without\nundoing the reviewer's earlier style choices (plain `julia` code\nfences, qualified `AtmosphereModels.foo(...) = ...` definitions):\n\n- Title Case headings to match the other two pages\n- Per-step H2 sections for the auxiliary/moisture/saturation hooks\n- Named `τᵛˡ` / `τᵛⁱ` timescale variables matching example.md's\n  per-name tendencies\n- Reuse the already-loaded `qᵛ` in the kernel instead of redundantly\n  re-reading `ρqᵛ / ρ` into a shadowed `qᵛˢ`\n- Replace `\\ge` with unicode `≥` per the docs unicode-in-math rule\n- Soften the stale claim about `temperature` evaluation count\n\nCross-links example.md and overview.md to the new page so the two\nextension points are reachable from both directions.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix factual and stylistic inconsistencies in developer microphysics docs\n\n- Rename `qᵗ` → `qᵛᵉ` for the `moisture_fractions` /\n  `grid_moisture_fractions` / `maybe_adjust_thermodynamic_state`\n  argument across all three pages, matching the source docstring\n  nomenclature (vapor for non-eq, equilibrium for sat-adj — not\n  total moisture).\n- Split the single misattributed `*` footnote in overview.md's\n  scheme-implementation summary table into three footnotes:\n  † bundle/fused-kernel override, ‡ saturation-adjustment overrides,\n  § sedimentation-only velocity hook. Previously all three opt-in\n  rows shared the saturation-adjustment caveat.\n- Migrate example.md from `import Breeze.AtmosphereModels: foo` +\n  unqualified-def pattern to `using Breeze.AtmosphereModels:\n  AtmosphereModels` + `AtmosphereModels.foo(...) = ...` qualified-def\n  pattern, matching the style enforced on fused_example.md by the\n  earlier \"Remove `import`s from docs\" reviewer commit.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Simplify developer microphysics docs\n\n`fused_example.md` had grown to mostly verbatim copies of `example.md`:\nthe struct, materialization, state, and `microphysical_state` blocks\nwere repeated wholesale, and the auxiliary / moisture / saturation\nhooks at the bottom were re-printed under headings that announced\nthey were \"unchanged from the per-name walkthrough\". Replace those\nsections with one-line pointers, leaving only the parts that actually\ndiffer from the per-name path: the bundled-rate helper, the kernel,\nand the `compute_microphysical_tendencies!` override.\n\nOther reductions:\n- Move the decision matrix to the top of the page (it's the question\n  every reader arrives with) and drop the redundant Summary + bottom\n  decision section.\n- Hoist the non-public-internals caveat into a `!!! warning` block\n  above the kernel rather than buried in a numbered list below.\n- Replace the stale \"evaluates `temperature` three times per cell\"\n  redundancy claim with the correct one: `saturation_specific_humidity`\n  is the duplicated work, and the vapor method re-invokes the other\n  two dispatches.\n- Drop the two redundant per-name wrapper stubs; one is enough.\n\nIn `example.md`, strip the narrative comments that just restate what\nthe dispatch signatures already say (`# Tendency for liquid water\ndensity` over `microphysical_tendency(..., ::Val{:ρqˡ}, ...)`),\nkeeping the physics-context comments. Shorten the trailing cross-link\nto `fused_example.md` and add a one-line pointer for the `qᵛᵉ`\nargument convention.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Replace references to file names with anchors refs\n\n* Add exercise\n\n* Add KernelAbstractions to docs environment\n\n* \"Example Microphysics Implementation\" -> \"Per-name Implementation\"\n\n* Move \"which path\" section to overview\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-05-14T21:55:33+01:00",
          "tree_id": "53749f523ad66fd47c2aff8dbafe8253f65311b1",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/cfda0eef5c47a3ed6f61b2b785c6221c09fcf4a1"
        },
        "date": 1778793515141,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 118211442.954334,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83024904.51392077,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 64850344.89202361,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 130582360.65267342,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 130582360.65267342,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 126908628.74915251,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 126908628.74915251,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 126908628.74915251,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114520013.41602246,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114520013.41602246,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 90784545.08661592,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 90784545.08661592,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85216367.07356857,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85216367.07356857,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74947770.03521618,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74947770.03521618,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7044034.17065216,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4773131.009188054,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2492456.047576489,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25490183.28797223,
            "unit": "points/s"
          }
        ]
      },
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
          "id": "a8d5a902a04c1332346ea3b09231682715de2c0a",
          "message": "Bump version from 0.4.8 to 0.5.0 (#696)\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-05-15T14:32:34-06:00",
          "tree_id": "ce35a2a316cf9a208c046b87bade788d25a22766",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/a8d5a902a04c1332346ea3b09231682715de2c0a"
        },
        "date": 1778878418203,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119934830.82588013,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84205397.0729737,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65985814.43333631,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 122449383.62627074,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 122449383.62627074,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129276902.36486253,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129276902.36486253,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129276902.36486253,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115621681.58332661,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115621681.58332661,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93271217.9369563,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93271217.9369563,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86266035.55499293,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86266035.55499293,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76302802.97036618,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76302802.97036618,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7031101.487092285,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4831509.986554485,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2471859.197867056,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25505759.639693227,
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
          "id": "c34460dc7a08117d780ef3d04fb87ea1a5c74cfb",
          "message": "Recursively test for type piracy (#713)\n\n* Recursively test for type piracy\n\n* Remove (redundant) type piracy\n\n* Also test for piracy in top-level module",
          "timestamp": "2026-05-18T00:05:25+02:00",
          "tree_id": "20bb06a2bf26ff192235173cc1659401cef4f989",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/c34460dc7a08117d780ef3d04fb87ea1a5c74cfb"
        },
        "date": 1779100673569,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 116885725.71420012,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83282094.87433091,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65257386.31746898,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 131220228.54862937,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 131220228.54862937,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 124234375.82691586,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 124234375.82691586,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 124234375.82691586,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 107257818.2556844,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 107257818.2556844,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 87154021.73178826,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 87154021.73178826,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83883384.64073524,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83883384.64073524,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 70687540.41580282,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 70687540.41580282,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7043805.418369465,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4837690.817654016,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2462073.6185408086,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25268574.76718006,
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
          "id": "d86b470ad9b053a787138b911bb63180170d232a",
          "message": "[CI] Clean up old CUDA toolkits on GPU runners (#715)\n\n* [CI] Clean up old CUDA toolkits on GPU runners\n\nThis saves some space on the VMs.\n\n* [CI] Give name to some steps",
          "timestamp": "2026-05-18T15:49:08+01:00",
          "tree_id": "1ea51fb11d72b0190af35c62d11ce7502f77fb32",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/d86b470ad9b053a787138b911bb63180170d232a"
        },
        "date": 1779117144578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 117596234.60630462,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83329070.49217016,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 64594772.96964618,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 132505844.7365726,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 132505844.7365726,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128481443.488648,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128481443.488648,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128481443.488648,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115662756.72628853,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115662756.72628853,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93199240.17593719,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93199240.17593719,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86463716.15037206,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86463716.15037206,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75722537.92954247,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75722537.92954247,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7030591.345943103,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4770527.684030788,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2468462.515583497,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25183144.756211877,
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
          "id": "a617eafe37b751f4edb333b4eb9a8b6243910cfa",
          "message": "Support backward integration in split-explicit acoustic substepping (#718)\n\n* Support backward integration in split-explicit acoustic substepping\n\nUse `|Δt|` for the adaptive substep count and `|δτ|` in the upper\nsponge term so the linearized acoustic substep loop is well-defined\nfor `Δt < 0`. Document the A-stability argument and the sponge's\nintentional irreversibility caveat.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* unit test\n\n* Tighten round-trip tolerances with isapprox\n\nReplace `< 1` magic bounds (set generously while the backward path was\nunfinished) with `isapprox`-based checks: `rtol=1e-3` for ρ (nonzero\nbaseline) and `atol=1e-3` for ρu, ρw (start from rest). Measured\nresiduals are well below these thresholds on both Float32 and Float64.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-19T11:13:00-04:00",
          "tree_id": "e3094923d117071798382eee4bc1079e66c01a96",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/a617eafe37b751f4edb333b4eb9a8b6243910cfa"
        },
        "date": 1779206853104,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121692219.94171114,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85220701.91986299,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66861322.01118571,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120424543.492046,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120424543.492046,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 126845830.28008741,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 126845830.28008741,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 126845830.28008741,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 113281312.46908984,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 113281312.46908984,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91881499.97151016,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91881499.97151016,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85312993.05616923,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85312993.05616923,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74668976.91810326,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74668976.91810326,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7044115.475305646,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4819464.464095252,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 2457872.8392468616,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25230680.052052487,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliot@aeolus.earth",
            "name": "Eliot Quon",
            "username": "ewquon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b84cd7c4e3a59432a4ab034ef7281bedce428bbb",
          "message": "Propagate momentum open boundary conditions to derived velocities (#722)\n\n* Propagate momentum open boundary conditions to derived velocities\n\n`materialize_momentum_and_velocities` constructed `model.velocities.u/v/w`\nwith default impenetrable BCs that ignored the user's momentum BCs, so\n`fill_halo_regions!(model.velocities)` overwrote each boundary face with\nzero even when the user had set a nonzero `OpenBoundaryCondition` on the\ncorresponding momentum component. The mismatch between `ρu` and `u` at\nthe wall drove an instability that NaN'd both anelastic and compressible\nexplicit-time-stepping runs within ~100 iterations.\n\nFix:\n- Override velocity BCs to `nothing` on the normal-component face of each\n  `Bounded` direction, so `fill_halo_regions!` does not clobber the\n  kernel-computed boundary face. The default impenetrable behavior is\n  preserved because the corresponding `OpenBoundaryCondition(0)` on\n  momentum yields `u = ρu/ρ = 0` at the wall.\n- Launch `compute_velocities!` over the full Face range with\n  `KernelParameters`, so the east/north/top boundary faces are written.\n\nFixes #721\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Expand OBC-on-momentum test coverage\n\nAdds:\n- v south/north and w bottom/top variants (all-Bounded grid)\n- Periodic-direction assertion: u and v on Periodic y get\n  PeriodicBoundaryCondition, confirming the narrow override didn't\n  strip periodic halo filling\n- Direct regression: fill_halo_regions!(model.velocities) leaves the\n  boundary face unchanged after compute_velocities!\n- Compressible SSP-RK3 stability at CFL≈0.05\n- Tightened boundary-value checks: u ≈ U_bg within 10% (replaces the\n  loose `> 0.5·U_bg`)\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Address review: drop velocity-BC helper, fuse compute_velocities! kernel\n\nPer @glwagner review on #722:\n\n- Drop the per-side `nothing` override entirely. `model.velocities` are\n  diagnostic/auxiliary fields, so `XFaceField(grid)` (with no\n  `boundary_conditions=` kwarg) picks up the auxiliary defaults —\n  `nothing` on Bounded-Face sides, Periodic on Periodic sides — which is\n  exactly what we need. Avoids routing through\n  `regularize_field_boundary_conditions`, which would re-install\n  ImpenetrableBoundaryCondition via the prognostic path.\n\n- Fuse `_compute_u!` / `_compute_v!` / `_compute_w!` into a single\n  `_compute_velocities!` kernel that writes all three components per\n  thread, launched once over `(1:Nx+1, 1:Ny+1, 1:Nz+1)`. For Periodic\n  directions the extra face writes to a halo cell that is refilled by\n  the trailing `fill_halo_regions!(model.velocities)`. Drops the\n  topology-conditional `if`s and `Bounded`/`topology` imports.\n\n- Remove unused `diagnostic_indices` helper.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Don't launch i=N+1 on Flat dimensions\n\nThe fused `compute_velocities!` launch unconditionally used `1:N+1` per\ndim, which OOB'd on Flat directions: Flat dims have no Face and no halo\n(typically Ny=1 with array size 1), so j=2 is out of bounds.\n\nAdd a small dispatch helper `_face_extent` that returns `N` for Flat and\n`N+1` otherwise. No `if`-statement; Greg's \"1:N+1 if possible\" intent\npreserved.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix CI: stale imports + GPU-incompatible test reductions\n\n- Drop unused `FieldBoundaryConditions` and `regularize_field_boundary_conditions`\n  from CompressibleEquations.jl imports — flagged by\n  ExplicitImports.check_no_stale_explicit_imports after the velocity-BC\n  helper was removed.\n\n- Wrap `interior(...)` views in `Array(...)` (via a small `boundary_slice`\n  helper) for boundary-face slices used in `all(f, ...)` reductions. On\n  GPU, `all(f, ::SubArray{CuArray})` runs as a `mapreduce` whose output\n  element type can't be inferred from a closure predicate; pulling to CPU\n  with `Array(...)` lets `all` run as a plain CPU reduction. The\n  `maximum(abs, interior(...))` calls (which work on GPU) are unchanged.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix CI: drop stale imports from AnelasticEquations\n\nSame fix as the prior commit applied to CompressibleEquations.\n`AnelasticEquations.jl` still imported `FieldBoundaryConditions` and\n`regularize_field_boundary_conditions` but the simplified\n`materialize_momentum_and_velocities` no longer uses them.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Address review: use existing length(Face(), topo, N) over local helper\n\nPer @glwagner review on #722: replace the ad-hoc `face_extent` dispatch\nhelper with the existing `Base.length(::Face, ::AbstractTopology, N)`\noverloads from `Oceananigans.Grids`. Same semantics for Bounded (N+1)\nand Flat (N); for Periodic, drops one halo-cell write per kernel\ninvocation (N instead of N+1) since the trailing\n`fill_halo_regions!(model.velocities)` already refills the periodic\nhalo.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-21T10:09:12-06:00",
          "tree_id": "768ed06b8676a2f21c52cdf8dd117029f9992e62",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b84cd7c4e3a59432a4ab034ef7281bedce428bbb"
        },
        "date": 1779381171998,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120894174.82244845,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84620117.94694588,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66276016.32999915,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133414243.09572949,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133414243.09572949,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128499639.80201425,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128499639.80201425,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128499639.80201425,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114395645.25949511,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114395645.25949511,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92193465.41061613,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92193465.41061613,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84830446.41260104,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84830446.41260104,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74068329.13656491,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74068329.13656491,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7041888.689338276,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4889504.646342105,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 135302.23004020282,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25332536.94359512,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliot@aeolus.earth",
            "name": "Eliot Quon",
            "username": "ewquon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b20d657c8b4d2ef0a30f474d152ea17373e702fa",
          "message": "Strip nonzero OBC values from acoustic perturbation halos (#724)\n\n* Strip nonzero OBC values from acoustic perturbation halos\n\nInheriting prognostic-momentum boundary conditions verbatim onto the\nsubstepper's perturbation face fields silently misinterprets a nonzero\n`OpenBoundaryCondition` value as a perturbation: `fill_halo_regions!`\nwrites the full-state wall target into the halo while the interior is\nzero at stage entry, and the linearized acoustic dynamics amplifies the\nresulting wall jump into a runaway transient that crashes within the\nfirst outer step.\n\nPer-side strip in the `AcousticSubstepper` constructor: sides whose BC\nis an `OpenBoundaryCondition` with a non-`nothing`, non-numerically-zero\ncondition are replaced with `nothing` on the perturbation field, so the\nhalo fill there is a no-op. Impenetrability defaults, periodic wraps,\nzero-valued OBCs, and `OBC(nothing)` pass through unchanged. The wall\ntarget still re-enters the prognostic state through the prognostic\nmomentum's own BC after `accumulate_momentum_perturbations!`.\n\nCloses #716.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Move OBC strip helpers to module level to avoid Core.Box\n\nThe first revision nested `is_passive`, `strip_open`, and `strip_bcs`\ninside the `AcousticSubstepper` constructor to mirror the local\n`xface`/`yface`/`zface` helpers in the same function. That pattern works\nfor single-method one-liners but not for multi-method dispatch: Julia\n1.12 treats method addition as reassignment of the captured local and\nboxes the closure, which the `No Core.Box` quality-assurance test\nrejects (CI failure on Julia 1.12.6 ubuntu/macOS).\n\nMove the three helpers back to module level and rename for clarity\n(`is_passive_open_value`, `strip_nonzero_open`, `strip_nonzero_open_bcs`).\nBehavior is unchanged; only the scope and names move.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Drop BC inheritance for perturbation field; use topology defaults\n\nThe per-side strip introduced in the prior commits is more machinery\nthan the problem warrants. Per @glwagner on #716: \"an alternative to\n'impenetrable' is just to use `nothing` as the bc.\" That literal reading\nis the simpler and more physically appropriate fix.\n\nBuild the substepper's perturbation face fields and substep-averaged\nvelocities with bare `XFaceField(grid)` / `YFaceField(grid)` /\n`ZFaceField(grid)` — topology-derived defaults give periodic wrap on\n`Periodic` dims and impenetrability on `Bounded` dims, which is exactly\nwhat the linearized acoustic substep needs. The user's prognostic\nmomentum BCs are no longer consulted by the substepper at all; the wall\ntarget re-enters only through the prognostic's own BC after\n`accumulate_momentum_perturbations!`.\n\nSide benefits:\n- Removes the `is_passive_open_value`/`strip_nonzero_open`/`strip_nonzero_open_bcs`\n  helpers and the BoundaryCondition/Open/FieldBoundaryConditions imports.\n- Fixes a latent dimensional inconsistency: `time_averaged_velocities`\n  used to inherit `ρu`/`ρv`/`ρw` BCs (momentum BCs on velocity face\n  fields), which was masked by the topology bits being the only sides\n  that mattered. Now those fields use velocity-appropriate defaults.\n- `prognostic_momentum` keyword retained for backward compatibility but\n  is no longer consulted.\n\nIntegration test (no NaN/DomainError under nonzero `OpenBoundaryCondition`\non `ρu`) passes on CPU Float64 and GPU{Metal} Float32. Net diff: -50 lines\nin the source.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Update test/acoustic_substepping.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-05-21T16:15:13-06:00",
          "tree_id": "11b2051623eca731efe73927e64672755b579867",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b20d657c8b4d2ef0a30f474d152ea17373e702fa"
        },
        "date": 1779403071756,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 117753917.6008714,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 82791059.8892207,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 63330935.939539164,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 134791496.47270012,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 134791496.47270012,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129402201.01788191,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129402201.01788191,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129402201.01788191,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115527948.78373413,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115527948.78373413,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93371699.54175681,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93371699.54175681,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 87108563.49586226,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 87108563.49586226,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75701821.73652947,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75701821.73652947,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7043110.832589169,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4823950.932227155,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 362238454.1190972,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25298660.10222517,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eliot@aeolus.earth",
            "name": "Eliot Quon",
            "username": "ewquon"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d9fa378b21359b306557e76393682fd171f2e449",
          "message": "Accept specific-quantity keys in AtmosphereModel forcings (#708)\n\n* Add SpecificForcing wrapper for specific-quantity tendencies\n\nIntroduces SpecificForcing{F, D, LZ} in src/Forcings/specific_forcing.jl, a\nwrapper that holds a user-supplied forcing returning a specific (per-unit-mass)\ntendency together with the model density and the vertical location of the\ntarget field. At kernel time the wrapper returns ρ * F, interpolating ρ to the\nvertical face via ℑzᵃᵃᶠ when the target lives at Face (e.g. ρw). The same\nwrapper handles both anelastic ρᵣ(z) and compressible ρ(x,y,z,t).\n\nThe user-facing constructor SpecificForcing(forcing) returns a skeleton with\ndensity and target_z_location unset; materialize_atmosphere_model_forcing\nresolves both from the model context at construction time. This mirrors the\nmaterialization pattern already used by SubsidenceForcing and GeostrophicForcing.\n\nWired into the Forcings module via include + export, and re-exported from the\ntop-level Breeze module alongside SubsidenceForcing.\n\nRefs #703.\n\n* Accept specific-quantity keys in AtmosphereModel forcings\n\nExtends atmosphere_model_forcing(::NamedTuple) to accept user-supplied forcings\nkeyed by specific (per-unit-mass) variable names like θ, u, e, qᵉ in addition to\ntheir density-weighted counterparts ρθ, ρu, ρe, ρqᵉ. Values supplied under a\nspecific key are wrapped in SpecificForcing at construction so the kernel applies\nthe density factor automatically. If the same prognostic receives both keys —\ne.g. forcing = (; ρθ=subsidence, θ=Forcing(radiative_cooling)) — the entries\nare combined and run through the existing MultipleForcings path.\n\nAdds two trait functions to the AtmosphereModels forcing interface:\n\n- is_density_tendency_forcing(value) returns true for forcings that already\n  produce F_{ρϕ} (SubsidenceForcing and GeostrophicForcing are flagged in the\n  Forcings module).\n- wrap_specific_forcing(value, density_name) is implemented in Forcings to\n  construct a SpecificForcing for a user value, recursing into tuples, and\n  throwing a clear ArgumentError when value is a density-tendency forcing so\n  the kernel does not multiply by ρ a second time.\n\nRefs #703.\n\n* Disambiguate _combine_forcing_values method tuple/Nothing cases\n\nThe recently added _combine_forcing_values helper used method signatures that\noverlapped when one argument was a Tuple and the other was Nothing — both the\n(a, ::Nothing) and (a::Tuple, b) methods matched. Adds explicit\n(::Tuple, ::Nothing) and (::Nothing, ::Tuple) methods so resolution is\nunambiguous, and reorders the table from most-specific to most-general for\nreadability.\n\n* Use specific-keyed forcings for prescribed tendencies in BOMEX\n\nThe BOMEX large-scale drying tendency and prescribed radiative-cooling profile\nare now supplied under the specific keys qᵉ and e respectively, and Breeze\napplies the ρ factor automatically at kernel time. This drops the manual\n`set!(field, ρᵣ * field)` boilerplate and the user-side handle on the\nreference-state density.\n\nSubsidenceForcing and geostrophic_forcings remain under their density-weighted\nkeys (ρu, ρv, ρθ, ρqᵉ) because they already produce F_{ρϕ} internally; the\nsingle forcing NamedTuple now mixes both styles, which is intentional\n(see #703).\n\nAlso renames `Fρe_field` to `radiative_cooling` to reflect that it now stores\nthe specific energy tendency rather than a pre-multiplied density tendency.\n\nRefs #703.\n\n* Use specific-keyed forcings for prescribed tendencies in RICO\n\nThe RICO large-scale moisture tendency is now keyed under `qᵉ`, and the\nconstant -2.5 K/day radiative cooling is keyed under `θ` and supplied as\na plain function of (x, y, z, t). Both drop the manual ρᵣ multiply.\n\nSubsidenceForcing, geostrophic_forcings, and the Rayleigh sponge on ρw\nremain under their density-weighted keys because they already produce\nF_{ρϕ}; the single forcing NamedTuple mixes both styles by design.\n\nRefs #703.\n\n* Add tests for SpecificForcing dispatch and kernel\n\nCovers:\n\n- Specific-key dispatch wraps user values in SpecificForcing and stores under\n  the matching ρ-key; ρ-key path is unchanged; user-constructed SpecificForcing\n  under a ρ-key materializes correctly.\n- Mixed θ + ρθ entries merge into a MultipleForcings; tuples under a specific\n  key wrap each element individually.\n- Anelastic Center-located forcing on θ produces Gρθ ≈ ρᵣ * F_θ exactly; the\n  Face-located forcing on w interpolates ρᵣ to face via ℑzᵃᵃᶠ and matches\n  the analytic expression at an interior face.\n- Mixed θ (specific) + ρθ (density) contributions sum to ρᵣ * F_θ + F_ρθ.\n- Compressible dynamics: the specific-key path picks up the live prognostic\n  density (uniform here) and produces the expected tendency.\n- Density-tendency forcings (SubsidenceForcing, GeostrophicForcing) supplied\n  under a specific key throw ArgumentError, both directly and inside tuples;\n  the is_density_tendency_forcing trait sanity-checks both.\n- An unknown user-supplied key still errors with ArgumentError.\n\nRefs #703.\n\n* Update non-existing-field test to use a key with no specific alias\n\nThe existing test asserted that supplying a forcing under :u errors because\n:u was not a prognostic field name. After accepting specific-quantity keys,\n:u is the valid specific alias of :ρu, so the model now constructs\nsuccessfully. The test's intent — that an unrecognized key errors — is\npreserved by switching to :bogus, which is neither a prognostic ρ-name nor\na known specific alias.\n\n* Use instantiated_location for SpecificForcing materialization\n\nSwitches the location-resolution line to Oceananigans' instantiated_location,\nwhich returns the location instances directly rather than a tuple of types\nthat we then construct. Saves the explicit `LZ()` call at the end.\n\nAlso reformats the tuple method of wrap_specific_forcing to function...end\nform for visual symmetry with the scalar method above it.\n\n* Add A/B test comparing specific-key path with manual ρᵣ-multiply pattern\n\nDirectly verifies that the new ergonomic\n\n    forcing = (; θ = Forcing(field))\n\nproduces bit-for-bit identical model evolution to the pre-change idiom\n\n    set!(field, ρᵣ * field); forcing = (; ρθ = Forcing(field))\n\nacross five time steps with a height-varying specific θ-tendency. This guards\nagainst regression: any change that perturbs the kernel-time density factor\nwill diverge the two paths and fail the test.\n\nRefs #703.\n\n* Drop underscore prefix from forcing-dispatch helper functions\n\nRenames `_specific_to_density_pairs` → `specific_to_density_pairs` and\n`_combine_forcing_values` → `combine_forcing_values`. Underscore prefixes are\nreserved for kernels in this codebase; these are plain helpers.\n\n* Fix import\n\n* Fix references in docstrings\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Dispatch SpecificForcing density interpolation on full (LX, LY, LZ) location\n\nReplaces the LZ-only kernel dispatch with dispatch on the full target prognostic\nlocation tuple, with density_at_target methods for the four staggered locations\nthat appear in the Breeze prognostic state:\n\n- (Center, Center, Center) — scalar prognostics, ρ taken directly at the cell center.\n- (Face,   Center, Center) — u, ρ interpolated to x-face via ℑxᶠᵃᵃ.\n- (Center, Face,   Center) — v, ρ interpolated to y-face via ℑyᵃᶠᵃ.\n- (Center, Center, Face)   — w, ρ interpolated to z-face via ℑzᵃᵃᶠ.\n\nThis is a no-op for anelastic dynamics (ρᵣ is uniform in x, y), but it's required\nto give compressible momentum forcings the correct face-located density now that\nSubsidenceForcing and GeostrophicForcing are about to be refactored to return\nspecific tendencies and rely on SpecificForcing for the ρ-multiply.\n\nRenames the struct's target_z_location field to target_location to reflect the\ngeneralization. All existing tests still pass.\n\n* Route SpecificForcing inner through Breeze materializer with specific name\n\nTwo related changes that lift the inner-forcing materialization out of\nOceananigans' default path and into Breeze's atmosphere-model dispatch:\n\n- materialize_atmosphere_model_forcing(::SpecificForcing, ...) now calls\n  materialize_atmosphere_model_forcing on its inner (rather than Oceananigans'\n  materialize_forcing). For Function/Returns/Field/Forcing inputs this falls\n  through to the Oceananigans path and behaves identically. For Breeze forcing\n  types (SubsidenceForcing, GeostrophicForcing — soon to return specific\n  tendencies) it lets their custom materializers fire.\n- The propagated `name` is the specific (un-prefixed) prognostic name. Outer\n  dispatch loops over ρ-prefixed forcing fields, but SpecificForcing's whole\n  job is to lift a specific tendency to ρ-form, so its inner expects the\n  specific name to look up the field it advects or applies at.\n\nNo behavioral change for existing inputs; all 23 tests still pass. This\nunblocks the upcoming refactor of SubsidenceForcing and GeostrophicForcing\nto return specific tendencies under specific keys.\n\n* Refactor SubsidenceForcing and GeostrophicForcing to return specific tendencies\n\nThe two built-in Breeze forcings now return per-unit-mass tendencies under\nspecific prognostic keys instead of pre-multiplying by ρ and storing under\nρ-prefixed keys. SpecificForcing applies the density factor (with correct\nhorizontal interpolation) at kernel time.\n\nChanges:\n\n- SubsidenceForcing: drop the `density` struct field; the kernel returns\n  `-wˢ ∂_z ϕ̄`. The materializer accepts specific names (`u`, `v`, `θ`, `qᵉ`,\n  `qᵛ`, …) directly, no longer needs to strip a ρ-prefix, and errors with a\n  migration message if the user supplies it under a ρ-prefixed key.\n- GeostrophicForcing: drop the `density` struct field; the kernel returns\n  `±f vᵍ` (specific), no internal horizontal interpolation — SpecificForcing\n  now interpolates ρ to the appropriate face. `geostrophic_forcings(uᵍ, vᵍ)`\n  returns `(; u, v)`. The same ρ-prefix migration error applies.\n- Drop the `is_density_tendency_forcing` overrides for both forcings. The\n  trait now correctly identifies user-defined forcings whose kernels already\n  include ρ.\n- Add `compute_forcing!(::SpecificForcing)` that recurses into the inner so\n  SubsidenceForcing's `Average` field gets refreshed each step when wrapped.\n\nTests:\n\n- specific_forcing.jl: replace the \"SubsidenceForcing/GeostrophicForcing under\n  specific key errors\" testset with three new testsets — one that verifies a\n  user-defined density-tendency type errors, one that asserts the built-in\n  Breeze forcings are not density-tendency forcings, and one that verifies\n  supplying them under a ρ-key errors with the migration message.\n- geostrophic_subsidence_forcings.jl: switch all SubsidenceForcing /\n  GeostrophicForcing usages to specific keys, assert that the stored value\n  is a `SpecificForcing` wrapping the Breeze forcing, and parametrize the\n  analytical-gradient test by (specific_name, density_name).\n\nRefs #703.\n\n* BOMEX example: switch forcings to all-specific keys\n\nDrops the mixed-key style (subsidence/geostrophic on ρ-keys, prescribed\ntendencies on specific keys) now that SubsidenceForcing and GeostrophicForcing\nreturn specific tendencies. Subsidence appears as a tuple element on u, v, θ,\nand qᵉ; the prescribed drying joins the qᵉ tuple; radiative cooling stays\nunder `e`.\n\nThe comment on θ-equation tendency-ordering is updated to reflect that the\nuser supplies F_θ and F_e in specific form, with the ρ factor applied by\nBreeze.\n\nRefs #703.\n\n* RICO example: switch forcings to all-specific keys\n\nDrops the remaining ρ-prefixed keys. Subsidence appears as a tuple element on\nu, v, qᵉ, and θ; the Rayleigh sponge damps the velocity w directly. The\nprescribed large-scale moisture and θ tendencies join their tuples.\n\nRefs #703.\n\n* Add equivalence + multi-step tests for refactored Breeze forcings\n\nTwo new testsets in test/geostrophic_subsidence_forcings.jl that pin the\nrefactor to bit-for-bit equivalent behavior, exercising the per-step\nρ-multiply in SpecificForcing across multiple time steps:\n\n- \"GeostrophicForcing equivalence to manual ρᵣ * vᵍ Forcing reference\":\n  Runs two models side by side under anelastic dynamics — one with the new\n  geostrophic_forcings under specific keys (u, v), the other with hand-rolled\n  Forcing(ρu_ref_field) under ρu, ρv where ρu_ref_field stores the exact\n  output of the old GeostrophicForcing kernel, -f * ℑxᶠᵃᵃ(ρᵣ * vᵍ). With\n  identical initial conditions and 10 time steps, ρu and ρv must match to\n  near machine precision.\n\n- \"SubsidenceForcing multi-step linear accumulation\": A constant-gradient\n  profile is preserved under uniform subsidence, so Gρϕ = -ρᵣ wˢ Γ is\n  constant in time. Asserts that ρϕ changes by N * Δt * Gρϕ after N steps\n  for both θ and qᵛ keys. Catches any per-step bug in the SpecificForcing\n  ρ-multiply that wouldn't appear in the existing single-step gradient test.\n\n* Tidy block-header layout around SpecificForcing's compute_forcing!\n\nMove the `compute_forcing!` method below the materialize function and give\nit its own section header, so the file reads top-to-bottom as: struct →\ndocstring → adapt → density-interpolation → kernel callable → materialize\n→ compute_forcing! → show. No behavioral change.\n\n* Address review: clearer naming + dispatch on Nothing in forcing assembly\n\nThree changes prompted by Greg's review of the atmosphere_model_forcing\nNamedTuple path:\n\n- Extract the per-field assembly into a helper, `assemble_field_forcing`,\n  so the main comprehension is a single function call. Drops the `let`\n  block that was hiding intermediate state inside the Tuple generator.\n- Rename the intermediates: `spec_raw` → `raw_specific_forcing`,\n  `spec_value` → `wrapped_specific_forcing`, mirroring `raw_density_forcing`\n  on the other side. The expression `wrap_specific_forcing(raw_specific, …)`\n  now reads as what it does.\n- Replace the two remaining ternaries with dispatch:\n  - `wrap_specific_forcing(::Nothing, _) = nothing` (new method in\n    Forcings.jl) absorbs the \"no specific-keyed forcing supplied\" case.\n  - `materialize_or_default` dispatches on `Nothing` (default forcing) vs.\n    anything else (delegate to materialize_atmosphere_model_forcing).\n\nAlso `Returns(zero(eltype(f)))` → `Returns(zero(target_field.grid))` per\nGreg's suggestion — same value, more idiomatic.\n\n`specific_to_density_pairs` rewritten to reuse the new `specific_name_of`\nhelper, which returns the un-ρ-prefixed name or `nothing` if the input\nwasn't ρ-prefixed.\n\nNo behavior change; all 28 + 29 forcings tests still pass.\n\n* Cleanup: Drop wrap_specific_forcing from AtmosphereModels exports\n\n`wrap_specific_forcing` is dispatch plumbing — only `collect_user_forcings`\ninside `atmosphere_model_forcing` ever calls it, and the Forcings extension\nimports it explicitly. Users have no reason to override or call it directly.\n\n`is_density_tendency_forcing` stays exported: it's a trait that downstream\ncode can override on its own forcing types to opt them into the\n\"density-keyed only\" rejection in the specific-key dispatch.\n\n* Wrap unprefixed-tracer forcings in SpecificForcing\n\nSplits `assemble_field_forcing` into dispatched methods on the result of\n`specific_name_of(density_name)`:\n\n- `::Symbol` — the prognostic name is ρ-prefixed and the symbol is its\n  specific alias. Behavior is unchanged from before: any user entry on the\n  ρ-keyed name is combined with any entry on the specific alias, with the\n  specific-keyed entry wrapped in SpecificForcing.\n\n- `::Nothing` — the prognostic name has no `ρ` prefix (a user tracer like\n  `:c`, `:a`, `:b`). The name is itself in specific form, so any forcing\n  supplied under it is treated as a specific tendency and wrapped in\n  SpecificForcing — the ρ factor is then applied at kernel time, matching\n  the convention used for ρ-prefixed prognostics' specific aliases.\n\nThis eliminates an inconsistency: previously `forcing=(; c=F)` on a\n`tracers=:c` model added F directly to Gρc (treating F as a density\ntendency), while `forcing=(; θ=F)` on the ρθ prognostic wrapped F as\nspecific. The two now behave consistently — the prognostic name's form\n(ρ-weighted vs. specific) determines whether ρ is applied automatically.\n\n* Test that unprefixed-tracer forcing is wrapped in SpecificForcing\n\nAdds a testset that constructs a model with `tracers=:c` and supplies\n`forcing=(; c=Returns(F))`. Asserts:\n\n- `model.forcing.c isa SpecificForcing` — the dispatch wrapped the user\n  value rather than passing it through verbatim.\n- After update_state!, the Gρc tendency equals `ρᵣ * F` to ~floating-point\n  precision — confirming that SpecificForcing applies the ρ multiply at\n  kernel time even for prognostic names that have no ρ alias.\n\nThis guards the new `assemble_field_forcing(_, ::Nothing, ...)` dispatch\nintroduced when option (1) made unprefixed-tracer forcings consistent with\nthe specific-form convention used by ρ-prefixed prognostics' aliases.\n\n* Rename assemble_field_forcing parameters to reflect dispatch invariant\n\nEach method of `assemble_field_forcing` now names its first argument to\nmatch what the dispatch guarantees about it:\n\n- Outer (single-method) `prognostic_name` — generic, since the outer doesn't\n  yet know whether the name is ρ-prefixed.\n- `(_, ::Symbol)` branch keeps `density_name` — this method only fires when\n  `specific_name_of` succeeded, so the name *is* ρ-prefixed.\n- `(_, ::Nothing)` branch uses `tracer_name` — this method only fires when\n  `specific_name_of` returned `nothing`, which only happens for unprefixed\n  user tracers. The previous `density_name` was actively misleading there.\n\nPositional args, so this is documentation only — no behavior change.\n\n* Fix stale geostrophic_forcings API in benchmarks and neutral-ABL example\n\nTwo callers I missed when geostrophic_forcings switched from returning\n(; ρu, ρv) to (; u, v) in the Path 2 refactor:\n\n- benchmarking/src/convective_boundary_layer.jl: CI benchmark failed with\n  `FieldError: type NamedTuple has no field \\`ρu\\`, available fields: \\`u\\`, \\`v\\``.\n- examples/neutral_atmospheric_boundary_layer.jl: same API drift. Also\n  collapsed the per-prognostic intermediate variables into a single forcing\n  NamedTuple.\n\nSubsidence under ρ-keys was already absent from these files; only the\ngeostrophic accessors needed updating.\n\nAlso drops the executable bit from neutral_atmospheric_boundary_layer.jl —\n.jl files have no business being +x.\n\n* Update AtmosphereModel show test for SpecificForcing wrap\n\nAfter the Path 2 refactor, supplying `geostrophic_forcings(uᵍ, vᵍ)` (now\nkeyed under `:u`, `:v`) makes the dispatch wrap each GeostrophicForcing\nin SpecificForcing and store it under `:ρu`, `:ρv`. The model's `show`\ncorrespondingly prints `ρu=>SpecificForcing, ρv=>SpecificForcing` instead\nof the pre-refactor `ρu=>GeostrophicForcing, ρv=>GeostrophicForcing`.\n\nUpdates the assertion in `atmosphere_model_construction.jl` to match.\n\n* Align materialize-time model_fields ordering with fields(model)\n\nContinuousForcing resolves `field_dependencies` to positional indices in the\nmaterialize-time `model_fields` tuple, then dereferences those positions\nagainst the runtime `fields(model)` tuple. The two orderings disagreed:\n\n- Materialize: `merge(prognostic_model_fields, velocities,\n                      microphysical_fields, (; T=temperature))`\n- Runtime:     `merge(prognostic_fields(model), formulation_fields,\n                      velocities, (; T=temperature), microphysical_fields)`\n\nFor a default LiquidIce model, position 6 was `:u` at materialize time but\n`:θ` at runtime — so a `Forcing(...; field_dependencies=(:u,))` would\nsilently read the potential-temperature field instead of the velocity.\n\nAdds `fields(formulation)` to the materialize-time merge and reorders so\nboth tuples share the same key sequence: prognostic → formulation →\nvelocities → T → microphysical.\n\nTest: a forcing that returns its `:u` dependency, applied to `ρθ`. Setting\n`u = 13` while leaving `θ ≈ 288` produces `Gρθ ≈ 13` under the fix and\n`Gρθ ≈ 288` under the previous ordering — a stark, deterministic probe of\nthe discrepancy.\n\n* Fix @ref targets for GeostrophicForcing in docstrings\n\nThe `GeostrophicForcing` struct has no docstring of its own — the documented\nuser-facing entry point is the `geostrophic_forcings(uᵍ, vᵍ)` function, which\nconstructs and returns a pair of them. So Documenter fails to resolve\n`[GeostrophicForcing](@ref)` and `[GeostrophicForcing](@ref Breeze.Forcings.GeostrophicForcing)`\non the auto-generated `docs/src/api.md` page, which terminates the build.\n\nTwo refs needed updating:\n\n- `SpecificForcing` docstring listed `GeostrophicForcing` as an acceptable\n  inner type; rephrased to point at the constructor function instead.\n- `geostrophic_forcings` docstring linked back to `GeostrophicForcing` itself;\n  changed to plain backticks (the surrounding text already makes the type\n  recognizable), and also fully-qualified the sibling `[SpecificForcing]` ref\n  for symmetry with the rest of the docstrings.\n\n---------\n\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-05-21T22:00:44-06:00",
          "tree_id": "02b95fb27114dda3eeb2fca01a92ae8837cfa82a",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/d9fa378b21359b306557e76393682fd171f2e449"
        },
        "date": 1779424007638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119111102.9796129,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83658764.71558818,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 64527291.8943405,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 122268364.55850609,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 122268364.55850609,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129055240.07641275,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129055240.07641275,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129055240.07641275,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114386010.64014785,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114386010.64014785,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93062942.6629972,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93062942.6629972,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85824025.9762077,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85824025.9762077,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74610550.40283833,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74610550.40283833,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7043583.250378006,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4800104.9307682235,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 41604.476602068746,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25457227.353236925,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "navidcy@users.noreply.github.com",
            "name": "Navid C. Constantinou",
            "username": "navidcy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8e91a4daf8ff3b0fe99b70e96dc66fd253a9c715",
          "message": "Bump version to 0.5.1 and update Oceananigans range (#729)\n\n* Bump version to 0.5.1 and update Oceananigans range\n\n* add Oceananigans v0.108 compat\n\n* update Oceananigans compat\n\n* Update Project.toml",
          "timestamp": "2026-05-22T11:02:00+02:00",
          "tree_id": "5c1040971e72ef1f458b26cd4e75dbdb1a6fc158",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/8e91a4daf8ff3b0fe99b70e96dc66fd253a9c715"
        },
        "date": 1779442096512,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120007782.54702547,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84378364.05518924,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65771757.28069744,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 132245226.88396955,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 132245226.88396955,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128648496.89163269,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128648496.89163269,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128648496.89163269,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 116044659.50427587,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 116044659.50427587,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91992042.80609733,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91992042.80609733,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86237294.70293653,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86237294.70293653,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76629006.21104749,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76629006.21104749,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7023400.1333284015,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4793445.883956584,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 49258.733071623916,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25234458.07299474,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}