window.BENCHMARK_DATA = {
  "lastUpdate": 1771389161994,
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
          "id": "4db7a2701e1e76ec3076a6fadb40ec6b88b61d4f",
          "message": "Show forcing and thermodynamic constants in AtmosphereModel display (#469)\n\n* Show AtmosphereModel forcing and thermodynamic constants\n\n* Adjust forcing display default summary per review\n\n* Fix AtmosphereModel doctest forcing field order",
          "timestamp": "2026-02-12T14:20:53-08:00",
          "tree_id": "3509e781f34988d6c848227097027b6e9bc5e7ef",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/4db7a2701e1e76ec3076a6fadb40ec6b88b61d4f"
        },
        "date": 1770935531050,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 135486553.63506183,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 118566965.53655043,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 103471970.05394395,
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
          "id": "dfe46d1217129779010d19844f8aaf6a4ca439a2",
          "message": "CCN activation for 2M microphysics (#420)\n\n* Refactor microphysics interface\n\n* implement parcel dynamics\n\n* clean up\n\n* restructure\n\n* fix exdmaple\n\n* actually use AtmosphereModel in example\n\n* fix example\n\n* fix\n\n* interpolate\n\n* work towards the implementation we want\n\n* Remove stale imports\n\n* Remove undefined exports\n\n* Clean up whitespaces\n\n* canonicalize parcel dynamics further\n\n* clean up\n\n* fix docstrings\n\n* Update README.md\n\n* Revise wording for clarity in roadmap section\n\n* Clarify description of Breeze library features\n\n* Fix typo in AtmosphereModel description\n\n* refine microphysics interface\n\n* vastly simplify microphysics interface\n\n* update docs for microphysics interface\n\n* Fix formatting issue in README.md\n\n* Clarify introduction in example microphysics documentation\n\nReworded the introduction for clarity.\n\n* Clarify summary for implementing microphysics scheme\n\n* Update future_improvements.md\n\n* fix docs\n\n* support setting potential temperature\n\n* eliminate code duplications\n\n* fix tests\n\n* fix docs errors\n\n* fix broken refs\n\n* ignore build/\n\n* rm trailing whitespace\n\n* rm trailing whitespace\n\n* delete unused file\n\n* revert\n\n* Update README.md\n\nCo-authored-by: kaiyuan-cheng <74800123+kaiyuan-cheng@users.noreply.github.com>\n\n* Update docs/src/developer/microphysics/future_improvements.md\n\nCo-authored-by: kaiyuan-cheng <74800123+kaiyuan-cheng@users.noreply.github.com>\n\n* evolve specific quantities rather than densities (easier for Lagrangian frame)\n\n* clean up literate example\n\n* make example more interesting\n\n* improve tests\n\n* fix citation\n\n* more exports to fix example\n\n* Update docs/make.jl\n\n* clean up\n\n* Apply suggestions from code review\n\n* fix discussion\n\n* update visualization\n\n* ccn activation\n\n* fix\n\n* fix\n\n* clean up\n\n* prognostic aerosol\n\n* rename function\n\n* notation\n\n* restore\n\n* blank lines\n\n* clean up\n\n* remove aerosol activation timescale\n\n* refactor\n\n* notation\n\n* clean up\n\n* trailing newline\n\n* docstring\n\n* aerosol activate tendency\n\n* unit test\n\n* unit test\n\n* unit test\n\n* bibliography\n\n* grid-based CCN activation\n\n* notation.md\n\n* Update ext/BreezeCloudMicrophysicsExt/two_moment_microphysics.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/cloud_microphysics_translations.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/cloud_microphysics_translations.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/cloud_microphysics_translations.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/two_moment_microphysics.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/two_moment_microphysics.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/two_moment_microphysics.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* fix\n\n* rename\n\n* update\n\n* fix\n\n* ifelse\n\n* activation radius\n\n* whtespace\n\n* aerosol activation mass\n\n* remove optional arguments\n\n* clean up\n\n* fix\n\n* fix and clean up\n\n* Revert \"fix and clean up\"\n\nThis reverts commit 250d3598ff2ac7604ae61e09412c667b37aba114.\n\n* fix\n\n* clean up\n\n* fix activated radius\n\n* notation\n\n* update\n\n* eliminate timestep dependecy from microphysics interface\n\n* index name\n\n* succinct arguments\n\n* Avoid pow\n\n* fix\n\n* function dispatch\n\n* function dispatch\n\n* fix\n\n* clean up\n\n* fix\n\n* fix\n\n* pass a tuple of velocities\n\n* notation\n\n* delete test file\n\n* notation\n\n* Update ext/BreezeCloudMicrophysicsExt/cloud_microphysics_translations.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* nucleation timescale\n\n* Update ext/BreezeCloudMicrophysicsExt/two_moment_microphysics.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/cloud_microphysics_translations.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/cloud_microphysics_translations.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/cloud_microphysics_translations.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/cloud_microphysics_translations.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Update src/AtmosphereModels/microphysics_interface.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Update src/AtmosphereModels/microphysics_interface.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* velocities argument consistency\n\n* notation\n\n* pretty math expression\n\n* notation\n\n* prettier math\n\n* notation\n\n* automatic ccn initialization\n\n* whitespace\n\n* Reactant weekdeps\n\n* update\n\n* fix\n\n* fix\n\n* fix\n\n* notation update\n\n* CI fix\n\n* add 2M microphysics to example\n\n---------\n\nCo-authored-by: Gregory Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-02-13T16:27:27-05:00",
          "tree_id": "fc3f16e3c44da16641ce0c365aafde6b489b09ab",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/dfe46d1217129779010d19844f8aaf6a4ca439a2"
        },
        "date": 1771018866179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 132747379.70617078,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 117573913.86882886,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 100857159.93068862,
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
          "id": "aa3c49c1d6a1977a327380f925ffa1a8966c6a9a",
          "message": "Wind and stability-dependent bulk transfer coefficients (#471)\n\n* Add PolynomialBulkCoefficient for wind and stability-dependent transfer coefficients\n\nImplement wind speed and stability-dependent bulk transfer coefficients\nfollowing Large and Yeager (2009). This replaces constant drag/transfer\ncoefficients with a polynomial form C_N(U₁₀) = (a₀ + a₁ U₁₀ + a₂/U₁₀) × 10⁻³\nthat captures enhanced drag at high wind speeds and light-wind behavior.\n\nKey features:\n- Neutral coefficient polynomial (Large & Yeager 2009) with default\n  coefficients for momentum, sensible heat, and latent heat\n- Height adjustment from 10m reference via logarithmic profile theory\n- Bulk Richardson number stability correction (unstable enhances,\n  stable suppresses transfer)\n- Backward compatible: existing constant coefficients still work\n- Convenience constructors auto-select appropriate coefficients per flux type\n\nInfrastructure changes:\n- Rename regularize → materialize for atmosphere model boundary conditions\n- Pre-create diagnostic fields (temperature, specific_moisture) before BC\n  materialization to support VirtualPotentialTemperature in stability correction\n- Add grid-based VirtualPotentialTemperature constructor (no model required)\n- Add virtual_potential_temperature field to BulkSensibleHeatFlux/BulkVaporFlux\n- Add evaluate_drag_coefficient and evaluate_scalar_coefficient dispatch\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Rename to PolynomialCoefficient, lazy VPT creation, materialize BC chain\n\n- Rename PolynomialBulkCoefficient → PolynomialCoefficient\n- Rename regularize_atmosphere_field_bcs → materialize_atmosphere_field_bcs\n- Rename regularize_atmosphere_boundary_condition → materialize_atmosphere_boundary_condition\n- Delay VirtualPotentialTemperature creation until a PolynomialCoefficient\n  is encountered during BC materialization (lazy creation via\n  maybe_create_virtual_potential_temperature dispatch)\n- Propagate microphysical_fields, specific_moisture, temperature through\n  the full materialization chain instead of a pre-created VPT\n- Expand BulkDragFunction with surface_temperature, surface_pressure,\n  thermodynamic_constants, virtual_potential_temperature for full\n  stability correction support\n- Dispatch evaluate_drag_coefficient on BulkDragFunction struct to avoid\n  accessing nothing fields for constant coefficients\n- Export PolynomialCoefficient from Breeze\n- Fix gas_constant access to use dry_air_gas_constant/vapor_gas_constant\n- Update example to pass surface_temperature to BulkDrag\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Store VPT, surface_pressure, and constants inside PolynomialCoefficient\n\nMove virtual_potential_temperature, surface_pressure, and\nthermodynamic_constants from flux function structs into the\nPolynomialCoefficient struct itself, making it self-contained.\n\n- PolynomialCoefficient callable is now (coef)(i, j, grid, U, T₀)\n  and handles stability correction internally\n- Simplify BulkDragFunction back to 4 fields\n- Remove virtual_potential_temperature from BulkSensibleHeatFluxFunction\n  and BulkVaporFluxFunction\n- Replace maybe_create_virtual_potential_temperature with\n  materialize_coefficient dispatch\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Clean up PolynomialCoefficient: fix @inbounds, remove unused params, simplify interface\n\n- Fix @inline → @inbounds on VPT field access in apply_stability_correction\n- Pass grid instead of z to apply_stability_correction (compute znode internally)\n- Remove unused κ parameter and FT variable from adjust_coefficient_for_height\n- Remove double blank line, fix misleading comment\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Rename apply_stability_correction to stability_corrected_coefficient; use h for height\n\n- Rename apply_stability_correction → stability_corrected_coefficient with\n  signature (i, j, grid, coef, Cz, U, T₀)\n- Use h (height) instead of z throughout height adjustment, Richardson number,\n  and callable interface for clearer notation\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Rename neutral_coefficients to polynomial; add default polynomial constants\n\nDisambiguate \"coefficient\" (the bulk transfer coefficient Cᴰ, Cᵀ, Cᵛ) from\n\"polynomial\" (the tuple (a₀, a₁, a₂) used to build the coefficient):\n\n- Rename struct field neutral_coefficients → polynomial\n- Add named constants at the top of the file:\n  - default_neutral_drag_polynomial\n  - default_neutral_sensible_heat_polynomial\n  - default_neutral_latent_heat_polynomial\n  with reference to Large & Yeager (2009)\n- Use constants in BulkDrag/BulkSensibleHeatFlux/BulkVaporFlux constructors\n- Export the constants from BoundaryConditions module\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Replace default_stability_function with DefaultStabilityFunction callable struct\n\n- Convert from plain function to callable struct so it can have a nice\n  Base.show displaying the math formula for both branches\n- Show minimum_wind_speed and stability_function in PolynomialCoefficient display\n- Export DefaultStabilityFunction instead of default_stability_function\n- Clarify surface_virtual_potential_temperature docstring: δᵛᵈ ≈ 0.608\n  is specific to water vapor and depends on the user-provided constants\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Use dispatch instead of if-nothing for BulkDrag/Heat/Vapor constructors\n\nDispatch on NothingPolynomialCoefficient (polynomial === nothing) to fill\nin the default polynomial, then forward to the general method. Removes\nthe if-isnothing branches from each constructor.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Inline height adjustment into coefficient evaluation\n\nThe logarithmic profile height correction C(h) = C₁₀ × [ln(10/ℓ)/ln(h/ℓ)]²\nwas only used in one place, so inline it directly into the callable interface\nrather than keeping it as a separate function.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Unify bulk_coefficient interface and standardize (i, j, grid) signatures\n\nReplace evaluate_drag_coefficient and evaluate_scalar_coefficient with a\nsingle bulk_coefficient(i, j, grid, C, fields, T₀) dispatching on Number\nand PolynomialCoefficient. Standardize bulk_sensible_heat_difference to\n(i, j, grid, ...) form. Add surface_temperature kwarg to BulkDragFunction.\nFix neutral_coefficients → polynomial rename in materialize_coefficient.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix include order: move Function outer constructors after struct definitions\n\nThe NothingPolynomialCoefficient outer constructors for BulkDragFunction,\nBulkSensibleHeatFluxFunction, and BulkVaporFluxFunction must be defined\nafter the struct definitions so they add methods to the existing constructors\nrather than creating new functions.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix BC regularization order: regularize before creating microphysical fields\n\nMove regularize_field_boundary_conditions before materialize_microphysical_fields\nso that boundary conditions are validated for grid topology before being passed\nto CenterField constructors. Re-regularize after atmosphere BC materialization.\nUse distinct variable name for early regularization to avoid Core.Box.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add PolynomialCoefficient integration tests and complete example TODOs\n\n- Add full model build + time step tests with PolynomialCoefficient\n  (with and without stability correction) in forcing_and_boundary_conditions.jl\n- Complete TODO: add bulk Richardson number and stability-corrected\n  coefficient math to prescribed SST example documentation\n- Complete TODO: add plot of transfer coefficient vs wind speed for\n  neutral, unstable, and stable conditions\n- Export DefaultStabilityFunction and default polynomial constants from Breeze\n- Fix BulkDrag name collision with explicit Breeze import in example\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix Uᵍ comment: it's gustiness, not minimum wind speed\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Apply suggestions from code review\n\n* Bump version from 0.3.1 to 0.3.2\n\n* Apply suggestion from @navidcy\n\n* Simplify drag coefficient plot: use neutral_coefficient_10m with shaded stability band\n\nUse existing helper functions instead of manually reconstructing the coefficient.\nShade the region between warm-SST (unstable) and cold-SST (stable) bounds\nfrom the actual simulation SST range.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add three stability lines plus shaded simulation range to drag coefficient plot\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Separate stability lines (±10 K) from simulation shaded band (±2 K)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add stability correction factor panel to drag coefficient plot\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add surface field to PolynomialCoefficient\n\nThe surface type (liquid, ice) affects the saturation specific humidity\nused in the stability correction's virtual potential temperature.\nDefault is PlanarLiquidSurface().\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Unify notation: Ri_b → Ri, U₁₀ → U_h, C_N → C^N_{10} throughout\n\nMake docstrings, show methods, and example consistent with the\nnotation that the polynomial takes U_h (wind at measurement height)\nas input, not U₁₀.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix test: add missing surface argument to positional constructor\n\nThe PolynomialCoefficient struct now has a surface field, so the\npositional constructor in the callable interface test needs 8 args.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix Core.Box: rename preliminary microphysical_fields to avoid reassignment\n\nThe variable microphysical_fields was assigned twice in the AtmosphereModel\nconstructor (once for BC materialization, once after re-regularization),\ncausing the compiler to box it. Use a distinct name for the first assignment.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* add commented parts\n\n* cleaner fig\n\n* link to Oceananigans.Models.BoundaryConditionOperation\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-02-13T22:33:39-07:00",
          "tree_id": "30fd61e1dcf66cbe6a6b9267fba7f11028af4dc6",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/aa3c49c1d6a1977a327380f925ffa1a8966c6a9a"
        },
        "date": 1771048053752,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 134449557.41426387,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 117937694.96188429,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 103225541.46345888,
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
          "id": "b764d2ef4ba887def0d4c5724e1c5b411afd948b",
          "message": "Some small fixes detected by JETLS (#477)\n\n* Add JETLS configuration\n\n* Resolve some `UndefVarError`s\n\n* Some cleanup in `test/forcing_and_boundary_conditions.jl`\n\n* [jetls] Disable flaky unused import check\n\n`ExplicitImports` is a lot more reliable anyway.\n\n* Remove execution permissions from `src/AtmosphereModels/update_atmosphere_model_state.jl`",
          "timestamp": "2026-02-15T15:20:57Z",
          "tree_id": "8d1421ca00a70f7774abbf5a72feefe473ac8d04",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b764d2ef4ba887def0d4c5724e1c5b411afd948b"
        },
        "date": 1771169538824,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 133233597.88003747,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 117448252.68234724,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 102178557.70134503,
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
          "id": "1a61f48066332a09d590a6bd05ad386351e9dd5a",
          "message": "[CI] Bump minimum Julia version to v1.11.9 (#470)\n\n* [CI] Run tests with Julia v1.11\n\n* Upgrade v1.12 series to v1.12.5\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>\n\n* Bump minimum version to Julia v1.11.9\n\n---------\n\nCo-authored-by: Navid C. Constantinou <navidcy@users.noreply.github.com>",
          "timestamp": "2026-02-17T01:17:00Z",
          "tree_id": "57c7f18e0b79706453acec83c921e93aca469930",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/1a61f48066332a09d590a6bd05ad386351e9dd5a"
        },
        "date": 1771291664356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 131629142.31044206,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 115931921.47183064,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 98682717.9587039,
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
          "id": "8e705b7f63c08525f1a93f0d20acd0a35eb53162",
          "message": "Replace DefaultStabilityFunction with Li et al. (2010) fitted stability correction (#479)\n\nImplement physically-based stability corrections for bulk transfer coefficients\nusing the Li et al. (2010) non-iterative Ri_B → ζ mapping with Hogström (1996)\nand Beljaars & Holtslag (1991) integrated stability functions.\n\nKey changes:\n- Add FittedStabilityFunction with RichardsonNumberMapping and\n  StabilityFunctionParameters structs (all coefficients parameterized)\n- Remove DefaultStabilityFunction\n- Apply structurally correct corrections: [α/(α-Ψᴰ)]² for momentum,\n  [α/(α-Ψᴰ)][βh/(βh-Ψᵀ)] for scalars\n- Add transfer_type field to PolynomialCoefficient (Val(:momentum) or Val(:scalar))\n- Use Oceananigans.defaults.FloatType for default precision\n- Standardize notation: Ψᴰ/Ψᵀ, Cᴰ/Cᵀ, Riᴮ, γᴰ/γᵀ per notation.md\n- Use unicode subscripts for mapping coefficients (aᵘ₁₁, bʷ₁₂, aˢ₁₁, etc.)\n- Use sqrt(sqrt(x)) instead of x^(1/4) for GPU performance\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-17T12:03:45-07:00",
          "tree_id": "9526926cc0730a3b31d20b21c3809d87185d33cb",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/8e705b7f63c08525f1a93f0d20acd0a35eb53162"
        },
        "date": 1771355691102,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 134152913.12544344,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 118530471.84948044,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 101429418.52021563,
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
          "id": "6b4bd3c9192f86a45f2efa3032883531a3b71d3d",
          "message": "Bump version from 0.3.2 to 0.3.3 (#481)",
          "timestamp": "2026-02-17T15:40:55-07:00",
          "tree_id": "e5d896f836429a39090311f0a40d7676fc7e7ca6",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/6b4bd3c9192f86a45f2efa3032883531a3b71d3d"
        },
        "date": 1771368863009,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 132855012.16073412,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 116877567.60049823,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 101354384.30257797,
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
          "id": "7647c9339326894b792d97eb76c32fa4bdb48b15",
          "message": "Add some refs + fix latex rendering in docstrings (#487)\n\n* fix latex rendering\n\n* add refs",
          "timestamp": "2026-02-18T15:24:43+11:00",
          "tree_id": "92ef5f10b591af6588400bdb3bfb383333541b2a",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/7647c9339326894b792d97eb76c32fa4bdb48b15"
        },
        "date": 1771389161483,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/128x128x128",
            "value": 134671793.19265485,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/384x384x256",
            "value": 117954523.19742209,
            "unit": "points/s"
          },
          {
            "name": "CBL_F32/WENO5/NVIDIA L4/768x768x256",
            "value": 101332575.92680794,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}