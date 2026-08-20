window.BENCHMARK_DATA = {
  "lastUpdate": 1787185252616,
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
          "id": "b99ae9effcb10f606ebef99dbd23cacf50132a4b",
          "message": "[CI] Run default anelastic benchmarks for longer (#720)\n\n* [CI] Run default anelastic benchmarks for longer\n\n* Even longer?\n\n* Slightly less",
          "timestamp": "2026-05-22T11:48:35+02:00",
          "tree_id": "d87c8b97532b26d575685028ae588ee0c56d7c32",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b99ae9effcb10f606ebef99dbd23cacf50132a4b"
        },
        "date": 1779444695663,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121277822.48708159,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85067013.90983355,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66275465.61206007,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 134731880.24679175,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 134731880.24679175,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128166606.80562204,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128166606.80562204,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128166606.80562204,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 111825655.94770952,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 111825655.94770952,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89085364.01627721,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89085364.01627721,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83472004.61076163,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83472004.61076163,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 73112646.66441864,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 73112646.66441864,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7043365.884919116,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 4847604.06828749,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 72748.85623886564,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25325253.525291078,
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
          "id": "71bfa8224f58d1bd325afd37418270ee71847441",
          "message": "Disable `multi_output_fusion` pass in AD benchmarks (#732)",
          "timestamp": "2026-05-22T19:57:31+02:00",
          "tree_id": "1dbec9153eec5bfb20be05b3292d92d0f179bb08",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/71bfa8224f58d1bd325afd37418270ee71847441"
        },
        "date": 1779474013182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119872665.1253304,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84596797.22477086,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66464810.604564555,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 134130872.64435025,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 134130872.64435025,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 126481431.72970094,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 126481431.72970094,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 126481431.72970094,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 109433074.21265385,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 109433074.21265385,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 87816131.95042637,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 87816131.95042637,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 81640227.11698742,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 81640227.11698742,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 72013836.19781189,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 72013836.19781189,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7042147.307984817,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 6001514.983198157,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 1651476.0571251053,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25355187.63745939,
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
          "id": "0017423ea8f9a9cd4090cacdb171ffc6b414073f",
          "message": "[CI] Upload manifest for all CI jobs (#731)",
          "timestamp": "2026-05-22T20:23:34+02:00",
          "tree_id": "86dc34727a1617d94adfc7f9d2500e9f4e11d0d5",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/0017423ea8f9a9cd4090cacdb171ffc6b414073f"
        },
        "date": 1779475538354,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120397723.4069103,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83597124.37912038,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65008869.18096773,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133726284.73093376,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133726284.73093376,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 126803848.90558445,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 126803848.90558445,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 126803848.90558445,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 110255524.33188993,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 110255524.33188993,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89354439.45609987,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89354439.45609987,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84173214.55522917,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84173214.55522917,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 73464990.24260238,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 73464990.24260238,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7039388.748292315,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 5983575.869763864,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 1655071.3474877174,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25214551.868782703,
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
          "id": "c890583dff388a3dafcc4e6d2c7d1fd2fdcc780e",
          "message": "[benchmarks] Keep results in the repo (#733)",
          "timestamp": "2026-05-22T22:20:25+02:00",
          "tree_id": "c471f8503e4e1c4e6ec2b2147eeffb0d62787789",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/c890583dff388a3dafcc4e6d2c7d1fd2fdcc780e"
        },
        "date": 1779482543939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119108828.47560804,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83871553.10365327,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65039523.87419764,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133938133.5534505,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133938133.5534505,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 126911543.11625168,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 126911543.11625168,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 126911543.11625168,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 111782703.93970379,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 111782703.93970379,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91753722.703366,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91753722.703366,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84179250.88484737,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84179250.88484737,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74008204.36623861,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74008204.36623861,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7035376.42787235,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 5980290.910560247,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 1652401.0835511184,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 24913098.610649597,
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
          "id": "04a0bf685acbb5c48044c122ed5ed856cfd9e5df",
          "message": "Pin GPUCompiler to 1.13.1 and Oceananigans to v0.108.0 (#739)\n\n* Pin GPUCompiler\n\n* Pin in test\n\n* Fix for Oceananigans compat\n\n* Revert \"Fix for Oceananigans compat\"\n\nThis reverts commit e4deb4826b39fe954eb633cc27c53622003dbc59.\n\n* pin oceananigans v0.108.0\n\n---------\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-05-28T12:52:02+02:00",
          "tree_id": "b6ab9bb1293cdf4b7fdd916a9f220731c109740b",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/04a0bf685acbb5c48044c122ed5ed856cfd9e5df"
        },
        "date": 1779966941035,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120666913.3087712,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84869663.14181393,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66355566.00191603,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 131895562.00305595,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 131895562.00305595,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 125444510.40363611,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 125444510.40363611,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 125444510.40363611,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 111402171.90461597,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 111402171.90461597,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91432268.27899095,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91432268.27899095,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85504665.10507071,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85504665.10507071,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75107923.02623716,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75107923.02623716,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7041966.667574961,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 5991387.224127759,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 1653006.1274426964,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25408148.857657693,
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
          "id": "d19b490905fa259326731be834e8276a02b6983f",
          "message": "Thread clock/model_fields through momentum halo fills (#717) (#742)\n\n* Thread clock/model_fields through momentum halo fills (#717)\n\n`compute_velocities!` and the acoustic RK3 substep-loop recovery refilled\nthe density and momentum halos with bare `fill_halo_regions!(field)` calls,\ndropping `model.clock` and `fields(model)`. For a time-dependent Open BC on\nmomentum, Oceananigans' `getbc` then has no signature that can evaluate the\ntime argument:\n  * continuous callables fall through to `getbc(condition, args...) =\n    condition(args...)` → `ContinuousBoundaryFunction ... not callable`;\n  * `FieldTimeSeries` BCs fall through to `getbc(::AbstractArray, i, j, ...)`\n    → `BoundsError` on `condition[i, j]`.\n\nThread `model.clock, fields(model)` through both sites, matching the\nprognostic halo fill in `update_state!`. Velocities are still stale at these\npoints (recomputed immediately after), so momentum BCs with velocity\n`field_dependencies` would observe last-stage values — noted inline.\n\nFixes NumericalEarth/Breeze.jl#717.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Test time-dependent Open BC on momentum (#717 regression)\n\nBuilds a CompressibleDynamics model with a continuous-callable Open BC on\nρu, verifies `set!`/`update_state!` no longer throws, that the west boundary\nface carries the prescribed value at the current time, and that a full\nacoustic-substepped `time_step!` re-evaluates the BC without error.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Test FieldTimeSeries Open BC on momentum (#717 regression)\n\nComplements the continuous-callable test with the array-backed branch:\na FieldTimeSeries Open BC on ρu. Pre-#717 this hit\n`getbc(::AbstractArray, i, j, ...)` → BoundsError during the clock-less\nmomentum halo fill. Verifies the west boundary face equals the first slice\nat t=0 and linearly interpolates to 1.5 at t=5 after a compressible\nacoustic-substepped step.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Use boundary_condition_args helper at fill_halo_regions! call sites\n\nReplace the explicit `model.clock, fields(model)` arg pair at the 7 prognostic\nhalo-fill sites with the `Oceananigans.Models.boundary_condition_args(model)`\nhelper. The method on `AtmosphereModel` already exists in `atmosphere_model.jl`\n(since #296); this commit just adopts it at the call sites for parity with\n`NonhydrostaticModel` / `HydrostaticFreeSurfaceModel` and to centralize the\n\"what to thread into `getbc`\" decision in one method.\n\nPer @glwagner's review on #742.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Apply suggestions from code review\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Drop atol on nonzero-reference @test ≈ assertions\n\nPer @giordano's review on #742: `atol` is the wrong tolerance for a `≈`\nagainst a nonzero reference value (it swamps the natural relative\ntolerance and would mask real drift). Plain `≈` uses Julia's default\nrelative-tolerance comparison, which is appropriate here.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-05-28T09:44:52-06:00",
          "tree_id": "a1e91e143956e2e451a64ac8587c30a1a1aeba67",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/d19b490905fa259326731be834e8276a02b6983f"
        },
        "date": 1779984420939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 117866165.91451247,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83239368.57790425,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 64052487.64664005,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 125735251.73171695,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 125735251.73171695,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127183318.76622736,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127183318.76622736,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127183318.76622736,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 113799843.54752465,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 113799843.54752465,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91008358.42470478,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91008358.42470478,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86349937.08024992,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86349937.08024992,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75386939.42867406,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75386939.42867406,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7039877.581581893,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 5982655.141548885,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 1654086.5713515768,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 24950280.17082587,
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
          "id": "ce837e33e335c9e6a6607c9ac5c717901f6957ae",
          "message": "Fire model callsites and advance FieldTimeSeries in AtmosphereModel (#719) (#746)\n\n* Fire UpdateStateCallsite and TendencyCallsite in AtmosphereModel\n\nCallbacks registered with `callsite = UpdateStateCallsite()` or\n`TendencyCallsite()` were silently dropped because the dispatch loops were\nmissing from `update_state!` and `compute_tendencies!`. This mirrors the\npattern in Oceananigans `NonhydrostaticModel`\n(`update_nonhydrostatic_model_state.jl:47-49`, `compute_nonhydrostatic_tendencies.jl:36-38`).\n\nFixes NumericalEarth/Breeze.jl#719.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Advance FieldTimeSeries in AtmosphereModel update_state!\n\n`AtmosphereModel` is not in Oceananigans' `OceananigansModels` Union\n(`Models.jl:123`), so calls to `update_model_field_time_series!` hit the\nno-op `::AbstractModel` fallback (`Models.jl:48`). Any `FieldTimeSeries`\nembedded in BCs (e.g. `OpenBoundaryCondition(fts)`) or forcings was\ntherefore frozen at its initial time slice.\n\nExtend the function on `AtmosphereModel`, mirroring the OceananigansModels\nimplementation and walking `(fields(model), model.forcing)`. Invoke it\nat the top of `update_state!` before halo fill so the new time slice is\nvisible to BC consumers.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Test callsite firing and FTS update dispatch for AtmosphereModel\n\nThree @testsets:\n  * UpdateStateCallsite/TendencyCallsite/TimeStepCallsite counters fire as\n    expected when registered with `add_callback!`. Regression guard for #719.\n  * `compute_tendencies!(model)` (no callbacks) remains callable, covering\n    the test-suite consumer in `turbulence_closures.jl`.\n  * `update_model_field_time_series!` resolves to the new\n    `Breeze.AtmosphereModels` method (not the no-op `::AbstractModel`\n    fallback), and the standard `(fields(model), model.forcing)` walk\n    discovers an embedded `FieldTimeSeries`.\n\nEnd-to-end OBC(fts) coverage is left to the manual Lamb-Oseen validation:\nattaching an FTS-backed OpenBoundaryCondition to a prognostic momentum\nfield surfaces a separate pre-existing bug in `compute_velocities!` —\n`fill_halo_regions!(model.momentum)` is called without `model.clock`, so\nFTS BCs fall through to the generic `getbc(::AbstractArray, ...)` path.\nThat's tracked separately; this commit deliberately steers around it.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Cross-reference #717 in test comment\n\nThe skipped OBC(fts) coverage path runs into #717\n(`compute_velocities!` discards clock/fields when refilling momentum halos).\nThe FTS BoundsError and the continuous-callable MethodError are the same\nunderlying bug — surfaced through different `getbc` dispatch fallbacks.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* End-to-end test: chunked FTS Open BC advances through update_state!\n\nReplaces the walk-reachability stand-in with an end-to-end test now that the\n#717 fix (present in this stacked branch) lets an FTS-backed Open BC on\nmomentum dispatch correctly. A partly-in-memory (InMemory(2)) FieldTimeSeries\nis attached as a west Open BC on ρu; stepping the compressible model past the\nin-memory window advances `backend.start`, which only happens because\n`update_state!` calls the AtmosphereModel `update_model_field_time_series!`\nextension — without it the call hits the no-op `::AbstractModel` fallback and\nthe pointer never moves.\n\nBoundary values are not asserted (a memory-only chunked FTS has no parent file\nto reload slices from); the time-pointer advance is the #719 signal.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-05-28T10:58:03-06:00",
          "tree_id": "3e9db70a79999e48cf95e3b8bd09e20b601dd11a",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/ce837e33e335c9e6a6607c9ac5c717901f6957ae"
        },
        "date": 1779989095225,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 117560410.42321034,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 82616892.01038083,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 63685285.80027455,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133401391.86413418,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133401391.86413418,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 124053540.97029108,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 124053540.97029108,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 124053540.97029108,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 105740681.35605396,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 105740681.35605396,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 84523301.95670083,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 84523301.95670083,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 80281281.01147653,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 80281281.01147653,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 70345991.2746728,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 70345991.2746728,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7043968.367747185,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 5992690.246964346,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 1647016.6144710977,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25425324.080683216,
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
          "id": "862327f099e4903b06cf2511a1e10d4e92c08b27",
          "message": "Patch for Oceananigans v0.109 (#740)\n\n* patch for Oceananigans v0.108.1\n\n* import time_discretization from TimeSteppers\n\n* use Oceananigans 0.109\n\n* use Oceananigans 0.109\n\n* use Oceananigans 0.109\n\n* try fix\n\n* Convert Δt to grid eltype before launching kernels for Metal Float32\n\nOceananigans 0.109 stopped coercing Δt at kernel launch sites, so\npassing a Float64 Δt into a Float32 kernel now triggers\n`unsupported use of double value` on Metal. Convert Δt at the kernel\nboundary (parametrize on α::FT in `_ssp_rk3_substep!`, and convert\nahead of `launch!` for the anelastic pressure correction / source term\nand `scalar_rk3_substep!`).\n\nAlso pin the Oceananigans dkz-adapt-all source in each workspace\nsub-project so the docs and GPU CI envs can resolve the v0.109 branch.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Convert Δt at SSP-RK3 launch site, not inside the kernel\n\nMetal cannot load a Float64 kernel argument at all (the kernel signature\nitself triggers `unsupported use of double value` before the body runs),\nso the previous in-kernel `convert(FT, Δt)` still left a Float64 in the\nspecialized signature. Convert ahead of `launch!` instead, matching the\npattern we already use in `scalar_rk3_substep!` and the anelastic\nlaunches.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Pass Δt through unchanged under Reactant tracing\n\nThe Metal Float32 fix converted Δt to `eltype(grid)` at every launch\nsite, but doing so under Reactant tracing materialises the value and\nbreaks the traced gradient path — `centered_compilation`,\n`weno_compilation`, and `advection_diffusion_ad` started returning NaN\nloss and zero gradients.\n\nIntroduce `kernel_time_step(arch, grid, Δt)` as the single dispatch\npoint: the default converts to `eltype(grid)` (needed for Metal), and\n`BreezeReactantExt` overrides it for `ReactantState` to be a no-op.\nWire it through SSP-RK3, the WS-RK3 scalar substep, and the anelastic\npressure-correction / source-term launches.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Re-trigger CI with Oceananigans interpolate fix\n\nCliMA/Oceananigans.jl@281a3d7f9 on the dkz-adapt-all branch (which\nthis PR pins via [sources]) fixes the `_fractional_indices` arity\ndispatch bug behind the `inertia_gravity_wave.jl` docs build's\n`DomainError`. Re-run CI so the docs job picks up that head.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Require Ocenanigans v0.109.1\n\n* Remove Oceananigans source dependency\n\nRemoved Oceananigans source dependency from Project.toml.\n\n* Remove Oceananigans source entry\n\nRemoved Oceananigans source URL from Project.toml.\n\n* Update Project.toml\n\n* Update Project.toml\n\n* Update Project.toml\n\n* Bump version from 0.5.1 to 0.5.2\n\n---------\n\nCo-authored-by: dkytezab <danielkytezable@gmail.com>\nCo-authored-by: Gregory Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-05-29T11:41:16+02:00",
          "tree_id": "4880bec69a47f5428679165da818549befb98dbc",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/862327f099e4903b06cf2511a1e10d4e92c08b27"
        },
        "date": 1780049044729,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120380364.15388091,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84417590.55333772,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65850331.446363226,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 132151469.04693681,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 132151469.04693681,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127786180.89278327,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127786180.89278327,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127786180.89278327,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114433670.2035973,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114433670.2035973,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91479614.91682029,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91479614.91682029,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85186250.27676675,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85186250.27676675,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74952475.79462025,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74952475.79462025,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 7043748.566955613,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float64]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 5987852.280990074,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float64]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 1652991.784981928,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25446454.329566404,
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
          "id": "aa2098d8cb4b61cf60c87eef6e373918f5f502c6",
          "message": "Reactant benchmarking F64 --> F32 (#693)\n\n* F32\n\n* fix fix\n\n* Update Oceananigans source revision to main\n\n* Update Project.toml",
          "timestamp": "2026-05-29T18:09:21+01:00",
          "tree_id": "de5b2f490fee04db1e0f9cb545a51a08a851a16e",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/aa2098d8cb4b61cf60c87eef6e373918f5f502c6"
        },
        "date": 1780075925254,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 117885736.68710619,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 82713053.67874345,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 62710408.84053557,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133320231.54550551,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133320231.54550551,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 126853527.68294607,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 126853527.68294607,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 126853527.68294607,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 110772834.68380727,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 110772834.68380727,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91426601.54515369,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91426601.54515369,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84899073.65827404,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84899073.65827404,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74647216.36871357,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74647216.36871357,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 78667665.69627178,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 54783837.546185255,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6211692.010744779,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25443012.513451803,
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
          "id": "0e4fabeef6daf5feeecc9970d51779aa38fe2fad",
          "message": "Bump benchmark-action/github-action-benchmark from 1.22.0 to 1.22.1 (#758)\n\nBumps [benchmark-action/github-action-benchmark](https://github.com/benchmark-action/github-action-benchmark) from 1.22.0 to 1.22.1.\n- [Release notes](https://github.com/benchmark-action/github-action-benchmark/releases)\n- [Changelog](https://github.com/benchmark-action/github-action-benchmark/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/benchmark-action/github-action-benchmark/compare/a60cea5bc7b49e15c1f58f411161f99e0df48372...52576c92bccf6ac60c8223ec7eb2565637cae9ba)\n\n---\nupdated-dependencies:\n- dependency-name: benchmark-action/github-action-benchmark\n  dependency-version: 1.22.1\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-01T08:31:36+01:00",
          "tree_id": "babd893768f9759e09ae12d5363f6401479642b3",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/0e4fabeef6daf5feeecc9970d51779aa38fe2fad"
        },
        "date": 1780300576060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119689081.2374228,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83780405.29150225,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 64419995.52086434,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 122837148.08095472,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 122837148.08095472,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127706558.59445539,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127706558.59445539,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127706558.59445539,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115531416.95146166,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115531416.95146166,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91597518.9063138,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91597518.9063138,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86406416.54891787,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86406416.54891787,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 77101323.76440492,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 77101323.76440492,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 78629836.89914821,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 54725737.79423468,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6298895.045439824,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25198225.35903485,
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
          "id": "c1b191f48b0116886fd434566b49b7d61ad83ffa",
          "message": "Bump actions/create-github-app-token from 3.0.0 to 3.2.0 (#757)\n\nBumps [actions/create-github-app-token](https://github.com/actions/create-github-app-token) from 3.0.0 to 3.2.0.\n- [Release notes](https://github.com/actions/create-github-app-token/releases)\n- [Changelog](https://github.com/actions/create-github-app-token/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/create-github-app-token/compare/f8d387b68d61c58ab83c6c016672934102569859...bcd2ba49218906704ab6c1aa796996da409d3eb1)\n\n---\nupdated-dependencies:\n- dependency-name: actions/create-github-app-token\n  dependency-version: 3.2.0\n  dependency-type: direct:production\n  update-type: version-update:semver-minor\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-06-01T09:09:17+01:00",
          "tree_id": "cc6c3b8c31487652491759dd3f258b49e29bf7e7",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/c1b191f48b0116886fd434566b49b7d61ad83ffa"
        },
        "date": 1780302910115,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119709687.77391161,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84459509.37181413,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66007774.31962578,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 132441286.91570516,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 132441286.91570516,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 125899246.12717012,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 125899246.12717012,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 125899246.12717012,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 107753847.891321,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 107753847.891321,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 86497481.58342966,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 86497481.58342966,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83061242.47595692,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83061242.47595692,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 72351296.74847093,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 72351296.74847093,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 79200674.1660398,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 54863335.09482311,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6326924.943695957,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25478951.20895824,
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
          "id": "9d01365f89e7174eb3bae6d53057a6e54de3022d",
          "message": "Per-substep open-boundary enforcement for split-explicit substepper (#747)\n\n* Per-substep open-boundary enforcement for split-explicit substepper (#738)\n\nThe acoustic substep loop currently leaves the perturbation scalars ρ′, (ρθ)′\nwith their default zero-gradient halos on Bounded dims, so an open lateral\nboundary acts as a reflecting wall for the linearized acoustic perturbations:\ninterior-generated waves bounce off it, and the boundary mass flux is carried\nonly by the frozen stage-entry slow tendency Gˢ. Over the ~30 substeps in an\nouter step this biases the discrete mass balance, producing several-percent ρ\ndrift when a transient inflow crosses the boundary (worst observed: −27% on\nthe vortex-transit skim_low scenario).\n\nWRF, ERF, MPAS, and FV3-LAM all avoid this by enforcing the specified lateral\nboundary on every acoustic substep. This change adds the same enforcement for\nAcousticRungeKutta3: after each substep's post-solve recovery,\n`apply_open_boundary_relaxation!` relaxes the outermost open-boundary cell of\nρ′, (ρθ)′ toward the prescribed wall value v with factor α. Because\n`update_state!` applied the prognostic `ValueBoundaryCondition` to the base at\nstage entry, ρᴸ[halo] = 2v − ρᴸ[cell], so the target perturbation is\n(ρᴸ[halo] − ρᴸ[cell])/2 — read directly from the base field, no extra BC\nplumbing. The relaxation is boundary-plane (O(N²)) and adds no extra kernel\nlaunches inside the substep loop.\n\nThe factor α is exposed as a programmatic kwarg on\n`SplitExplicitTimeDiscretization(; open_boundary_relaxation = 0.5)`, default\n0.5 (matching FV3-LAM's outermost-blend-row weight ≈ 0.6), validated to be in\n(0, 1]. The relaxation is unconditional and a no-op on any side whose\nprognostic-momentum BC is not an active `OpenBoundaryCondition` (periodic,\nwalls, and `OpenBoundaryCondition(nothing)` all skip it), so the enforcement\nhas zero cost when no open lateral BC is present.\n\nValidation (Nx=128, full stop_time=10000 s, default α=0.5) on the five OBC\nscenarios from the vortex-transit validation study\n(vortex_validation_report.md §5.3): all density drifts collapse from −8% to\n−27% (no fix) → −0.01% to −0.02% (with fix), vortex amplitude ≥ 99% retained,\nmax|w| ≤ 0.32 m/s (vs 0.85–1.5 without the fix). Tracks Breeze.jl #738.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add tests for per-substep open-boundary enforcement (#738)\n\nThree testsets covering the new code, appended to `test/acoustic_substepping.jl`\nafter the existing #716 regression test:\n\n1. **`open_boundary_relaxation` kwarg propagation** — verifies the new\n   kwarg's default (`0.5`), custom value propagation through\n   `SplitExplicitTimeDiscretization` → `AcousticSubstepper`, and\n   `ArgumentError` validation for α ∉ (0, 1] (zero, > 1, and negative).\n\n2. **No-op without active open BCs** — builds doubly-periodic and\n   all-walls bounded models, takes a step, asserts no NaN. Confirms\n   `is_active_open_bc` correctly skips `Periodic`, `NoFlux`, and default\n   impenetrable sides, so the always-on enforcement has zero behavioral\n   cost when no open lateral BC is present.\n\n3. **Outermost cell tracks prescribed ρ** — builds a Bounded-x model\n   with `OpenBoundaryCondition` on `ρu` and `ValueBoundaryCondition`\n   setting `ρ_wall = 1.05 · ρ_ref` (a 5% jump). After three outer steps\n   the cumulative per-substep pull saturates and ρ at the outermost\n   west/east cells is well past halfway from the interior bulk toward\n   `ρ_wall`, exercising the boundary-plane relaxation kernels end-to-end.\n\nTests pass on CPU/Float64 (16/16, 44 s). The pre-existing #716 Metal\nFloat32 test failure on macOS is unrelated and reproduces on main.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* test: cover ρθ tracking and y-direction kernel in open-boundary relaxation test\n\nExpands the outermost-cell tracking testset to (a) assert the (ρθ)′ field\nalso tracks its prescribed wall value, and (b) exercise the y-direction\nrelaxation kernel by switching the grid to (Bounded, Bounded, Bounded) and\nopening the south/north sides with a ρv inflow symmetric to the existing\nρu inflow on west/east. Closes prior gaps in PR #747 coverage where only\nthe x-kernel writing ρ′ was directly asserted.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* acoustic_substepping: merge per-direction relaxation kernels and rename args\n\nAddresses two review comments from @glwagner on PR #747:\n- Combines `_relax_open_boundary_{x,y}_cell!` into single per-direction kernels\n  that update both ρ′ and (ρθ)′ in one launch (was two launches per active side;\n  now one).\n- Renames kernel args for consistency with notation.md / Oceananigans BC code:\n  `pert`, `base` (linearized), `i_cell`, `i_halo` → `ρ′, ρθ′, ρᴸ, ρθᴸ, iᴮ, iᴴ`,\n  removing the English-math mixing.\n\nBehavior preserved bit-for-bit (verified against the expanded tracking test\nadded in the preceding commit).\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* test: add asymmetric-wall, α-sensitivity, and OpenBC(nothing) coverage\n\nThree additional testsets for the per-substep open-boundary relaxation:\n\n- Asymmetric wall values per side: catches kernel index-transposition bugs\n  that the symmetric `ρ_wall` setup in the prior test would not detect.\n  Each outermost cell must be closer to its own prescribed value than to\n  the opposite side's.\n- α sensitivity (dose-response): two otherwise-identical runs at α = 0.05\n  and α = 1.0; the high-α run must track `ρ_wall` more tightly. Catches\n  bugs where α is ignored or hard-coded downstream of the kwarg.\n- `OpenBoundaryCondition(nothing)` no-op: exercises the `!(bc.condition\n  isa Nothing)` branch of `is_active_open_bc` and verifies the kernel\n  does not fire in that case.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-01T13:30:24-06:00",
          "tree_id": "10bd3caace43e0c2000f18dbd131c3a8b58e869a",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/9d01365f89e7174eb3bae6d53057a6e54de3022d"
        },
        "date": 1780343577061,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 116989096.86545987,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 81941141.98368342,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 63115307.93618529,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 132900779.37489012,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 132900779.37489012,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127624643.49130633,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127624643.49130633,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127624643.49130633,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114616587.52574399,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114616587.52574399,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91814086.32548183,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91814086.32548183,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85520590.70704481,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85520590.70704481,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76345039.02237214,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76345039.02237214,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 78061717.64624807,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 54805032.98057505,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6312462.359742256,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25197195.151003294,
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
          "id": "332389d671558bc723fc84680af7e2a11f49db7c",
          "message": "[CI] Replace deprecated `app-id` input with `client-id` (#763)",
          "timestamp": "2026-06-02T00:24:51+01:00",
          "tree_id": "836d040b25207a4da554fd8a96c4cdde8dcc1776",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/332389d671558bc723fc84680af7e2a11f49db7c"
        },
        "date": 1780357652909,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 118525596.17264676,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83994236.77487366,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65885725.68491057,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 134312735.06945807,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 134312735.06945807,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127906277.90898393,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127906277.90898393,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127906277.90898393,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 112742670.76147263,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 112742670.76147263,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91001583.1698018,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91001583.1698018,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85818941.86611249,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85818941.86611249,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76248546.42269245,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76248546.42269245,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 79317105.66453518,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 54786867.42318121,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6304940.097970164,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25218667.7581268,
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
          "id": "f4a8ada4fb2a51ba5f8b1b1cc56b61865dba96ca",
          "message": "Updates for Oceananigans v0.110 (#770)\n\n* use Oceananigans v0.110\n\n* OpenBoundaryCondition -> NormalFlowBoundaryCondition\n\n* few more\n\n* code alignment\n\n* code alignment\n\n* bump patch release",
          "timestamp": "2026-06-09T13:08:28+08:00",
          "tree_id": "b6cbda1d812d9aa5053cada429c80eed8d776586",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/f4a8ada4fb2a51ba5f8b1b1cc56b61865dba96ca"
        },
        "date": 1780983120185,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119848611.23110864,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83530146.66408186,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 64102538.430738024,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133101326.68758631,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133101326.68758631,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128109161.90039004,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128109161.90039004,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128109161.90039004,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114239072.42470846,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114239072.42470846,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92440053.87988831,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92440053.87988831,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85306859.94656737,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85306859.94656737,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75974760.67647012,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75974760.67647012,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 78164917.61685592,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 52881805.23384276,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6088869.190164882,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25146808.132920478,
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
          "id": "bc5723243afe2c8228f90686a1a35a1b3d1a9d6e",
          "message": "Add `adiabatic_balance!` for compressible and anelastic dynamics (#764)\n\n* Add adiabatic_initialization! (FV3 na_init) for CompressibleDynamics\n\nSymmetric forward/backward excursion + 1/3-2/3 nudge of the slow\nprognostics (ρ, ρu, ρv, ρθ, ρqᵉ); ρw left free to spin up balance.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Generalize adiabatic_initialization! to AnelasticDynamics\n\nMove the routine to a top-level, dynamics-agnostic file; slow_fields gains\na per-dynamics method (CompressibleModel keeps ρ; AnelasticModel drops the\nfixed-reference ρ). Add an anelastic rest-state test that also exercises the\nbackward step. Reframe the docstring around spinning up the vertical field.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Refine adiabatic_initialization! docstring\n\nExplain that nudging keeps the initialization from drifting too far from\nthe initial conditions, simplify the FV3 attribution, and note the\nsymmetric excursion is only nearly reversible.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Potential fix for pull request finding\n\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>\n\n* Remove stale explicit imports in CompressibleEquations\n\n`time_step!` and `update_state!` were imported from\nOceananigans.TimeSteppers but never used (only referenced in comments\nand docstrings), tripping the Stale Explicit Imports QA test.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Update src/adiabatic_initialization.jl\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Update src/adiabatic_initialization.jl\n\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>\n\n* Fully reset clock in adiabatic_initialization! via reset!\n\nThe spin-up excursion's time_step!s leave clock.stage and clock.last_Δt\n(and last_stage_Δt) non-initial. Resetting only time/iteration meant the\nfiltered surface state's `isinf(last_Δt)` guard would misfire on the first\nproduction step. Use Oceananigans' reset!(clock), which restores all five\nfields, and assert stage/last_Δt in the tests.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Rename adiabatic_initialization! to adiabatic_balance!\n\nThe routine spins up balanced vertical momentum, so the name now reflects\nthe balancing it performs rather than its use as an initialization step.\nRenames src/adiabatic_initialization.jl and test/adiabatic_initialization.jl\nand updates the export. Prose naming the FV3 na_init technique is unchanged.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\nCo-authored-by: Copilot Autofix powered by AI <175728472+Copilot@users.noreply.github.com>\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>",
          "timestamp": "2026-06-10T15:01:20-04:00",
          "tree_id": "1b33fbaa3edff0bebd5b02da5096db323840d69a",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/bc5723243afe2c8228f90686a1a35a1b3d1a9d6e"
        },
        "date": 1781119496183,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 115989326.79188961,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 81558234.29582208,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 62502873.00608954,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 131002578.24038832,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 131002578.24038832,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 126536600.4396022,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 126536600.4396022,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 126536600.4396022,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114654860.3011701,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114654860.3011701,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91206270.2605975,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91206270.2605975,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86947829.67963094,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86947829.67963094,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76959489.74352945,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76959489.74352945,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 77414169.41076435,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 52283503.7183632,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6039803.573673328,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25117098.189720545,
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
          "id": "e1d74319b516adb1216acf41614fa38d67297a85",
          "message": "Rename `adiabatic_balance!` to `balance_adiabatically!` (#779)\n\nPer review feedback on #764: a `!` function reads most clearly as an\nimperative verb. `balance_adiabatically!(model)` reads as an action\nperformed on `model`, whereas a noun-phrase name like `adiabatic_balance`\nsuggests `balanced_state = adiabatic_balance(model)` (compute and return).\n\nRenames the function, its source file (`src/adiabatic_balance.jl` ->\n`src/balance_adiabatically.jl`), the test file, and the export. The test\nfile is auto-rediscovered by `find_tests`, so no registration change is\nneeded. Behavior is unchanged.\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-11T09:58:24-04:00",
          "tree_id": "ea13d975cf618bdbb6c32f9623bf3c94866f269d",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/e1d74319b516adb1216acf41614fa38d67297a85"
        },
        "date": 1781187936759,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121152852.38642181,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84413158.39762703,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 64842737.89670241,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 132200263.36804838,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 132200263.36804838,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128069945.59183985,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128069945.59183985,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128069945.59183985,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115782815.68689714,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115782815.68689714,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91429835.18434706,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91429835.18434706,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86976973.25552718,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86976973.25552718,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 78182394.03884219,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 78182394.03884219,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 78339784.54596929,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 52546777.49525936,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6093558.569492123,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25365231.45279042,
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
          "id": "41d99cf9d51c59857a3c6ed5a8c64f200450edbd",
          "message": "[Example] Tropical cyclone with stationary stratiform rainband (YD19) (#657)\n\n* Add literate example: Tropical cyclone with stationary stratiform rainband (YD19)\n\nReproduction of the Yu and Didlake (2019, J. Atmos. Sci. 76, 3169–3189)\nidealized tropical-cyclone rainband experiment as a self-contained Breeze\nexample. The simulation asks: given a mature hurricane, what happens when\nyou paint a steady stationary heating pattern in one of its stratiform\nrainbands? YD19's answer — obtained from a full-physics WRF run — is a\nquadrupole of secondary-circulation anomalies and a few-m/s dipole in the\ntangential wind. We get the same pattern here with the Breeze anelastic\ncore.\n\n## Simulation\n\nSingle hardwired configuration, 214² × 75 cells on a 642 km × 642 km × 25 km\nperiodic-in-x-y box at 3 km horizontal resolution (Δz ≈ 333 m). Three\nback-to-back 24 h stages run end-to-end in one script:\n\n  1. Spinup  — balanced vortex IC relaxes under the upper-level sponge only.\n  2. Control — 24 h continuation from the post-spinup state, no heating.\n  3. Heated  — 24 h continuation from the same post-spinup state with the\n               MN10 stratiform heating switched on.\n\nThe response is (heated − control) in the hour 5-7 analysis window (per\nF06 diagnostic; response saturation past that window reflects the absence\nof explicit horizontal diffusivity — documented known limitation).\n\n## Physics\n\n- Environment: Jordan (1958) West Indies mean hurricane-season sounding\n  (tabulated inline; interpolated onto z_centers).\n- Vortex: modified-Rankine (YD19 Eq. 2) with Stern–Nolan (2009) Eq. 4.4\n  RMW(z) slope, tapered outside 250 km for periodic-box compatibility.\n- Initial condition: Picard iteration of the gradient-wind + hydrostatic +\n  ideal-gas fixed point (Nolan 2001 / WRF `em_tropical_cyclone`). Converges\n  in ~15 iterations to gradient-wind residual ~10⁻³ Pa/m and hydrostatic\n  residual ~10⁻⁵ Pa/m — a 10⁴× collapse over a one-shot linearized baseline.\n- Rainband heating: YD19 Eq. 3 — spiral radial centerline\n  r_bs(λ,z) = [60 − 10(λ/(π/4))] km + z, Gaussian radial shape with\n  σ_r = 6 km, sinusoidal vertical shape with σ_zs = 2 km centered at\n  z_bs = 4 km, super-Gaussian azimuthal window at λ = −π/4, and a 1-h\n  linear ramp from zero to full strength.\n- Upper-level sponge: WRF `damp_opt=2` analog. Rayleigh damping of ρu/ρv/ρw\n  toward zero and ρe toward the reference dry-static-energy-density profile,\n  sin² ramp from z = 20 km to max at z = 25 km.\n\n## Scientific outcome\n\nEnd-of-spinup surface v̄ peak = 37.94 m/s at r = 31.5 km (YD19 target ≈ 40);\nwarm-core θ' peak = 7.63 K at (r, z) = (1.5, 9.8) km (YD19 ~12 K at 10-12 km);\nhour 5-7 axisymmetric response range = [-1.00, +1.61] m/s (YD19 peak ≈ ±1.5);\nper-panel |w'| peaks [0.213, 0.183, 0.217] m/s at z = 6 / 3.6 / 2 km. The\nquadrupole pattern and dipole in v̄ are reproduced; the θ' magnitude shortfall\nis a known formulation caveat (mass-coord vs z-coord Picard closure) that\nsurvives spinup roughly unchanged.\n\n## What the example teaches\n\n- Building a balanced-vortex IC via Picard iteration.\n- Wiring a spatially structured, time-varying heat source into the energy\n  equation with `Forcing`.\n- Running three related stages in one script with in-memory state handoff.\n- Isolating a forced response via a control experiment.\n\n## Figures produced\n\n  - `F01_preflight.png`             vortex IC sanity check\n  - `F02ab_vortex.png`              basic-state vortex (YD19 Fig 2a,b)\n  - `F02cd_heating.png`             analytic heating (YD19 Fig 2c,d)\n  - `F03a_axisym_response.png`      axisymmetric response (YD19 Fig 3a)\n  - `F04_plan_response.png`         plan-view response (YD19 Fig 4a-c)\n  - `F05_cross_sections.png`        cross sections (YD19 Fig 5)\n  - `F06_response_timeseries.png`   response amplitude vs time\n  - `response_w_z3km.mp4`           w' evolution animation at z ≈ 3 km\n\n## Implementation notes\n\n- Self-contained: all physics (Jordan sounding, YD19 constants, kinematics,\n  Picard solver, residuals) inlined into the single example file. No\n  external `include`s.\n- Simulation default is `Float64`. `Float32` attempted and deferred —\n  the anelastic pressure solve NaN's in ρu within 100-300 spinup steps\n  at 3 km on GPU with the YD19 vortex intensity. Smoke (12 km) worked.\n  A separate Breeze-level stability investigation is warranted.\n- Analysis block uses `FieldTimeSeries(...; backend=OnDisk())` for\n  streaming reads and Float32 preallocated scratch buffers for centered\n  interpolation. Peak analysis RSS ≈ 50 MB regardless of snapshot count.\n- LaTeX math blocks, @cite / @citet / @ref markers throughout.\n- Six new bib entries (YuDidlake2019, MoonNolan2010, SternNolan2009,\n  Nolan2001, Jordan1958, Emanuel1986) in `docs/src/breeze.bib`.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* DROP ME: comment out other GPU tests, and increase timeout\n\n* Fix inline comments\n\n* Apply suggestions from code review\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Fix made up DOIs\n\n* add bulk surface fluxes\n\n* restore production-level constants, correct draft comments.\n\n* Fix output directory path\n\n* reduce figure size/increase compression\n\n* fix large HTML file size\n\n* Fix formatting and comments in tropical_cyclone_with_rainband.jl\n\n* Refactor cyclone parameters for clarity\n\n* Update units and improve variable readability\n\n* Update examples/tropical_cyclone_with_rainband.jl\n\n* Initialize CUDA seed for reproducibility\n\n* Enhance tropical cyclone example with improved snapshot handling and corrections to the plots\n\n* rename function names for clarity and improve documentation in tropical cyclone example\n\n* [Example] Switch TC rainband driver to acoustic substepping (Float32)\n\nReplace the anelastic + Float64 production configuration with\nCompressibleDynamics(SplitExplicitTimeDiscretization()) + Float32.\n\nThe anelastic elliptic pressure solve loses its precision margin at\nFloat32 — a 10⁻³ Pa/m gradient-wind residual sits right at F32 ε on a\n10⁵ Pa background — and so anelastic F32 runs deterministically NaN at\niter ~99 across grid resolutions (3 km, 1.5 km), WENO orders (3, 5),\nand surface configurations. Acoustic substepping replaces the elliptic\nsolve with linearized acoustic substeps that don't need to drive a\nglobal residual to round-off, enabling Float32 and running 1.8× faster\nwall-time than anelastic Float64 at identical Δt:\n\n  anelastic F64 (job 819): 3456 iter / Δt=25 s avg / 24.84 min wall\n  acoustic  F32 (job 810): 3454 iter / Δt=25 s avg / 13.81 min wall\n\nAll 3 stages (spinup + control + heated, 24 h each) and the F02–F06\nanalysis figures complete cleanly at F32 on a single T4 (job 817).\n\nConversion details:\n  - AnelasticDynamics(reference_state) →\n      CompressibleDynamics(SplitExplicitTimeDiscretization();\n                           surface_pressure=p_env(0.0),\n                           reference_potential_temperature=θ_env)\n  - formulation = :StaticEnergy dropped (compressible + :StaticEnergy\n    fails to compile on GPU — gpu__compute_temperature_and_pressure!\n    hits jl_f_throw_methoderror). Default :LiquidIcePotentialTemperature\n    is used.\n  - Upper-level sponge ρe → ρθ (target ρᵣθᵣ instead of ρᵣ[cᵖᵈTᵣ + gz]).\n  - Rainband heating tendency ρᵣcᵖᵈQ → ρᵣQ/Πᵣ with Πᵣ(z)=(pᵣ/pˢᵗ)^κ.\n  - IC adds ρ = ρᵢ from the Picard-balanced vortex.\n  - post-stage cache + JLD2 writer + load_last_snapshot include ρ.\n  - Surface fluxes (Cᴰ, Cᵀ, T₀_surf) removed from the prod config —\n    matches the YD19 §3a1 quasi-steady response amplitude (≈ ±1.5 m/s)\n    more closely than with-surface runs (≈ ±2 m/s).\n  - Per-iteration diagnostic_probe runs for the first 250 steps.\n\n* fix whitespace in examples/tropical_cyclone_with_rainband.jl:122\n\n* swap output handling to use in-memory slices instead of JLD2 files, keeping the final HTML file small\n\n* Strip trailing whitespace on lines 644-646\n\n* refactor example to use Float32 for soundings, fix minor plotting inaccuracy.\n\n* update simulation callback intervals and plot title for clarity\n\n* turn on all examples\n\n* removed extra figures and analyses for a more streamlined example\n\n* fix typo in comments\n\n* fix variable naming and update temperature conversion\n\n* [CI] Increase timeout of whole Documentation job\n\n* Move scaling by 100 to `jordan_p_mb` definition\n\n* Always use GPU architecture for tropical cyclone with rainband example\n\n* RICO model is on GPU\n\n* fix missing figure display in literated file\n\n* Update tropical cyclone example to include heated run plot\n\n* Update tropical_cyclone_with_rainband.jl\n\n* Rework tropical_cyclone_with_rainband example with operators, Fields, and output writers\n\n- Balanced-vortex IC solved with Field operators (CumulativeIntegral + ∂z with a\n  hydrostatic Gradient boundary condition) instead of manual Picard arrays; the IC\n  is mapped onto the model with set! + interpolate (no hand-rolled lookup table).\n- Single continuous run (24 h spinup + ramped heating) with a JLD2 output writer;\n  cell-centered velocities, the online-rotated tangential wind (XNode/YNode), and θ\n  are computed online, and the analysis reads them back via FieldTimeSeries.\n- Rainband heating stays discrete but reads the reference ρᵣ/Πᵣ fields by level\n  ([i,j,k]) — no host Array/CuArray columns; named geometry params (no *1000),\n  normalized azimuth s = 4λ/π, and no Float32 module consts.\n- Drop @sprintf/Printf; add an environment-sounding figure; run at CFL = 1\n  (verified stable through the heated phase). Net: ~210 fewer lines.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Add azimuthal_mean diagnostic\n\n`azimuthal_mean(field; radius, Nr, center)` bins a Cartesian field into an\n(r, z) `Field` via a KernelAbstractions gather kernel, so it runs on GPU.\nRe-exported through AtmosphereModels and Breeze; covered by a new testset\nin test/diagnostics.jl (Float32/Float64).\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Rework tropical_cyclone_with_rainband forcing, figures, and notation\n\n- Force the rainband as a specific potential-temperature tendency (key `θ`):\n  the model applies ρ via `SpecificForcing`, so no Exner function, reference\n  density, or heat capacity appears in the forcing — it's just F(x, y, z, t).\n- Write the heating rate in Cartesian coordinates so it drops straight into\n  `Field`s; build the cross-section and plan-view heating figures with\n  `CenterField` + `set!` on dedicated grids rather than hand-rolled arrays.\n- Use the new `azimuthal_mean` diagnostic for the basic-state vortex figures.\n- Output w at its native (Center, Center, Face) location; slice on z-faces.\n- Compact math notation throughout the analysis (θₑ, θ̄′, Fᶜ/Fᵈ/Fᵉ, …).\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Tidy tropical_cyclone_with_rainband prose and structure\n\n- Fix the heating narrative, which still described the removed Exner/ρθ\n  forcing path; it now matches the specific-θ forcing the code uses.\n- Split the ~85-line balanced-vortex block into three sub-sections\n  (setup / Picard iteration / map to the 3-D model).\n- Replace the cryptic F02ab/F02cd/F02e figure IDs with descriptive\n  section and figure titles that reference the YD19 panels in prose.\n- Rewrite the optional control-run note to use the real procedure\n  (a second model with heating dropped) instead of a nonexistent API.\n- Minor: fix a typo and an orphaned \"Stage 4\" header.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Match house call-formatting style in tropical_cyclone_with_rainband\n\nDrop the dangling-open-paren multi-line call style (no other example uses\nit). Makie calls (Axis, heatmap!, contour!) go single-line like the other\nexamples; the few long constructors (RectilinearGrid, ReferenceState,\nFieldBoundaryConditions, CompressibleDynamics) wrap with the first argument\non the open-paren line and the continuation aligned under it, matching rico\nand bomex. Pure formatting — no behavior change.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Pass heating params explicitly via NamedTuple; rename sponge z⁻/z⁺\n\n- Replace the eight global `const` heating parameters with a single `heating`\n  NamedTuple, threaded explicitly into `rainband_heating_rate(x, y, z, t, p)`\n  and handed to the GPU kernel through `Forcing`'s `parameters` — the same\n  pattern the sponge forcings already use, with no global state.\n- Rename the sponge `z_bot`/`z_top` to `z⁻`/`z⁺`, matching `sponge_mask`'s\n  argument names.\n\nValidated on H100: type-stable on GPU, stable 48 h run, figures reproduce\nYD19 Fig. 2 (a–e).\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Use compact notation in rainband_heating_rate body\n\nRename the local shape factors to single symbols — r₀ (band centerline),\nζ (normalized height), G/V/A (radial Gaussian / vertical lobe / azimuthal\nwindow), R (time ramp) — so the heating reads as the product\nF = Fₘₐₓ · G · V · A · R. Pure local rename; behavior unchanged.\n\nVerified on H100: runs cleanly, full 48 h time-stepping in ~3.3 min\n(~11.6 min total wall including compile, IC, and figures).\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* fixed `CumulativeIntegral` reference bug\n\n* Run example at 5 km; trim rot-prone and redundant comments\n\n- Coarsen to 5 km (≈128²): stable at CFL=1, ~7.4 min total on an H100\n  (down from ~11.6 min at 4 km), trimming the all-examples CI build.\n- Drop the incidental anelastic-NaN war story and run-specific residual\n  magnitudes (numbers that quietly rot), the duplicated Picard-sweep and\n  θ-forcing explanations, and the unused `z_centers`.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Apply rainband heating as a continuous Forcing\n\n`rainband_heating_rate` already has the `(x, y, z, t, p)` signature\nOceananigans' continuous forcing expects, so pass it directly and drop the\ndiscrete `(i, j, k, …)` wrapper that recomputed the node coordinates by hand.\nAddresses the standing review suggestion to use the continuous form.\n\nValidated on H100: bit-identical iteration history and max|w| to the discrete\nversion, figures unchanged. Composes correctly with the specific-`θ`\nSpecificForcing (ρ-multiply) path.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Test azimuthal_mean off-center and empty-ring paths\n\nAdd coverage for a non-default `center` (averaging a field symmetric about an\noffset center recovers a monotonic radial profile) and for rings finer than the\ngrid (empty rings are zero-filled, not NaN; populated rings hold the value).\nCloses the codecov patch-coverage gap on azimuthal_mean.jl.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* azimuthal_mean: fill empty rings with NaN, not zero\n\nPer review (nrb171): zero-filled empty rings would bias a subsequent radial\naverage. Fill rings that catch no grid points with `NaN` so they read as\n\"no data\". Document the behavior and the practical `Nr` guidance (keep\nradius/Nr ≳ the horizontal grid spacing); update the test accordingly.\n\nLeaves the example untouched — its azimuthal_mean (Nr=30, radius=150 km on\nthe 5 km grid) has no empty rings, so the figures are unchanged.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* azimuthal_mean: conservative sub-cell area weighting\n\nReplace center-only binning with first-order conservative remapping: split\neach Cartesian cell into an m×m block of sub-cells (default m=4) binned by\nradius, so a cell contributes to every ring it overlaps (uniform sub-sampling\n= area weighting). This keeps near-center rings populated and removes the\nempty-ring problem at sensible Nr without pulling in a regridding dependency\nor leaving the GPU — addresses the review thread on empty-ring handling.\n\nRings that still catch nothing (only when radius/Nr is finer than a sub-cell)\nremain NaN. Validated on H100 (kernel compiles/runs, example figure correct,\nsimulation bit-identical) and CPU (conservative fill, monotonic, offset center).\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\nCo-authored-by: Nicholas Barron <nerb993@gmail.com>\nCo-authored-by: Nicholas Barron <40299766+nrb171@users.noreply.github.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-06-11T09:13:09-06:00",
          "tree_id": "8e370262eae840ecc12c50555f0bb03c54b08ce6",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/41d99cf9d51c59857a3c6ed5a8c64f200450edbd"
        },
        "date": 1781192150909,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 118345100.93535684,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83212793.51178566,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65801508.337521225,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 129890253.73592837,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 129890253.73592837,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 123208777.37039812,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 123208777.37039812,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 123208777.37039812,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 110361628.90595637,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 110361628.90595637,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 87722421.58027706,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 87722421.58027706,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84198187.8121179,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84198187.8121179,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74069665.91305745,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74069665.91305745,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 77090246.3242503,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 52395757.106990695,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6136732.670221738,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25025871.892203186,
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
          "id": "f9a98cfdae74d0887545a33c1b5a72a9d9a053cf",
          "message": "Moist Exner reference state + splitting-supercell comparison (#704)\n\n* Moist Exner reference state + splitting-supercell tutorial\n\nAdd moist support to ExnerReferenceState by unifying the dry and moist Exner\nkernels: a single _compute_exner_reference! now takes qᵛ (a ZeroField for the\ndry case) and uses the moist gas constants Rᵐ, cᵖᵐ, κᵐ — these reduce exactly\nto Rᵈ, cᵖᵈ, κ when qᵛ ≡ 0, so the dry path is bit-identical to before. The\nNewton solve on the discrete hydrostatic balance is preserved (it is what\nmakes the substepper's slow vertical-momentum tendency vanish to ulp on a\nrest atmosphere). CompressibleDynamics gains a reference_vapor_mass_fraction\nkwarg; the ref_spec → ExnerReferenceState kwargs translation is centralized\nin _exner_kwargs(ref_spec) so materialize_dynamics and\nboundary_conditions_reference_state share one call site.\n\nAlso add pressure_balanced_density, a helper that returns ρ_bg · θ_bg / θ_init\nso that ρθ is preserved under a θ perturbation — used to initialize the\ncompressible solver without seeding an acoustic pulse.\n\nRewrite examples/splitting_supercell.jl as an anelastic-vs-compressible\ntutorial: walks through reference state, dynamics, microphysics, advection,\nmodel construction, and set! component-by-component for the anelastic core,\nthen introduces only the deltas for the compressible core. Produces stacked\nxy and xz comparison animations plus a maximum-vertical-velocity time series\noverlay.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Unify 1D and 3D Exner reference paths\n\n`_needs_3d_reference` switches `ExnerReferenceState` to a 3D per-column\nintegration when `potential_temperature` depends on horizontal coordinates.\nThat path still used the MPAS-style up-then-down Π integration and refused\n`vapor_mass_fraction` — so the discrete-balance + moist fix from the\nprevious commit did not apply.\n\nExtract the column work into an `@inline _compute_exner_column!` helper\nindexed by (i, j); both `_compute_exner_reference!` and\n`_compute_exner_reference_3d!` become thin `@kernel` wrappers over it.\nThe 3D constructor branch now allocates a 3D `qᵛᵣ` (or `ZeroField` for\ndry) and drops the moisture guard.\n\nVerification: 3D moist reference attains a discrete-balance residual at\nmachine precision (~2e-14 N/m³); 3D with constant θ(x,y,z) is bit-identical\nto the 1D path. `unit_tests` and `acoustic_substepping` pass.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Document reference state and discrete hydrostatic balance\n\nExpand the \"Reference state and discrete hydrostatic balance\" section of\n`docs/src/compressible_dynamics.md` to match the current per-column\ndiscrete-balance integration:\n\n- Correct the balance equation to the cell-center indexing actually used.\n- Derive the Newton residual `F_k(p)` from substituting the moist EOS into\n  the discrete constraint, and note its monotonicity in `p`.\n- Explain why discrete (not continuous) balance matters — the ~1e-3 N/m³\n  residual from MPAS-style up-then-down Π integration seeds an acoustic\n  instability at production Δt.\n- Document moist reference support, the dry-path bit-equivalence via\n  `ZeroField`, and the matching `reference_vapor_mass_fraction` kwarg on\n  `CompressibleDynamics`.\n- Describe the unified 1D / 3D θ̄ path; both support `vapor_mass_fraction`\n  and run through the same column kernel.\n- Cover `pressure_balanced_density` as the IC-side complement that keeps\n  perturbed θ in balance.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Use sim.run_wall_time for example timing\n\nReplace the manual `CUDA.synchronize()` + `time_ns()` block in the\nsplitting-supercell example with `simulation.run_wall_time`, which\nOceananigans already accumulates per iteration. Drop the now-unused\n`using CUDA` import.\n\nAddresses @glwagner's review comment.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Update examples/splitting_supercell.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Load CUDA in splitting_supercell example\n\nThe zero-argument `GPU()` constructor comes from Oceananigans' CUDA\npackage extension and is only defined once CUDA is loaded, so building\nthe docs (where this example runs) failed with `MethodError: no method\nmatching Oceananigans.Architectures.GPU()`. Every other GPU-using\nexample already loads CUDA the same way.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix docstring reference\n\n* Support moist reference state for terrain-following compressible dynamics\n\n`compute_terrain_reference_state!` previously passed the stored reference\nspec straight to `evaluate_profile`, which only accepts a `Number` or\n`Function`. A moist spec (with `reference_vapor_mass_fraction`) arrives as a\nNamedTuple, so terrain materialization threw a `MethodError` instead of\nbuilding a moist terrain reference state.\n\nUnpack the spec into `(θᵣ, qᵛᵣ)`, build the per-column reference using\nlevel-local moist constants (Rᵐ, cᵖᵐ, κᵐ = Rᵐ/cᵖᵐ), and solve the discrete\nhydrostatic balance per face with a Newton iteration — mirroring the\nnon-terrain `_compute_exner_column!`. The dry case is recovered exactly when\nqᵛ ≡ 0. The `reference_temperature` + terrain combination is explicitly\nrejected with a clear `ArgumentError`. Add a moist terrain test asserting\ndiscrete hydrostatic balance.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Add condensate-aware pressure_balanced_density method\n\nThe existing 3-argument `pressure_balanced_density` holds ρθ fixed, which keeps\npressure unchanged only for dry-air / vapor-only states. With nonzero liquid or\nice condensate that relation no longer balances pressure.\n\nAdd an overload taking `(q::MoistureMassFractions, pᵣ, pˢᵗ, constants)` that\nevaluates the full liquid-ice potential-temperature equation of state and\nbalances density via the temperature ratio. Expand the docstring to document\nboth forms and add a test confirming the condensate-aware method holds pressure\nfixed (to √eps) where the shortcut does not.\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Fix moist terrain surface anchor and refactor hydrostatic integration\n\nThe moist k=1 reference anchor balanced the surface-to-center half cell\nover the full cell thickness Δzᶜᶜᶜ instead of Δzᶜᶜᶜ/2, biasing the first\ncell-center pressure low (~3.4 kPa) and creating a spurious horizontal\npressure gradient between columns. Use the correct half-cell distance.\n\nAlso:\n- Refactor continuous hydrostatic integration into converged_* helpers\n  (step-doubling midpoint/RK2) with a sqrt(eps) relative tolerance.\n- Integrate the dry profile in the Exner function, which is exact for\n  hydrostatic balance (∂Π/∂z = -g/(cᵖᵈ θ)).\n- Move converged_hydrostatic_pressure beside its only caller in the\n  terrain compressible physics.\n- Add constant- and variable-moist terrain reference-state tests.\n\nCo-Authored-By: Claude Opus 4.7 <noreply@anthropic.com>\n\n* Deduplicate hydrostatic reference-state helpers in compressible core\n\nConsolidate three duplications introduced alongside the moist reference-state\nwork, all behavior-preserving:\n\n- Share one Newton discrete-balance solve (newton_hydrostatic_pressure) between\n  the per-column Exner kernel and the terrain reference-state solve, hoisted into\n  Thermodynamics. Iteration counts preserved (5 kernel, 7 terrain).\n- Extract moist_reference_constants for the level-local Rᵐ/cᵖᵐ/κ formula that was\n  open-coded in five places (two kernel, three terrain).\n- Rename _exner_kwargs -> exner_kwargs (underscore prefix is reserved for kernels).\n\nVerified bit-identical: terrain (dry+moist) and 1D-Exner (dry+moist) reference\nstates match before/after to the last ULP.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Restore evaluate_profile dropped by the merge; dedup moist surface constants\n\nThe main merge silently dropped `Thermodynamics.evaluate_profile`: the\nmerge-base defined and exported it, the moist terrain reference code calls it,\nbut main's #712 removed it in favor of `surface_value` (different semantics).\nTaking main's reference_states.jl structure during conflict resolution lost the\ndefinition. The package still loaded (Julia 1.12 only warns on undeclared\nimports) but `compute_terrain_reference_state!` would have thrown UndefVarError.\n\n- Re-add `evaluate_profile(::Number, z)` / `(::Function, z)` and its export.\n- Use the `moist_reference_constants` helper for the 1D Exner surface constants\n  instead of open-coding Rᵐ/cᵖᵐ (behavior-identical dedup).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Update moist terrain reference testsets to main's renamed terrain API\n\nmain's PR #712 renamed `follow_terrain!(grid, h)` (returned TerrainMetrics) to\n`materialize_terrain!(grid, h)` (mutates the grid; TerrainMetrics is then\nauto-built by CompressibleDynamics from the terrain-following grid). The two\nmoist-terrain reference testsets added on this branch still used the old API,\nso they errored after the merge. Port them to the new idiom:\n\n- `metrics = follow_terrain!(grid, h)` → `materialize_terrain!(grid, h)`, and\n  drop the explicit `terrain_metrics = metrics` kwarg (auto-built now).\n- Grid `z` must be a `TerrainFollowingVerticalDiscretization(...; formulation =\n  LinearDecay())`, not a plain `MutableVerticalDiscretization`.\n- Topography is `h(x)` (one arg) on the Flat-y grid, matching every other\n  terrain testset.\n- Drop the now-unused `MutableVerticalDiscretization` import.\n\nVerified standalone: both testsets' interior discrete-hydrostatic residual is\n~3e-14 (tolerance 1e-8).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-06-11T21:54:51-04:00",
          "tree_id": "1b999bb5eee6d2895982fd7a20d1651a97918f01",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/f9a98cfdae74d0887545a33c1b5a72a9d9a053cf"
        },
        "date": 1781230658210,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120320588.85332865,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84022711.08183856,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65565482.76788801,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133309628.45617492,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133309628.45617492,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 126900327.74825796,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 126900327.74825796,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 126900327.74825796,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 113240429.92574771,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 113240429.92574771,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91876001.4727612,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91876001.4727612,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85900233.87424518,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85900233.87424518,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75557344.32192352,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75557344.32192352,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 78321382.4325727,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 52643414.07947617,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6122893.334304361,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 24921658.07846115,
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
          "id": "c0fd82eddb86b7d6f53e12a16801c2d57fd9042b",
          "message": "Add missing import of `Oceananigans.Fields.CenterField` (#784)",
          "timestamp": "2026-06-12T15:31:08+02:00",
          "tree_id": "79ff5d2a477ddb1840f73ac1878a540a5cc186ac",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/c0fd82eddb86b7d6f53e12a16801c2d57fd9042b"
        },
        "date": 1781272313232,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 117253765.40368287,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 82273104.61417954,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 63365179.743600026,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 132976443.73375334,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 132976443.73375334,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127467272.46198422,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127467272.46198422,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127467272.46198422,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 113397457.37158674,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 113397457.37158674,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92026750.82550313,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92026750.82550313,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85651733.90069339,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85651733.90069339,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75690742.67548917,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75690742.67548917,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 77984077.68589294,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 52741405.68291818,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6025873.299246546,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 24856407.261023346,
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
          "id": "3a9ae49683f06bc62f3b6c9a628f385a65b7928a",
          "message": "Resolve possible issues detected by JET (#785)\n\n* Restrict some timestepper methods to `AtmosphereModel`",
          "timestamp": "2026-06-12T19:33:30+02:00",
          "tree_id": "4d006d0539f3b3a99d242fef3f030542c2e851d3",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/3a9ae49683f06bc62f3b6c9a628f385a65b7928a"
        },
        "date": 1781287039766,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 118987458.0479018,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83686586.69333929,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 64671116.72485331,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 130642022.03626087,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 130642022.03626087,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 124121419.17236865,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 124121419.17236865,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 124121419.17236865,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 109869278.69751723,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 109869278.69751723,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 88848985.4788985,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 88848985.4788985,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83680356.19497582,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83680356.19497582,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74624831.70572874,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74624831.70572874,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 78494949.5323788,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 52539003.36300228,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6142665.2180439485,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 24843059.081219222,
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
          "id": "caa260f80cba6878ab1b619a8be1203d11488ef1",
          "message": "Add `InstantaneousPrecipitation` microphysics, remove `ZeroMomentCloudMicrophysics` (#771)\n\n* Add DCMIP2016LargeScaleCondensation on the density-state saturation adjustment\n\nReed–Jablonowski large-scale condensation as a dedicated microphysics scheme:\ninstantaneous, irreversible condensation with immediate rain-out that retains\nthe released latent heat (warms θˡⁱ). The condensation + rain-out is a thin\ncomposition of the #767 density-based primitives — adjust_thermodynamic_state(\n::LiquidIceDensityState, ::SaturationAdjustment) for condensation and\nwith_temperature for the latent-free rain-out — replacing LSC's previous bespoke\n~60-line constant-density secant, which #767 made redundant.\n\nWhy a dedicated scheme (not ZeroMomentCloudMicrophysics): ZMCM sinks condensate\nwater from ρqᵉ, but nothing sources ρθˡⁱ (there is no microphysical_tendency for\nρθˡⁱ and the θˡⁱ tendency has no microphysical term), so it would remove the\nrain's water but lose its latent warming → no intensification on the θˡⁱ core.\nLSC's defining behavior — rain out the water, keep the warming — needs the fused\nkernel writing ρθˡⁱ directly (mirroring the Kessler scheme), hence a separate\nscheme named for parity with DCMIP2016KesslerMicrophysics.\n\nTests: parity vs the pre-refactor inline formulas to 1e-9 (T, qᵛ⁺, qᶜ, θᶠ;\nwarming retained; subsaturated no-op), plus an integration test driving the\nkernel through microphysics_model_update! on a compressible model (density-\nconsistent saturation at the cell's own ρ, and the condensed-water budget).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Preserve precipitation_rate diagnostic across update_state! calls\n\nRain-out sets precipitation_rate only when condensation occurred; without\nan ifelse guard the field was silently zeroed on the post-microphysics\nupdate_state! pass. Use `ifelse(condensed_water_density > 0, ...)` and\ncompute the density from the before/after ρqᵛ difference instead of the\nremoved qᶜ variable.\n\nAdds a regression test: after one microphysics_model_update! + update_state!\ncycle the precipitation_rate field must remain positive.\n\nCo-Authored-By: Claude Sonnet 4.6 (1M context) <noreply@anthropic.com>\n\n* Rename DCMIP2016LargeScaleCondensation → InstantaneousPrecipitation\n\nThe scheme is a generic instantaneous-rain-out idealization — condense all\nsupersaturation, retain the released latent heat, and remove the condensate in\nthe same step (no cloud/rain reservoir, no re-evaporation) — not DCMIP-specific,\nso a descriptive name reads better than the vague \"large-scale condensation\".\n\nRenames the type (internal alias LSC → IP), the once-per-step kernel\n(_large_scale_condensation_update! → _instantaneous_precipitation_update!), and\nthe source/test files (dcmip2016_large_scale_condensation.jl →\ninstantaneous_precipitation.jl); updates the Microphysics/Breeze exports and\ninclude. The DCMIP2016 Reed–Jablonowski provenance is kept in the docstring.\nNo behavior change — pure rename.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Add surface_precipitation_flux for DCMIP2016 large-scale condensation\n\nLSC removes condensate immediately and stores a volumetric precipitation\nrate field; the surface flux is just the column integral of that field.\nImplements AtmosphereModels.surface_precipitation_flux via Field(Integral(..., dims=3)).\n\nTests verify the surface flux is positive after a rain-out step and\nmatches an independently computed column integral.\n\nCo-Authored-By: Claude Sonnet 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix stale LSC alias in surface_precipitation_flux\n\nThe InstantaneousPrecipitation rename left surface_precipitation_flux\ndispatching on the removed LSC alias, breaking precompilation. Use the\ncurrent IP alias and update the docstring wording.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Remove ZeroMomentCloudMicrophysics\n\nInstantaneousPrecipitation covers the instant-rain-out use case, so the\nzero-moment scheme and its tests are no longer needed. Also prune the\nnow-unused Parameters0M and remove_precipitation imports from the\nextension and drop stale zero-moment mentions from docstrings and the\nRICO example.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Remove stale explicit imports in BreezeCloudMicrophysicsExt\n\nThese four imports were left over from the ZeroMomentCloudMicrophysics\nremoval: the AtmosphereModels functions are only extended via qualified\nnames, and SaturationAdjustment now appears only inside a jldoctest.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\nCo-authored-by: Kai-Yuan Cheng <kaiyuanc332@gmail.com>",
          "timestamp": "2026-06-12T15:55:00-04:00",
          "tree_id": "9a35a49bd4f5f63816017967b485f1c77dbbabd4",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/caa260f80cba6878ab1b619a8be1203d11488ef1"
        },
        "date": 1781295514766,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121060890.86029741,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84961219.85700065,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66691333.75497598,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133602135.87281768,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133602135.87281768,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127009113.91401017,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127009113.91401017,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127009113.91401017,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 110584700.02802937,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 110584700.02802937,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89624407.60973783,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89624407.60973783,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84407937.37079984,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84407937.37079984,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74881919.48952314,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74881919.48952314,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 77595373.32639594,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 52238839.51653857,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 5990574.917767393,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25228702.343915835,
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
          "id": "701e6af34bb54ba762e825824d9be854e7ec4d0a",
          "message": "Update Project.toml (#786)",
          "timestamp": "2026-06-14T23:56:57-06:00",
          "tree_id": "a902e65260d5b8d22aec263b95cdc63fafabbd01",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/701e6af34bb54ba762e825824d9be854e7ec4d0a"
        },
        "date": 1781504427123,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 117717047.2693992,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83036286.21868216,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 63753599.49655787,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 130633075.61467233,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 130633075.61467233,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 125916267.28131464,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 125916267.28131464,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 125916267.28131464,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 110671128.23985548,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 110671128.23985548,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 88799194.53086725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 88799194.53086725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83603437.41630071,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83603437.41630071,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75509076.48052973,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75509076.48052973,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 78183464.9389551,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 52615724.299271815,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 5637682.629935591,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25122931.104077846,
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
          "id": "fe1768f54e983b15d47500749f26206a68ae0f08",
          "message": "Adapt test checking `model.clock.stage`  to new Oceananigans (#789)",
          "timestamp": "2026-06-16T19:25:17+01:00",
          "tree_id": "6bfc686faaf4060eeb9735346e05a810e7b50d64",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/fe1768f54e983b15d47500749f26206a68ae0f08"
        },
        "date": 1781636228221,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119893334.67030153,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83974632.07877657,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65466621.61668062,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133832974.40130831,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133832974.40130831,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128774545.6847464,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128774545.6847464,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128774545.6847464,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115527411.29472835,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115527411.29472835,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93073990.31374863,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93073990.31374863,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86552648.86324778,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86552648.86324778,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 77882441.52231552,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 77882441.52231552,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 77743879.04491197,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 52356444.38372571,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 5837096.155105938,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25108429.203915425,
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
          "id": "ca646df3b207544c8347445ff77e98db9fd99788",
          "message": "Bump CUDA in /test (#782)\n\n* Bump CUDA in /test\n\nUpdates the requirements on [CUDA](https://github.com/JuliaGPU/CUDA.jl) to permit the latest version.\n\nUpdates `CUDA` to 6.2.0\n- [Release notes](https://github.com/JuliaGPU/CUDA.jl/releases)\n- [Commits](https://github.com/JuliaGPU/CUDA.jl/commits/v6.2.0)\n\n---\nupdated-dependencies:\n- dependency-name: CUDA\n  dependency-version: 6.2.0\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* Remove compat bounds on GPUCompiler\n\nThese are now handled by Reactant.\n\n* Also require Reactant@0.2.265\n\n* Also bump Reactant compat bound in docs environment\n\n* Use Metal dev version\n\n* Require newer Reactant\n\n* Explicitly require Metal 1.10\n\n* Use dev version of Metal also for benchmarking env\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-06-17T10:41:45+02:00",
          "tree_id": "ae20c52aafe21a6bb410ec6a194dbab14d9acb6e",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/ca646df3b207544c8347445ff77e98db9fd99788"
        },
        "date": 1781687434664,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 124615591.82293427,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 86778486.85319367,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 68347590.03266957,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 137393013.4793232,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 137393013.4793232,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129659614.62368557,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129659614.62368557,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129659614.62368557,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114236141.30061066,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114236141.30061066,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89219214.79634887,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89219214.79634887,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84061927.24159403,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84061927.24159403,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 77708249.99364027,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 77708249.99364027,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 76908889.83442138,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 54228126.26999047,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6766915.507621402,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25099320.39904032,
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
          "id": "0fed941dfa1687189d94b2d0aa64bea1b7d8dbf4",
          "message": "Precompute SLEVE decay basis (≈19× faster TwoLevelDecay substepping) (#788)\n\n* Precompute SLEVE decay basis to eliminate per-access sinh/cosh\n\nThe TwoLevelDecay/SLEVE decay bases bₙ(r)=sinh((z_top−r)/sₙ)/sinh(z_top/sₙ) and\nbₙ′(r)=−cosh(...)/(...) depend only on the reference coordinate r (plus the static\nformulation parameters), but `σ` and `znode` evaluate them on every operator\naccess. Crucially `σⁿ` feeds every vertical spacing `Δz = Δr·σ`, which is touched\nby essentially every operator (divergence, advection, the whole substep loop), so\neach Δz access paid a sinh/cosh pair. On the GPU this made TwoLevelDecay ≈20–30×\nslower per step than LinearDecay.\n\nMaterialize bₙ, bₙ′ once at the Center and Face z-locations into a `TwoLevelBasis`\ncache stored on the formulation (1D in z, indexed [1,1,k] over the same halo'd\nk-range as rnode, bit-identical to the on-the-fly values). `allocate_formulation`\nzero-allocates it during grid construction; `materialize_terrain!` fills it from\n`grid.z.cᵃᵃᶜ`/`cᵃᵃᶠ`. The hot path (terrain_following_σ/Δz_surface/∂z∂x/∂z∂y) now\nreads the cache instead of evaluating transcendentals.\n\nBenchmark (H100, 512²×128, split-explicit substepping, Witch-of-Agnesi hill):\nTwoLevelDecay tfvd_hill drops 10.89 → 0.573 s/step (≈19× faster; TFVD overhead vs\na flat RectilinearGrid falls from 31× to 1.65×, matching LinearDecay's 1.48×).\nLinearDecay is unchanged — its basis is trivial and left analytic.\n\nAdds a throughput benchmark (benchmarking/terrain_following_throughput.jl) and a\nunit test that the materialized basis reproduces the analytic bₙ(r), bₙ′(r).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Remove terrain-following throughput benchmark script\n\nDrop benchmarking/terrain_following_throughput.jl from the SLEVE\ndecay-basis precompute PR; the speedup numbers it produced are recorded\nin the commit message and PR description, and the script itself doesn't\nbelong in the merged history.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-06-17T22:13:13-07:00",
          "tree_id": "8a506b69f387840876cbf91a908fd71b89c46e30",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/0fed941dfa1687189d94b2d0aa64bea1b7d8dbf4"
        },
        "date": 1781761244806,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 124944151.74398543,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 86602783.56699383,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 68341950.06182252,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136393428.05569828,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136393428.05569828,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 130420247.43321417,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 130420247.43321417,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 130420247.43321417,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 117052058.12277356,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 117052058.12277356,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92224519.12752986,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92224519.12752986,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86562500.36105403,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86562500.36105403,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 78381923.7930334,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 78381923.7930334,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 76176334.43736698,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 54191383.96761454,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6869082.535795774,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25219486.83619694,
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
          "id": "10b7f6f638f282b0de07b4612c0b67d531609f73",
          "message": "Refresh model state after the InstantaneousPrecipitation operator-split update (#787)\n\nThe operator-split microphysics update, microphysics_model_update!, runs as the\nlast step of each RK step, after update_state! (ssp_runge_kutta_3.jl). For\nInstantaneousPrecipitation it launches a kernel that mutates the prognostics ρqᵛ\nand ρθˡⁱ in the interior only and previously returned without refreshing the\nmodel state. That left stale halos for ρqᵛ/ρθˡⁱ, inconsistent diagnostics\n(temperature, qᵛ), and stale tendencies — so the next step's first RK substep\nadvanced the microphysics-updated prognostics using tendencies computed from the\npre-microphysics state.\n\nCall update_state!(model) at the end of microphysics_model_update!(::IP, model)\nto refill halos and recompute diagnostics/tendencies. This is safe because\nmaybe_adjust_thermodynamic_state(::IP) is a no-op (no double-counted\nre-condensation) and update_microphysical_fields!(::IP) only writes qᵛ, so the\nkernel-set precipitation_rate diagnostic is preserved.\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-18T13:07:46-04:00",
          "tree_id": "40e0abdf918b8f451abf840385cc640aa98dfd4a",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/10b7f6f638f282b0de07b4612c0b67d531609f73"
        },
        "date": 1781804226672,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120428641.20299238,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83691235.79505625,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 64691771.29560369,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 138498253.24133107,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 138498253.24133107,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128967395.63983893,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128967395.63983893,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128967395.63983893,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 111508624.64570697,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 111508624.64570697,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89736347.20827007,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89736347.20827007,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83857849.46392378,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83857849.46392378,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74560050.69308084,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74560050.69308084,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 74650250.02748603,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53989083.4183551,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6785263.834904062,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25416195.891093545,
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
          "id": "08784f5c19cb3c538d1f02071ce5b826bf1de731",
          "message": "Unify iterative solvers; move the temperature solver from dynamics to the formulation (#780)\n\n* Unify iterative solvers and move the temperature solver to the formulation\n\nIntroduce Breeze.Solvers with NewtonSolver(reltol, abstol, maxiter),\nSecantSolver(reltol, abstol, maxiter), and FixedIterations(n), plus shared\nnewton_solve / secant_solve drivers. All iterative thermodynamic algorithms\nnow dispatch on a solver object instead of carrying ad hoc tolerance/maxiter\nscalars:\n\n- The compressible θˡⁱ→T inversion (LiquidIceDensityState) carries a\n  temperature_solver; FixedIterations unrolls to straight-line code for\n  Reactant/Enzyme, and `nothing` selects the non-iterated closed form,\n  replacing the sign-of-tolerance hack from #767.\n- The temperature solver lives on LiquidIcePotentialTemperatureFormulation,\n  not CompressibleDynamics: the need for the inversion is dictated by the\n  intersection of formulation and dynamics. A DefaultTemperatureSolver\n  sentinel resolves at materialization via default_temperature_solver(dynamics)\n  (nothing for anelastic, NewtonSolver() for compressible).\n- SaturationAdjustment carries a SecantSolver (replacing tolerance/maxiter\n  fields, including the unbounded maxiter = Inf default).\n- dewpoint_temperature and the DewpointTemperature diagnostic take a solver.\n- The legacy MoistAirBuoyancies secant loop (previously uncapped) now uses\n  the shared driver.\n\nRemoved keyword arguments throw ArgumentErrors pointing to the new API.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Route #704 hydrostatic Newton solve through the unified solver framework\n\nThe moist Exner reference state (#704) carried its own hand-rolled fixed-count\nNewton loop, newton_hydrostatic_pressure, that landed after the iterative-solver\nunification. Delegate it to the shared newton_solve driver via a\nresidual_and_derivative closure, taking a solver object instead of a bare\niterations::Int. Call sites pass FixedIterations(5) (per-column Exner kernel) and\nFixedIterations(7) (terrain reference solve), preserving the compile-time trip\ncount so the loop unrolls to straight-line code on the GPU and under Reactant/Enzyme.\n\nBit-identical to the previous loop; the discrete hydrostatic-balance residual\nremains at machine precision (~1e-13 N/m³) for dry and moist columns.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Update stale SaturationAdjustment doctest for the unified secant solver\n\nSaturationAdjustment now carries a SecantSolver instead of bare\ntolerance/maxiter fields, so its show output changed. Update the\none_moment_microphysics doctest to match (verified against the live\nshow output).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Fully qualify cross-module @ref links to solver types in docstrings\n\nNewtonSolver/FixedIterations live in Breeze.Solvers but are referenced from\ndocstrings in Microphysics and PotentialTemperatureFormulations, where they\nare not imported. Documenter only performs the cross-module fallback for\nfully-qualified @ref targets, so an unqualified [`FixedIterations`](@ref)\nfails to resolve. Qualify the targets (matching the existing\n@ref Breeze.AtmosphereModels.default_temperature_solver convention) while\nkeeping the displayed text. SecantSolver in saturation_adjustment is imported\ninto Microphysics and resolves via aliasing, so it is left unqualified.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Fix Reactant GPU regression and docs cross-references\n\nThe Reactant GPU kernel-raising pipeline fails (\"failed to run pass\nmanager on module\") when Enzyme reverse-differentiates the compressible\ntime step if the θˡⁱ→T Newton iteration goes through Solvers.newton_solve\nwith a residual closure. Write the inversion's loop bodies inline with\nplain scalar arguments, preserving the solver abstraction via dispatch\n(solve_temperature methods for NewtonSolver / FixedIterations / Nothing).\n\nAlso qualify @ref targets for solver types in docstrings of modules that\ndo not import them, fixing the Documenter cross-reference build failure.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Unqualify SecantSolver in SaturationAdjustment doctest output\n\nThe doctest sandbox runs with `using Breeze` (DocTestSetup), which brings\nthe exported SecantSolver into scope, so the type parameter prints\nunqualified there — the qualified form only appears outside the sandbox.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Requalify SecantSolver in SaturationAdjustment doctest output\n\nThis doctest lives in the BreezeCloudMicrophysicsExt extension module,\nnot in Breeze. The DocTestSetup `using Breeze` (set via setdocmeta! with\nrecursive=true) only reaches Breeze and its submodules; extension modules\nare not submodules, so that setup never applies here. The only scope is\nthe doctest body's `using Breeze.Microphysics`, and Microphysics does not\nre-export SecantSolver, so Julia prints the type parameter fully qualified\nas Breeze.Solvers.SecantSolver{Float64}. Reverts e443a56, whose premise\nheld only for in-Breeze docstrings.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Make solver tolerance conventions consistent and documented\n\nAddress review question on `reltol` vs `abstol` and `maxiter` across solver\ncall sites by adopting a single convention and writing it down.\n\nTolerance type follows the residual's natural scale:\n- Absolute tolerance for temperature residuals (θˡⁱ→T inversion, saturation\n  adjustment, Boussinesq adjustment), unified to `abstol = 1e-4` K.\n- Relative tolerance for the dewpoint vapor-pressure residual, which spans\n  orders of magnitude (kept at `reltol = 1e-4` vs pᵛ).\n\n`maxiter` follows convergence order and role: Newton inversion 8, secant\ntemperature solves 20 (was 100), dewpoint diagnostic 10. The two hydrostatic\n`FixedIterations` solves are unified to 5 (was 5 and 7) for the identical\nmonotone residual.\n\nThe convention is documented in the `Solvers` module docstring. `test/solvers.jl`\nnow pins the default tolerances and verifies that `FixedIterations(5)` reaches\nmachine precision against a 30-iteration reference for the hydrostatic solve.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Port InstantaneousPrecipitation to the unified solver API\n\nInstantaneousPrecipitation (merged from main) still constructed its\nSaturationAdjustment with the removed `tolerance`/`maxiter` keyword\narguments, which now throw an ArgumentError. Forward a `solver` instead,\nand update the parity test to pass a SecantSolver with its tight tolerance.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Fable 5 <noreply@anthropic.com>\nCo-authored-by: kaiyuan-cheng <74800123+kaiyuan-cheng@users.noreply.github.com>\nCo-authored-by: Kai-Yuan Cheng <kaiyuanc332@gmail.com>\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>",
          "timestamp": "2026-06-19T07:07:43-06:00",
          "tree_id": "e09796ac48d2394f1b6263c5ebef7c6218d6d902",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/08784f5c19cb3c538d1f02071ce5b826bf1de731"
        },
        "date": 1781875882642,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 123937561.56445853,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 86612771.08875485,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 67176200.90064815,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136030764.5739555,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136030764.5739555,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 130714985.03073034,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 130714985.03073034,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 130714985.03073034,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 118297699.09665382,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 118297699.09665382,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93206761.04439814,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93206761.04439814,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 87989757.13276261,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 87989757.13276261,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 78647171.63383226,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 78647171.63383226,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 74768222.42765565,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53827453.92098503,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6834207.07513957,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25174359.31987617,
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
          "id": "a97df65b28589f441b9e9601f3af4c500ccf44b3",
          "message": "Filter all terms in bulk surface fluxes (#700)\n\n* Filter all terms in bulk surface fluxes (#698)\n\nWhen a `FilteredSurfaceVelocities` is attached to a bulk boundary condition,\nevery field that enters the bulk formula is now read from a filtered source:\nwind speed `|U|`, the velocity (or scalar) difference, and the virtual\npotential temperature `θᵥ` used inside the stability-dependent transfer\ncoefficient. Previously only `|U|` was filtered while `ρu`, `Δϕ`-readers,\nand `θᵥ` in `bulk_coefficient` were read instantaneously, producing the\ninconsistency reported in #698.\n\nThe momentum drag formula is restructured from `Jᵘ = -Cᴰ |U| ρu` to the\nscalar-flux-parallel form `Jᵘ = -ρ₀ Cᴰ |U| u`. Rationale: Monin–Obukhov\nsimilarity is a profile law for `u`, not `ρu`, so this form is faithful\nto the theory underlying `Cᴰ` (Shin, Yang & Howland 2025). `ρ₀` is the\nsurface density computed from `(p₀, T₀, constants)` as already done in\n`BulkSensibleHeatFluxFunction`/`BulkVaporFluxFunction`. When the user\nconstructs `BulkDrag` without an explicit `surface_temperature` (allowed\nfor constant `coefficient`), `materialize_bulk_drag` now fills T₀ from\nthe reference-state potential temperature so `ρ₀` is always well-defined.\n\nChanges\n-------\n\n* `FilteredSurfaceVelocities` gains a `θᵥ :: Field{Center, Center, Nothing}`\n  field, an independent `last_θᵥ_update` Ref for dedup, and new\n  `update_θᵥ!`/`initialize_θᵥ!` helpers (reusing the existing exponential-\n  filter kernel structure).\n* `bulk_coefficient` and `stability_corrected_coefficient` dispatch on\n  whether a filtered θᵥ is available and pull from `fv.θᵥ[i, j, 1]` instead\n  of the 3D `coef.virtual_potential_temperature` when filtering is enabled.\n* `BulkDragFunction` gains `surface_pressure` and `thermodynamic_constants`\n  fields (parallel to the scalar bulk functions), filled in during\n  materialization.\n* `surface_velocity_at_face` helpers (mirroring `wind_speed²ᶠᶜᶜ`) read the\n  face-located velocity from `FilteredSurfaceVelocities.u` (or `.v`) when\n  filtering is on, otherwise from `fields.u`/`fields.v`.\n* `update_boundary_condition!`/`initialize_boundary_condition!` for each\n  bulk BC drive the filtered θᵥ update with the\n  `PolynomialCoefficient.virtual_potential_temperature` KFO. Constant\n  coefficients route through a `Nothing` no-op.\n\nTests\n-----\n\n* `test/forcing_and_boundary_conditions.jl`: new \"BulkDrag uses ρ₀,\n  filtered u and θᵥ\" testset that constructs a 1×1×1 model, sets a known\n  wind, and checks that the surface momentum flux matches the analytic\n  `-ρ₀ Cᴰ Ũ u` to `increment_tolerance`.\n* `test/polynomial_bulk_coefficients.jl`: extends the\n  `FilteredSurfaceVelocities` construction tests to cover the new `θᵥ`\n  field and `last_θᵥ_update` Ref; adds an explicit\n  `update_θᵥ!`/`initialize_θᵥ!` unit test; updates the existing \"Drag\n  flux uses filtered velocity, not instantaneous\" testset to the new\n  `-ρ₀ Cᴰ Ũ u` formula and the reference-state T₀ default.\n\nVerified locally\n----------------\n\n* `polynomial_bulk_coefficients`: 192/192 pass\n* `forcing_and_boundary_conditions`: 28/28 pass in the \"Bulk boundary\n  conditions\" testset (plus the unrelated existing testsets all green)\n* End-to-end: the `prescribed_sea_surface_temperature` example (reduced\n  grid) runs five `time_step!`s with the new machinery; filtered ū\n  integrates from 0 toward the set value, filtered θ̄ᵥ updates, and τˣ\n  has the expected sign.\n\nRefs #698\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* clean up\n\n* Dispatch default surface temperature for BulkDrag on dynamics\n\nMoves `default_drag_surface_temperature` from `BoundaryConditions` to the\ndynamics interface (`AtmosphereModels.dynamics_interface`) and dispatches\non the dynamics type:\n\n* `AnelasticDynamics`: returns the reference-state surface temperature via\n  the Exner inversion T₀ = (p₀/pˢᵗ)^{Rᵈ/cᵖᵈ} θ₀, drawn from the dynamics'\n  `ReferenceState`. Behaviour is unchanged from the previous PR.\n* `CompressibleDynamics`: throws `ArgumentError` with an informative\n  message. Compressible dynamics carries no reference profile from which\n  a surface temperature can be derived (the prognostic surface state would\n  make ρ₀ grid-dependent and break MO consistency at the surface). Users\n  must pass `surface_temperature` explicitly.\n* Generic fallback throws an informative error pointing to the same fix.\n\nAlso folds in two small cleanups:\n* `surface_velocity_at_face` -> `near_surface_velocity` on the YDirection\n  getbc path, matching the rename already applied to the helper definition.\n* Adds Monin–Obukhov-consistency and default-surface-temperature paragraphs\n  to the `BulkDragFunction` docstring explaining why ρ₀ is read from surface\n  quantities rather than the prognostic density.\n\nTests:\n* `forcing_and_boundary_conditions.jl` \"Bulk boundary conditions\" testset\n  gains a regression test that `CompressibleDynamics` + `BulkDrag` without\n  `surface_temperature` throws `ArgumentError`.\n* `polynomial_bulk_coefficients.jl` \"Drag flux uses filtered velocity\"\n  testset's call to `default_drag_surface_temperature` updated to the new\n  module location.\n\nAll 290 local tests (192 polynomial + 7 forcing + 4 BC dependency + 29 bulk\n+ 10 energy flux + 3 lateral + 14 helper + 2 getbc + 1 ThetaFluxBC) pass,\nand the prescribed-SST smoke test runs cleanly with the new dispatch.\n\nRefs #698\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n* Update test/polynomial_bulk_coefficients.jl\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Update test/polynomial_bulk_coefficients.jl\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Update test/polynomial_bulk_coefficients.jl\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Update test/polynomial_bulk_coefficients.jl\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Update src/AnelasticEquations/AnelasticEquations.jl\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Update test/forcing_and_boundary_conditions.jl\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Cite Nishizawa & Kitamura (2018) and Shin et al. (2025) for filtered velocities\n\nCo-Authored-By: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.7 (1M context) <noreply@anthropic.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-06-19T08:43:48-06:00",
          "tree_id": "6d2f918256e600aa260f67bbec2ada651d396090",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/a97df65b28589f441b9e9601f3af4c500ccf44b3"
        },
        "date": 1781881823537,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 123637780.36095645,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85437080.73991325,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 67036562.131539725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 137505883.20134372,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 137505883.20134372,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 131336089.99412227,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 131336089.99412227,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 131336089.99412227,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 118655748.04883921,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 118655748.04883921,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93209796.77718708,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93209796.77718708,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 87129863.30440015,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 87129863.30440015,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 79610520.98715506,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 79610520.98715506,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 75692489.89097956,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 54001317.65719126,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6760903.499182276,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25211990.995338086,
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
          "id": "d79c4ce40b558388d08fce1b040f5426b626bb99",
          "message": "More 3D topologies for reactant tests (#633)\n\n* Add more topologies\n\n* Fix\n\n* Remove breaking test\n\n* Bump size\n\n* Update weno_compilation.jl\n\n* Try bumping centered size to see if also breaks\n\n* Create lat_lon_compilation.jl\n\n* Changes to substepping signature\n\n* revert other changes to isolate 3d topologies\n\n* Try vectorization fix\n\n* Update Project.toml\n\n* Update Reactant version to 0.2.267\n\n* Remove reference to Reactant branch\n\n* disable multi output\n\n---------\n\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-06-25T11:29:53-07:00",
          "tree_id": "b0c0fa1efc3fddfd68256007427a38e520d7a777",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/d79c4ce40b558388d08fce1b040f5426b626bb99"
        },
        "date": 1782413834272,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121549567.08008274,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84363011.6705879,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65776315.494162105,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 132885200.44056068,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 132885200.44056068,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127205392.98875971,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127205392.98875971,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127205392.98875971,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 112795033.27935226,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 112795033.27935226,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 88647908.16782881,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 88647908.16782881,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84126827.889306,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84126827.889306,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74696245.56956789,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74696245.56956789,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 74951898.56473921,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 54020348.12094969,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6640396.287858787,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25287941.81100925,
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
          "id": "e50bbfd843a0c4ac663e5f0eb2e06203b4664ea1",
          "message": "Convert CompressibleEquations to dry-density (ρᵈ) evolution (#806)\n\n* Convert CompressibleEquations to MPAS-style dry-density (ρᵈ) evolution\n\nPrognose dry-air density ρᵈ instead of total density, following the MPAS-A\ndry-coupled formulation. `dynamics_density` now returns ρᵈ — the coupling density\nthat weights the flux variables (momentum ρu = ρᵈu, thermodynamic ρθ = ρᵈθ),\ndivides velocity/θ, and is advanced by continuity. The total air density\nρ = ρᵈ + Σρˣ is a diagnosed field (`total_air_density`, stored on the dynamics)\nused wherever total mass enters the physics: moisture mass-fraction recovery,\nscalar/water advection carriers, the equation of state, buoyancy, and saturation.\n\nMoisture stays in mass fractions throughout — no mixing ratios. Anelastic is\nunaffected (`total_air_density === dynamics_density`).\n\nWhy: with total density prognostic, mass consistency requires a hydrometeor\nsedimentation flux in the ρ, ρqᵗ, and energy equations computed with an identical\ndiscrete operator (the WENO-inconsistency that stalled #458/#614). With ρᵈ\nprognostic, dry air has no source/no fall flux, so sedimentation lives only in the\ncondensate equations and total continuity holds by summation — never discretized.\n\n- Rename prognostic density field/key to ρᵈ/:ρᵈ; keep generic flux keys (ρu, ρθ, ρqˣ).\n- Add diagnosed `total_density` field + `total_air_density` accessor + per-update kernel.\n- Two-density EOS: θ = ρθ/ρᵈ (coupling), inversion + p = ρRᵐT on total ρ.\n- Buoyancy on total ρ (explicit + acoustic-substepper slow tendency; frozen-water loading).\n- Route moisture recovery, tracer/water advection carriers, formulation tendencies,\n  microphysics state, and γᵐRᵐ through total ρ; velocity/continuity/θ-coupling on ρᵈ.\n- set!: `ρ=` means TOTAL density (back out ρᵈ = ρ·qᵈ so moist columns start in balance);\n  `ρᵈ=` sets dry density directly.\n- Fix potential-temperature and number-concentration diagnostics to use total ρ.\n\nValidated (CPU): dry bit-for-bit (acoustic_substepping, dynamics); moist correct\n(compressible_saturation_adjustment, instantaneous_precipitation, cloud_microphysics_1M/2M);\ndiagnostics, number_concentration, quality_assurance (ExplicitImports + Aqua).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Update Project.toml\n\n* Apply suggestion from @glwagner\n\n* Rename to total_density/condensate terms; add ρᵗ, ρᵡ notation; address review\n\nTerminology (per review):\n- total_air_density → total_density (accessor + pointwise kernel function +\n  imports + docs). The only \"total\" mass is ρ = ρᵈ + Σρˣ, so the names denote\n  the same quantity; \"air\" was redundant.\n- water_mass_field_names → condensate_field_names and total_water_density →\n  total_condensate_density, generalized in docs to \"all phases of the\n  condensable species (water by default)\" so non-water condensates can extend\n  condensate_field_names.\n\nNotation (docs/src/appendix/notation.md):\n- Add ρᵗ = ρqᵛᵉ + Σρqᶜ (total condensate density) and register the `t`\n  superscript for \"total\" (consistent with the existing qᵗ).\n- Add ρᵡ for the generic thermodynamic density (ρᵡ = ρᵈχ; ρθ or ρe); rename the\n  substepper locals χ_field/χ_name/Gˢρθ → ρᵡ/ρᵡ_name/Gˢρᵡ. `\\^chi`+TAB → ᵡ\n  (U+1D61) is a valid Julia identifier char.\n- Fix stale doc: compute_slow_scalar_tendencies! writes Gⁿ.ρᵈ (not Gⁿ.ρ).\n\nReview comments addressed:\n- Drop the ρ_total naming (conflicts with plain ρ, which already means total\n  density): use ρ in compute_total_density!; use ρ_field/ρᵈ_field handles in\n  the instantaneous-precipitation kernel.\n- In the energy/temperature set! kernels, the variable holding total_density\n  was named ρᵣ (reference density); rename to ρ.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Fix set! density init: two-phase establish_densities! for ρ and ρᵈ\n\nThe compressible θˡⁱ/energy-from-T (and from-energy) set! kernels read the\ndiagnosed total_density, which `compute_total_density!` only fills inside\n`update_state!` — i.e. *after* the set! kwarg loop. So `set!(model; ρ=…, T=…)`\n(e.g. the tropical-cyclone rainband example) read total_density = 0 in the\nT→θ kernel, giving ρθ = ρ·θ = 0 and NaN once stepped.\n\nRestructure set! into two phases:\n  1. density + moisture + microphysics + tracers\n  2. (barrier) establish_densities! — make ρᵈ and the diagnosed total ρ\n     mutually consistent and available\n  3. thermodynamic variable + ℋ + velocities/momentum (read the established\n     densities; ρθ = ρᵈθ, ρu = ρᵈu)\n\nestablish_densities! (replaces reconcile_initial_density!) handles the two\ndensity-input modes, which differ because ρqˣ = ρ·qˣ depends on the total ρ:\n  - `:ρ`  (total): total_density ← ρ; dry_density ← ρ − Σρqˣ\n  - `:ρᵈ` (dry):   total_density ← ρᵈ/qᵈ (qᵈ = 1 − qᵗ, combining ρᵈ and the\n                   moisture); re-weight the moisture partial densities by ρ\n  - neither: diagnose ρ = ρᵈ + Σρqˣ\n\nThe four set!-time thermodynamic kernels now weight ρθ/ρe by the dry density\nρᵈ (dynamics_density) and read total ρ only for mass fractions, so no post-hoc\nrescale is needed and both modes are correct. Dominant `:θ` path is unchanged\nbit-for-bit. Adds `:ρᵈ` to prioritize_names and a moist-compressible set!\ndensity-mode regression test.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Fix GPU failure in set! density-mode test: reduce interiors on CPU\n\n`all(≈(ρ₀; rtol), interior(field))` compiled the keyword-carrying closure\n`≈(ρ₀; rtol)` into a GPU mapreduce kernel, which failed with \"passing\nnon-bitstype argument\" (a Symbol in the kwargs Pairs). Pull each interior to\nthe host with `Array(interior(...))` before reducing, matching the rest of the\nfile. CPU behavior unchanged.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* [TEMP, revert before merge] Isolate rainband example in docs build\n\nComment out all docs examples except tropical_cyclone_with_rainband and force\nits build_always=true, so the PR docs build runs only the rainband and\nvalidates the dry-density set!(ρ=…, T=…) fix end-to-end through Literate.\nRevert this commit before merging.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Revert \"[TEMP, revert before merge] Isolate rainband example in docs build\"\n\nThis reverts commit f9c34278b8b52ddd5b59bed2f31007b96392bc7a.\n\n---------\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\nCo-authored-by: Eliot Quon <eliot@aeolus.earth>",
          "timestamp": "2026-06-26T20:39:06-06:00",
          "tree_id": "2058f0d5898465828c37d00d98fb6ac1f50928a2",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/e50bbfd843a0c4ac663e5f0eb2e06203b4664ea1"
        },
        "date": 1782529299419,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121971802.47483346,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85532845.63715778,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 67439360.53275344,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 137646205.97039568,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 137646205.97039568,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128759939.19081673,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128759939.19081673,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128759939.19081673,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 113320370.93434355,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 113320370.93434355,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91695127.05806468,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91695127.05806468,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84143149.28341188,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84143149.28341188,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74198383.16538282,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74198383.16538282,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72984777.1480219,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53639014.924250945,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6653613.795771133,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25182325.593734372,
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
          "id": "414b475740c288e8e6a42071a89693bf16bcef31",
          "message": "Acoustic substep: kernel-launch reduction, per-stage substeps, cleanup (#795)\n\n* Acoustic substep: kernel-launch reduction, per-stage substeps, cleanup\n\nOptimize and clean up the split-explicit acoustic substep loop. No change to the\nalgorithm; the only deliberate numerical change is the per-stage substep\ndistribution (a strict improvement, below). Net −188 lines.\n\nKernel-launch reduction in the hot substep loop:\n- Split `_build_predictors_and_vertical_rhs!` (one :xy column kernel) into two\n  :xyz kernels — `_build_predictors!` then `_build_vertical_rhs!` — for full\n  occupancy; the launch boundary is the global sync (RHS reads predictors at k±1).\n- Fuse the time-averaged-velocity accumulation into `_post_solve_recovery!` (the\n  momentum components are already loaded there).\n- Fold the per-substep old-(ρθ)′ save into `_build_predictors!` (it reads (ρθ)′\n  anyway), replacing a full-field broadcast with one halo fill.\n- Collapse the 6 stage-start workspace zeros, the velocity seed, and the\n  time-averaged accumulation each into a single launch.\n\nPer-stage substep distribution:\n- `ProportionalSubsteps` (default) now fits ⌈β·N⌉ substeps of size β·Δt/⌈β·N⌉ to\n  each WS-RK3 stage's interval — exact coverage at the minimum count, no global\n  multiple-of-6 quantization.\n- The previous uniform-Δτ scheme is renamed `ConstantSubstepSize` (kept available).\n\nGenerality / API:\n- Allow flux-form momentum advection on `OrthogonalSphericalShellGrid` (e.g.\n  `LambertConformalConicGrid`): the compressible core supplies the curvilinear\n  curvature term `U_dot_∇u_metric`, so the hydrostatic-ocean guard (OSSG ⇒\n  VectorInvariant only) does not apply here.\n- Add an `ST` storage-type kwarg to `AcousticSubstepper` (default `eltype(grid)`)\n  for the acoustic perturbation/predictor/linearization fields, enabling\n  reduced-precision storage (e.g. BFloat16, where supported) of the\n  bandwidth-bound substep working set.\n\nCleanup (no behavior change):\n- Compact verbose comments/docstrings (equations preserved).\n- Math-notation helper names (θF{ˣ,ʸ,ᶻ}, Fʷ, ∇{ˣ,ʸ,ᶻ}p′, δp/δρ, δpᴸ).\n- Pass the `thermodynamic_constants` struct into the mixture-EOS kernel instead\n  of six pre-converted scalars; drop redundant `convert(FT, …)` on already-FT\n  values.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Review refinements: branchless RHS, own validate_momentum_advection, ST kwarg, cleanups\n\n- `_build_vertical_rhs!`: drop the `if k==1 / else / if k==Nz` branches; compute the RHS\n  unconditionally and pin the boundary faces with a branchless `ifelse((k != 1) & (k != Nz+1), …)`,\n  launched over the face range `1:Nz+1` (no warp divergence; boundary halo reads are discarded).\n- `validate_momentum_advection`: define an AtmosphereModel-specific method (flux-form is valid on\n  every grid, incl. OrthogonalSphericalShellGrid) instead of importing + side-stepping the\n  hydrostatic ocean model's version.\n- `ST` perturbation storage type is now a kwarg on `AcousticSubstepper` (default `eltype(grid)`),\n  replacing the `SUBSTEP_BF16` env var; drop the `BFloat16s` dependency.\n- Merge identical `δp`/`δρ` into one `δϕ`; rename `coefficient_over_Δτ → α_over_Δτ`,\n  `{x,y}_damping_diffusivity → κˣ/κʸ`, `acoustic_stage_vertical_transport_momentum → transport_ρw`.\n- Default `acoustic_cfl` 0.5 → 0.7.\n- docs: temporarily build only the stratified thermal bubble + baroclinic wave examples (PR\n  validation that the baroclinic wave completes); restore before merge.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Rename ST kwarg -> substep_floattype\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Tridiag coefficients: use Oceananigans reciprocal-metric operators\n\nReplace the manual 1/Δzᶜᶜᶜ reciprocals and the / Δzᶠ divisions in the AcousticTridiag\n{Lower,Diagonal,Upper} coefficients with Oceananigans' Δz⁻¹ᶜᶜᶜ / Δz⁻¹ᶜᶜᶠ operators and\nmultiplication. (Reciprocal-multiply vs divide is not bit-identical — ~1 ulp — but matches the\nOceananigans metric convention and avoids the manual inverses.)\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Add DivergenceDamping: direct 3-D divergence acoustic damping\n\nNew AcousticDampingStrategy that forms ∇·(ρ𝐮)′ directly from the perturbation momentum and corrects\nthe horizontal momentum by Δ(ρu)′ = α Δx² ∂x[∇·(ρ𝐮)′] (KSH18 eq. 7 / §3 'old method'), as an\nalternative to ThermalDivergenceDamping's (ρθ)′-tendency proxy (their eq. 36). Two launches: materialize\nthe 3-D divergence into the (post-recovery, free) density predictor scratch, halo-fill, then take ∂x/∂y.\nAdds a test exercising construction + a stable, divergent-IC step.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Remove redundant explicit timestepper=:AcousticRungeKutta3\n\nThe AtmosphereModel constructor auto-selects the time stepper via default_timestepper\n(:AcousticRungeKutta3 for SplitExplicitTimeDiscretization, :SSPRungeKutta3 otherwise), so the\nexplicit kwarg was redundant at every model-construction site. Removed across the test suite + the\ntwo_dimension_mountain_wave example.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* DirectDivergenceDamping (Θ-flux form); default to NoDivergenceDamping\n\n- Rename DivergenceDamping -> DirectDivergenceDamping (contrast with ThermalDivergenceDamping).\n- Correct the damped divergence to the Θ-flux divergence D = ∇·(θᴸ(ρu)′) — the divergence carried by\n  the (ρθ)′ continuity equation (KSH18 D = ∇·ρθv) — computed directly via the build_predictors flux\n  form (θFˣ/θFʸ/θFᶻ) with the /θᴸ correction matching eq 36; NOT the mass divergence ∇·(ρu)′.\n- Re-export DirectDivergenceDamping from Breeze + add its convert_acoustic_parameter method.\n- Default SplitExplicitTimeDiscretization damping -> NoDivergenceDamping, to test whether the baroclinic\n  wave is stable without the horizontal divergence filter (vertical damping still from CN off-centering);\n  baroclinic_wave example + default-construction test updated accordingly.\n- Also bundles the off-centered-CN derivation comment reformat (same file, could not split non-interactively).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Default to DirectDivergenceDamping (NoDivergenceDamping blows up the baroclinic wave)\n\nThe NoDivergenceDamping experiment confirmed CN off-centering alone is insufficient — the baroclinic\nwave goes unstable without horizontal divergence damping. Switch the default to DirectDivergenceDamping\nso the docs baroclinic_wave example renders with the new Θ-flux divergence filter.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* DirectDivergenceDamping: horizontal θ-flux divergence only (drop the destabilizing vertical term)\n\nThe 3-D form blew up the baroclinic wave: folding the vertical θ-flux divergence ∂z(θᴸ(ρw)′) into the\ndamped divergence damps the *resolved* vertical flux. The correct quantity for the horizontal momentum\nfilter is the horizontal divergence δ = ∂x(θᴸ(ρu)′) + ∂y(θᴸ(ρv)′), per KSH18 eq. 36 and PR #794 (which\nfixes the same blow-up the same way). Δ(ρu)′ = α Δx² ∂x δ / θᴸ, Δτ-free. Reverts the dynamics-threading\nthat was only needed for the vertical term.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Default back to ThermalDivergenceDamping (isolate baro-wave blow-up)\n\nDirect (both 3-D and horizontal-only) blows up the docs baroclinic wave, but the last *passing* docs\nbuild (2156d27) predates the recip-metric + per-stage-substep changes — so Thermal at HEAD is untested.\nRestore the proven Thermal default to determine whether the blow-up is the damping form or the other\nchanges since 2156d27.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Increase default forward_weight 0.65 → 0.8 (stronger vertical off-centering damping)\n\nThe α sweep showed the baroclinic-wave grid-scale noise is unaffected by the horizontal divergence\ndamping (ζ roughness flat from α=0.10→0.125, and α≥0.2 blows up) — so the noise is the vertical top-lid\nw-mode (#794's residual), which is damped by the CN off-centering (KSH18 eq 32: γ_v = c²Δτσ/2, σ=2ω−1),\nnot by α. Bump ω 0.65→0.8 (σ 0.3→0.6, double the vertical damping) to see if it suppresses the noise in\nthe docs baroclinic wave.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Add Cartesian-channel baroclinic wave validation case (Ullrich et al. 2015)\n\nA β-plane (FPlane) channel baroclinic wave on a RectilinearGrid — the\nrectilinear counterpart to the lat-lon DCMIP baro wave, with no spherical\nmetric/curvature terms. Serves as a control for isolating curvilinear-grid\nbehavior in the compressible split-explicit core.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_019XeMCMu2irUx2jAVLDtN2C\n\n* Isotropic horizontal divergence damping + V⁻¹ᶜᶜᶜ operator\n\nMake LocalHorizontalDampingScale isotropic and mesh-varying:\nκˣ = κʸ = α/Δτ · min(Δx,Δy)² (was anisotropic αΔx² / αΔy²), following MPAS.\nmin(Δx,Δy) keeps the explicit-diffusion number ≤ α in both directions\neverywhere, including the converging meridians at high latitude (√(ΔxΔy)\nwould exceed the α ≤ 0.25 bound there, and cbrt(V) is too small for a\nhorizontal filter due to the thin Δz).\n\nImport and use V⁻¹ᶜᶜᶜ for the cell-volume reciprocal in the predictor and\ndirect-damping kernels (was 1/Vᶜᶜᶜ); minor reformatting of those kernels.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_019XeMCMu2irUx2jAVLDtN2C\n\n* Fix seed-velocity OOB and remove stale Vᶜᶜᶜ import after dry-density merge\n\n- _seed_time_averaged_velocity! launched one fused kernel over max(size)\n  across the three staggered velocity parents; the smaller (center-in-z u/v)\n  components were over-indexed at k=Nz+1, throwing BoundsError under\n  --check-bounds=yes (substepper_rest_state T3). Replace with a per-component\n  copyto! over each array's own bounds (GPU-safe, no kernel needed).\n- Drop now-unused explicit import Vᶜᶜᶜ (replaced by V⁻¹ᶜᶜᶜ); fixes the\n  ExplicitImports stale-import failure in quality_assurance.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Update acoustic_cfl test/docstrings to match PR's 0.7 default\n\nThe PR deliberately raised the default acoustic_cfl 0.5→0.7 (commit 2156d273)\nand forward_weight 0.65→0.8 (commit b2e7d35c) but left the plumbing test and\nfield-list docstrings at the old values. CI's --quickfail masked the test\nfailure behind the earlier rest-state BoundsError. Sync them:\n- test acoustic_cfl default expectation 0.5 → 0.7\n- AcousticSubstepper docstring defaults (acoustic_cfl 0.7, forward_weight 0.8)\n- compute_acoustic_substeps docstring (0.7 default; 0.5 is the ERF/WRF target)\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Fix terrain UndefVarErrors after merge: import Δzᶜᶜᶜ, rename test symbols\n\nTwo latent PR failures (masked by CI --quickfail stopping at the earlier\nrest-state error):\n- terrain_compressible_physics.jl uses Δzᶜᶜᶜ but the PR cleanup removed its\n  only import (from acoustic_substepping.jl, shared via module namespace).\n  Import it explicitly in the file that uses it.\n- test/terrain_following.jl referenced source helpers the PR renamed:\n  linearized_pressure_perturbation → δpᴸ, z_linearized_pressure_gradient → ∇ᶻp′\n  (both 1:1, same signatures).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Fix misleading damping comment in baroclinic_wave example\n\nThe PR added an inline comment claiming 'default damping is now\nNoDivergenceDamping', but the default was never changed — it is\nThermalDivergenceDamping(coefficient=0.1) (time_discretizations.jl). An\nundamped baroclinic wave would be unsafe; the comment was simply wrong.\nCorrect it to state the real default.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-29T11:51:16-06:00",
          "tree_id": "97a88ddfbabc3b9127bd6b580b4d89f8dcacb9fc",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/414b475740c288e8e6a42071a89693bf16bcef31"
        },
        "date": 1782757031095,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121147093.15928125,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84318874.28279968,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65154008.99887122,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136181821.24780735,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136181821.24780735,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 130650550.85032159,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 130650550.85032159,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 130650550.85032159,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 118616465.59485,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 118616465.59485,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93230662.88089941,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93230662.88089941,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 88032145.4147093,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 88032145.4147093,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 79884079.752252,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 79884079.752252,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 73888016.4812381,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53818869.76383406,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6725476.61668996,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26558993.54062871,
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
          "id": "0649c8e36543d3603661f911c050f66e889edd38",
          "message": "Move adiabatic-balance machinery into AtmosphereModels (one file); fix notation (#815)\n\nConsolidate the two top-level files (`src/balance_adiabatically.jl`,\n`src/adiabatic_balance.jl`) into a single `src/AtmosphereModels/adiabatic_balance.jl`\nthat lives inside the AtmosphereModels module, where it conceptually belongs.\n\nThis is possible by using the standard Breeze interface-extension pattern for the one\npiece that genuinely depends on a later-loaded submodule:\n\n  * `adiabatic_twin_dynamics(dynamics, time_stepping)` is generic in AtmosphereModels with\n    a fallback that reuses the dynamics unchanged — so the balance is solver-agnostic\n    (AnelasticDynamics and any future solver work via the fallback). CompressibleDynamics\n    extends it in CompressibleEquations to swap the time discretization (sponge stripped).\n  * `initial_fields` is now generic (every prognostic except `ρw`) rather than dispatching\n    on CompressibleModel/AnelasticModel — same result, no model-type methods.\n  * a small `DefaultTimeStepping` sentinel lets `AdiabaticBalancer`'s default avoid naming\n    `ExplicitTimeStepping` (whose type lives in CompressibleEquations). The public\n    `time_stepping` API is unchanged (default → explicit, `nothing` → native, TD → that).\n  * `set!` calls `balance_adiabatically!(model, balancer)` directly now that they share a\n    module — the `balance_initial_state!` stub is removed.\n\nAlso fixes notation flagged in review: dry-air specific heat `cᵖ` → `cᵖᵈ` (with `cᵛᵈ`,\n`γᵈ`), and `maximum(interior(model.temperature))` → `maximum(model.temperature)`.\n\nThe explicit unsupported-dynamics error is gone (the agnostic fallback replaces it).\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-06-30T11:40:16-06:00",
          "tree_id": "488f0361f09820b562163f9a86f090c77f2a9550",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/0649c8e36543d3603661f911c050f66e889edd38"
        },
        "date": 1782842666292,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122191817.40252495,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85456743.94492705,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 67082968.313089155,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133408743.89448567,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133408743.89448567,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129227857.74964596,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129227857.74964596,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129227857.74964596,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 116721294.87241489,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 116721294.87241489,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 90775437.07475665,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 90775437.07475665,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86899150.82983941,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86899150.82983941,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 78867260.15924804,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 78867260.15924804,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 73557384.44413239,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53712812.11291137,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6637120.865256299,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26487363.49030257,
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
          "id": "ddd26a2ff8b746851e0ceaf2278c8a61b654f3c6",
          "message": "Add benchmarks for WENO scalar, model tendency (#805)\n\n* Add tendency benchmark\n\n* Dump MLIR for the scalar-tendency benchmark in CI\n\nEnable Reactant's DUMP_MLIR_ALWAYS pointed at a saved directory for the\n--mode tendency entry (GB-25 pattern), and upload it as an artifact so the\ngenerated MLIR can be inspected later. Gated on GITHUB_ACTIONS, so only the\ntendency matrix entry dumps; other entries produce no files.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Sweep optimize=true/false in the scalar-tendency benchmark\n\nFor each WENO order, compile + profile the kernel both with and without XLA's\noptimization passes (passed as the `optimize` compile option to\n`Reactant.@compile`), giving 8 cases total. Both compiles dump MLIR via\nDUMP_MLIR_ALWAYS, so optimized vs unoptimized IR can be compared. The\noptimized/unoptimized runs are distinct chart series via an `_opt_`/`_noopt_`\ntag in the benchmark name.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Use optimize=:before_raise instead of false in tendency sweep\n\nCompare fully optimized vs before-raise MLIR for each WENO order.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Compare vanilla vs reactant in the scalar-tendency benchmark\n\nReplace the optimize sweep with a backend sweep: for each WENO order, time the\nkernel both as a Reactant-compiled optimized XLA program (profiled via\nReactant.Profiler) and as an eager vanilla launch (timed with device sync, no\nReactant compile). 4 orders x 2 backends = 8 cases, split into per-backend\nchart series. Reactant still dumps MLIR; vanilla does not compile.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Partition tendency MLIR dumps by WENO order\n\nSet DUMP_MLIR_DIR to mlir_dumps/<WENOn> per order so each case's MLIR is in its\nown subdirectory rather than interleaved by counter. Reactant only.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Add full-model compute_tendencies! benchmark\n\nAdd a model_tendency case that builds a compressible AtmosphereModel and times\ncompute_tendencies! (the full per-stage tendency), mirroring the bare scalar\nkernel benchmark. Generalize the runner (benchmark_scalar_tendency ->\nbenchmark_tendency) to take the grid and a mode tag explicitly so both cases\nshare it. New --mode model_tendency and a CI matrix entry (vanilla vs reactant,\nWENO order sweep, MLIR dumps); the publish clause now covers both tendency\nmodes, charted separately via base_name.\n\nAlso add the standalone benchmark_model_tendency.jl prototype.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Dump Reactant profiles for the tendency benchmarks in CI\n\nThread a profile_dir through benchmark_tendency to Reactant.Profiler.@timed so\nthe xprof trace files are written to benchmarking/profiles/<case>_<advection>\n(Reactant + CI only), and upload them as an artifact. Covers both the tendency\nand model_tendency matrix entries; indexed per advection like the MLIR dumps.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Share benchmark result logging; report total time\n\nFactor the verbose result summary into log_benchmark_result(::BenchmarkResult),\nused by both benchmark_time_stepping and benchmark_tendency, so they report\nidentically — including total time, which the tendency benchmark was missing.\nRename the tendency runner's per-call locals to the per-step names used by the\ntime-stepping runner to remove the gratuitous difference.\n\nAddresses review feedback (report total time; reduce duplication / align\n\"time per step\").\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Use 300 trials for the tendency timing\n\nA single tendency evaluation is much cheaper than a time step, so hardcode\nnrepeat=300 for both tendency modes to get a stable timing, independent of the\n--time_steps used for the stepping benchmarks.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Bump tendency timing trials to 320 via --time_steps\n\nOverride --time_steps to 320 (4x) on the tendency / model_tendency matrix\nentries so a single tendency evaluation is timed over enough trials, without\naffecting the stepping benchmarks. Runner takes nrepeat from --time_steps again.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Also run the scalar tendency in BFloat16\n\nAdd BFloat16s as a benchmarking dep so --float_type can request BFloat16, fix\nthe name tag for it (BF16), and run the scalar-tendency entry in both Float32\nand BFloat16. model_tendency stays Float32.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Support TPU device in make_backend_arch\n\nMap --device TPU to Reactant's tpu backend, and error clearly on the\nimpossible vanilla+TPU combo (eager KA/CUDA has no TPU path). Enables running\nthe tendency benchmarks on TPU via --backend reactant.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Delete benchmark_model_tendency.jl\n\n* Re-pivot tendency charts: panel per WENO order, line per config\n\nMap the WENO order to level_2 (side-by-side panels) and float-type × backend\nto level_4 (lines), matching the multi-panel/multi-line layout the dashboard\nalready uses for the CBL charts. Scalar gets 4 lines per order panel (Float32 /\nBFloat16 × vanilla / reactant); model gets 2 (Float32 only).\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Sweep reactant raise=true/false in the tendency benchmarks\n\nFor the reactant backend, compile + profile both raise=true (kernels raised to\nStableHLO) and raise=false (kernels kept as XLA custom calls), as separate\nlines, with raise_first tied to raise. Skipped on TPU, where raise=false has no\nCUDA custom-call path. Vanilla is unaffected. MLIR/profile dumps are\npartitioned per raise variant.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Bump tendency benchmark grid to 512x512x128\n\nUse a larger grid for both the scalar and model tendency sweeps.\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Revert tendency benchmark grid back to 256x256x128\n\nCo-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>\n\n* Fix naming, cut WENO3\n\n* Update Benchmarks.yml\n\n* Update Benchmarks.yml\n\n* Revert temporary plotting changes\n\n---------\n\nCo-authored-by: Claude Opus 4.8 <noreply@anthropic.com>",
          "timestamp": "2026-07-01T00:01:27+02:00",
          "tree_id": "660728afd12aeb31edb12ec186466db1d93305c6",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/ddd26a2ff8b746851e0ceaf2278c8a61b654f3c6"
        },
        "date": 1782858507178,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121307816.69077574,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84922586.5949114,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66276376.80240945,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136180230.83555588,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136180230.83555588,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128951489.14882757,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128951489.14882757,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128951489.14882757,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115383811.43641981,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115383811.43641981,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92621018.17153312,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92621018.17153312,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85973339.73182245,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85973339.73182245,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76486952.4786732,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76486952.4786732,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72651635.87105888,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53611877.18462591,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6705136.418310641,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26465070.45405571,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1059430765.8150452,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 944120406.4690746,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1347837334.1876945,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 757243324.5464727,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 177197429.48848766,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 903273212.805134,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 545076850.1496754,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24702706.962782282,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 617185895.160754,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6596464813.965755,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7868256587.123746,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8569414067.408247,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5275550080.32949,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10115153422.539915,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8605209734.220053,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4601938475.450378,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4510862820.128132,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5562162004.461077,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3563865124.5768523,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5497687507.823544,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5317352850.00992,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3142015284.2786217,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162742483.12944692,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3546011533.424697,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2202526980.384553,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2919713354.21443,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3468601466.8127112,
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
          "id": "e5250f9ad505371ba22686b0610ede5e88e696bb",
          "message": "Revert \"Acoustic substep: kernel-launch reduction, per-stage substeps, cleanu…\" (#816)\n\nThis reverts commit 414b475740c288e8e6a42071a89693bf16bcef31.",
          "timestamp": "2026-06-30T21:58:50-07:00",
          "tree_id": "3a976f31b6bd6316804b4a974715056e0266b01c",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/e5250f9ad505371ba22686b0610ede5e88e696bb"
        },
        "date": 1782883397080,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121958933.5311357,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84893531.88012822,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66156687.28206098,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 137004175.5358264,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 137004175.5358264,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129963147.50260109,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129963147.50260109,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129963147.50260109,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115716088.05721627,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115716088.05721627,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91330632.72737217,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91330632.72737217,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85843141.4114032,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85843141.4114032,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 77698383.77165492,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 77698383.77165492,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 73378940.96758398,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53672324.28618749,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6627197.346046922,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25270734.684363697,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1020168585.6136849,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 905503014.8323121,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1239172686.1700594,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 724405996.9363167,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176335342.81074813,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 840776003.6587342,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 520647413.7367142,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24695565.89750206,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 577408658.2719496,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6602758959.011334,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7639174431.565681,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8520990102.228217,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5344003524.506032,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10298368315.538383,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8481514509.941904,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4644674869.71245,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4498644015.622913,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5246296650.693765,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3561507562.315467,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5480343274.065247,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5191503582.670002,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3152421331.798988,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162756682.61972702,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3422364107.7632017,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2216865867.378351,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2935215448.7233543,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3460161528.498478,
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
          "id": "a7e0290ec00a67d6d3864ac1dbe8a363659c3515",
          "message": "Label Reactant benchmark w/ default backend (#817)\n\n* Label by device\n\n* Update metadata.jl",
          "timestamp": "2026-07-01T08:58:10+02:00",
          "tree_id": "16b7ccd82a665ad4b93bad3a95de98c538c57baa",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/a7e0290ec00a67d6d3864ac1dbe8a363659c3515"
        },
        "date": 1782890555415,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122912242.54197925,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85647202.23257175,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 67375663.83426157,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 137694191.8582298,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 137694191.8582298,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 131203427.90535355,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 131203427.90535355,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 131203427.90535355,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 118458363.60614882,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 118458363.60614882,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93223811.26615475,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93223811.26615475,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 87702351.41501456,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 87702351.41501456,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 79600534.03170727,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 79600534.03170727,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72335934.85100757,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53671484.39966776,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6631629.074010625,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25263537.8022539,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1055860907.7964393,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 938959203.1200558,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1317007889.5426352,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 748769360.1006579,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 177155577.17160618,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 888228824.5363793,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 539155764.3057775,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24703654.712371074,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 605331481.197514,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6680650211.385532,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 8162959315.637824,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8423049850.840086,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5430119514.495241,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10468500060.52521,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8667941068.885918,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4660850560.348716,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4639198496.628142,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5269841828.253803,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3669013293.064005,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5636850016.765524,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5440291165.4855795,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3257786334.8936114,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162866794.5587018,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3497135958.1908264,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2284836432.9713244,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 3068639554.9990363,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3625430456.249049,
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
          "id": "677c3e565590cd3f56ee9b52c7be74775379bcae",
          "message": "Bump actions/checkout from 6.0.2 to 6.0.3 (#819)\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 6.0.2 to 6.0.3.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/de0fac2e4500dabe0009e67214ff5f5447ce83dd...df4cb1c069e1874edd31b4311f1884172cec0e10)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: 6.0.3\n  dependency-type: direct:production\n  update-type: version-update:semver-patch\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-07-01T15:08:01+02:00",
          "tree_id": "17e78f726e82464ff6b02db6c5fc4ee10980152e",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/677c3e565590cd3f56ee9b52c7be74775379bcae"
        },
        "date": 1782912942125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122566240.16897407,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85458552.5899313,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66444187.30324301,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 135256755.43404374,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 135256755.43404374,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 126724239.8186404,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 126724239.8186404,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 126724239.8186404,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 112149449.72704321,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 112149449.72704321,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89736413.7389877,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89736413.7389877,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83607175.13798411,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83607175.13798411,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75392613.6544599,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75392613.6544599,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 74793742.64364034,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53862055.840399064,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6690508.886929573,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25143435.391670994,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1028681632.7496389,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 921581392.8756858,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1302318822.669883,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 733967753.8014368,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176638806.30806673,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 868995567.5943671,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 526059201.46591187,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24698779.465837218,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 590926983.6815097,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6702983331.290534,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7634947101.697261,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8436052358.464002,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5289638691.028648,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10311559098.480053,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8811026218.99086,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4594371764.060379,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4469714391.671631,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5129959962.549358,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3573419483.6468935,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5534839314.568939,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5289016754.2746315,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3179633004.275112,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162790750.02594605,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3467649399.261297,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2223202948.897563,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2965138465.606109,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3486508009.0772314,
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
          "id": "e78f1674afeb6e4055a9d9c2ead9eb4aa4ba441d",
          "message": "Initialize models through `set!`: `compute_reference_state` + `HydrostaticallyBalancedDensity` (#812)\n\n* Recompute reference state from model mean via set!(model; compute_reference_state=true)\n\nExtend the reference-state recompute to the split-explicit `ExnerReferenceState`,\nand expose it through `set!`.\n\n- `set_to_mean!(ref::ExnerReferenceState, model)`: re-runs the constructor's exact\n  1-D Exner column integration (`_compute_exner_reference!`) with the horizontal-mean\n  liquid-ice potential temperature and vapor mass fraction of the current model state,\n  reusing the existing reference fields (preserving their bottom `ValueBoundaryCondition`s).\n- `reset_reference_state!` now dispatches over both the anelastic `ReferenceState` and\n  the `ExnerReferenceState`.\n- `set!(model; compute_reference_state=true)` (default `false`) recomputes the reference\n  from the just-set state, before the mass-conservation correction. This lets a limited-area\n  run derive its perturbation base state from the initial analysis mean after the IC is set,\n  rather than requiring the mean profile up front at dynamics-construction time.\n\nValidated against a fresh `ExnerReferenceState` built directly at the target θ: the\nrecomputed pressure and density match to machine precision.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Elevate coverage + drop the no-op rescale_densities branch from the Exner set_to_mean!\n\n- Add tests for the public `set!(model; compute_reference_state=true)` path (covers\n  `reset_reference_state!` → `set_to_mean!`) and the no-op-without-a-reference-state branch.\n- Remove `rescale_densities` from `set_to_mean!(::ExnerReferenceState, model)`: for compressible\n  dynamics `dynamics_density` is the prognostic dry density `ρᵈ`, not the reference, so a reference\n  recompute never needs to rescale the density-weighted prognostics — the branch was a rescale-by-1\n  no-op (it is meaningful only for the anelastic `ReferenceState`, where `dynamics_density` *is* the\n  reference). Removing it also clears the uncovered lines.\n- Drop `FT()` wrapping and `Array(interior(...))` from the tests — Julia promotes, and `≈` works on\n  Fields directly.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Add `set!(model; ρ = HydrostaticallyBalancedDensity())` for moist hydrostatic-balance ICs\n\nCompletes the \"set! does initialization\" story: after θˡⁱ/qᵛ are set, derive the density (and seed\nthe pressure) in discrete moist hydrostatic balance, so a compressible cold start carries no spurious\nvertical pressure-gradient force (addresses @kaiyuan-cheng's review point).\n\n- `HydrostaticallyBalancedDensity(; surface_pressure)` is a marker passed as the `ρ` value to `set!`.\n  It is a *deferred* density (it depends on the thermodynamic state): `set!` writes a unit placeholder\n  in phase 1, sets θ/momentum, then — after the optional `compute_reference_state`, before the\n  mass-conservation correction — runs `set_hydrostatically_balanced_density!`.\n- That reuses the reference-state constructor's per-column Exner integration\n  (`_compute_exner_reference_3d!`, a Newton solve of the discrete balance\n  `(pᵏ−pᵏ⁻¹)/Δz + g(ρᵏ+ρᵏ⁻¹)/2 = 0`) on the model's actual θˡⁱ/qᵛ and the surface pressure, seeds the\n  pressure, then scales the prognostic dry density and `rescale_density_weighted_fields!`s the\n  density-weighted prognostics so the total density matches the balanced column while θ, qˣ and the\n  velocities are preserved.\n\nComposes with the rest of the PR / #811:\n  set!(model; θˡⁱ, qᵗ, u, v, ρ = HydrostaticallyBalancedDensity(),\n       compute_reference_state = true, balancer = true)\n\nTest: for uniform θ the balanced pressure/density reproduce a fresh ExnerReferenceState at that θ to\nmachine precision, and the balanced state survives the default mass-conservation correction.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Simplify: dispatch accessors for reference/pressure state + skip unused halo fill\n\nCleanup pass over the set-reference-state work (behavior-preserving):\n\n- Route `set_hydrostatically_balanced_density!` through the existing\n  `surface_pressure`/`standard_pressure` dispatch interface instead of\n  reaching into `dynamics` fields directly.\n- Replace the lone `hasproperty(dynamics, :reference_state)` reflection in\n  `reset_reference_state!` with a dispatched `dynamics_reference_state`\n  accessor (nothing fallback + CompressibleDynamics/AnelasticDynamics\n  overrides), matching the module's dispatch idiom.\n- Move the per-substep `ρθ′ˢ⁻` halo fill into\n  `apply_divergence_damping!(::ThermalDivergenceDamping)`, its only consumer,\n  so `NoDivergenceDamping`/`DirectDivergenceDamping` no longer pay for an\n  unused halo exchange each acoustic substep.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Fix anelastic reference reset rescaling\n\n* Fix 3D Exner reference recomputation\n\n* Recompute terrain reference state on set!(; compute_reference_state)\n\nAdd reset_reference_state!(::TerrainCompressibleModel), which rebuilds the 3D\nterrain-following reference pressure/density from the horizontal-mean θˡⁱ/qᵛ of\nthe current state via compute_terrain_reference_state! — the terrain analogue of\nthe ExnerReferenceState/anelastic set_to_mean! reset.\n\nIntroduces HorizontalMeanProfile, a callable piecewise-linear profile pairing\neach level's horizontal-mean value with its mean physical height, so it can be\nre-evaluated per column on a terrain-following grid. Adds an integration test\n(recomputed reference matches a freshly built model) and a unit test for the\nprofile interpolation/clamping.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Reproject after adiabatic balancing\n\n* Fix balanced density pressure seeding\n\n* Preserve specific humidity in balanced density seeding\n\nSplit the density-weighted rescaling in set_hydrostatically_balanced_density!\ninto dry-density-weighted fields (momentum, ρθ) and total-density-weighted\nfields (moisture, microphysics, tracers). The previous code rescaled every\nprognostic by the dry-density ratio, which left the diagnosed specific humidity\nat ρqᵗ/(ρᵈ + ρqᵗ) instead of the value set via qᵗ.\n\nNow recover qᵛ from moisture_density/ρᵈ (the placeholder cancels so qᵛ = the set\nspecific moisture), scale the total-weighted constituents by ρ/ρᵈ_old, set the\ndry density as the residual ρᵈ = ρ − ρqᵗ, then rescale the dry-weighted\nprognostics by ρᵈ_new/ρᵈ_old. Add a moist assertion to the balanced-column test.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\nCo-authored-by: Kai-Yuan Cheng <kaiyuanc332@gmail.com>\nCo-authored-by: kaiyuan-cheng <74800123+kaiyuan-cheng@users.noreply.github.com>",
          "timestamp": "2026-07-01T17:04:36-06:00",
          "tree_id": "3a74e1db5cee8bfed4ee6593935452fa75a626e5",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/e78f1674afeb6e4055a9d9c2ead9eb4aa4ba441d"
        },
        "date": 1782948867530,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120889489.29311106,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84921840.36268672,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65744795.80880149,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133947121.467161,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133947121.467161,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128855097.71015464,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128855097.71015464,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128855097.71015464,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 116169581.72455873,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 116169581.72455873,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91480902.85006803,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91480902.85006803,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86802329.31899095,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86802329.31899095,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 79470091.57490483,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 79470091.57490483,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 73448888.09791225,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53583429.028275825,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6778524.666559545,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 25161756.39445503,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1030167847.4354477,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 928176330.9839604,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1295994865.8345482,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 735091756.6364967,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176908198.2381364,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 869051744.5094322,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 531817754.55786884,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24702019.83888389,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 595971276.0960089,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6794441571.798413,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7673702823.824077,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8589965378.435917,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5420105924.845055,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10409949542.457056,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8637364085.667215,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4653199107.911646,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4564615259.8807125,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5197576622.761852,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3617606289.2322493,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5572544783.72414,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5185348557.751744,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3201231503.2657676,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162792983.57204446,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3448664746.495468,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2254661276.9662814,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2963082484.4995184,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3473840004.5718184,
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
          "id": "b4ccf808889df25b8f51d4242f39b951e5f253fc",
          "message": "Update Project.toml (#824)",
          "timestamp": "2026-07-01T22:57:32-06:00",
          "tree_id": "b353c946bb2f6c03a58fd8726fbb17662b44d5e0",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b4ccf808889df25b8f51d4242f39b951e5f253fc"
        },
        "date": 1782970908774,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121863009.10534754,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85140825.43166275,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66462163.70758164,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133241699.45073211,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133241699.45073211,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129147107.37271295,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129147107.37271295,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129147107.37271295,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 116680166.53908034,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 116680166.53908034,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 90372161.78901999,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 90372161.78901999,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86012543.37185821,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86012543.37185821,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 78418933.80113667,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 78418933.80113667,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72086861.1758652,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53616765.241698265,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6619085.926614964,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 24980179.92536731,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1018775407.3752333,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 908625521.8829324,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1291340211.7718341,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 664391195.2254832,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176569294.25729156,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 864458363.033625,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 523141441.9367221,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24698210.5809305,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 592340730.8183744,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6424535427.969653,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7761638375.3185215,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8325550282.162898,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5199652848.532873,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 9959405423.37465,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8318202732.075712,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4515178436.122369,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4415019662.9923115,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5097709964.4863405,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3484172512.426346,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5399818989.145786,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5182436594.197303,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3095834369.937577,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162771623.6509276,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3376001699.952028,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2167725084.457635,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2876157939.9588976,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3379866112.5291357,
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
          "id": "4cebe4355ab9358b6c1f2bfcb40e270db968427f",
          "message": "Reland \"Acoustic substep: kernel-launch reduction, per-stage substeps, cleanup\" (#821)\n\n* Revert \"Revert \"Acoustic substep: kernel-launch reduction, per-stage substeps…\"\n\nThis reverts commit e5250f9ad505371ba22686b0610ede5e88e696bb.\n\n* Restore all examples\n\n* Fix acoustic divergence-damping length scale on Flat grids\n\nThe isotropic horizontal damping diffusivity used min(Δxᶠᶜᶜ, Δyᶜᶠᶜ)² as the\nlength scale. On a grid with a Flat horizontal dimension, that direction's\nspacing is the degenerate Flat unit value (Δ = 1), which collapses the\nmin — and hence the diffusivity in the physical direction — by orders of\nmagnitude. The acoustic divergence filter then effectively vanishes, the\nsubstepper goes unstable, and density is driven negative (DomainError in the\nExner temperature closure). This blew up the compressible-substepper docs\nexamples on 2-D (Flat) grids, e.g. inertia_gravity_wave.\n\nExclude Flat dimensions from the min (treat them as +∞) so it selects the\nphysical spacing. The diffusivity stays isotropic (same coefficient in x and y).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Restore conservative acoustic defaults: cfl 0.5, forward_weight 0.65\n\nThe reland bumped the default acoustic_cfl to 0.7 and forward_weight to\n0.8. The acoustic substep is explicit in the horizontal, so on fully 3D\ngrids the stability bound is CFL ≤ 1/√2 ≈ 0.707 — the new default sat\nright at the edge. The two Float32 GPU compressible examples\n(splitting_supercell, tropical_cyclone_with_rainband) blew up in the\ndocs build, deterministically across two runs, while the 2D x–z\nexamples (bound = 1) survived. Restore the ERF/WRF-conventional\ncfl = 0.5 and ω = 0.65 defaults, which also brings the constructor back\nin line with its docstring and the compressible_dynamics.md analysis\n(both still document 0.5/0.65).\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Loosen backward-integration ρw round-trip tolerance for GPU Float32\n\nThe one-step-forward-one-step-back test was calibrated at the interim\n0.7/0.8 acoustic defaults. Restoring cfl 0.5 / ω 0.65 leaves slightly\nmore acoustic transient in the round-trip, and on Metal Float32 —\nwhere last-bit rounding differences are amplified by the non-normal\nsubstep operator — the ρw residual crosses the old 1e-3 atol. CPU\nFloat32 measures ~3e-5 at both default sets, far below tolerance; the\ntest's stated purpose is a coarse bounded-and-finite sanity check, so\ngive the GPU-sensitive assertion 1e-2 headroom (still 4× below the\n~4e-2 forward-step disturbance it must not blow up to).\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-07-02T10:22:10-06:00",
          "tree_id": "03292ed7b5faa99f99b8bf34c8b8b975b8cd04ab",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/4cebe4355ab9358b6c1f2bfcb40e270db968427f"
        },
        "date": 1783011159740,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121477078.95679456,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84333570.63967364,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65226336.24486138,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 124511354.08405143,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 124511354.08405143,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128509964.10258134,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128509964.10258134,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128509964.10258134,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 116770703.8263103,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 116770703.8263103,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89719006.98205924,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89719006.98205924,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86716426.65676682,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86716426.65676682,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 79232371.17752597,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 79232371.17752597,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72117802.43430214,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53581501.76943205,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6552631.521061188,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26494424.4230007,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1039849552.4972917,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 929712387.4753278,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1323609892.2096655,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 661943857.9660431,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176916686.29453138,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 891116589.714107,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 535128686.36507684,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24700419.947078563,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 610713547.5466245,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6600034497.590374,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7815191750.85618,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8323625456.064504,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5256594671.099415,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10006832973.870556,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8401403337.282681,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4579496865.718579,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4496531628.620269,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5254538507.313101,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3501248364.0803986,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5552913015.9637985,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5241949553.954173,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3110088882.8374524,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162765619.74901608,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3445881036.992064,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2194095325.0347652,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2941709420.292396,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3490347940.165759,
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
          "id": "70e609061962c045139e1b1a97d868db0e8e70d1",
          "message": "Adaptive implicit vertical advection for all variables (anelastic SSP-RK3) (#809)\n\n* Add adaptive implicit vertical advection for scalars (anelastic SSP-RK3)\n\nOceananigans gained adaptive implicit vertical advection (AIVA): each cell\nsplits its vertical velocity into an explicit part that respects a target CFL\nand an implicit first-order-upwind part solved tridiagonally, lifting the\nvertical-advection CFL limit on the time step. This wires AIVA into Breeze's\nanelastic SSPRungeKutta3 path for scalars.\n\nOpt in per scalar, e.g.\n\n    scalar_advection = (; ρθ = WENO(time_discretization =\n        AdaptiveVerticallyImplicitDiscretization(cfl = 0.5)))\n\nBecause Breeze advects in mass-flux form ∇·(ρ U c), the volume-conserving\nupstream implicit coefficients are re-derived with density weighting; they\nreduce exactly to Oceananigans' coefficients when ρ ≡ 1 (tested). The explicit\nhalf needs no new code: it already rides on `_advective_tracer_flux_z`, which\ndispatches on the scheme's time discretization, pre-multiplied by ℑz(ρ).\n\n- Density-weighted implicit advection diagonals + get_coefficient/implicit_step!\n  seam threading the reference density, combined with the existing\n  vertically-implicit diffusion tridiagonal solve\n  (AtmosphereModels/implicit_vertical_advection.jl).\n- Build the implicit solver when a scalar advection scheme needs it; reject\n  adaptive-implicit momentum advection at construction.\n- Refresh the AIVA Δt before each tendency build via update_advection_timestep!\n  so the explicit (Gⁿ) and implicit velocity splits stay consistent.\n- Tests: exact ρ≡1 reduction to Oceananigans, construction wiring, momentum\n  rejection, and stability above the explicit vertical CFL.\n\nMomentum and the acoustic/compressible path remain explicit (future work; see\ndesign/implicit_vertical_advection.md).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Fix Aqua type piracy in the AIVA implicit-solve seam\n\nCI's quality_assurance (Aqua.jl) caught type piracy: the get_coefficient and\nimplicit_step! methods extended Oceananigans-owned functions where every\nargument type was also Oceananigans-owned.\n\n- Introduce a Breeze-owned `AIVADensity` wrapper for the reference density and\n  thread it through `solve!`, so the `get_coefficient` methods carry a\n  Breeze-owned type in their signature (no longer piracy). It is unwrapped to\n  the bare density field inside the coefficient functions; an `adapt_structure`\n  keeps it GPU-compatible.\n- Replace the `TimeSteppers.implicit_step!` extension with a Breeze-owned\n  `breeze_implicit_step!`, called from the SSP-RK3 AIVA branch.\n\nVerified on a cpu-large dev node (Aqua quality_assurance, turbulence_closures,\nadvection_schemes, atmosphere_model_construction, implicit_vertical_advection\nall pass).\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Run AIVA coefficient-reduction test on CPU to avoid GPU scalar indexing\n\nThe \"reduce to Oceananigans at ρ ≡ 1\" testset compares coefficients pointwise\nin a host-side loop, which indexes fields directly (ρ[i,j,k], W[i,j,k]). On a\nGPU that triggers disallowed scalar indexing. The comparison is pure,\narchitecture-independent arithmetic, so evaluate it on a CPU grid regardless of\nthe default test architecture. Also copy `interior` to the host before the\nfiniteness check in the stability test.\n\nVerified on an H100 (gpu-prod): implicit_vertical_advection tests pass, which\nalso exercises the on-device breeze_implicit_step!/AIVADensity solve path.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Remove design notes from PR\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Support adaptive implicit vertical advection with the acoustic substepper\n\nWire AIVA for the transport scalars (moisture, tracers) advanced by\n`scalar_substep!` on the AcousticRungeKutta3 (compressible split-explicit) path:\nschemes that `needs_implicit_solver` are routed through `breeze_implicit_step!`\nwith the prognostic density and the substepper's time-averaged transport\nvelocity (the same `w` the explicit tendencies use, so the explicit/implicit\nvelocity split stays consistent). Other scalars keep the diffusion-only step.\n\nThe thermodynamic density (ρθ/ρe) is integrated inside the acoustic substep loop\nrather than the generic scalar implicit step, so AIVA on it is rejected at\nconstruction when the acoustic substepper is selected (momentum was already\nrejected globally).\n\nTest: compressible + AcousticRungeKutta3 with an AIVA tracer (construction wires\nthe solver; a warm-bubble run stays finite), plus ρθ AIVA rejection. Verified on\ncpu-large and an H100; acoustic_substepping and quality_assurance regressions pass.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Refactor AIVA onto Oceananigans 0.110.8 and support momentum\n\nReplace breeze_implicit_step!, AIVADensity, and the Breeze copies of the\ndensity-weighted implicit-advection diagonals with Oceananigans' extended\nimplicit_step!(field, ..., advection, velocities, density) seam, upstreamed\nin CliMA/Oceananigans.jl#5733 (0.110.8).\n\nSupport adaptive implicit vertical advection for momentum under the\nanelastic SSPRungeKutta3:\n\n- ρu and ρv ride on the upstream z-Center coefficients directly (exact for\n  the horizontally-uniform anelastic reference density).\n- ρw gets new density-weighted upwind tridiagonal coefficients for z-Face\n  fields (upstream keeps Ww fully explicit and has no z-Face path), routed\n  through a Breeze-owned VerticalMomentumImplicitAdvection wrapper so the\n  get_coefficient extension commits no type piracy.\n- The explicit vertical momentum fluxes are scaled by the velocity CFL:\n  Breeze advects momentum with the mass flux (ρu, ρv, ρw) as advecting\n  field, so upstream's scaling would split on |ρw| instead of |w|,\n  inconsistently with the implicit solve.\n\nMomentum AIVA is rejected with AcousticRungeKutta3, which advances momentum\ninside the acoustic substep loop; tracer AIVA there is unchanged. Requires\nOceananigans 0.110.8 ([compat] bumped), so CI waits on that release.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-07-02T13:53:43-06:00",
          "tree_id": "fb98b5d773491dd3722516645f15d34806b2cd7d",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/70e609061962c045139e1b1a97d868db0e8e70d1"
        },
        "date": 1783023392306,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121620984.95573306,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84244491.72956398,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65197169.68598054,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 137361027.96251422,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 137361027.96251422,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 131497989.93860032,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 131497989.93860032,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 131497989.93860032,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 119070539.69300307,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 119070539.69300307,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93722740.29840092,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93722740.29840092,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 88546527.46556756,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 88546527.46556756,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 80625007.80460857,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 80625007.80460857,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 73431080.09472662,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53721095.862906694,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6650103.981442297,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26698304.921509106,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1018229411.3399299,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 907974158.5990763,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1275433924.75242,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 723761076.0722327,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176248366.96334812,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 860966546.5663648,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 520534687.28070265,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24689025.15162533,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 581974473.7911237,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6817786289.188509,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7910251368.964604,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8335411404.417011,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5309936848.621934,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10088730617.463015,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8482029068.156677,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4645081362.874022,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4534044487.492284,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5270696098.660682,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3579041862.9683166,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5491339068.228935,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5281344693.571367,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3146914724.898767,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162772350.08677167,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3473793971.077005,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2217414495.5217614,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2972902055.1513457,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3488022952.4215426,
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
          "id": "982d49a559c7bc976e80972cf0c6db68b75644d2",
          "message": "Update Project.toml (#828)",
          "timestamp": "2026-07-03T06:30:49-06:00",
          "tree_id": "191245bc61acbfcc02c78290c8e46a2cfdcedfeb",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/982d49a559c7bc976e80972cf0c6db68b75644d2"
        },
        "date": 1783090751119,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119231641.07915504,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84958094.6725773,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66141721.29438616,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 131611626.18896925,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 131611626.18896925,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 126187450.56790656,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 126187450.56790656,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 126187450.56790656,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114121662.54101153,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114121662.54101153,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89624968.89874126,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89624968.89874126,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84466161.2470164,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84466161.2470164,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75607480.02579668,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75607480.02579668,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72657061.68181528,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53634395.1921861,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6621119.528503871,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26350425.658337947,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1035595610.796209,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 917217097.3582498,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1259402118.6088247,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 735508064.756538,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176817283.50094768,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 851450949.7587984,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 486011947.7497316,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24695180.799500227,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 591716290.2049413,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6545805090.374777,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7527047131.26154,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8071044676.171362,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5204591356.339253,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 9814692657.883068,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8178765415.728651,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4508270760.381959,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4418894302.947296,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5121306583.344627,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3449567202.4217243,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5378378153.108533,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5109916771.897251,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3054577193.621509,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162687546.20709977,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3339545626.9972425,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2146874210.52411,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2846623002.155173,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3362925035.619246,
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
          "id": "9644297c270df6fd11845cea717076110ad522f3",
          "message": "Fix specific-keyed Relaxation forcings under Oceananigans ≥ 0.110.7: materialize SpecificForcing's inner forcing against the specific field (#833)\n\n* Materialize SpecificForcing's inner forcing against the specific field\n\nOceananigans v0.110.7 (#5620) reworked Relaxation so that\nmaterialize_forcing captures the forced *field* as the relaxed variable\ninstead of binding the forced field's *name*. SpecificForcing\nmaterialized its inner forcing with the rho-weighted prognostic (and\nonly the specific name), so on Oceananigans >= 0.110.7 — Breeze main's\ncurrent compat — every specific-keyed Relaxation silently relaxed the\nprognostic: a fringe relaxation of u computed rate*(u_target - rho*u)\nand a theta fringe applied (theta_target - rho*theta) ~ -45 K, on both\ntimestepping paths.\n\nBind the inner materialization to context.specific_fields[specific_name]\n(the pattern SubsidenceForcing already uses at subsidence_forcing.jl:127),\nfalling back to the prognostic for names with no specific diagnostic\n(user tracers). The specific fields are refreshed in place by\nupdate_state!, so the captured reference stays live, and they share the\nprognostic's staggered location, so location-only consumers (including\nRelaxation on Oceananigans <= 0.110.6, where this change is a verified\nno-op) are unaffected.\n\nAdd a regression test that a specific-keyed Relaxation produces\nG_rho_phi = rho*rate*(target - phi) on both the Center (theta) and Face\n(u) paths; it fails before this change on Oceananigans 0.110.8 and\npasses after.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Apply suggestion from @ewquon\n\n* Use abstract ops and isapprox in specific-keyed Relaxation test\n\nAddress review feedback on the regression test: replace\n`interior(...) |> Array` plus broadcast with Oceananigans abstract\noperations reduced via `maximum(abs(·))`, and rewrite the tolerance\nchecks from `maximum(abs.(Δ)) < tol` to `maximum(abs(Δ)) ≈ 0 atol = tol`.\n\nVerified: the testset passes on Breeze with the SpecificForcing fix and\nstill fails on unfixed Breeze with the documented residuals (θ 0.7728,\nu 5.367e-3), so the fixed-vs-unfixed discrimination is preserved.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Apply suggestions from code review\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n---------\n\nCo-authored-by: Claude Fable 5 <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-07-06T21:53:48-06:00",
          "tree_id": "972fac23d32f49816cbc8b5b97a812a556886928",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/9644297c270df6fd11845cea717076110ad522f3"
        },
        "date": 1783397836251,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 123586018.84840685,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85531975.09371878,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66984898.885866635,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 137068956.71088424,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 137068956.71088424,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128673643.09655425,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128673643.09655425,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128673643.09655425,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 113116235.90486775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 113116235.90486775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91537225.88476777,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91537225.88476777,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84960482.96809301,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84960482.96809301,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75750812.36719137,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75750812.36719137,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 71714481.13689092,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53480098.27655191,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6520842.547462821,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26373289.492390905,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1035058641.5625197,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 919362376.1230357,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1303311286.2647505,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 735714002.4129289,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176841091.06249234,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 879618817.5290248,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 531065644.2768275,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24694175.980734523,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 598661217.0654038,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6663720420.272303,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7632300451.372177,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8459891041.91921,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5266511299.075923,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10129211746.522411,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8353082340.804558,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4553654491.557464,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4462345966.332688,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5174527722.860835,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3536239886.914182,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5531908383.254066,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5213229755.7640915,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3144231574.2187476,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162739625.8485981,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3421406549.715903,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2216860307.2776484,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2939610589.4003673,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3465195648.743524,
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
          "id": "16630e63d76cd3b211cc1f26ec05a347fb01a8c7",
          "message": "Reactant compilation of latlon grid (#774)\n\n* IC\n\n* REVERT ME Add Oceananigans source to Project.toml\n\n* Update Project.toml\n\n* Change Oceananigans source revision to main\n\nUpdated Oceananigans source to use the main branch.\n\n* Trigger ci\n\n* Remove `Oceananigans#main` from sources\n\n* Increase task's stack size to work around stackoverflow in v1.12\n\n* acoustic substepping\n\n---------\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-07-07T13:01:13-07:00",
          "tree_id": "82c04aff155f8783e309e63e6639ea107e6f4dc8",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/16630e63d76cd3b211cc1f26ec05a347fb01a8c7"
        },
        "date": 1783456139732,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119561698.33808942,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83790046.50215262,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 64757743.869703785,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136835047.2183685,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136835047.2183685,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129075492.06020729,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129075492.06020729,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129075492.06020729,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115070803.34894069,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115070803.34894069,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91949232.02406578,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91949232.02406578,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85813034.40806414,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85813034.40806414,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76185558.54418549,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76185558.54418549,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 73478434.33226687,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53846743.032434635,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6597569.169854034,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26195113.5059169,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1050824969.8537822,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 942627709.0435585,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1330471472.6702933,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 748651942.9574815,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 177070051.7552517,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 891666351.3250936,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 539480718.5981661,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24694889.71205829,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 607758678.4626675,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6492218718.985929,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7686485941.659144,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8471878089.744095,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5264474948.212812,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10185157799.009483,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8237580204.530144,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4520738023.345649,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4481426772.607581,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5142586702.828095,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3546892532.4769664,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5521723590.229338,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5196961596.196605,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3132882681.701845,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162740130.99592224,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3436072707.730521,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2202219760.240398,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2915100886.5253773,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3441494324.079278,
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
          "id": "c52325018fc9674ad111477faa0d49d500d20ce8",
          "message": "Use stable version of Metal (#830)",
          "timestamp": "2026-07-09T18:49:36+02:00",
          "tree_id": "b6eeef203f09ffc6a072035b239092070030c9a2",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/c52325018fc9674ad111477faa0d49d500d20ce8"
        },
        "date": 1783617336555,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120983752.2009227,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85171920.94160035,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66425853.168486126,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 135582679.03462532,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 135582679.03462532,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127314120.68033259,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127314120.68033259,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127314120.68033259,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 113397009.15777664,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 113397009.15777664,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92296818.51888534,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92296818.51888534,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85079421.03631312,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85079421.03631312,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76481296.69342357,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76481296.69342357,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72380031.74925588,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53824403.32858988,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6652117.190377776,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26394016.98984237,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1043434129.4289516,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 929918204.6119624,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1312389810.9735558,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 740400900.8754011,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176977805.68447885,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 877230144.7471234,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 534302340.1635035,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24695267.96712979,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 604341012.3793756,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6759274219.130717,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7643134843.080175,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8369984783.85592,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5280766841.073285,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10150354232.335272,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8319110153.775361,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4526174782.910949,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4430996769.959301,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5072399812.550076,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3512154015.098025,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5453830765.359892,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5266248979.848076,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3125763194.918488,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162752078.64429972,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3386639569.0543003,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2205329285.188092,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2921831689.893104,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3376965275.0912113,
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
          "id": "d782396dac787a69aaab47e4952eb3542da15a6a",
          "message": "AIVA-aware advective timescale: let the time-step wizard float Δt on the horizontal CFL (#832)\n\n* Make the advective timescale AIVA-aware so the wizard floats Δt on horizontal CFL\n\nAdaptive implicit vertical advection lifts the vertical-advective CFL as a\nstability constraint, but the TimeStepWizard still clamped Δt to |w|/Δz —\nso in the deep-updraft regime AIVA targets, it changed nothing about the\nΔt the wizard picked.\n\ncell_advection_timescale(model::AtmosphereModel) now drops the vertical\nadvective term exactly when every vertically-advected prognostic uses AIVA,\nmirroring Oceananigans #5642 (vertically-implicit diffusion → Inf timescale).\nSafe by construction: AIVA's explicit vertical velocity gives an explicit\nvertical CFL of min(α, cfl) ≤ cfl independent of Δt, so floating Δt on the\nhorizontal CFL never exceeds AIVA's own bound. The predicate is per-field —\nthe prognostics share the advecting w, so one explicit scalar re-imposes the\nvertical CFL.\n\nCellAdvectionTimescale(formulation) is the explicit override: a callable for\nthe wizard's cell_advection_timescale keyword or for AdvectiveCFL, reusing\nOceananigans' HorizontalFormulation / ThreeDimensionalFormulation. The\nhorizontal-only timescale reuses Oceananigans' own kernel with a ZeroField in\nthe vertical slot; the vertical term uses advecting_vertical_velocity, so on\nterrain-following grids it uses the contravariant w̃.\n\nMeasured: 8×8×32 box, 12 m/s updraft, cfl 0.7 → wizard Δt 3.6 s before,\n175 s after (49×), AIVA absorbing a vertical CFL of ~33.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Correct comments\n\n* update comment\n\n* [test] Split terrain_following.jl to avoid CI OOM worker kills\n\nterrain_following.jl was a single ~1787-line file (~5023 tests, ~14 min,\n~3.4 GB RSS) that ParallelTestRunner runs on one worker with no in-file\nrecycling. It was the longest-lived, largest worker, so when the CI\nrunner's earlyoom (`-m 3 --prefer julia`) fired under memory pressure it\nSIGTERM-killed that worker mid-run, surfacing as\n`Malt.TerminatedWorkerException()` with the remaining tests Interrupted.\n\nSplit into four auto-discovered files so the load spreads across workers\nand each stays small enough for the between-file recycle to bound RSS\n(same remedy as #838, \"Split Reactant WENO compilation tests\"):\n\n  - terrain_following_metrics.jl          (metrics/operators + explicit dynamics)\n  - terrain_following_split_explicit.jl   (split-explicit / acoustic substepper)\n  - terrain_following_latlon.jl           (LatitudeLongitudeGrid testsets)\n  - terrain_following_reference_state.jl  (hydrostatic reference states)\n\nTest bodies are moved verbatim (35 testsets, 172 @test lines preserved);\nper-file imports are trimmed to what each uses. No source or CI changes.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Fable 5 <noreply@anthropic.com>\nCo-authored-by: Kai-Yuan Cheng <kaiyuanc332@gmail.com>\nCo-authored-by: kaiyuan-cheng <74800123+kaiyuan-cheng@users.noreply.github.com>",
          "timestamp": "2026-07-10T08:58:23-04:00",
          "tree_id": "e2c414538e39b0f06aaf5d5bcfbb304533fa6243",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/d782396dac787a69aaab47e4952eb3542da15a6a"
        },
        "date": 1783689744563,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 124207883.58485143,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 86605665.15803859,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 68039242.66809805,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136785698.5687442,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136785698.5687442,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127075499.98422076,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127075499.98422076,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127075499.98422076,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 111601537.16241154,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 111601537.16241154,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 88924786.8279508,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 88924786.8279508,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83572175.38774782,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83572175.38774782,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 77831649.62501688,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 77831649.62501688,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 73211178.93751772,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53969609.797903426,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 6690934.781865173,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26453344.038538132,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1009815863.7540897,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 901597758.7654896,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1272771521.6012576,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 716521891.8227935,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 175920638.61525849,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 846234293.2675279,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 513975056.46133304,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24685187.647356257,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 570463256.9880594,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6696172949.399581,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7535106488.093635,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8334757134.156218,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5234640593.91392,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10034832268.475708,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8364443123.815297,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4578884158.521421,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4399143519.259018,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5157776684.70241,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3506282829.9149084,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5396237702.866913,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5096285351.853922,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3124433688.262702,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162728829.07440698,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3358299097.5525584,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2205667120.96641,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2861480671.396341,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3353815928.511486,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "33843826+macmccallum@users.noreply.github.com",
            "name": "Mason McCallum",
            "username": "macmccallum"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d826ef3a0be18b90c99833b9345f7a42e86e748",
          "message": "Enforce wall impenetrability per acoustic substep (closed-wall mass conservation) (#831)\n\n* Enforce wall impenetrability per acoustic substep (closed-wall mass conservation)\n\nThe split-explicit acoustic substep loop computed the slow wall-normal\nmomentum tendency on the west/south wall faces (the `:xyz` launch covers\nindex 1 of a `Face` dimension but not index N+1) and integrated Δτ·Gⁿρv\nthere every substep. On an impermeable `Bounded` boundary the predictor's\nhorizontal divergence then pumped a spurious mass flux through the wall,\ncreating mass ∝ Gⁿρv(wall)·(βΔt)² per RK3 stage. Stage-end recovery plus the\nprognostic no-penetration BC re-zeroed the wall momentum, hiding the defect\nin the recovered state, so a closed-wall check on the final field passed\nwhile total mass still grew.\n\nOn the DCMIP baroclinic wave (1° lat-lon, ±75° walls) this produced a\nsouth/bottom-heavy, Δt²-per-step drift of +8.4×10⁻⁴ over 4 days\n(≈ +4–6 hPa surface-pressure-equivalent by day 30); the `ExplicitTimeStepping`\npath conserves to roundoff because its wall momentum is zeroed by the\nno-penetration BC before the next divergence is evaluated.\n\nAdd `enforce_wall_impenetrability!`, the closed-wall companion of\n`apply_open_boundary_relaxation!` (#747): it zeroes the wall-normal momentum\nperturbations (ρu′ on Bounded-x faces, ρv′ on Bounded-y faces) on any side\nwithout an active open boundary, twice per substep — before the predictor's\ndivergence and after the divergence damping — matching the per-substep\nboundary enforcement of WRF and MPAS.\n\nResult: per-step creation +3.5×10⁻⁶ → +5.6×10⁻¹⁵; 4-day drift\n+8.4×10⁻⁴ → +4.2×10⁻¹⁵, matching the explicit control.\n\nSee validation/baroclinic_wave_mass_conservation_findings.md.\n\n* Add T7 mass-conservation regression test + diagnosis doc\n\nT7 in test/substepper_rest_state.jl exercises the closed-wall mass leak fixed\nin the previous commit: a `(Periodic, Bounded, Bounded)` grid with `FPlane`\nCoriolis and a uniform zonal (wall-parallel) flow, so the y-wall Coriolis force\nρ·f·u ≠ 0 — the wall-face slow tendency that seeds the spurious mass flux. A\nrest state (u=0) cannot expose the bug, so the existing T1–T6 rest tests missed\nit. The test steps 30 outer steps and asserts total dry mass is conserved to\n1e-12 (relative).\n\nBefore/after on this configuration: without the fix the drift is 3.4×10⁻⁴\n(FAIL); with the fix it is 1.5×10⁻¹⁶ (PASS) — a 12-order-of-magnitude\nseparation matching the `ExplicitTimeStepping` control.\n\nAlso add validation/baroclinic_wave_mass_conservation_findings.md, the full\ndiagnosis (drift magnitude/scaling, Δt² dependence, south-wall localization,\nstage instrumentation, root cause) that the fix's code comment references.\n\n* remove extra file\n\n* add test for codecov\n\n* Update test/substepper_rest_state.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* add predicate to address non-NormalFlow or outflow\n\n---------\n\nCo-authored-by: Mason McCallum <masonmccallum@aeolus.earth>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-07-13T14:54:20-05:00",
          "tree_id": "a55371937f86e43b5b204157957a4d027cbe56be",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/6d826ef3a0be18b90c99833b9345f7a42e86e748"
        },
        "date": 1783973903094,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121373423.35418844,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84558178.0140362,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 65814927.30939534,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 135369528.9286539,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 135369528.9286539,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128591764.19941197,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128591764.19941197,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128591764.19941197,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114863533.8493618,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114863533.8493618,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91336005.95408423,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91336005.95408423,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84850313.17853326,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84850313.17853326,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76113488.49039252,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76113488.49039252,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72074184.4285482,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53835800.29791935,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7217465.747295859,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26113597.556609422,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1026788501.7824336,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 918916230.6658725,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1292418147.3909314,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 733454072.7628609,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176854024.4572147,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 872732508.6671308,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 527292535.42094284,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24696993.925665814,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 595347907.6542367,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6803072695.123722,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 8125960698.309248,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8487178086.294222,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5317237263.647289,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10210883028.863008,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8572698119.416347,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4720099830.359441,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4506457283.084712,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5308392195.17875,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3544243280.73397,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5490109944.769099,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5459776443.956737,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3164440099.4598336,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162767088.31114122,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3435715251.1273394,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2211525496.9532638,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2935260639.461138,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3391065666.6146536,
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
          "id": "07a3c99b1dadef1f9f783b774a161b79f8787423",
          "message": "Make materialize_surface_property a public AtmosphereModels hook (#857)\n\n* Make materialize_surface_property a public AtmosphereModels hook\n\nHoist it from BreezeRRTMGPExt into AtmosphereModels and pass the resolved\nsolar_position to the albedo materializations, so downstream packages can\nextend it for property sources that need the grid and the solar epoch\n(e.g. an observed-albedo dataset dated to the simulation start).\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Test the materialize_surface_property hook\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Fable 5 <noreply@anthropic.com>",
          "timestamp": "2026-07-18T10:11:24-07:00",
          "tree_id": "3f8ece42e502d09425d038f72f4817ddde600b8b",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/07a3c99b1dadef1f9f783b774a161b79f8787423"
        },
        "date": 1784396192464,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122245887.16598992,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85641781.19816165,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 67335059.95752083,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136262195.08866942,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136262195.08866942,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129654027.7822247,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129654027.7822247,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129654027.7822247,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114955300.10877864,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114955300.10877864,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 94071741.26547849,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 94071741.26547849,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 87182653.88453096,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 87182653.88453096,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 77332104.64958347,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 77332104.64958347,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 72698978.81932999,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53921613.677899696,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7430882.143426707,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26125968.034260727,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1011868696.9896165,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 904156544.4149798,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1287219988.9486332,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 622602264.4632238,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176006862.84694132,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 858202100.7444783,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 519945566.0462177,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24694894.72824231,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 588723119.9614676,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6210060528.0397625,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7202494073.484499,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8116086062.203336,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5194990829.342886,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 9961912814.642048,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8165653010.209248,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4380922416.740041,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4379982404.064296,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5159191465.441212,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3481313948.301097,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5394093291.502347,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5106451571.66624,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3063971127.251571,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162699009.6405947,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3353992933.4555736,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2169877904.1560845,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2885782154.375403,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3344012029.2791123,
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
          "id": "b2c2a314cd9f1f13f1c253bb81d64a52355f8914",
          "message": "Resolve some issues detected by JETLS (#860)\n\n* Remove unused local variables or mark them as such\n\n* Tighten signatures of some methods to avoid inference failures\n\n* Improve inference of `all_vertical_advection_is_implicit`\n\n* [CI] Further tweak memory settings for macOS jobs",
          "timestamp": "2026-07-18T20:10:42+01:00",
          "tree_id": "f4626549d726fb7e51e270bff59ab4b822506202",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b2c2a314cd9f1f13f1c253bb81d64a52355f8914"
        },
        "date": 1784403231762,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120674173.17787695,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85159671.1375752,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 66728789.59718818,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136860288.79128158,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136860288.79128158,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129614983.95412691,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129614983.95412691,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129614983.95412691,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 116036905.66484667,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 116036905.66484667,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92036856.78431459,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92036856.78431459,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86277281.1139092,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86277281.1139092,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 77495641.62519327,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 77495641.62519327,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 74371692.99106628,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 54118406.92396609,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7501709.135353504,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26376908.890533283,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1045586982.5351888,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 940499552.0393897,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1347478584.1448863,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 750225556.1663071,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176813631.11525735,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 898045308.6046909,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 538794535.539628,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24695018.388727568,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 606833866.167384,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6517209578.748134,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7241734506.245846,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8236609606.324881,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5307358560.118273,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10467141571.928932,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8159902259.471532,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4423658434.935128,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4565372947.826381,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5057607204.095955,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3545219626.4351106,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5475446153.203471,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5129894082.825763,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3059071587.9654837,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162796790.5351512,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3388609554.879337,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2216219745.9727645,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2909690286.82028,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3402692994.9275646,
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
          "id": "60390a0284d97434c0de9e6ae46ffcbfd2f486fb",
          "message": "Validate DCMIP2016 Kessler requires Tetens saturation constants (#858) (#861)\n\nDCMIP2016KesslerMicrophysics reads Tetens-only fields from the\nthermodynamic constants (the liquid coefficient in\n`saturation_adjustment_coefficient` and the liquid temperature offset\nin the update kernel). With the default `ClausiusClapeyron` constants\nthese fields are absent, so the untyped code degraded to a dynamic\n`getproperty` that failed only at the first time step: a `FieldError`\non CPU and the `jl_f_getfield` GPU-compilation failure reported in #858.\n\nFollowing the discussion, add both an early check and a type constraint:\n\n- New `validate_microphysics(microphysics, thermodynamic_constants)`\n  interface hook (default no-op), called from the `AtmosphereModel`\n  constructor. DCMIP2016KM extends it to throw a clear `ArgumentError`\n  naming the offending formulation when the constants are not\n  `TetensFormulaThermodynamicConstants`.\n- Constrain `saturation_adjustment_coefficient` to\n  `TetensFormulaThermodynamicConstants` (and mark it `@inline`, since it\n  is called from the kernel). This makes the Tetens dependence visible\n  to the compiler and to static analysis (JETLS), turning an opaque\n  dynamic `getproperty` into a clear `MethodError`.\n- Add a validation testset covering both the rejected default constants\n  and the accepted Tetens constants.\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-07-18T18:01:19-07:00",
          "tree_id": "3c98523d561a9a45d328b1f1b564c17233fdbcc2",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/60390a0284d97434c0de9e6ae46ffcbfd2f486fb"
        },
        "date": 1784447710174,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 124627543.80589704,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 86270340.40591548,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 67698582.70498957,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133001499.98973796,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133001499.98973796,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127371010.59024322,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127371010.59024322,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127371010.59024322,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 112075462.40121584,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 112075462.40121584,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 87816181.8440963,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 87816181.8440963,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83764407.56444483,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83764407.56444483,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76415958.14471698,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76415958.14471698,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 70718527.08439335,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53937982.73856459,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7422346.295446666,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26569067.565786995,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1037795312.5661899,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 924052020.3140118,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1246331774.194363,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 737289398.1222966,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176674457.2882651,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 856025305.8170602,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 531395967.82630944,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24693059.74056016,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 583080802.6219219,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6448459148.787014,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7746929804.30908,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8307361999.643486,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5167689034.488782,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 9849599023.0958,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8181118473.280657,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4431521204.322031,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4361967110.822229,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5059892162.380124,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3451928790.8530917,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5322015037.345936,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5077806846.673212,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3046576329.5945115,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162667128.69987327,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3352243818.499624,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2150188509.458263,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2836801072.4143457,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3369205731.5723267,
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
          "id": "638371c9a861085b8f3625cda77a761393f93d0f",
          "message": "Bump CloudMicrophysics in / (#769)\n\n* Bump CloudMicrophysics in /\n\nUpdates the requirements on  and [CloudMicrophysics](https://github.com/CliMA/CloudMicrophysics.jl) to permit the latest version.\n\nUpdates `CloudMicrophysics` to 0.36.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.36.0)\n\nUpdates `CloudMicrophysics` to 0.36.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.36.0)\n\nUpdates `CloudMicrophysics` to 0.36.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.36.0)\n\nUpdates `CloudMicrophysics` to 0.36.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.36.0)\n\nUpdates `CloudMicrophysics` to 0.36.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.36.0)\n\n---\nupdated-dependencies:\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.36.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.36.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.36.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.36.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.36.0\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* Fix permissions of file `ext/BreezeCloudMicrophysicsExt/cloud_microphysics_translations.jl`\n\n* Only allow `CloudMicrophysics@0.36`\n\n* Update one-moment microphysics process options\n\n* Fix parcel autoconversion test timing\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Kai-Yuan Cheng <kaiyuanc332@gmail.com>\nCo-authored-by: kaiyuan-cheng <74800123+kaiyuan-cheng@users.noreply.github.com>",
          "timestamp": "2026-07-21T22:54:57+01:00",
          "tree_id": "a88346d2a892de581ca368bdc5ee1b9f8ee8ced0",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/638371c9a861085b8f3625cda77a761393f93d0f"
        },
        "date": 1784674657802,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119122629.41167556,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 82774491.95393907,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 62247976.23947523,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 137975584.63385648,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 137975584.63385648,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 131054592.29836115,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 131054592.29836115,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 131054592.29836115,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115608712.05811189,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115608712.05811189,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 93129515.3772845,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 93129515.3772845,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85012377.3444124,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85012377.3444124,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76056390.8222518,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76056390.8222518,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 73463223.53139555,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53772375.30139162,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7558022.666456465,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26271741.097606834,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1040266002.0540471,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 933936050.2801493,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1321186896.7540815,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 743255562.254866,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 177110936.29324472,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 888512100.0687836,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 536119298.584335,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24696344.127291158,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 602829052.5008944,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6679948186.574141,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7469228173.368272,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8395609938.688868,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5379478351.506665,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10174607775.951677,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8398888239.204786,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4582765997.876528,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4449243423.547564,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5077084628.285446,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3540865265.8859425,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5437202208.687097,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5224785913.284058,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3124889722.929705,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162729330.99794483,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3368410232.0292196,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2217835787.3400006,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2891253592.2635274,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3378254525.8604198,
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
          "id": "3fd6009cddaf1487e0eefd3aee3ad0303fd343e8",
          "message": "Bump CloudMicrophysics in / (#854)\n\n* Bump CloudMicrophysics in /\n\nUpdates the requirements on  and [CloudMicrophysics](https://github.com/CliMA/CloudMicrophysics.jl) to permit the latest version.\n\nUpdates `CloudMicrophysics` to 0.37.1\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.37.1)\n\nUpdates `CloudMicrophysics` to 0.37.1\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.37.1)\n\nUpdates `CloudMicrophysics` to 0.37.1\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.37.1)\n\nUpdates `CloudMicrophysics` to 0.37.1\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.37.1)\n\nUpdates `CloudMicrophysics` to 0.37.1\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.37.1)\n\n---\nupdated-dependencies:\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.37.1\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.37.1\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.37.1\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.37.1\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.37.1\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* Adapt to CloudMicrophysics v0.37 number adjustment API\n\nCloudMicrophysics v0.37 replaced the Horn (2012) pair\n`number_increase_for_mass_limit`/`number_decrease_for_mass_limit` with a\nsingle `number_tendency_from_mass_limits((; x_min, x_max, τ), q, n)`\noperating on specific quantities. Call the new function and split the\ncombined tendency into source and sink parts, since the sink is limited\ntogether with the other number sinks.\n\nRequire CloudMicrophysics 0.37 only, since the extension no longer works\nwith 0.36.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Use keyword constructor for Frostenberg2023 in 1M test\n\nCloudMicrophysics v0.37 added a `log_a` field to `Frostenberg2023`,\nbreaking the four-argument positional constructor. Use the keyword\nconstructor so the new field takes its default value `log(a)`.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Claude Fable 5 <noreply@anthropic.com>",
          "timestamp": "2026-07-22T15:16:16+01:00",
          "tree_id": "0dd89f7315d5fcf9f7460f731fecdb6ca59a47e7",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/3fd6009cddaf1487e0eefd3aee3ad0303fd343e8"
        },
        "date": 1784731269988,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122557663.88231196,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83086411.2800942,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 58591618.195266485,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133564868.50752756,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133564868.50752756,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129089231.69470128,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129089231.69470128,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129089231.69470128,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 116268300.04166529,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 116268300.04166529,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89446146.91772132,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89446146.91772132,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84811389.35013194,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84811389.35013194,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 77966466.73780988,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 77966466.73780988,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 68940226.57296324,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53621559.318589225,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7366274.26366903,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26307506.021106306,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1025379014.3780445,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 911080710.1656986,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1254115309.5480325,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 731108632.1159261,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 176550379.02332792,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 866235576.6947061,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 525003776.1003826,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24690896.240414776,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 590125208.2049035,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6673079882.416473,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 8169549694.491894,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8372156712.0608,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5366464016.846841,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10087942006.955702,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8502412795.264618,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4691789563.8103075,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4616671757.405649,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5219714255.669059,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3591963941.081449,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5484248637.863154,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5391240191.006253,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3184328333.5242333,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162767445.19153106,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3471979497.435524,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2230944237.4766684,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2975893040.2213097,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3496025372.2697096,
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
          "id": "7b3f7c5303ee10eda0c3db0fb91cf79e5ff83f94",
          "message": "[test] Cap Reactant and use dev version of Oceananigans (#882)\n\n* [test] Cap Reactant\n\n* Update Project.toml\n\n* Also cap Oceananigans\n\n* Revert \"Unify the compressible reference state and set the perturbation-form PGF as default (#863)\"\n\nThis reverts commit b0a6a9a965f2652aa921839c7e9cbdff5e4a859c.\n\n* DROP ME: check out dev branch of Oceananigans with potential fix\n\n* Require new Oceananigans\n\n* Revert \"Revert \"Unify the compressible reference state and set the perturbation-form PGF as default (#863)\"\"\n\nThis reverts commit a1cdb9bf2fb9eb59472b49782be8e2440f4e576e.\n\n* Use dev Oceananigans also in `examples/` environment",
          "timestamp": "2026-08-01T23:17:23+01:00",
          "tree_id": "ee505c23262ee831981e61bbda0e5a98d10bf275",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/7b3f7c5303ee10eda0c3db0fb91cf79e5ff83f94"
        },
        "date": 1785624657436,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 125543713.66063908,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84621347.03309622,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60237756.087728195,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 136411849.44879165,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 136411849.44879165,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127731364.69912934,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127731364.69912934,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127731364.69912934,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 112619712.97195351,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 112619712.97195351,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 87348591.01728423,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 87348591.01728423,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83925162.94477831,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83925162.94477831,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75284131.90480177,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75284131.90480177,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 68274498.68316138,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 53527326.8173487,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7524768.0042124735,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26442091.88592426,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1020027165.321424,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 919896607.9571431,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1287496184.066072,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 735666048.3263831,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 229932453.60301858,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 875223902.5228994,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 531435765.2688084,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24623409.05574773,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 596757610.1177373,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6536095614.675535,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7487301607.136163,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8265232868.964959,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5246016646.632878,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 9968968664.435656,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8274690338.115168,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4522740023.916609,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4538199696.609689,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5070796192.705304,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3518999925.136741,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5398856333.767759,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5162013827.139222,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3104938220.4111547,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 162761267.90763205,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3442963327.7924848,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2193805652.522901,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 2925057290.424444,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3415764229.996038,
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
          "id": "43738af817105d57a7ccc56abda1cfcdce570c72",
          "message": "Require new version of Reactant (#884)",
          "timestamp": "2026-08-03T10:22:51+01:00",
          "tree_id": "1a774fa528cf319b7d9e00d6dcb535e96f8413e2",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/43738af817105d57a7ccc56abda1cfcdce570c72"
        },
        "date": 1785752926241,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121142046.62744516,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83519588.43522374,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 59080330.63090428,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 137694325.2988686,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 137694325.2988686,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129372131.52439,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129372131.52439,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129372131.52439,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114251665.38897339,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114251665.38897339,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 87887087.0093112,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 87887087.0093112,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 82957024.34631611,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 82957024.34631611,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 74113340.85692704,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 74113340.85692704,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 69577338.80345953,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 40597263.55175731,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7260874.12455508,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26385223.822493702,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1034800115.9344234,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 862083874.0236102,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1318726731.7723768,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 739535586.9480858,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 116379415.23332757,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 889667297.2438964,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 533847214.61582685,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24000396.292554293,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 602802454.5820049,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6788923565.853998,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 8011383974.191232,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8814451795.126133,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5334291619.686207,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10324453322.404089,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8539022888.175207,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4546346482.588388,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4732369702.8436165,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5250585233.8306465,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3559151776.9273224,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5404017674.521079,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5430619924.942722,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3155121087.572899,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 440601870.6364182,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3526412123.117849,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2239768303.577888,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 1801118381.6702895,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3524725916.538792,
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
          "id": "16d0e8c91ee0e0de0686911c408b06a25d45e5bc",
          "message": "Release 0.8 (#892)\n\n* Bump version from 0.7.4 to 0.7.5\n\n* Update Project.toml\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n---------\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-08-03T14:41:51-07:00",
          "tree_id": "faa67e8ed824ae439c959fa9a261c316c3ce0891",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/16d0e8c91ee0e0de0686911c408b06a25d45e5bc"
        },
        "date": 1785794841086,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122228471.47640923,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84123596.40360405,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 58998505.13645695,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 127128440.51046565,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 127128440.51046565,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129100441.16706125,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129100441.16706125,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129100441.16706125,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 116328098.48190174,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 116328098.48190174,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 92314200.19534315,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 92314200.19534315,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86178277.56900422,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86178277.56900422,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 78012437.0961081,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 78012437.0961081,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 68333560.8253544,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 39888678.18337678,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7232776.12137635,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26103722.93918647,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1004414521.4483478,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 833342903.3000888,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1261030094.3133438,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 713721193.3428817,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 116249331.14362149,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 839627127.679433,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 513827604.5075905,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 23995525.439190198,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 572976890.309312,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6589198984.030627,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7850069670.401449,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8377834105.340531,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5255118791.9018955,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10209677556.768045,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8778542059.752129,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4545695210.410091,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4587031911.135706,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5284115919.607638,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3510259096.787618,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5367211453.316067,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5275253571.763214,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3094416628.838174,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 439844922.3825409,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3439214203.892738,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2208126988.7129183,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 1791687242.095191,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3467031695.33332,
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
          "id": "a26975ac452cd6df173b98fe20d965d877c3344e",
          "message": "Reactant compat to `0.2.268 - 0.2.274, 0.2.278` (#895)\n\n* Downgrade Reactant version for Numerical Earth compat\n\nDowngrade Reactant version from 0.2.278 to 0.2.275.\n\n* Downgrade Reactant version from 0.2.278 to 0.2.275\n\n* Downgrade Reactant package version\n\nDowngrade Reactant package version from 0.2.278 to 0.2.275.\n\n* Try pin momentarily\n\n* Try pin momentarily\n\n* Try pin momentarily\n\n* Update Project.toml\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update Project.toml\n\n* Update Reactant version range in Project.toml\n\n---------\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-08-04T13:33:49-07:00",
          "tree_id": "e24be102b7d00922c55182bd9dd8c585bc61c809",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/a26975ac452cd6df173b98fe20d965d877c3344e"
        },
        "date": 1785877265410,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122595310.79337916,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83792581.75753823,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 59240486.126836404,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 134405895.79534134,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 134405895.79534134,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127370425.03951703,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127370425.03951703,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127370425.03951703,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 112686275.00082855,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 112686275.00082855,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89619814.09451124,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89619814.09451124,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 84748926.00128883,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 84748926.00128883,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75470308.87510619,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75470308.87510619,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 67944140.30309364,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 39786908.66380916,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7282603.544101861,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26288076.555013966,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1026654953.6627388,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 857793328.103232,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1300850810.7630315,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 738787168.1418422,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 116394113.09368835,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 880904152.9604185,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 530728505.57914233,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24000546.605161168,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 597594762.8049157,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6306935713.451334,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7556970908.491426,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8588206507.439399,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5306531492.87012,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10112434210.05046,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8283924051.757935,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4366324481.287437,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4628345624.301357,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5224411704.624153,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3535124543.904553,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5405525505.555277,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5148226635.661713,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3040242505.009692,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 440375217.8486657,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3446777283.160089,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2211678840.103347,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 1790520449.15156,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3435387413.420219,
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
          "id": "085e7c329fb2b49b982bc430e91b7f45a0e8826f",
          "message": "Include the upwelling shortwave flux in the radiative flux divergence (#890)\n\n* Include the upwelling shortwave flux in the radiative flux divergence\n\ncompute_radiation_flux_divergence! summed only three of the four radiative\nstreams, omitting the upwelling shortwave. The sunlight scattered back upward\nby air and clouds, plus the fraction reflected by the surface, therefore never\nentered the flux divergence that drives the ρe and ρθ tendencies, biasing the\nradiative heating rate in every clear-sky and all-sky simulation.\n\nRRTMGP's two-stream shortwave solver already computes this stream as\nsws.flux.flux_up; Breeze had no field to store it in. Add\nupwelling_shortwave_flux to RadiativeTransferModel, populate it in all three\noptics flavors, and include it in the net flux. In the clear-sky single-column\ntest the column-integrated heating goes from 79.9 to 109.5 W/m².\n\nGray optics writes zero into the new field, since RRTMGP's rte_sw_noscat!\ncomputes no upward stream. Also zero the gray shortwave_solver.flux once at\nconstruction: the non-scattering solver only writes flux_dn_dir, leaving\nflux_up and flux_dn as allocated-but-unwritten memory while the sun is up.\n\nThe single_column_radiation example had the same omission in its four ℐ_net\ndiagnostics, so its \"Net flux\" panel disagreed with the model's own net flux.\nThe radiative transfer docs listed three flux fields and claimed there was no\nupwelling shortwave at all. Both are corrected, and the docs now warn that gray\noptics ignores surface_albedo in the shortwave, because the non-scattering\nsolver never reflects the direct beam.\n\nTests assert the new field's sign and magnitude, that it matches\nRRTMGP.sw_flux_up exactly, that it vanishes for gray optics, and that\nintegrating -∂ℐ_net/∂z over the column recovers the boundary-flux difference.\nThat last identity fails if any of the four streams is dropped.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\n\n* Clarify radiative heating calculations\n\n---------\n\nCo-authored-by: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-07T15:12:12-04:00",
          "tree_id": "f8b58f0d66a0cdd5a42b7b47776ad17380929da6",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/085e7c329fb2b49b982bc430e91b7f45a0e8826f"
        },
        "date": 1786131738371,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119634470.71457951,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83610063.86916237,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 59302519.27080317,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 132814922.60633984,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 132814922.60633984,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 127345828.63082036,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 127345828.63082036,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 127345828.63082036,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 112894246.67818415,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 112894246.67818415,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 89984661.01429957,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 89984661.01429957,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83987559.30533266,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83987559.30533266,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76923959.88556574,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76923959.88556574,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 66436233.15439376,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 39768812.20760677,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7277206.479241068,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26399925.089686044,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1030923415.0050454,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 861943739.5392346,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1313973109.9887142,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 738556297.2710891,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 116385265.1893996,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 885537574.0837097,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 531976102.001878,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 23999990.20386142,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 599306917.6352783,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6591214739.771214,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7399691084.406644,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8382622807.315577,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5135721682.549065,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 9816082323.673204,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8236132479.408707,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4478067792.94169,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4493552102.249291,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 4994387377.523433,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3425862143.2224803,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5277437319.246088,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5137147864.790368,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3056945801.351207,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 439504642.7041178,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3341612932.395402,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2154041537.853868,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 1758089128.3230307,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3321901298.211697,
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
          "id": "f947e15aec85142d00689b838c0986d4ea102561",
          "message": "BreezeRRTMGPExt: support compressible dynamics on terrain grids in radiation (#791)\n\n* BreezeRRTMGPExt: support compressible dynamics on terrain grids in radiation\n\nThe RRTMGP gas-state, cloud-state, and gray paths read\n`model.dynamics.reference_state` pressure/density, which is `nothing` for\n`CompressibleDynamics` on a `TerrainFollowingVerticalDiscretization` grid: a\nsingle 1D column is not hydrostatically balanced per terrain column, so the 3D\nreference instead lives in `terrain_reference_pressure`/`terrain_reference_density`.\n\nAdd `radiation_reference_pressure`/`radiation_reference_density(dynamics)` that\nreturn `reference_state.<field>` when present (anelastic and flat compressible —\nunchanged behavior), else `terrain_reference_<field>` (terrain compressible),\nelse the diagnostic/prognostic field. Route the three radiation reads through\nthem, and explicitly import `CompressibleDynamics` for the new dispatch.\n\nSurfaced when running compressible dynamics on a terrain-following grid with\nactive radiation.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_01HAophMb6GBRRRb34aMmzzC\n\n* Fix the prognostic-density radiation fallback\n\nCompressibleDynamics carries total_density, not density; the fallback\n(no reference state, no terrain reference) read a nonexistent field.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Promote the radiation reference state to dynamics-interface getters\n\nreference_pressure/reference_density join mean_pressure in the dynamics\ninterface (reference state, else terrain reference, else the prognostic\nstate), replacing the radiation-private accessors. dynamics_density is\nnot a substitute: it returns the prognostic dry density on\nCompressibleDynamics, the wrong mass for radiation layers.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Feed radiation the total state, never a pressure-gradient reference\n\nreference_pressure/reference_density now return the total thermodynamic\nstate RRTMGP needs: dynamics.pressure / dynamics.total_density for a\ncompressible atmosphere (which carries the true total), reference_state.*\nfor an anelastic atmosphere (whose only thermodynamic pressure is its\nreference). The terrain_reference_* fallthrough is removed — those fields\nare a pressure-gradient device for the dynamics and must never reach\nradiation; the actual total density is available regardless of whether a\nterrain reference was built.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Route radiation pressure/density through interface getters\n\nReplace the per-type reference_pressure/reference_density overrides on\nAnelasticDynamics and CompressibleDynamics with delegation through the\nshared interface: reference_pressure → dynamics_pressure, and\nreference_density → total_density (changed from dynamics_density).\n\nThe two edits are coupled: switching the reference_density default to\ntotal_density is what makes dropping the compressible override safe, so\nradiation still receives the total moist density ρ = ρᵈ + Σρˣ rather than\nthe dry coupling density ρᵈ. Values fed to radiation are unchanged for\nboth formulations; the pressure-gradient reference states remain\nunreachable by radiation. Drop the now-unused CompressibleDynamics import.\n\nCo-Authored-By: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\n\n* Use thermodynamic state accessors for radiation\n\n* Collapse thermodynamic_pressure into dynamics_pressure\n\n`thermodynamic_pressure` had no override anywhere in the tree, so it was\nindistinguishable from `dynamics_pressure` for every dynamics type. #867 had\nalready given `dynamics_pressure` exactly this contract (\"the pressure entering\nthe equation of state, buoyancy, and the thermodynamic tendencies\"), so the\nalias reintroduced the two-names-one-concept problem that #867 removed. This\nalso finishes the asymmetry left by df56dcca, which dropped the sibling\n`reference_density` alias and called `total_density` directly but only renamed\n`reference_pressure` rather than deleting it.\n\nThe physics reasoning that motivated the alias now lives on\n`dynamics_pressure`'s docstring, where implementers of new dynamics will see\nit: a (flat or terrain) reference state is a pressure-gradient device and must\nnever substitute for the thermodynamic state.\n\nAlso in the radiation extension:\n\n- Drop the free-floating comment in compressible_dynamics.jl. It was attached\n  to no definition, duplicated the comment above the `total_density` override,\n  and claimed physics reads `thermodynamic_pressure` when dcmip2016_kessler\n  reads `dynamics_pressure`. That file is now untouched by this branch.\n- Name the cloud-state kernel's field argument `total_density` and keep the\n  scalar `ρ`, matching `_compute_temperature_and_pressure!`, which makes the\n  same `grid_moisture_fractions` call. Avoids `ρᶜ`, which reads as \"cloud\n  density\" given the `ᶜ` species superscript in notation.md.\n- State \"never the pressure-gradient reference state\" once on the accessor\n  instead of five times across three files; rrtmgp_shared_utilities keeps only\n  its unique point about RRTMGP's monotonic level pressures.\n\nAnelastic behavior is unchanged: `dynamics_pressure` and `total_density`\nresolve to `reference_state.pressure` and `.density` as before. Compressible\nreads the diagnosed `dynamics.pressure` and `dynamics.total_density`.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\n\n* Untrack a stray local Manifest backup swept in by the merge\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Correct the radiation and dynamics_pressure docstrings\n\nThe gray radiation docstring claimed pressure levels are built with a geometric\nmean. The code uses ℑzᵃᵃᶠ, an arithmetic average, which is also only first order\nwherever Δz varies. It further claimed the surface and TOA faces are interpolated\nor extrapolated, when each boundary level in fact inherits whatever that field's\nhalo carries: a Value bottom boundary condition reproduces the prescribed surface\npressure exactly, while a default NoFlux halo mirrors the interior and collapses\np_lev onto p_lay. Record the consequence as a TODO, since a mirrored end leaves\nthe layer spanning half a cell in pressure while the flux divergence still\ndivides by the full Δzᶜᶜᶜ.\n\nThe dynamics_pressure docstring said a dynamics' reference state must never\nsubstitute for the thermodynamic state, which reads as a rule the anelastic core\nbreaks, since there dynamics_pressure returns exactly reference_state.pressure.\nRephrase to the intended guidance: call the accessor rather than reaching into\ndynamics.reference_state, and say why the two cores differ.\n\nDocstrings only, no behavior change.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\nClaude-Session: https://claude.ai/code/session_013DsH56CicoVLxegr4WCWWq\n\n---------\n\nCo-authored-by: Claude Opus 4.8 (1M context) <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: kai <kai@ip-10-50-31-186.ap-southeast-2.compute.internal>\nCo-authored-by: Gregory L. Wagner <greg@aeolus.earth>",
          "timestamp": "2026-08-11T12:55:55+02:00",
          "tree_id": "ff8eba6f2daa41dcc55fa63d124719b358666ecf",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/f947e15aec85142d00689b838c0986d4ea102561"
        },
        "date": 1786447349646,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 124276530.3393681,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 85033229.38397577,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60438856.39547738,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133637876.67424011,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133637876.67424011,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128393263.23221354,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128393263.23221354,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128393263.23221354,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 113379305.18234661,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 113379305.18234661,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 87593232.13461795,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 87593232.13461795,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 83616058.21516307,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 83616058.21516307,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 75204149.53896411,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 75204149.53896411,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 68929657.21087512,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 40310629.827088654,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7200421.811819763,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26339350.848700073,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1041210901.1444627,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 865608000.6595811,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1330775198.1026566,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 744488412.9987712,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 116372254.9642286,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 895022284.845057,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 538681486.9509376,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24000620.423142616,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 609557470.6797076,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6649568945.989339,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7756822559.362485,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8702263690.18535,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5270339394.673094,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10119302122.752184,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8637684263.41998,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4538190390.09137,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4640171078.695204,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5253745402.209946,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3496531834.7353735,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5431924554.301063,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5331160689.034988,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3111321220.929262,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 440067381.876466,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3405170954.551894,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2197027475.287254,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 1781628678.829486,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3337292334.451386,
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
          "id": "961591e074d5f2b06a49dcb10748d2db96c364aa",
          "message": "Bump RRTMGP in / (#853)\n\n* Bump RRTMGP in /\n\nUpdates the requirements on  and [RRTMGP](https://github.com/CliMA/RRTMGP.jl) to permit the latest version.\n\nUpdates `RRTMGP` to 0.22.2\n- [Release notes](https://github.com/CliMA/RRTMGP.jl/releases)\n- [Changelog](https://github.com/CliMA/RRTMGP.jl/blob/main/NEWS.md)\n- [Commits](https://github.com/CliMA/RRTMGP.jl/compare/v0.21.7...v0.22.2)\n\nUpdates `RRTMGP` to 0.22.2\n- [Release notes](https://github.com/CliMA/RRTMGP.jl/releases)\n- [Changelog](https://github.com/CliMA/RRTMGP.jl/blob/main/NEWS.md)\n- [Commits](https://github.com/CliMA/RRTMGP.jl/compare/v0.21.7...v0.22.2)\n\nUpdates `RRTMGP` to 0.22.2\n- [Release notes](https://github.com/CliMA/RRTMGP.jl/releases)\n- [Changelog](https://github.com/CliMA/RRTMGP.jl/blob/main/NEWS.md)\n- [Commits](https://github.com/CliMA/RRTMGP.jl/compare/v0.21.7...v0.22.2)\n\nUpdates `RRTMGP` to 0.22.2\n- [Release notes](https://github.com/CliMA/RRTMGP.jl/releases)\n- [Changelog](https://github.com/CliMA/RRTMGP.jl/blob/main/NEWS.md)\n- [Commits](https://github.com/CliMA/RRTMGP.jl/compare/v0.21.7...v0.22.2)\n\nUpdates `RRTMGP` to 0.22.2\n- [Release notes](https://github.com/CliMA/RRTMGP.jl/releases)\n- [Changelog](https://github.com/CliMA/RRTMGP.jl/blob/main/NEWS.md)\n- [Commits](https://github.com/CliMA/RRTMGP.jl/compare/v0.21.7...v0.22.2)\n\n---\nupdated-dependencies:\n- dependency-name: RRTMGP\n  dependency-version: 0.22.2\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: RRTMGP\n  dependency-version: 0.22.2\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: RRTMGP\n  dependency-version: 0.22.2\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: RRTMGP\n  dependency-version: 0.22.2\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: RRTMGP\n  dependency-version: 0.22.2\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* Adapt BreezeRRTMGPExt to RRTMGP.jl v0.22 API\n\nRRTMGP v0.22 overhauled its public API; update the extension accordingly:\n\n* RRTMGPGridParams now takes the physical `domain_nlay` instead of the\n  total `nlay` (the isothermal boundary layer is added internally).\n* `RRTMGP.Vmrs.init_vmr` was removed (module renamed to\n  VolumeMixingRatios): add an `initialize_global_mean_vmr` helper that\n  constructs `VmrGM` directly with zero-filled arrays.\n* `lookup_tables` now returns a flat `LookupBundle`, replacing the\n  `(; lookups, lu_kwargs)` named tuple.\n* Flux compute buffers are now indexed `(ncol, nlev)`: read spectral\n  fluxes through the `(nlev, ncol)` presentation getters\n  (`RRTMGP.lw_flux_up` etc., refreshed by `update_{lw,sw}_fluxes!`) and\n  swap the index order in the gray-optics flux copy, which reads the\n  layer-1 compute buffers directly.\n* Drop `set_flux_to_zero!` before the shortwave solve: the whole-flux\n  method is gone, and v0.22 zeroes night columns (cos_zenith <= 0)\n  internally.\n\nCaller-owned state arrays (layerdata, p_lev, t_lev, vmr, cloud state)\nkeep their vertical-first `(nlay, ncol)` layout, so the gas- and\ncloud-state update kernels are unchanged.\n\nTighten RRTMGP compat to 0.22 since the new API is not available in 0.21.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Update Project.toml\n\n* BreezeRRTMGPExt: adapt shortwave flux zeroing to RRTMGP v0.22\n\nRRTMGP v0.22 removed the whole-flux `set_flux_to_zero!(flux)` method,\nkeeping only per-column variants meant for use inside kernels. Zero the\nshortwave flux arrays directly with `fill!` at construction instead.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Remove too much information comment\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Claude Fable 5 <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: kaiyuan-cheng <74800123+kaiyuan-cheng@users.noreply.github.com>",
          "timestamp": "2026-08-12T21:33:41+02:00",
          "tree_id": "26209781bc8c563d707bb9454324393aeecad3c2",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/961591e074d5f2b06a49dcb10748d2db96c364aa"
        },
        "date": 1786564840283,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 122659609.5049311,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 84094447.4532884,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60098430.62353986,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 128065456.1900229,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 128065456.1900229,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128818630.83787473,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128818630.83787473,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128818630.83787473,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 114584358.13781461,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 114584358.13781461,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91418077.67538595,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91418077.67538595,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86739835.67262703,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86739835.67262703,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76978069.37254354,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76978069.37254354,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 67570793.5059605,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 39271292.25429752,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7136864.924954073,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26622861.95065843,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1043084570.0458034,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 869244277.5531656,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1326260666.5889857,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 751968681.8152502,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 116399353.99988113,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 890353882.587095,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 541032905.11674,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24001714.905243587,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 612840010.9642779,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6418669214.851022,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7802296618.319745,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8511393360.620309,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5346463927.144413,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10362523687.051737,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8566578671.908907,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4488848535.910779,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4676917450.138519,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5209244559.037863,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3589483841.5246973,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5520135716.53249,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5489682396.333147,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3143363266.232957,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 440752577.2410458,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3468644494.256766,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2245990940.1748123,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 1807262955.5828595,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3497176780.562643,
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
          "id": "c713975970323d88dad39c6714d175b9ae0dfc43",
          "message": "Bump CloudMicrophysics in / (#878)\n\n* Bump CloudMicrophysics in /\n\nUpdates the requirements on  and [CloudMicrophysics](https://github.com/CliMA/CloudMicrophysics.jl) to permit the latest version.\n\nUpdates `CloudMicrophysics` to 0.38.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/compare/v0.37.0...v0.38.0)\n\nUpdates `CloudMicrophysics` to 0.38.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/compare/v0.37.0...v0.38.0)\n\nUpdates `CloudMicrophysics` to 0.38.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/compare/v0.37.0...v0.38.0)\n\nUpdates `CloudMicrophysics` to 0.38.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/compare/v0.37.0...v0.38.0)\n\nUpdates `CloudMicrophysics` to 0.38.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/compare/v0.37.0...v0.38.0)\n\n---\nupdated-dependencies:\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.38.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.38.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.38.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.38.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.38.0\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* Adapt to CloudMicrophysics v0.38 options/process_params split\n\nCloudMicrophysics v0.38 splits `Microphysics1MParams.options` into\n`processes` (empty singleton markers selecting each process variant) and\n`process_params` (a mirrored NamedTuple holding the parameter values).\n\nRoute each use accordingly in the one-moment extension:\n- On/off processes (rain evaporation, snow melt, snow\n  deposition/sublimation, cloud ice melt) dispatch on the marker in\n  `processes`, whose `process_params` slot is always `nothing`.\n- Accretion helpers read collision efficiencies from `process_params`,\n  whose `nothing`-when-disabled mirroring preserves existing dispatch.\n- Condensate-formation materialization takes both the marker (for\n  `TemperatureDependent` dispatch) and the parameters (`τ_relax`,\n  `frostenberg`).\n\nUpdate tests and the stationary parcel example to configure parameters\nby rebuilding `Microphysics1MParams` with overridden `process_params`\nentries, since option types no longer carry parameter values.\n\nNarrow the CloudMicrophysics compat bound to 0.38 since the extension\nnow relies on the new field layout.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n* Adapt 1M accretion precision test to new CloudMicrophysics options API\n\nAccretion option types are now empty singletons; collision efficiencies\nlive as NamedTuples in Microphysics1MParams.process_params. Store the\nother-precision values there instead of in the option constructors.\n\nCo-Authored-By: Claude Fable 5 <noreply@anthropic.com>\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Claude Fable 5 <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-08-13T15:03:28+02:00",
          "tree_id": "c22b821f652653f34f0ba65b90206b5de8059b87",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/c713975970323d88dad39c6714d175b9ae0dfc43"
        },
        "date": 1786627806185,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 120274259.39253035,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 82973373.22383836,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 58347778.313665725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 135534847.30438593,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 135534847.30438593,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129494035.08003515,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129494035.08003515,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129494035.08003515,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 116252480.04245836,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 116252480.04245836,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91934645.393506,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91934645.393506,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 85747212.01826282,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 85747212.01826282,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 76916402.71153325,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 76916402.71153325,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 69897590.4931975,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 40538122.76997022,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7315760.705548502,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26549507.508343685,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1039720526.0452563,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 866356798.9052556,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1323734586.1506813,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 743404135.5452374,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 116384972.91984016,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 890668303.1917547,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 534836827.42385304,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24000802.53232802,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 599291332.9236425,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6771655439.059786,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7606044862.256967,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8414499414.699029,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5260334065.830855,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 9883159082.8226,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8329534938.218157,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4561800526.311265,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4539906664.812158,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5195921856.224372,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3518581810.2056875,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5411160322.065845,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5242021618.959895,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3123050130.0728655,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 439742755.50371194,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3412058809.4128256,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2201981080.2162967,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 1776267875.9997401,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3471380361.3069286,
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
          "id": "20d92096b4d93d699be4493141e5d1664db80f39",
          "message": "Transfer field-valued surface emissivity and albedo to RRTMGP (#901)\n\n* BreezeRRTMGPExt: transfer field-valued surface emissivity and albedo to RRTMGP\n\nRRTMGP's surface boundary arrays `sfc_emis`, `sfc_alb_direct` and `sfc_alb_diffuse` are\nallocated with `undef` and stored by reference in `LwBCs`/`SwBCs`. Breeze filled them only\nwhen the user passed a scalar, so a `Field`-valued emissivity or albedo never reached the\nsolver, which read whatever the allocation happened to contain.\n\nAdd `update_rrtmgp_surface_boundary_conditions!`, a kernel that copies all three properties\nfrom their 2D fields into RRTMGP's (nband, ncolumn) arrays, with separate band loops since\nnband_lw and nband_sw differ. Scalars become `ConstantField`s so every property takes one\npath. Call it at construction and again before every solve, so a property that evolves is\npicked up rather than frozen. This replaces the `update_rrtmgp_surface_properties!` stub in\nthe gray model, which was a no-op.\n\nRoute `surface_emissivity` through `materialize_surface_property` alongside the albedos, so\nall three resolve the same way, and reject scalar fractions outside [0, 1] there.\n\nVerified against the imposed boundary conditions with column-varying properties: for clear-sky\nand all-sky, F↑(sfc)/F↓(sfc) equals the specified albedo to machine precision in every column,\nand the inferred longwave surface source is column-independent, exactly σT⁴ for gray optics.\nGray shortwave is unaffected because `NoScatSWRTE` does not reflect at the surface.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\n\n* BreezeRRTMGPExt: validate surface fractions once, and reuse RRTMGP's accessors\n\nReject a scalar emissivity or albedo outside [0, 1] at the top of each constructor with\n`validate_surface_fractions`, which names the offending keyword. The equivalent check\npreviously sat inside `materialize_surface_property`, where it was both unreachable (every\nconstructor validates first) and wrong in general: it narrowed an exported hook that should\nstay a pure converter, and rejected any surface property that is not a fraction.\n\nCollapse the nine near-identical `x isa Number` blocks, which after the previous commit did\nnothing but wrap a scalar, into `constant_field_property`. The rationale now lives in one\ndocstring rather than in a comment pasted into three files.\n\nReach the full-spectrum solver's boundary arrays through RRTMGP's published accessors\n(`surface_emissivity`, `direct_sw_surface_albedo`, `diffuse_sw_surface_albedo`) instead of\nhardcoding `solver.lws.bcs.sfc_emis`, and type the method on `RRTMGPSolver` so a wrong-shape\ncall is a `MethodError` rather than a failure deep inside. Gray optics keeps its own reach-in,\nsince RRTMGP publishes no accessors for the standalone `NoScatLWRTE`/`NoScatSWRTE` pair.\n\nIn the tests, take `rrtmgp_column_index` from the extension rather than copying it — that\nmapping is what the test exists to verify — and compare whole arrays so a failure reports the\nmismatch instead of `false`.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\n\n* BreezeRRTMGPExt: hold `ConstantField` fractions to the same range as the number it wraps\n\n`validate_surface_fractions` gated on `value isa Number`, so `surface_albedo = 30` was rejected\nbut `surface_albedo = ConstantField(30)` was not, even though the two describe the same thing: a\nfraction that is uniform in space and fixed in time. `ConstantField` is also what the model's own\n`show` output displays, so it is a plausible value to pass back in.\n\nSplit out `surface_fraction_scalar`, which reports the value behind a spatially uniform, constant\nproperty and `nothing` otherwise. A general `Field` still passes unvalidated, deliberately: its\ncontents may be rewritten before the next solve, so a check at construction would be false\nconfidence rather than a guarantee.\n\nReported by Copilot on #901.\n\nCo-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Opus 5 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-08-17T14:35:33-04:00",
          "tree_id": "f81ff8143a5a46a712b63bcb3f61e9e5e1e13a9c",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/20d92096b4d93d699be4493141e5d1664db80f39"
        },
        "date": 1786993860905,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 119962268.49470179,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 82062050.1149715,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 57760482.93601933,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 134891054.47525567,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 134891054.47525567,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 129710573.80651951,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 129710573.80651951,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 129710573.80651951,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 115913301.77202497,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 115913301.77202497,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91606379.16451654,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91606379.16451654,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86450727.05484344,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86450727.05484344,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 77536583.55409372,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 77536583.55409372,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 67643784.49990691,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 39647827.22495368,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7340743.934709763,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26413692.269929074,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1040948132.9521862,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 860542336.2708102,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1333864635.590997,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 745947955.6056404,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 116374526.45812276,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 893850100.6520754,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 537976051.9946903,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 24000764.21500741,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 610782381.8800963,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6542484867.67632,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7956279675.018827,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8358675582.738215,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5259665781.612272,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 9897957425.820847,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8168428022.649484,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4481277961.644963,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4529202274.587553,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5208186964.582177,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3479398922.0801954,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5351150496.89754,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5218817987.317225,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3093727447.1674457,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 439665660.28194845,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3376231331.5546484,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2184686224.033069,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 1778478451.0804408,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3450135622.289354,
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
          "id": "800cce12656c3401e7ff8f1980faa78548905952",
          "message": "Bump version number (#918)",
          "timestamp": "2026-08-19T20:32:58+01:00",
          "tree_id": "7bb6af3143d56fa10fffcb2d26e5e68ebef81793",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/800cce12656c3401e7ff8f1980faa78548905952"
        },
        "date": 1787185252127,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 121415902.39389189,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 83900153.29635121,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 58572818.64357731,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 133355397.15205094,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 133355397.15205094,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 128994594.35943857,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 128994594.35943857,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 128994594.35943857,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 116991942.23956712,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 116991942.23956712,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 91230560.94816674,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 91230560.94816674,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 86318259.79102628,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 86318259.79102628,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 78676691.60466123,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 78676691.60466123,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/vanilla 256x256x128",
            "value": 67179270.18612194,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_explicit; Microphysics: 1M_MixedNonEquilibrium [Float32]/Compare backends/NVIDIA L4/reactant 256x256x128",
            "value": 39539977.534385525,
            "unit": "points/s"
          },
          {
            "name": "CBL; AD; Dynamics: compressible_explicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/64x64x32",
            "value": 7244175.67656595,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 26318689.681398563,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 1036908611.9486802,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 867501985.295935,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 1310240738.5048687,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 740035065.2931925,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 116401051.54094775,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 880036105.3020955,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 531641745.04090667,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 23997312.24408924,
            "unit": "points/s"
          },
          {
            "name": "ModelTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 596659051.0664862,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 vanilla",
            "value": 6562327446.907784,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=true",
            "value": 7382135084.688636,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/F32 reactant raise=false",
            "value": 8614683129.363897,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 vanilla",
            "value": 5306481675.62519,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=true",
            "value": 10094618759.611937,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO5/NVIDIA L4/BF16 reactant raise=false",
            "value": 8959259045.653877,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 vanilla",
            "value": 4598471278.435045,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=true",
            "value": 4650040521.378769,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/F32 reactant raise=false",
            "value": 5343035194.725122,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 vanilla",
            "value": 3573420844.1336603,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=true",
            "value": 5436314254.255643,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO7/NVIDIA L4/BF16 reactant raise=false",
            "value": 5188700240.674408,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 vanilla",
            "value": 3163982178.6712523,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=true",
            "value": 440462645.4837763,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/F32 reactant raise=false",
            "value": 3476087058.315546,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 vanilla",
            "value": 2237225818.36135,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=true",
            "value": 1801582176.1956255,
            "unit": "points/s"
          },
          {
            "name": "ScalarTendency; Grid: 256x256x128/Advection: WENO9/NVIDIA L4/BF16 reactant raise=false",
            "value": 3541759588.192626,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}