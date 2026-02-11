window.BENCHMARK_DATA = {
  "lastUpdate": 1770818507861,
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
          "id": "22ffcaa7aa67f5192e6817a0e2d529a60125b59e",
          "message": "Enable Reactant compilation of + tracing through Breeze timestepping (#429)\n\n* Add BreezeReactantExt extension with custom time steppers\n\nIntroduces the BreezeReactantExt extension, providing specialized time stepping logic for Reactant-based models in Oceananigans. Implements custom Clock handling for TracedRNumber types and extends time stepping routines for QuasiAdamsBashforth2 and SSPRungeKutta3, ensuring compatibility with Reactant's traced number system.\n\n* Add Reactant and Enzyme dependencies\n\nAdded Reactant as a dependency and extension in Project.toml, and included Reactant and Enzyme in test/Project.toml with their respective version constraints. This prepares the project and tests for features or integrations requiring these packages.\n\n* Export new functions and add Enzyme integration tests\n\nExports store_initial_state! and ssp_rk3_substep! in TimeSteppers.jl. Adds enzyme.jl integration tests for Reactant/Enzyme automatic differentiation with SSPRungeKutta3, including compilation and gradient computation checks.\n\n* Renames test/enzyme.jl to test/differentiation.jl\n\nSee name.\n\n* Changes BreezeReactantExt to avoid Oceananigans type piracy\n\nOnly modifies time stepping for BreezeModels that use SSPRK3 (though this may change later if Oceananigans models begin to use SSPRK3). Updates differentiation.jl to no longer use WENO advection\n\n* Cleans up code, adds trailing newline\n\nSee above\n\n* Add compat bound for Reactant in top-level project\n\n* Skip Enzyme/Reactant tests in Julia v1.12\n\n* [CI] Increase timeout\n\n* [CI] Prevent Reactant from squatting all the GPU memory\n\n* [CI] Temporarily install dev versions of Malt and ParallelTestRunner\n\nThis will show the output of crashed jobs.\n\n* Revert \"[CI] Temporarily install dev versions of Malt and ParallelTestRunner\"\n\nThis reverts commit 26336c39606ab27ee03d711ff2bf288db5736d3e.\n\nFighting the package manager isn't fun.\n\n* Add 3D bounded topology differentiation tests\n\nIntroduces a new testset for Reactant/Enzyme differentiation using a 3D bounded topology grid. The tests verify compilation and gradient computation for the loss function, complementing existing periodic topology tests.\n\n* Update differentiation test to 2D grid and 1 step\n\nChanged the test grid from 3D to 2D, updated topology to (Bounded, Bounded, Flat), and reduced the number of steps from 4 to 1. Adjusted field initialization functions to match the new grid dimensions.\n\n* Update Reactant version and customize test worker\n\nBumps Reactant dependency from 0.2.203 to 0.2.210 in test/Project.toml. Modifies runtests.jl to use a custom ParallelTestRunner worker that omits the --check-bounds flag, preventing Reactant crashes during testing.\n\n* Added tests for reactant_compilation\n\n* Delete test/differentiation.jl\n\n* Fix whitespace\n\n* Tests update\n\nRe-factored reactant_compilation test, turned off testing said file on Julia 1.12\n\n* Fixing runtests.jl\n\n* Added more topologies\n\n* Whitespace (sorry Mose i will use pre-commits)\n\n* Remove mixed topology test for PR purposes\n\n* Update .github/workflows/CI.yml\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update .github/workflows/CI.yml\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n---------\n\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-02-09T15:53:11-08:00",
          "tree_id": "3769beb8b1cce60f9433b3226d61daaf1f088211",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/22ffcaa7aa67f5192e6817a0e2d529a60125b59e"
        },
        "date": 1770682076902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 134167053.21133572,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 117918869.13385643,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 104583493.51879,
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
          "id": "bde730f667e330e4c46166e56d5b7cf002156fb2",
          "message": "Change kernel launching to `:xyz` to support further Reactant integration (#461)\n\n* Change kernel launching to support Reactant integration\n\n* Comment out stale imports\n\n* Update update_atmosphere_model_state.jl\n\n---------\n\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-02-09T17:28:42-08:00",
          "tree_id": "a69efc7e5cf378235ad1e5103ed662c602bdc9bc",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/bde730f667e330e4c46166e56d5b7cf002156fb2"
        },
        "date": 1770687336167,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 134517483.22989073,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 118585561.16742489,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 102415650.41449913,
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
          "id": "509910dd1d884dfec78fec9e8a163748467a8e8a",
          "message": "[examples] Tropical Cyclone World via Cronin and Chavas (2019) (#100)\n\n* draw up a basic script\n\n* Update examples/tropical_cyclone_world.jl\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* continued work on example\n\n* plotting dir changes\n\n* piecewiese radiative forcing\n\n* use temperature in radiative forcing\n\n* added a sponge\n\n* runs for 12hrs on GPU\n\n* 48hr overnight run config, remove paper from repo\n\n- Update simulation to 48hr stop time with adjusted output intervals\n- Remove paper markdown from git (kept locally, added to .gitignore)\n- Output schedules: surface 30min, profiles 1hr, 3D fields 6hr, checkpoints 6hr\n\n* fix: match paper configuration exactly for TC world example\n\n- Implement paper-exact stretched vertical grid:\n  - 64 levels in lowest 1 km (Δz = 15.625 m)\n  - 500 m spacing above 3.5 km\n  - Linear transition from 1-3.5 km\n  - Total 133 levels\n\n- Add full SAM-like sponge layer damping all fields:\n  - ρu, ρv, ρw relax toward zero\n  - ρθ relaxes toward initial ρ(z) × θ(z) profile\n  - Prevents heat accumulation at model top\n\n- Use SmagorinskyLilly closure for scale-aware LES\n\n- Fix notation: Cₖ → Cᵀ (following notation.md)\n\n- Fix GPU→CPU array conversion for profile plotting\n\n- Delete redundant tropical_cyclone_world.jl (keep only v2)\n\nAddresses PR #100 review comments.\n\n* wip: forcings\n\n* wip: initialization fix\n\n* added perturbations\n\n* working moist tc-world\n\n* Cleanup whitespace\n\n* rename example without _v2\n\n* add tropical cyclone world case to docs\n\n* Fix inline comments in Literate example\n\n* add citation\n\n* Add PiecewiseStretchedDiscretization and rewrite TC world example\n\nAdd a new PiecewiseStretchedDiscretization utility (src/VerticalGrids.jl) that\nconstructs stretched vertical grids with piecewise-linear spacing transitions\nbetween breakpoints. The type subtypes AbstractVector{Float64} so it can be\npassed directly to RectilinearGrid as a coordinate argument.\n\nRewrite the tropical_cyclone_world.jl example to use the new utility, adopt\nliterate tutorial style matching BOMEX/RICO examples, use analytical Exner\nfunction initialization (no Array conversion), simplify visualization, and\nremove experiment directory / config file machinery.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Simplify!\n\n* comment out examples except TC world\n\n* clean up and cheapen\n\n* address scope issue\n\n* clean up\n\n* fix docs bug\n\n* use F64?\n\n* [CI] Increase timeout for docs building job\n\n* Revert \"[CI] Increase timeout for docs building job\"\n\nThis reverts commit d071d2566f71d93533855f23f170ae681d9ab6c3.\n\n* add potential temperature sponge and run with f32\n\n* Fix citation style\n\n* Improve Float32 stability for tall-domain anelastic simulations\n\n- Rewrite anelastic buoyancy as ρᵣ(RᵐᵣTᵣ/(RᵐT) - 1) to avoid catastrophic\n  cancellation when subtracting large, nearly-equal densities\n- Extend ReferenceState with temperature and moisture fields; add\n  compute_reference_state! for recomputing reference profiles from T/q data\n- Default moisture fields to ZeroField (no allocation for dry setups);\n  pass =0 to get actual Fields for moist reference states\n- Add BulkSensibleHeatFlux formulation dispatch (PotentialTemperatureFlux\n  vs StaticEnergyFlux) with automatic ρe→ρθ BC conversion\n- Add set_to_mean! for runtime reference state updates via callbacks\n- Return BinaryOperation from DCMIP2016 liquid_mass_fraction (not tuple)\n- Update TC World example with compute_reference_state!, Float32, sponge\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Update TC World example descriptions and parameters\n\nSimplify sponge layer (remove θ sponge, keep only ρw Rayleigh damping),\nfix domain/grid comments to match actual parameters (288 km, 3 km resolution,\n62.5 m vertical spacing), update stop time to 8 days, and streamline\ndiscussion section to be self-contained.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add .claude/ and benchmark JSON to .gitignore\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Ignore all *.json files\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix prek link in contributing docs to avoid linkcheck timeout\n\nThe prek.j178.dev site times out in CI, causing the docs build to fail.\nPoint to the GitHub repository instead.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Revert \"Fix prek link in contributing docs to avoid linkcheck timeout\"\n\nThis reverts commit fc63a7402d593e674d785e8de313fce7ac3a5506.\n\n* Add trailing slash to CloudMicrophysics docs link\n\nFixes 301 redirect warning in linkcheck.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* run 6 days not 8 days\n\n* Update src/Thermodynamics/reference_states.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update src/Thermodynamics/reference_states.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update src/Thermodynamics/reference_states.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Add tests for ReferenceState and compute_reference_state!\n\nTests cover:\n- Default constructor produces ZeroField moisture\n- Constructor with moisture=0 allocates actual Field\n- Constructor with moisture function profile\n- surface_density(ref::ReferenceState)\n- compute_reference_state! with dry isothermal atmosphere (analytical verification)\n- compute_reference_state! with moist isothermal atmosphere (analytical verification)\n- compute_reference_state! 5-argument form with individual mass fractions\n- compute_reference_state! with function profiles (monotonicity checks)\n- compute_reference_state! overwrites previous state\n\nAll tests pass for both Float32 and Float64.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* export BoundaryConditionOperation\n\n* export BoundaryConditionOperation\n\n* try new resolution\n\n* updates\n\n* uncomment\n\n* Use weno5 for theta and qt\n\n* final tweaks\n\n* Shorten sim and add other examples\n\n* Include set_to_mean! in AtmosphereModels and add tests\n\n- Add `using Statistics: mean!` to set_to_mean.jl (was missing)\n- Include set_to_mean.jl in AtmosphereModels module\n- Export set_to_mean!\n- Add tests for vapor/liquid/ice_mass_fraction accessors\n  (both Nothing and SaturationAdjustment microphysics)\n- Add tests for set_to_mean! with dry and moist reference states\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Increase timeout of docs build\n\n---------\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\nCo-authored-by: Nawibot <tobias.bischoff@pm.me>\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-11T06:49:40-07:00",
          "tree_id": "18558cc306c0c9c1a3f4404be643fc9c6eba7ff2",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/509910dd1d884dfec78fec9e8a163748467a8e8a"
        },
        "date": 1770818507366,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 134772651.56799644,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 118362741.4363519,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 104196269.04662728,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}