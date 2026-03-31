window.BENCHMARK_DATA = {
  "lastUpdate": 1774983647553,
  "repoUrl": "https://github.com/NumericalEarth/Breeze.jl",
  "entries": {
    "Breeze.jl Benchmarks": [
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134167053.21133572,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 117918869.13385643,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134517483.22989073,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 118585561.16742489,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134772651.56799644,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 118362741.4363519,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 135486553.63506183,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 118566965.53655043,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 132747379.70617078,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 117573913.86882886,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134449557.41426387,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 117937694.96188429,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 133233597.88003747,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 117448252.68234724,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 131629142.31044206,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 115931921.47183064,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134152913.12544344,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 118530471.84948044,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 132855012.16073412,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 116877567.60049823,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
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
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134671793.19265485,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/384x384x256",
            "value": 117954523.19742209,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101332575.92680794,
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
          "id": "79e77ec04f8f0ab6d8ed8e1e2fff54ff6af823b6",
          "message": "Add dynamics and microphysics benchmark suites (#482)\n\n* Add dynamics and microphysics benchmark suites\n\nGeneralize the benchmark script to support compressible dynamics\n(fully explicit and split-explicit with 12 fixed acoustic substeps).\nAdd dynamics and microphysics matrix jobs to the CI benchmark workflow,\nboth at 512x512x256 resolution. Update the publish step to merge\nresults from all benchmark artifact directories.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix benchmark failures: wrong keyword and GPU adapt\n\n- Fix SaturationAdjustment keyword: phase_equilibrium → equilibrium\n- Add Adapt.adapt_structure for SlowTendencyMode and HorizontalSlowMode\n  so CompressibleDynamics fields are properly adapted for GPU kernels\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* [CI] Reduce duplication in benchmark workflow\n\n* DROP ME: temporarily skip all other workflows\n\n* [CI] More explicit options for benchmarks\n\n* More explicit names for benchmark results\n\nThis will make it easier to parse later on.\n\n* DROP ME: push to a preview subdir\n\n* [CI] Fix script for aggregating benchmark results across different runs\n\n* Try different grouping scheme\n\n* Reduce number of jobs\n\nAlso drop one grid size\n\n* [CI] Change grouping of published benchmarks\n\n* Dummy commit just to get new datapoints\n\n* [CI] Commit is in `github.sha`, not `github.ref`\n\n* Revert \"DROP ME: push to a preview subdir\"\n\nThis reverts commit 0bf18f5fc4fb3c492bccce6dd363565e6c4ec074.\n\n* Revert \"DROP ME: temporarily skip all other workflows\"\n\nThis reverts commit e0988709abd1348638a528c9714fb4fbb30e5e14.\n\n* [CI] Fix pushing of results to benchmarks repo\n\nWe now have multiple directories for the different artifacts/runs, let's copy\nall the directories.\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-02-20T01:35:59Z",
          "tree_id": "10c764b348cffe21b3242033f7e162a4ee2942d1",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/79e77ec04f8f0ab6d8ed8e1e2fff54ff6af823b6"
        },
        "date": 1771552420052,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 131334860.64935237,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112319658.87270217,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112319658.87270217,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 103368479.64954484,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15007340.357742371,
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
          "id": "d01bab1c1417b66712ef0b2c4f25a7da20ee6304",
          "message": "Update CloudMicrophysics requirement from 0.29.0, 0.30 to 0.31.4 (#459)\n\n* Update CloudMicrophysics requirement from 0.29.0, 0.30 to 0.29.0, 0.30, 0.31\n\nUpdates the requirements on [CloudMicrophysics](https://github.com/CliMA/CloudMicrophysics.jl) to permit the latest version.\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/commits/v0.31.4)\n\n---\nupdated-dependencies:\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.31.4\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* Manually update compat bounds in other projects of the workspace\n\n* Fix import of `ϵ_numerics` from `CloudMicrophysics`\n\n* Remove `using Breeze`\n\n* Require CloudMicrophysics v0.31.4 everywhere\n\nThere was a breaking change in a patch version.  Again.  Sigh.\n\n* One more environment\n\n* Set value of `N_0` for `CloudLiquid`\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-02-20T01:58:37Z",
          "tree_id": "ca79470cff45ab146a625d99c7b629fc253f1b13",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/d01bab1c1417b66712ef0b2c4f25a7da20ee6304"
        },
        "date": 1771553751216,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 130734762.57124475,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111032860.99593434,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111032860.99593434,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 99488403.68119709,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15351498.419958966,
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
          "id": "a59773cb0148a5c8c0be6b5bbb22404448407a22",
          "message": "[benchmarks] Actually use microphysics (#496)\n\n* [benchmarks] Actually use microphysics\n\n* [CI] Also trigger benchmarks when editing the `benchmarking` directory\n\n* Fix Float64/Float32 mismatch in microphysics constructors\n\nSet Oceananigans.defaults.FloatType at the top of the benchmark loop\nso microphysics constructors pick up the correct precision. Previously\nthe default was still Float64 when make_microphysics was called,\nbecause convective_boundary_layer (which sets the default) runs later.\n\nAlso simplify constructors to use bare defaults instead of threading FT\nexplicitly, and fix WarmPhaseEquilibrium(FT) calls (it's a singleton).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* [benchmarkings] Also default closure to `nothing`\n\n* [benchmarking] Record advection, closure, dynamics, and microphysics in results\n\n* [benchmarkings] Allow other `AbstractString`s as input\n\n* [CI] Read advection, closure, dynamics, float type, and microphysics from results file\n\n* [CI] Don't push Markdown files to BreezeBenchmarks\n\n* [benchmarks] Simplify benchmark name\n\n* [CI] Push only single merged file\n\n* DROP ME: test\n\n* [CI] Why oh Python why you can't handle UTF-8 out-of-the-box\n\n* Revert \"DROP ME: test\"\n\nThis reverts commit 16950904f8f280ff17b9bfe1002a19bec97bf5f1.\n\n---------\n\nCo-authored-by: Gregory Wagner <gregory.leclaire.wagner@gmail.com>\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-02-20T13:51:44+01:00",
          "tree_id": "6750e2aac7157a0384244898c791894d01c9bd10",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/a59773cb0148a5c8c0be6b5bbb22404448407a22"
        },
        "date": 1771592794624,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108877582.29197611,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 79327420.66645117,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 61628136.15874003,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134317798.06915206,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 110521270.83369052,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 110521270.83369052,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 96214360.72326364,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14632589.437341904,
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
          "id": "6cb33b911b743a610d0b4b19ebfff0dcbecb41fa",
          "message": "Bump the per-dependency/Oceananigans group across 5 directories with 1 update (#499)\n\n* Bump the per-dependency/Oceananigans group across 5 directories with 1 update\n\nUpdates the requirements on  and [Oceananigans](https://github.com/CliMA/Oceananigans.jl) to permit the latest version.\n\nUpdates `Oceananigans` to 0.105.0\n- [Release notes](https://github.com/CliMA/Oceananigans.jl/releases)\n- [Commits](https://github.com/CliMA/Oceananigans.jl/compare/v0.104.2...v0.105.0)\n\nUpdates `Oceananigans` to 0.105.0\n- [Release notes](https://github.com/CliMA/Oceananigans.jl/releases)\n- [Commits](https://github.com/CliMA/Oceananigans.jl/compare/v0.104.2...v0.105.0)\n\nUpdates `Oceananigans` to 0.105.0\n- [Release notes](https://github.com/CliMA/Oceananigans.jl/releases)\n- [Commits](https://github.com/CliMA/Oceananigans.jl/compare/v0.104.2...v0.105.0)\n\nUpdates `Oceananigans` to 0.105.0\n- [Release notes](https://github.com/CliMA/Oceananigans.jl/releases)\n- [Commits](https://github.com/CliMA/Oceananigans.jl/compare/v0.104.2...v0.105.0)\n\nUpdates `Oceananigans` to 0.105.0\n- [Release notes](https://github.com/CliMA/Oceananigans.jl/releases)\n- [Commits](https://github.com/CliMA/Oceananigans.jl/compare/v0.104.2...v0.105.0)\n\n---\nupdated-dependencies:\n- dependency-name: Oceananigans\n  dependency-version: 0.105.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: Oceananigans\n  dependency-version: 0.105.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: Oceananigans\n  dependency-version: 0.105.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: Oceananigans\n  dependency-version: 0.105.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: Oceananigans\n  dependency-version: 0.105.0\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\n\n* Rename `compute_diffusivities!` -> `compute_closure_fields!`\n\n* Drop compat with Oceananigans v0.104\n\n---------\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-02-20T18:23:49+01:00",
          "tree_id": "c31fc2b76c59aa8cfdb00f58e045d9e01743f2e7",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/6cb33b911b743a610d0b4b19ebfff0dcbecb41fa"
        },
        "date": 1771609164652,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107968484.30466616,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78766682.44653562,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 61704853.44791824,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134853914.82859537,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111994254.55843528,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111994254.55843528,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102637971.62702903,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14897004.180354066,
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
          "id": "eff4eac1e245cb9681d40a8ddc8b184d8daff5f6",
          "message": "Add 2D idealized squall line example (#504)\n\n* Add 2D idealized squall line example\n\nImplement a 2D (x-z) squall line simulation following the Rotunno-Klemp-Weisman\nframework. Uses the Weisman-Klemp thermodynamic sounding with unidirectional\nlow-level shear (Us=20 m/s over 2.5 km) and DCMIP2016 Kessler microphysics.\nThis case stress-tests rain evaporation numerics in the dry rear-inflow jet.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Use Float64 for squall line example\n\nFloat32 causes spurious stratospheric cooling from WENO9 truncation\nerror in this 2D configuration, leading to NaN after ~12 minutes.\nFloat64 eliminates the issue; full 4-hour run completes cleanly.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix domain errors in aerosol activation for extreme atmospheric conditions\n\nGuard sqrt and fractional power operations in compute_smax and\naerosol_activated_fraction against negative arguments that arise in\nsubsaturated/stratospheric conditions (e.g. deep convection cases with\na dry upper atmosphere). The ARG2000 activation parameterization is\nonly valid for updrafts near saturation, but was being evaluated at\nall grid points including the dry stratosphere.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Warn when microphysical tracers lack bounds-preserving advection\n\nNon-negative quantities like mass and number concentrations can develop\nunphysical negative values without bounds-preserving WENO advection.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Apply suggestion from @giordano\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-02-20T13:39:39-07:00",
          "tree_id": "f321d4804dcba18832d8324f12805c43a952ba2f",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/eff4eac1e245cb9681d40a8ddc8b184d8daff5f6"
        },
        "date": 1771620872003,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107491897.9176837,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78016081.36720172,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60033970.13908102,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134237570.50367758,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111915435.13606934,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111915435.13606934,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 99406210.84181051,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14750877.712733878,
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
          "id": "144ded8e69ecf2514ad4a5e011aa58fda9ec1938",
          "message": "Revert \"Add 2D idealized squall line example (#504)\" (#508)\n\nThis reverts commit eff4eac1e245cb9681d40a8ddc8b184d8daff5f6.",
          "timestamp": "2026-02-20T14:15:56-07:00",
          "tree_id": "c31fc2b76c59aa8cfdb00f58e045d9e01743f2e7",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/144ded8e69ecf2514ad4a5e011aa58fda9ec1938"
        },
        "date": 1771623211563,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107447163.97787035,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78670927.38304925,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60978411.81009723,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 136217763.06905773,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113800351.75797491,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113800351.75797491,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 105665881.2421121,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14620690.230902854,
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
          "id": "1dd795c7f9ac32d7951f042cf795e93f42097898",
          "message": "Avoid boxing of `advection` inside `AtmosphereModel` (#509)\n\n* Avoid boxing of `advection` inside `AtmosphereModel`\n\n* Rename `advection_tuple` -> `materialized_advection`\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n---------\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-02-22T13:22:12Z",
          "tree_id": "772c14caa1c10d2c38add52c357092cb15e446f8",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/1dd795c7f9ac32d7951f042cf795e93f42097898"
        },
        "date": 1771767411852,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107340359.08531882,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78109957.97624357,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60844731.764521845,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 131604159.59715563,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 107962131.68354398,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 107962131.68354398,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 95746949.32996191,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15128857.008046608,
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
          "id": "d51d279ba7dae0a768aafad593e79dd4d4117e65",
          "message": "Restrict `potential_temperature_tendency` to potential temperature formulation (#513)\n\nThis prevents the compiler from thinking that it could be called with a static\nenergy formulation, too.",
          "timestamp": "2026-02-22T16:31:43Z",
          "tree_id": "8feab8481f1dd7ece664b79f7dbf46be033bee77",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/d51d279ba7dae0a768aafad593e79dd4d4117e65"
        },
        "date": 1771778807321,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108221695.05585213,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 79074776.25022383,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 62132429.07643424,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 132653611.18077943,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111865853.60450302,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111865853.60450302,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102585321.3814068,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15025664.24110084,
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
          "id": "3fedbfb9d910f8b3bc853c8a17579967c9b57631",
          "message": "[docs] Temporarily ignore Oceananigans links (#521)\n\n* [docs] Temporarily ignore Oceananigans links\n\nPublishing of the Oceananigans docs is currently broken (should hopefully be\nfixed soon), in the meantime we ignore links to Oceananigans docs in\nlinkchecker.\n\n* Also temporarily pin Oceananigans to v0.105.0",
          "timestamp": "2026-02-26T12:00:12Z",
          "tree_id": "4b32d28ff41600ea867c45fa9f8b82244b8229bd",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/3fedbfb9d910f8b3bc853c8a17579967c9b57631"
        },
        "date": 1772108122501,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107492815.12380646,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78015553.5787079,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 59957884.76787905,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134947305.9923555,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112723969.33453202,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112723969.33453202,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 104174901.01681934,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15034855.720403787,
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
          "id": "038a233d9e471622525d3f97af4bc4f2d84a902e",
          "message": "[Reactant] Add timestepping fix to match Oceananigans (#517)\n\n* Add in fix\n\n* Temporarily use Oceananigans main\n\n* Fix timestepping\n\n* Add tick_stage! in using\n\n* Whitespace\n\n* Add rev for benchmarking\n\n* Remove stale import of tick!\n\n* Require Oceananigans@v0.105.1\n\n* Remove last `Oceananigans` in `[sources]`\n\n---------\n\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-02-26T18:42:10Z",
          "tree_id": "7f3e511edd9b037dbaa10a05b5f2bf691adea0fa",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/038a233d9e471622525d3f97af4bc4f2d84a902e"
        },
        "date": 1772132401357,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108114988.30474849,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78633749.96302617,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 61440695.335306734,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 133728076.54971294,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 110738387.39578982,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 110738387.39578982,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 98007871.61570224,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14845339.012931334,
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
          "id": "264aad68791ffd05e863b44534ca5448a25b7558",
          "message": "Bump actions/upload-artifact from 6 to 7 (#524)\n\nBumps [actions/upload-artifact](https://github.com/actions/upload-artifact) from 6 to 7.\n- [Release notes](https://github.com/actions/upload-artifact/releases)\n- [Commits](https://github.com/actions/upload-artifact/compare/v6...v7)\n\n---\nupdated-dependencies:\n- dependency-name: actions/upload-artifact\n  dependency-version: '7'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-27T03:31:27Z",
          "tree_id": "bb838b1606b093049a04e2a04446e2abbed95f71",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/264aad68791ffd05e863b44534ca5448a25b7558"
        },
        "date": 1772164001463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 106974745.2890235,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76937891.35348466,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 59391415.0110376,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 135897957.73814395,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113170553.63399787,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113170553.63399787,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 99716191.11752008,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14798972.479187077,
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
          "id": "082734c13d97663d4fa032726ec66bac17577687",
          "message": "Bump actions/download-artifact from 7 to 8 (#525)\n\nBumps [actions/download-artifact](https://github.com/actions/download-artifact) from 7 to 8.\n- [Release notes](https://github.com/actions/download-artifact/releases)\n- [Commits](https://github.com/actions/download-artifact/compare/v7...v8)\n\n---\nupdated-dependencies:\n- dependency-name: actions/download-artifact\n  dependency-version: '8'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>",
          "timestamp": "2026-02-27T09:44:27Z",
          "tree_id": "da477edfbc0d910a5e8eec1d6ef65b6be4a017a5",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/082734c13d97663d4fa032726ec66bac17577687"
        },
        "date": 1772186359507,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108060107.13759442,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78872272.11106561,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 61180442.78590065,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 107461910.16316473,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 110596003.5750594,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 110596003.5750594,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 96839796.70645866,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14867231.950388983,
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
          "id": "cdf1f905107346b4ce472ca75ca9581bddfdfbc2",
          "message": "Fix typo in Breeze.jl documentation (#526)",
          "timestamp": "2026-02-27T10:52:43Z",
          "tree_id": "2564f58cae511a1f6f8c65cfd2d582e65e3fc98c",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/cdf1f905107346b4ce472ca75ca9581bddfdfbc2"
        },
        "date": 1772190452814,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107833941.7915184,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78991247.50891711,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 61496287.672404155,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134501243.1920447,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112359840.73919317,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112359840.73919317,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102018208.63371591,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14984335.677335106,
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
          "id": "50469b97955fa1729505910acabc78f88952d514",
          "message": "Use `maybe_initialize_state!` from Oceananigans (#527)",
          "timestamp": "2026-02-27T15:15:20Z",
          "tree_id": "9ec1b59e6f5f3a51db73fddd51eb410b5f192bb9",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/50469b97955fa1729505910acabc78f88952d514"
        },
        "date": 1772206213013,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108064038.44276686,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 79154994.81068331,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 61811700.36247358,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 135324359.07701588,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111894069.02041794,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111894069.02041794,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100934661.8401541,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15215678.86447231,
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
          "id": "b6c3a2e8a8c6e0b49195894d369713155151c7a9",
          "message": "[CI] Set `benchmark-data-dir-path` for pull requests (#528)",
          "timestamp": "2026-02-27T18:37:33Z",
          "tree_id": "2489126cf550cad2e3169578ec2ef14c3d5d7908",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b6c3a2e8a8c6e0b49195894d369713155151c7a9"
        },
        "date": 1772218327950,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107730062.1534281,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78520451.21124008,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60470916.89824227,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 132926505.36371297,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113208489.31256011,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113208489.31256011,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 105290059.95149162,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15096799.330513632,
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
          "id": "9eba4fab8bbc43c4765354ce7687e9f038c24e15",
          "message": "Restrict `SSPRungeKutta3` time steppers to `AtmosphereModel` (#512)\n\n* Restrict `SSPRungeKutta3` time steppers to `AtmosphereModel`\n\n* Further restrict `first_time_step!` to `CompressibleDynamics`\n\n* Revert \"Further restrict `first_time_step!` to `CompressibleDynamics`\"\n\nThis reverts commit 0c245f32b910387bd3398dc1ea1e940cb6c22e1a.\n\n* Restrict parcel dynamics time stepper to SSPRungeKutta3\n\n* Remove stale import\n\n* Remove stale import also in extension",
          "timestamp": "2026-02-28T22:22:22Z",
          "tree_id": "869b00a35a01a212bc4fbee41a637274bae48d27",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/9eba4fab8bbc43c4765354ce7687e9f038c24e15"
        },
        "date": 1772318239184,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 105306965.00901316,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 74607384.36417119,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 57239088.25407854,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 135228490.38719055,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111851946.68753977,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111851946.68753977,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102691896.25793476,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14674804.700545063,
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
          "id": "4d603dd67fc415936a3a8340fb0f23405fd4b654",
          "message": "Revert \"[CI] Set `benchmark-data-dir-path` for pull requests (#528)\" (#533)\n\nThis reverts commit b6c3a2e8a8c6e0b49195894d369713155151c7a9.",
          "timestamp": "2026-03-01T10:43:17Z",
          "tree_id": "1a717cafb22024b3f48a9c2dea94a3ef2a66e3ad",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/4d603dd67fc415936a3a8340fb0f23405fd4b654"
        },
        "date": 1772362679159,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 105283921.5246161,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76694691.45052716,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 59663790.92715589,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134227834.13175228,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113018019.99787146,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113018019.99787146,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 103490876.07715179,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14801859.288546117,
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
          "id": "5d2686ab3cb34df0f897b255bcc2f60c4ca103b3",
          "message": "Add buoyancy-driven updraft to ParcelDynamics (#515)\n\n* bouyancy-driven rising\n\n* refactor: rename updraft types to vertical velocity formulations\n\nAddress PR #515 review comments: SpecifiedUpdraft → PrescribedVerticalVelocity,\nBuoyancyDrivenUpdraft → PrognosticVerticalVelocity, updraft field →\nvertical_velocity_formulation, compute_updraft_tendencies! →\ncompute_vertical_velocity_tendencies!. Parcels can also sink, so the more\ngeneral naming is appropriate.\n\n* update\n\n* clean up\n\n* update\n\n* fix\n\n* fix: address critical and high review issues in parcel dynamics\n\n- Replace isnothing branch in compute_parcel_tendencies! with dispatch\n  (existing ::Nothing fallbacks handle the adiabatic case)\n- Remove @inline from check_domain_bounds! (error() is GPU-incompatible)\n- Replace deepcopy(μ::NamedTuple) with plain assignment (immutable value type)\n- Switch ParcelTendencies and ParcelInitialState docstrings to $(TYPEDFIELDS)\n- Document state.ρ as environmental density and state.w role in ParcelState\n- Tighten neutral buoyancy test tolerance from 0.1 to 0.01 m/s²\n- Add quantitative buoyancy magnitude check (B ≈ g ΔT/T) for warm parcel test\n\n* fix: remove stale `temperature` import from ParcelModels\n\nExplicitImports check correctly identified `temperature` as unused\nin this module after the isnothing refactor.\n\n* update\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n---------\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-03-03T16:37:33-05:00",
          "tree_id": "a71c2a161d5d336969c468a9be91f778571fe460",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/5d2686ab3cb34df0f897b255bcc2f60c4ca103b3"
        },
        "date": 1772574898170,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107996840.03357539,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78928820.54889807,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60974697.3899767,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134829846.8757055,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112081727.34213243,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112081727.34213243,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101010490.44631886,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15077271.928983022,
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
          "id": "586dae14496ca7e6e74fd7396bc046215b843c76",
          "message": "Scheduled radiation updates + radiative-convective equilibrium case (#413)\n\n* rce simulation\n\n* implement a RCE case\n\n* spruce up example\n\n* add capability for spatially varying trace gases\n\n* clean up for vertically varying ozone\n\n* materialization interface for backgroundatmosphere\n\n* clean up notation\n\n* fix\n\n* update rce example\n\n* fix imports\n\n* fix whitespace\n\n* fix dependencies\n\n* Updates\n\n* Clean up whitespace\n\n* Fix comments inside function definitions in Literate example\n\n* Add `CUDA` to `examples` project\n\n* Update examples/radiative_convective_equilibrium.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update examples/radiative_convective_equilibrium.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update examples/radiative_convective_equilibrium.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update examples/radiative_convective_equilibrium.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update examples/radiative_convective_equilibrium.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update examples/radiative_convective_equilibrium.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* update\n\n* Update src/AtmosphereModels/radiation_interface.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Update src/AtmosphereModels/radiation_interface.jl\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Merge main and resolve conflicts for radiation branch\n\nResolve merge conflicts in Project.toml (keep SpecialFunctions + Statistics compat),\nbulk_microphysics.jl (use broader BulkMicrophysics dispatch), and\nstatic_energy_tendency.jl (keep both velocities arg and radiation heating).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add 2D radiative shallow convection example and fix microphysics numerical robustness\n\nNew example: 2D (x-z) shallow convection with all-sky RRTMGP radiation and\ntwo-moment cloud microphysics. Includes thermal sponge for shallow domains\nwhere RRTMGP has no atmosphere above the model top, RICO-like initial\nconditions with trade winds, and bulk surface fluxes.\n\nNumerical fixes:\n- Guard against negative/zero arguments in ARG2000 activation (compute_smax)\n- Clamp temperature to ≥1K before Clausius-Clapeyron exponentiation\n- Guard temperature at all 6 call sites in two_moment_microphysics.jl\n- Add missing NonEquilibriumCloudFormation method dispatches for\n  specific_humidity, vapor/liquid/ice_mass_fraction\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Clean up radiative shallow convection example and revert Clausius-Clapeyron guard\n\n- Remove temperature guard from saturation_vapor_pressure (the proper\n  guards are upstream in two_moment_microphysics.jl)\n- Rename T₀ → Tˢᶠᶜ in Tᵢ(z) to avoid conflict with notation.md where\n  T₀ means sea surface temperature\n- Remove unused `using NCDatasets`\n- Remove unused `v` from velocity extraction (2D Flat topology)\n- Fix misleading comment in compute_smax (\"Use abs\" → code uses max)\n- Add missing blank line before section header in bulk_microphysics.jl\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Remove temperature clamping from microphysics\n\nNegative temperatures indicate a broken simulation — clamping to 1K\nsilently produces garbage physics. Let it crash so the root cause is found.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Simplify compute_smax to match upstream CloudMicrophysics.jl\n\nRemove unnecessary numerical guards — the original ARG 2000\nimplementation in CloudMicrophysics.jl trusts physical inputs.\nKeep only the two physically meaningful checks:\n- w ≤ 0: no updraft means no activation\n- κ̄ ≤ 0: non-hygroscopic mode cannot activate\n- Σ ≤ 0: no activatable modes means no activation\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Register radiative shallow convection as CI example and reduce runtime\n\nAdd to docs/make.jl with build_always=false (runs only with\n\"build all examples\" label). Reduce stop_time from 12h to 4h and\nrelax CFL/max_Δt for faster CI builds while still capturing cloud\nformation and early precipitation.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Use standard CFL=0.7 and drop max_Δt\n\nFloat64 on a shallow 4km domain doesn't need conservative CFL or\ncapped time steps — let the wizard figure it out.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Use Float32 for radiative shallow convection example\n\nCI machines don't have Float64 performance. A shallow 4km domain\nwith compute_reference_state! should work fine at Float32 — if it\ndoesn't, that's a bug.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix CI failures: test assertions, stale deps, and Literate.jl parse error\n\n- Update effective radius test assertions to match 5e-6/50e-6 values\n- Ignore CloudMicrophysics, RRTMGP, NCDatasets in Aqua stale deps check\n  (they are in [deps] as extension triggers)\n- Use ## instead of # for inline comment in RCE Tᵢ function to prevent\n  Literate.jl from splitting the code block\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Move CloudMicrophysics, RRTMGP back to [weakdeps] and remove NCDatasets\n\nCloudMicrophysics and RRTMGP are extension triggers, not direct\ndependencies of the main module. Having them in [deps] caused:\n- Aqua stale deps test failure (not imported in main module)\n- Aqua persistent tasks failure on Windows (loading NCDatasets at\n  startup spawns background HDF5 tasks)\n\nNCDatasets is not used by any Breeze code (only referenced in error\nmessages telling users to load it); it comes through RRTMGP.jl.\n\nStatistics stays in [deps] since it's used in set_to_mean.jl.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix docs build: add missing NCDatasets import and handle zero colorrange\n\n- Add using NCDatasets to radiative_shallow_convection.jl (RRTMGP\n  requires it loaded for reading netCDF lookup tables)\n- Guard RCE plotting colorrange against all-zero data to prevent\n  CairoMakie interpolation error when cmin == cmax\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Keep CloudMicrophysics and RRTMGP in [deps] to avoid Julia 1.11 doctest crash\n\nMoving CloudMicrophysics to [weakdeps] changes the extension loading\norder, which triggers a StackOverflowError in Julia 1.11's type\ninference when Documenter parses docstrings. Keep both as [deps] (as\nintended on this branch) and ignore them in Aqua stale_deps check.\n\nNCDatasets remains removed from [deps] (not used in main module, was\nthe likely cause of persistent tasks failure on Windows).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Disable Aqua persistent_tasks check on Windows\n\nCloudMicrophysics and RRTMGP in [deps] cause a persistent task on\nWindows that prevents the Julia process from exiting cleanly. This is\na known issue with these packages on Windows and does not affect\nLinux/macOS. Passes on main because they were [weakdeps] there.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Pass Float32 to TwoMomentCloudMicrophysics constructor\n\nThe microphysics constructor defaults to Float64 parameters, but\nthe grid uses Float32. This causes a MethodError when the\naerosol_activation_mass_tendency function tries to match FT across\nAirProperties{Float64} and WarmPhaseTwoMomentState{Float32}.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix Float32 DomainError in shallow convection example\n\nAdd a physical guard in Clausius-Clapeyron saturation vapor pressure for T ≤ 0\n(saturation vapor pressure is undefined at negative temperatures). Also guard\ncompute_smax against α ≤ 0 (no adiabatic supersaturation production).\n\nStabilize the shallow convection example with lower CFL (0.5), max_Δt=5, and\nshorter stop_time (30min) for docs CI.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Increase docs build step timeout from 60 to 70 minutes\n\nThe RICO example alone takes ~55 minutes, leaving insufficient time for other\nexamples when building with the \"build all examples\" label.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Apply suggestion from @glwagner\n\n* Delete rce_production.jl\n\n* add back aqua tests\n\n* fix set_to_mean\n\n* move CM and RRTMGP to weakdeps\n\n* Apply suggestion from @glwagner\n\n* change name of example\n\n* Rename radiation_heating to radiation_flux_divergence; fix set_to_mean! test\n\nRename radiation_heating → radiation_flux_divergence throughout because\nradiation is often net cooling, making \"heating\" misleading. Also update\nthe set_to_mean! test to verify density-weighted prognostics (ρe, ρqᵗ, ρu)\nare preserved rather than physical fields, matching the removed rescaling.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Remove RCE example; add RCEMIP reference to shallow convection example\n\nMove radiative_convective_equilibrium.jl to branch glw/rce-example.\nAdd Wing et al. (2018) citation for RCEMIP parameters.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* revert iteration interval change\n\n* clean up potential temperature tendency\n\n* Use saturation adjustment in 2D example; simplify microphysics translations\n\nSwitch radiative_shallow_convection from TwoMomentCloudMicrophysics to\nSaturationAdjustment. Remove short-circuiting guards from CloudMicrophysics\ntranslation functions. Fix qᵗᵢ → qᵗᵇᵍ typo causing docs build failure.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Restore cloud_microphysics_translations.jl from main\n\nRevert to the main branch version — removing the short-circuit guards\ncaused NaN in 2M tests (division by zero when Nʳ=0 or qʳ=0).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add plots and animation to radiative shallow convection example; fix 2M extension\n\n- Add CairoMakie visualization: mean profile evolution (T, qᵛ, heating rate)\n  and animated xz slices (w, qˡ) with mp4 output\n- Remove θ sponge (defeats interactive radiation); keep momentum sponge only\n- Fix SW sign in progress callback (use SW_dn directly, no negation)\n- Output radiation flux divergence in horizontal averages\n- Add BackgroundAtmosphere show method displaying only non-zero gases with units\n- Restore cloud_microphysics_translations.jl with guards to prevent NaN\n  (division by zero when Nʳ=0 or qʳ=0) while keeping 2M structs and aerosol\n  activation code consistent with two_moment_microphysics.jl\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Guard compute_smax against w=0 to prevent NaN in 2M aerosol activation\n\nWhen w=0, both ζ and η are zero, causing 0/0=NaN in the ARG2000\nSmax calculation. Return zero supersaturation when w≤eps since no\nactivation is possible without an updraft.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Guard max_supersaturation_breeze against w=0\n\nThe phase-relaxation correction (Smax = Smax0 * num/den) also produces\n0/0=NaN when w=0 because both Smax0 and α*w are zero. Add early return\nin max_supersaturation_breeze before any computation.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix FT redefinition error in max_supersaturation_breeze; remove sponge layer\n\n- Remove `FT = typeof(w)` which redefined the type parameter from `where {FT}`\n- Remove momentum sponge layer from radiative shallow convection example\n  to test whether it causes the noisy mean temperature profile\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Rename heating rate to flux divergence; add tests for BackgroundAtmosphere and radiation accessors\n\nRename \"heating rate\" → \"flux divergence\" in the RCE example axis label and\ncomments to accurately reflect that radiation predominantly cools the\natmosphere (the atmosphere is largely transparent to shortwave radiation).\n\nAdd test coverage for new radiation interface code:\n- BackgroundAtmosphere constructor, show method, and _vmr_string helper\n- materialize_background_atmosphere (constant and function O₃)\n- radiation_flux_divergence accessors (nothing-safe)\n- RadiativeTransferModel flux_divergence field and schedule\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Improve radiative shallow convection example\n\nAdd verbose comments, sponge layer to damp gravity wave reflections,\nlonger simulation (2 hours), and fix animation display for Literate.jl.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Remove sponge layer from radiative shallow convection example\n\nThe Relaxation forcing with GaussianMask fails to compile on GPU\nwith Flat grid dimensions. The sponge was not addressing the root\ncause of the temperature oscillations anyway.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix 2Δz oscillations in RRTMGP radiative heating rate\n\nUse face-averaged temperature for the RRTMGP layer temperature\ninstead of the raw cell-center value. This ensures consistency\nbetween layer and level Planck sources in RRTMGP's linear-in-tau\nRTE source formulation (Clough et al. 1992).\n\nThe issue: RRTMGP computes level Planck sources from face\ntemperatures (interpolated from cell centers) and layer sources\nfrom cell-center temperatures. The correction term\n2*fact*(lay_source - lev_source) in the RTE solver amplifies any\nlay-lev mismatch at the grid Nyquist frequency, creating a positive\nfeedback for 2Δz temperature oscillations. Using the face-averaged\ntemperature eliminates this mismatch.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Rewrite radiative shallow convection with diurnal cycle\n\nMajor changes:\n- Deepen domain from 4 km to 5 km so clouds form at mid-domain\n- Replace perpetual RCEMIP insolation with full diurnal cycle\n  (coordinate=(0,15), epoch=equinox sunrise, solar_constant=1361)\n- Adjust initial profiles: dry adiabat in mixed layer, moist\n  adiabatic cloud layer, 4K inversion at 2 km capping clouds,\n  sharp moisture drop above inversion to prevent upper-level cloud\n- Extend run time from 2 hours to 24 hours (one full diurnal cycle)\n- Profile plots at sunrise/noon/sunset/midnight instead of\n  equally-spaced times\n- Output: hourly profiles, 10-minute slices\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Improve radiative shallow convection example\n\nUse a stretched grid (PiecewiseStretchedDiscretization) extending to 25 km\nwith fine 100 m cells in the cloud layer (0–3 km) and coarse 1 km cells above.\nThis gives RRTMGP a realistic atmospheric column including the stratosphere,\npreventing the temperature blowup that occurred with the 5 km uniform grid\n(where zero downwelling LW at the domain top caused catastrophic cooling).\n\nAdd an isothermal stratosphere at 210 K, increase the free-troposphere lapse\nrate to 6.5 K/km, and zoom the profile/animation plots to the lowest 3–4 km\nwhere the cloud dynamics live.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add stratospheric sponge to radiative shallow convection example\n\nNewtonian relaxation of temperature toward the initial profile above 8 km\nprevents the coarse stratospheric cells from drifting far from radiative\nequilibrium. Without this, ozone shortwave absorption heats the stratosphere\nto ~490 K over 24 hours because the initial isothermal profile is not in\nradiative equilibrium and the coarse 1 km cells have low density.\n\nThe sponge uses a custom Forcing with discrete_form=true (rather than\nRelaxation + GaussianMask, which fails to compile on GPU with Flat grids).\nApplied as an ρe forcing, which Breeze auto-converts to ρθ tendency via\ndivision by cᵖᵐ Π.\n\nWith the sponge: T stays in [209, 300] K over 24 hours (3.9 min on GPU).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Rewrite radiative convection with conditionally unstable profile\n\nThe previous shallow convection setup produced no persistent clouds: the BL\nwarmed from surface fluxes, raising q_sat and evaporating the cloud within\nhours. Without thick clouds, RRTMGP saw no cloud-top radiative cooling, so\nthere was no feedback to maintain turbulence.\n\nSwitch to a CAPE-driven convective regime:\n- Dry-adiabatic sub-cloud layer (0–1 km): eliminates CIN so perturbations\n  immediately trigger moist convection\n- Conditionally unstable troposphere (6.5 K/km above 1 km): moist parcels\n  are buoyant above their LCL, releasing CAPE\n- SST = 303 K (3 K disequilibrium): drives strong surface fluxes\n- q₀ = 20 g/kg with 2.5 km scale height: tropical maritime moisture\n\nResults: max|w| reaches 19 m/s initially, settling to 2–14 m/s with\npersistent clouds (qˡ = 2–7 g/kg) throughout the 24-hour simulation.\nStratosphere remains stable at 210 K.\n\nAlso rename radiative_shallow_convection → radiative_convection since\nthis is no longer specifically shallow.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add diurnal land surface temperature to radiative convection example\n\nReplace constant ocean SST with a time-varying surface temperature field\n(290–310 K cosine cycle) updated via callback, creating a dramatic diurnal\nconvection cycle: vigorous afternoon thunderstorms that shut off at night.\nStart at midnight, run 48 hours for two full cycles. Surface albedo and\nemissivity adjusted for land.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* crank up the resolution\n\n* Fix docstring parsing StackOverflow on Julia 1.11\n\nMixed double-backtick LaTeX with single-backtick code in the\nRichardsonNumberMapping docstring caused Documenter's Markdown\nparser to recurse infinitely. Use symbolic names instead.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Retrigger CI\n\n* Add radiation scheduling tests for IterationInterval and TimeInterval\n\nTests verify that:\n- Radiation always fires at iteration 0 (first_iteration check)\n- IterationInterval(3) skips iterations 1-2 and fires at iteration 3\n- TimeInterval(10) skips intermediate times and fires at t=10, t=20\n- Fixed cosine zenith angle produces valid shortwave fluxes\n- Flux divergence is computed whenever radiation updates\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix grid size in fixed zenith angle test\n\nRectilinearGrid with 3D topology requires size=(Nx, Ny, Nz).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Remove fixed zenith test pending multi-column grid fix\n\nThe coordinate::Number code path hits a BoundsError with\nmulti-column grids. The scheduling tests (IterationInterval\nand TimeInterval) already pass.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix gray radiation BoundsError on multi-column grids; remove coordinate::Number API\n\nRRTMGP expects surface property arrays (sfc_emis, sfc_alb_direct, sfc_alb_diffuse)\nwith shape (nbnd, ncol), but the gray model allocated them as 1D (ncol,). This\ncaused a BoundsError when RRTMGP accessed array[1, col] on grids with Nx*Ny > 1.\n\nAlso removes the confusing coordinate::Number API that overloaded the coordinate\nkwarg to mean \"fixed cosine zenith angle\". A proper zenith_angle kwarg can be\nadded when needed.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* revert unrelated changes\n\n* rm weird alias\n\n* revert to main\n\n* revert cm changes to main\n\n* revert bulk microphysics changes to main\n\n* Fix IC function signatures for 3D grid in multi-column test\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Revert bomex.jl debugging changes; fix docstring StackOverflow on Julia 1.10\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* bugfix in set to mean\n\n* make example drier\n\n* Apply suggestion from @glwagner\n\n* Change division to multiplication in rescale function\n\n* fix whitespace\n\n* fix set_to_mean\n\n* use math blocks\n\n---------\n\nCo-authored-by: Mosè Giordano <mose@gnu.org>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-04T00:44:03Z",
          "tree_id": "99619b17db0b95e1fe14d69504f8a2d6e6e46207",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/586dae14496ca7e6e74fd7396bc046215b843c76"
        },
        "date": 1772586070453,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108097685.95598203,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78727854.70226066,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 61183456.4540934,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 135133571.58711702,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111931066.90467967,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111931066.90467967,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100197904.6081522,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15061860.613345845,
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
          "id": "913cf41713e96c571bf5eaf129181677a809f610",
          "message": "Remove Breeze compat from `benchmarking` environment (#542)",
          "timestamp": "2026-03-04T12:19:48+01:00",
          "tree_id": "dd5390804bde426599e3398103bbaf89b4211eaa",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/913cf41713e96c571bf5eaf129181677a809f610"
        },
        "date": 1772624075693,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 106945318.32162118,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 75461903.48569538,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 58087314.726071455,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 132727948.47742595,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112263905.7147024,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112263905.7147024,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101987904.73855019,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15186376.834142525,
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
          "id": "941d207cc6cfed8e6cdd2be8cfc895e95a7d6bb9",
          "message": "[CI] Update Docker images to Julia v1.12.5 (#548)\n\n* [CI] Update Docker images to Julia v1.12.5\n\n* [CI] Prevent Reactant from squatting all GPU memory",
          "timestamp": "2026-03-08T22:13:28Z",
          "tree_id": "9ec9192b255192c94d8fc3224c82130ce45661bc",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/941d207cc6cfed8e6cdd2be8cfc895e95a7d6bb9"
        },
        "date": 1773008961569,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 105902416.44184443,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 74793242.75352608,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 57631643.74175675,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 131744896.03160246,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 110297205.43460546,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 110297205.43460546,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 96743713.69403923,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15039986.582011834,
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
          "id": "ed4f42e188c715344b06e582bfa696fd6c3d5826",
          "message": "[benchmarks] Add comparison with WENO9 advection scheme (#497)",
          "timestamp": "2026-03-10T00:43:43Z",
          "tree_id": "839153a54e75e9bdb5553eb2866a28c9e767a594",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/ed4f42e188c715344b06e582bfa696fd6c3d5826"
        },
        "date": 1773104154066,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108074222.04380536,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76945865.81308344,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60059010.32050001,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [128, 128, 128]",
            "value": 132459087.3475264,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 132459087.3475264,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113371786.6427624,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113371786.6427624,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113371786.6427624,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 104181761.68437903,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 104181761.68437903,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [128, 128, 128]",
            "value": 85654043.48390532,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/128x128x128",
            "value": 85654043.48390532,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 76054811.94310361,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 76054811.94310361,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65951301.90638038,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65951301.90638038,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14939635.91223977,
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
          "id": "8ce8101133aefc7483a69fc5c46fbefedaf65f97",
          "message": "Fix NaN in saturation adjustment (#553)\n\n* Fix NaN in saturation adjustment secant iteration\n\nThree bugs in `adjust_thermodynamic_state` could produce NaN in Float32:\n\n1. Second initial guess used `q₁.liquid = 0` (all-vapor state) instead of\n   the condensate-adjusted `𝒰₁.moisture_mass_fractions.liquid`, making ΔT = 0\n   always and the second guess a fixed T₁ + 0.01 K regardless of supersaturation.\n\n2. No guard against stagnation: when r₂ = r₁ (common in Float32), ΔTΔr = Inf,\n   then T₂ = ±Inf, then NaN two iterations later. Added `isfinite(ΔTΔr) || break`.\n\n3. Default `maxiter = Inf` allowed the NaN-propagation loop to run indefinitely.\n   Changed default to `maxiter = 10`.\n\nAdds a regression test for NaN robustness with a highly supersaturated Float32 state.\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>\n\n* Fix GPU branching\n\n* Remove trailing whitespace in saturation adjustment\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Update src/Microphysics/saturation_adjustment.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Change maxiter default from 10 to Inf\n\n* Fix NaN from Inf*0 in secant stagnation guard\n\nUse `ifelse` to mask ΔTΔr instead of multiplying by a boolean,\nwhich produced NaN via Inf*0. Simplify the T₂ update since ΔTΔr\nis already zeroed when the step is invalid.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n---------\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-03-11T20:00:30-04:00",
          "tree_id": "4e82ec4fceee7ac3e99ae1e3b48563e4dd0ca784",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/8ce8101133aefc7483a69fc5c46fbefedaf65f97"
        },
        "date": 1773274677738,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 106868114.24791758,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77647144.82460712,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60161134.75580891,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [128, 128, 128]",
            "value": 134987849.9907294,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134987849.9907294,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112132156.27540322,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112132156.27540322,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112132156.27540322,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 100173239.99771014,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100173239.99771014,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [128, 128, 128]",
            "value": 83436315.87180252,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/128x128x128",
            "value": 83436315.87180252,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73865007.03101388,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73865007.03101388,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65152923.33963431,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65152923.33963431,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14630380.944826774,
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
          "id": "8838ee4287ef62024b67c3f7fb9df199a1a53a16",
          "message": "Fix double-ρ₀ in microphysical tracer advection and diffusion (#555)\n\nThe anelastic tracer equation is ∂(ρ₀q)/∂t = -∇·(ρ₀uq) + S.\n`div_ρUc(ρ₀, u, c)` already multiplies by ρ₀ internally, so `c`\nmust be the specific field `q`. Previously, density-weighted\nprognostic fields (ρ₀q) were passed, producing ∇·(ρ₀²uq).\nThe same error affected the diffusion operator ∇_dot_Jᶜ.\n\nThe fix looks up the specific diagnostic fields (e.g. :ρqᶜˡ → :qᶜˡ)\nthat are already computed by `update_microphysical_auxiliaries!`,\nmatching the pattern used for moisture (`specific_prognostic_moisture`).\n\nExtract `specific_field_name` utility to share the ρ-prefix stripping\nlogic with `moisture_specific_name`.\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>",
          "timestamp": "2026-03-11T20:49:16-04:00",
          "tree_id": "efc663357fded203ed2279d4050bc2a1f8629425",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/8838ee4287ef62024b67c3f7fb9df199a1a53a16"
        },
        "date": 1773277604955,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107540326.68145166,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77069574.81374177,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 59033821.64418686,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [128, 128, 128]",
            "value": 134113261.60142697,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 134113261.60142697,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112491153.97951743,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112491153.97951743,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112491153.97951743,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 100632083.32408568,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100632083.32408568,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [128, 128, 128]",
            "value": 84011094.0526826,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/128x128x128",
            "value": 84011094.0526826,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 75286560.38952205,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 75286560.38952205,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64156697.97791273,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64156697.97791273,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14868750.148041984,
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
          "id": "0c773389ddfee8c4a4acaab41ad29d88f9f122f6",
          "message": "Update Project.toml (#558)",
          "timestamp": "2026-03-12T02:17:23Z",
          "tree_id": "049030efcde677c4b58e43f056114276b9f90b4a",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/0c773389ddfee8c4a4acaab41ad29d88f9f122f6"
        },
        "date": 1773282881983,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 106322243.59923674,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 75158270.83298767,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 57664835.02724968,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [128, 128, 128]",
            "value": 131432322.84256941,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 131432322.84256941,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112101443.03626268,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112101443.03626268,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112101443.03626268,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 100670261.34434243,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100670261.34434243,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [128, 128, 128]",
            "value": 82415947.17759621,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/128x128x128",
            "value": 82415947.17759621,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 73928330.18765816,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 73928330.18765816,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64580330.770215884,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64580330.770215884,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14811358.299989073,
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
          "id": "8057dedf6972662c6a95c3a2bac4453233f76278",
          "message": "Bump CloudMicrophysics in / (#560)\n\nUpdates the requirements on  and [CloudMicrophysics](https://github.com/CliMA/CloudMicrophysics.jl) to permit the latest version.\n\nUpdates `CloudMicrophysics` to 0.32.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/compare/v0.31.4...v0.32.0)\n\nUpdates `CloudMicrophysics` to 0.32.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/compare/v0.31.4...v0.32.0)\n\nUpdates `CloudMicrophysics` to 0.32.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/compare/v0.31.4...v0.32.0)\n\nUpdates `CloudMicrophysics` to 0.32.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/compare/v0.31.4...v0.32.0)\n\nUpdates `CloudMicrophysics` to 0.32.0\n- [Release notes](https://github.com/CliMA/CloudMicrophysics.jl/releases)\n- [Commits](https://github.com/CliMA/CloudMicrophysics.jl/compare/v0.31.4...v0.32.0)\n\n---\nupdated-dependencies:\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.32.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.32.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.32.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.32.0\n  dependency-type: direct:production\n  dependency-group: julia\n- dependency-name: CloudMicrophysics\n  dependency-version: 0.32.0\n  dependency-type: direct:production\n  dependency-group: julia\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-13T08:58:10Z",
          "tree_id": "c4a2f7f3e5a0af5c198f5c82d9f3048a8de1638b",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/8057dedf6972662c6a95c3a2bac4453233f76278"
        },
        "date": 1773393483369,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108446392.24669185,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77983007.00459735,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 59889558.52194808,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [128, 128, 128]",
            "value": 133245347.16089366,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/128x128x128",
            "value": 133245347.16089366,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112688383.24120863,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112688383.24120863,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112688383.24120863,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102632286.58685096,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102632286.58685096,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [128, 128, 128]",
            "value": 84958146.28813861,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/128x128x128",
            "value": 84958146.28813861,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 75483468.60140854,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 75483468.60140854,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65124058.41472111,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65124058.41472111,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14466584.604614703,
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
          "id": "752247cc0357fdbf265019c1f09a1c316c3a60d0",
          "message": "[benchmark] Use a slightly larger small grid (#570)",
          "timestamp": "2026-03-18T16:24:44Z",
          "tree_id": "596a705ddf5c99e1ed73bd18044a5f3cde8f5c7e",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/752247cc0357fdbf265019c1f09a1c316c3a60d0"
        },
        "date": 1773851953041,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107609018.78628795,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77325677.07986714,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 59438464.48077051,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121332155.0708301,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121332155.0708301,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112984550.74492542,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112984550.74492542,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112984550.74492542,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 103042780.73924385,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 103042780.73924385,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80118857.05060953,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80118857.05060953,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 75171195.77562124,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 75171195.77562124,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65064986.64424209,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65064986.64424209,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15006511.174308628,
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
          "id": "e6dbcd73919d10e0e2a867f348fe28f01add964f",
          "message": "Bump version to v0.4.2 (#569)",
          "timestamp": "2026-03-18T16:39:24Z",
          "tree_id": "2b7116133e1a0fdf6718bbd3be19eccc7544e698",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/e6dbcd73919d10e0e2a867f348fe28f01add964f"
        },
        "date": 1773852722774,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108205997.8231656,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77804810.19589838,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60556384.129757926,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 119912182.19285005,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 119912182.19285005,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111202950.07006542,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111202950.07006542,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111202950.07006542,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 100623208.92774992,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100623208.92774992,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 78741650.35016562,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 78741650.35016562,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74777873.76987422,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74777873.76987422,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64891844.71041024,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64891844.71041024,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14986745.405056123,
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
          "id": "b6b71ed03ad3982a788c6f2b94dbef4efa0061cb",
          "message": "Bump actions/create-github-app-token from 2 to 3 (#574)\n\nBumps [actions/create-github-app-token](https://github.com/actions/create-github-app-token) from 2 to 3.\n- [Release notes](https://github.com/actions/create-github-app-token/releases)\n- [Commits](https://github.com/actions/create-github-app-token/compare/v2...v3)\n\n---\nupdated-dependencies:\n- dependency-name: actions/create-github-app-token\n  dependency-version: '3'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-20T00:51:41Z",
          "tree_id": "640edf53935e296ba6bee81a6e8aa589cbf634bb",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b6b71ed03ad3982a788c6f2b94dbef4efa0061cb"
        },
        "date": 1773968922729,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 104880970.37671736,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 75321434.43372102,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 58762986.71079525,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 122393416.30047764,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 122393416.30047764,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113405559.83170031,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113405559.83170031,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113405559.83170031,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 101436636.61497918,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101436636.61497918,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79959221.32214177,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79959221.32214177,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74663980.44296303,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74663980.44296303,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65218393.91192767,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65218393.91192767,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15002185.859015465,
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
          "id": "fab76dcdff3ada54e529a1e57ebb5178aa949008",
          "message": "Allow Ocenanaigans v0.106 (#575)",
          "timestamp": "2026-03-20T12:17:09+01:00",
          "tree_id": "e920c282012d66072eb9885277a7b3f407a32ecf",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/fab76dcdff3ada54e529a1e57ebb5178aa949008"
        },
        "date": 1774006626702,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107618424.76539144,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76634063.99759762,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 58130746.63894902,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120032038.06090586,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120032038.06090586,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112719690.47965044,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112719690.47965044,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112719690.47965044,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 103715664.13004744,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 103715664.13004744,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79765048.12235497,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79765048.12235497,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 75278712.33718593,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 75278712.33718593,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65873960.935702585,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65873960.935702585,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14707182.642635504,
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
          "id": "f80e322ada04a8cdde2000eea11684b86b1fce11",
          "message": "Run Reactant tests with Julia v1.12 as well (#577)\n\n* Run Reactant tests with Julia v1.12 as well\n\n* [CI] Run Julia v1.12 tests with `--check-bounds=auto`\n\n* Remove Reactant from test sources\n\n* Move comment around\n\n* Load Reactant also for quality assurance tests in v1.12",
          "timestamp": "2026-03-23T00:11:15Z",
          "tree_id": "68f2c8f5191de676472fc1b44cee823755aa1385",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/f80e322ada04a8cdde2000eea11684b86b1fce11"
        },
        "date": 1774225705338,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107448846.34690067,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77989091.5992351,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60466023.68583432,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121317423.44829985,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121317423.44829985,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113790722.50604878,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113790722.50604878,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113790722.50604878,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 105071779.54856588,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 105071779.54856588,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 81666054.86649725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 81666054.86649725,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 76993829.5045033,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 76993829.5045033,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 67816758.75708961,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 67816758.75708961,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15076823.018525794,
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
          "id": "94c5510ce50e907d1780aa673bd0a12871ca172f",
          "message": "Harden CI setup by pinning all GHA workflows (#579)\n\nAlso update workflows with a cooldown period.",
          "timestamp": "2026-03-24T22:47:10Z",
          "tree_id": "705334fe2f7d27bf9629b2984f3a81d4545725d9",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/94c5510ce50e907d1780aa673bd0a12871ca172f"
        },
        "date": 1774393438998,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 109447031.2254228,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78556588.04603888,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60624537.09737057,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 122339973.04977775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 122339973.04977775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113175037.914543,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113175037.914543,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113175037.914543,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 101751593.09659208,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101751593.09659208,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80276426.66309871,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80276426.66309871,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74068701.02131048,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74068701.02131048,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64857674.605504595,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64857674.605504595,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14646712.725359535,
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
          "id": "aaefcd4858c981f6bf08b6582b1b55f3f611e227",
          "message": "Bump version number to v0.4.3 (#581)",
          "timestamp": "2026-03-25T14:01:10+01:00",
          "tree_id": "bc0b0f4f84c4d3cb24bad6296877129cf09770ae",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/aaefcd4858c981f6bf08b6582b1b55f3f611e227"
        },
        "date": 1774444915175,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 109044277.66420521,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78422294.8384714,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 60999489.21549162,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 119541510.01684669,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 119541510.01684669,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111516306.28556448,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111516306.28556448,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111516306.28556448,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 101367801.72443788,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101367801.72443788,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79194137.65619932,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79194137.65619932,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74450822.58006208,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74450822.58006208,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64690702.764564686,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64690702.764564686,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14754797.97760284,
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
          "id": "678baf3cdf2e2f511cd03807c56d7a02c88eb80a",
          "message": "Support Oceanigans `0.106.3` (#583)\n\n* change to maybe_prepare_first_time_step!\n\n* Update Project.toml",
          "timestamp": "2026-03-26T19:28:40Z",
          "tree_id": "a1fdfed92593bac2ebcadf1f4badfe2c619d7b91",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/678baf3cdf2e2f511cd03807c56d7a02c88eb80a"
        },
        "date": 1774554628438,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107190570.55869977,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76687673.43080561,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 59060752.29889749,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121172233.49353322,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121172233.49353322,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112422638.8502215,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112422638.8502215,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112422638.8502215,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102590822.74991946,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102590822.74991946,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79712503.93833175,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79712503.93833175,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 76200482.12641731,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 76200482.12641731,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 66650989.96280789,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 66650989.96280789,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14866962.421415519,
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
          "id": "f3536905d08b216543d991ab4ea537a0e10523ce",
          "message": "Fix water conservation in 1M and 2M microphysics and numerical stability in 2M microphysics (#547)\n\n* Eliminate excess depletion of water vapor\n\n* Add vapor mass tendency methods and numerical stability guards\n\nImplement microphysical_tendency for Val{:ρqᵛ} in warm-phase and\nmixed-phase 1M and 2M schemes, ensuring vapor is conserved across\ncondensation, deposition, and rain evaporation. Add max(0,...) and\nmax(eps,...) guards in the ARG 2000 activation parameterization to\nprevent NaN/Inf in unphysical transient states.\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>\n\n* Refactor NE microphysics to bundle pattern for discrete conservation\n\nReplace independent Val{:ρqᵛ}/Val{:ρqᶜˡ}/Val{:ρqʳ} methods for non-equilibrium\nschemes with _*_tendencies() bundle functions that compute all phase-change rates\nonce and return them as a NamedTuple. Individual methods extract from the bundle,\nstructurally guaranteeing that the same rate value is used as source for one\ntracer and sink for another — discrete conservation by construction.\n\nAddresses reviewer request: \"I would like to have a design that _guarantees_\ndiscretely that the sources of one tracer are sinks of another.\"\n\nSchemes covered:\n- WPNE1M: _wp_ne1m_tendencies returns (ρqᵛ, ρqᶜˡ, ρqʳ)\n- MPNE1M: _mp_ne1m_tendencies returns (ρqᵛ, ρqᶜˡ, ρqᶜⁱ, ρqʳ)\n- WPNE2M: _wp_ne2m_tendencies returns (ρqᵛ, ρqᶜˡ, ρqʳ)\n\nAll 62 1M and 70 2M tests pass.\n\n* rename functions\n\n* update\n\n* Add per-reservoir tendency limiting for 2M microphysics\n\nImplement timescale-based per-reservoir limiting (α ∈ [0,1]) that caps\nthe aggregate drain from each reservoir (vapor, cloud, rain) to q/τ.\nThis prevents microphysics from overdrawing any reservoir in a single\ntimestep without requiring access to Δt.\n\nChanges:\n- Add `tendency_limiter_timescale` field to TwoMomentCategories (default 10s)\n- Apply per-reservoir α-limiting to mass tendencies (vapor, cloud, rain)\n- Apply per-reservoir α-limiting to number tendencies (cloud, rain, aerosol)\n- Fix function name mismatch: wp_ne2m_tendencies → wpne2m_tendencies\n- Fix GPU Float32 hazard: literal `0` → `zero(ρ)` in activation ifelse\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Unify numerical timescales in 2M microphysics: merge τⁿᵘᵐ_2m into τⁿᵘᵐ\n\nReplace the hardcoded `const τⁿᵘᵐ_2m = 10` and the verbose\n`tendency_limiter_timescale` field/keyword with a single configurable\n`τⁿᵘᵐ` used for both proactive sink limiting and reactive\nnegative-value relaxation.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add negative moisture correction with vertical borrowing\n\nFixes negative moisture mixing ratios produced by the advection operator\nusing same-level borrowing (heaviest → lightest hydrometeor → vapor) and\ncolumn-wise vertical redistribution. Includes number concentration\nconsistency for 2M microphysics (zero number when mass is zeroed).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* clamp negative number concentration\n\n* Clamp number density floor in 2M terminal velocity to prevent CFL violation\n\nAdvection can transport ρqᶜˡ to grid points where ρnᶜˡ ≈ 0, producing\nunphysically large mean droplet mass and extreme terminal velocities.\nEnforce Nᶜˡ ≥ ρqᶜˡ/xc_max (and Nʳ ≥ ρqʳ/xr_max) so the mean particle\nmass never exceeds the SB2006 upper bound.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Coupled sink limiting for 2M microphysics: unify mass and number tendency computation\n\nMerge all six tendency calculations (ρqᵛ, ρqᶜˡ, ρqʳ, ρnᶜˡ, ρnʳ, ρnᵃ) into a\nsingle wpne2m_tendencies function. For each reservoir (cloud, rain), the limiting\nfactor is now min(α_mass, α_number) — the most restrictive of the two — applied\nto both mass and number sinks. This prevents microphysics from depleting mass\nfaster than number or vice versa.\n\nAlso scales rain autoconversion number source (au.dN_rai_dt) by α_cloud for\nconsistency with the mass transfer, and eliminates duplicate CM2 calls that\nwere previously computed separately in mass and number tendency paths.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Replace `if Nz >= 2` branch with ifelse in moisture correction kernel\n\nThe kernel rule requires ifelse instead of short-circuiting if/else\nfor GPU compatibility. Use safe index clamping (k_top = max(2, Nz))\nand fold the Nz >= 2 condition into the can_borrow predicate.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Rename `_mp_ne1m_tendencies` to `mpne1m_tendencies` for naming consistency\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Make negative moisture correction optional in BulkMicrophysics\n\nAdd `negative_moisture_correction` boolean field to `BulkMicrophysics`\n(default `false`) so the post-advection moisture borrowing can be toggled\nper-scheme rather than running unconditionally.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix BulkMicrophysics positional constructor calls in extensions\n\nPass the new `negative_moisture_correction` argument in\nOneMomentCloudMicrophysics, TwoMomentCloudMicrophysics, and\nZeroMomentCloudMicrophysics constructors.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Use VerticalBorrowing type instead of Bool for negative moisture correction\n\nReplace the Bool field with a type parameter so that dispatch can be used\ninstead of runtime conditionals.  The user interface is now:\n\n    BulkMicrophysics(; negative_moisture_correction = VerticalBorrowing())\n\nDefault remains `nothing` (no correction).  All BulkMicrophysics type\naliases updated to include the fourth type parameter.\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Fix cross-module @ref for correct_negative_moisture! in VerticalBorrowing docstring\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Remove unnecessary trailing `<:Any` type parameters from type aliases\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Update ext/BreezeCloudMicrophysicsExt/one_moment_microphysics.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Rename correct_negative_moisture! to fix_negative_moisture!\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>\n\n* Simplify clamp_negative_numbers! with a loop over fields\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>\n\n* Update src/AtmosphereModels/negative_moisture_correction.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Update src/AtmosphereModels/negative_moisture_correction.jl\n\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>\n\n* Refactor negative moisture correction: decouple species and vertical borrowing\n\n- Add SpeciesBorrowing{VB} with optional VerticalBorrowing() component\n- Add AbstractNegativeMoistureCorrection type hierarchy\n- Add AbstractNumberConcentrationCategories for microphysics with aerosols\n- TwoMomentCategories now subtypes AbstractNumberConcentrationCategories\n- Extract vertical borrowing into @inline dispatched helper for compile-time elimination\n- Change negative_moisture_correction() to return scheme object instead of boolean\n- Fix trailing backslash bug in zero_orphaned_numbers!\n\nCo-Authored-By: Claude Opus 4.6 (1M context) <noreply@anthropic.com>\n\n* Reorder argument\n\n* explanation\n\n* subtype\n\n* Make VerticalBorrowing work independently\n\n---------\n\nCo-authored-by: Claude Sonnet 4.6 <noreply@anthropic.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-03-26T18:17:23-04:00",
          "tree_id": "3c2d40054ad17adfd6436ed522463076308fa85b",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/f3536905d08b216543d991ab4ea537a0e10523ce"
        },
        "date": 1774564349870,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 106587214.77032775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 76971835.63637494,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 54127090.30845711,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 118666907.56415421,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 118666907.56415421,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111698615.16016291,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111698615.16016291,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111698615.16016291,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 102114962.49316262,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 102114962.49316262,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 77793536.65880641,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 77793536.65880641,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74149054.70725577,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74149054.70725577,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65391618.76975251,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65391618.76975251,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 15032783.040948832,
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
          "id": "7b5141a47b10a210d25de45353eb26ba9b7f9c8f",
          "message": "Bump to 0.106.3 (#589)",
          "timestamp": "2026-03-28T02:19:22Z",
          "tree_id": "fb655f9bc09c7ed42198ddac4464ad75df61ab12",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/7b5141a47b10a210d25de45353eb26ba9b7f9c8f"
        },
        "date": 1774665827944,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 109410542.97523195,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 79187751.76159199,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 56109144.974428356,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120924979.64529745,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120924979.64529745,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113277353.63882628,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113277353.63882628,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113277353.63882628,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 103908493.80496377,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 103908493.80496377,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80428507.60009027,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80428507.60009027,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 76684220.74219283,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 76684220.74219283,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65935168.68162398,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65935168.68162398,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14894910.037808215,
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
          "id": "821a379c1c035c7650b165b4de0762784dc3eabd",
          "message": "Terrain-following coordinates for compressible dynamics (#506)\n\n* Add TerrainFollowingDiscretization module with follow_terrain!\n\nImplements basic terrain-following (Gal-Chen/BTF) coordinate support:\n\n- `follow_terrain!(grid, topography)` sets sigma and eta on a\n  MutableVerticalDiscretization grid\n- `TerrainMetrics` struct stores pre-computed terrain slopes\n- `terrain_slope_x/y` compute height-dependent metric terms\n- BasicTerrainFollowing smoothing (linear decay to model top)\n\nIncludes tests for sigma/eta computation, terrain slopes, and\nmodel construction on terrain-following grids.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add terrain-following physics for compressible dynamics\n\nImplement contravariant vertical velocity (Ω̃) and momentum (ρΩ̃),\nterrain-corrected pressure gradient, and terrain-aware density tendency\nfor CompressibleDynamics with terrain-following coordinates.\n\nAdds transport_velocities/transport_momentum dispatch hooks so the\nmomentum and scalar tendency machinery uses Ω̃/ρΩ̃ for vertical\ntransport when terrain_metrics is present.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add terrain-following mountain wave example\n\nDemonstrates fully compressible dynamics with a Gaussian ridge using\nfollow_terrain! and TerrainMetrics for coordinate corrections.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add terrain-following coordinate documentation and bibliography\n\nSelf-contained documentation page covering the Gal-Chen coordinate\ntransformation, metric corrections (contravariant velocity, pressure\ngradient, continuity), and API reference. Designed to be portable\nto Oceananigans.\n\nAdds bib entries: Gal-Chen & Somerville 1975, Schär et al 2002,\nQueney 1948, Durran 2010, Klemp 2011, Simmons & Burridge 1981,\nSullivan et al 1994.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Interpolate sigma to staggered locations and add Adapt for GPU\n\nProperly compute σᶠᶜ, σᶜᶠ, σᶠᶠ by interpolating terrain height to\nface locations before computing sigma, rather than using the center\nvalue at all stagger points. Add Adapt.adapt_structure for\nTerrainMetrics for GPU compatibility.\n\nAlso adds tests for staggered sigma values, z-node correctness,\nand contravariant velocity physics. Registers the terrain example\nin the docs build.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Fix bounds error in contravariant velocity for Flat topologies\n\nUse Oceananigans interpolation operators instead of manual averaging\nto handle Flat topology dimensions correctly. Pkg.test runs with\nbounds checking enabled, catching the out-of-bounds j+1 access.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Add 3D terrain reference state, perturbation PG, and PG stencil options\n\nMajor improvements to terrain-following compressible dynamics:\n\n- Add per-column discrete Exner integration for 3D reference pressure\n  and density fields, ensuring discrete hydrostatic balance at every\n  grid face. This eliminates the truncation error from the\n  near-cancellation of ∂p/∂z and -gρ in the vertical momentum equation.\n\n- Compute horizontal pressure gradient using perturbation pressure\n  p' = p - p_ref, reducing terrain-following PGF errors since the true\n  horizontal gradient of p_ref is exactly zero.\n\n- Add perturbation buoyancy: -g(ρ - ρ_ref) instead of -gρ.\n\n- Add SlopeOutsideInterpolation (default) and SlopeInsideInterpolation\n  types to control the terrain-corrected horizontal PG stencil. The\n  former evaluates slope at the target point after interpolation; the\n  latter multiplies slope at each stencil point before averaging\n  (closer to the CM1 approach).\n\n- Enforce Ω̃ = 0 at the terrain surface to prevent spurious mass flux\n  through the bottom boundary.\n\n- Update mountain wave example with discrete Exner initialization,\n  WENO advection, sponge layer, and reference potential temperature.\n\n- Use 3D terrain reference pressure for acoustic substepping Exner\n  reference when available.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: Use basic operators for terrain PG and update tick! API\n\nFix double-correction bug in terrain pressure gradient: on\nMutableVerticalDiscretization grids, Oceananigans' generalized ∂x/∂y\nalready include the chain-rule correction (∂z/∂x · ∂ϕ/∂z), so using\nthem in the terrain PG formula applied the terrain correction twice.\nReplace with basic δx·Δx⁻¹ / δy·Δy⁻¹ operators to get the correct\ncomputational-coordinate derivatives (∂p/∂x)_ζ.\n\nAlso:\n- Fix terrain slope kernel BoundsError (same generalized vs basic issue)\n- Fix halo ordering in compute_contravariant_velocity! (zero bottom\n  face before fill_halo_regions!, not after)\n- Update tick!(clock, Δt; stage=true) to tick_stage!(clock, Δt) for\n  Oceananigans 0.105+ API compatibility\n- Remove stale imports (hydrostatic_pressure, ZFaceField, halo_size,\n  topology)\n- Fix docs build errors (duplicate @docs, unresolvable @ref)\n\n* fix: Remove stale tick! import from ParcelModels\n\n* fix: Interpolate u, v to (Center, Center, Face) in contravariant velocity kernel\n\nThe old code only interpolated horizontally (ℑx/ℑy), leaving velocities\nand momenta at (Center, Center, Center) instead of the required\n(Center, Center, Face) location. This caused an O(Δz) grid-location\nmismatch with w in the Ω̃ = w - slope·u - slope·v formula. Add vertical\ninterpolation via compound ℑz(ℑx(...)) to correctly collocate all terms.\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* update\n\n* fix\n\n* Fix terrain-following acoustic substepping: terrain corrections and specific_moisture bug\n\n- Replace model.specific_moisture (nonexistent field) with specific_prognostic_moisture(model)\n  in compute_auxiliary_dynamics_variables! for TerrainCompressibleModel\n- Add terrain-aware dispatch helpers to acoustic_substepping.jl (Section 0):\n  terrain PGF chain-rule corrections, kinematic bottom BC, slope divergence\n- Refactor convert_slow_tendencies! into _convert_slow_tendencies_impl! to support\n  Ω̃ as vertical transport velocity for terrain grids\n- Pass terrain_metrics through acoustic substep kernels (horizontal forward step,\n  π' forcing, implicit w solve, tridiagonal build, w back-solve)\n- Implement kinematic terrain bottom BC: w_bottom = u·∂h/∂x + v·∂h/∂y in\n  _acoustic_w_bottom (replaces _zero_bottom_face! hack)\n- Add slope divergence correction ∂(u·sx + v·sy)/∂ζ to acoustic pressure equation\n- Override convert_slow_tendencies! for TerrainCompressibleModel to use Ω̃\n- Add terrain implementations for _acoustic_*_pgf_correction, _acoustic_w_bottom,\n  _acoustic_slope_div, _acoustic_terrain_metrics in terrain_compressible_physics.jl\n\nCo-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>\n\n* Fix terrain-following coordinate correctness and performance issues\n\n- Fix stencil asymmetry in _acoustic_w_bottom to match contravariant velocity kernel\n- Fix slow π tendency to use full π = πᵣ + π' for horizontal derivatives (πᵣ varies horizontally on terrain grids)\n- Pre-allocate π′_forcing in AcousticSubstepper to eliminate per-RK-stage allocation\n- Kernelize compute_terrain_reference_state! replacing @allowscalar loop with :xy kernel for GPU compatibility\n- Replace grid.architecture with architecture(grid) for grid wrapper compatibility\n- Fix type instability: ::Nothing fallbacks now return zero(grid) instead of Int(0)\n- Add terrain-specific _set_exner_reference! dispatch using 3D terrain_reference_pressure\n- Pass w_bottom to _acoustic_slope_div to avoid redundant computation in acoustic hot loop\n- Add tests: resting atmosphere PGF, SplitExplicit+terrain, terrain reference state, SlopeInsideInterpolation\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* GPU compatibility\n\n* Revert \"GPU compatibility\"\n\nThis reverts commit 36325869108c0725f85f77b2276c8a1c9dc3c06a.\n\n* Revert \"Fix terrain-following coordinate correctness and performance issues\"\n\nThis reverts commit 3463f375839d1944c1197dd609000cc11cf4fd24.\n\n* Revert \"Fix terrain-following acoustic substepping: terrain corrections and specific_moisture bug\"\n\nThis reverts commit 6f29c6ee09706f73dc7690f2c891a101c9d1ce6e.\n\n* Reuse Oceananigans v0.105.3 generalized derivatives for terrain PG\n\nReplace manual chain-rule implementation in SlopeOutsideInterpolation\nwith Oceananigans' ∂xᶠᶜᶜ/∂yᶜᶠᶜ operators, which now correctly apply\nthe terrain-following coordinate correction on AbstractMutableGrid.\n\nAlso fix pre-existing bug: model.specific_moisture → specific_prognostic_moisture(model)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* GPU compatability\n\n* Fix terrain-following discretization bugs\n\n- Use transport_momentum/transport_velocities in acoustic timestepper\n  for correct contravariant advection on terrain-following grids\n- Replace grid.architecture with architecture(grid) for wrapped grids\n- Fix type promotion: return `false` instead of `0` from ::Nothing\n  fallbacks to preserve Float32 stability in GPU kernels\n- Convert follow_terrain! docstring from plain julia to jldoctest\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Address Oceananigans design review notes for terrain PR\n\n- Extract shared `evaluate_profile` helper in Thermodynamics to replace\n  duplicated `_reference_theta` dispatch in terrain physics (Design Note 1)\n- Document why `_set_topography!` uses manual `copyto!` instead of\n  Oceananigans' `set!` — required for non-GPU-compatible user functions\n  (Design Note 2)\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix\n\n* Fix terrain reference state to use local physical height instead of sea-level pressure\n\nThe reference state initialization forced sea-level Exner pressure (π_surface)\nat k=1 for every column, regardless of terrain height. On terrain-following\ngrids where z_phys at k=1 varies by column, this created O(ρgh) spurious\nhorizontal pressure gradients in p_ref, defeating the perturbation PG approach\nand introducing artificial buoyancy sources over terrain.\n\nNow evaluates the continuous hydrostatic pressure at each column's actual\nphysical height via hydrostatic_pressure(), which dispatches to closed-form\n(constant θ) or numerical integration (θ(z) profile).\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Remove trailing blank line in terrain_compressible_physics.jl\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* Remove stale imports\n\n* Use `DocStringExtensions` utils in more places\n\n* refactor: Compute Ω̃ from ρΩ̃/ρ for discrete mass consistency\n\nInstead of computing contravariant velocity and momentum independently,\ncompute ρΩ̃ from prognostic momentum fields first, then diagnose\nΩ̃ = ρΩ̃ / ρ_face. This ensures ρ_face · Ω̃ ≡ ρΩ̃ on the discrete grid,\npreventing spurious tracer sources from interpolation non-commutativity.\n\n* fix\n\n* fix: Remove unresolvable @ref links to Oceananigans types in mountain wave example\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* fix: Remove stale `tick!` import from TimeSteppers\n\nCo-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>\n\n* update example\n\n* CI fix\n\n* fix and clean up\n\n* fix and clean up\n\n* CI fix\n\n---------\n\nCo-authored-by: Claude Opus 4.6 <noreply@anthropic.com>\nCo-authored-by: Kai-Yuan Cheng <kaiyuanc332@gmail.com>\nCo-authored-by: kaiyuan-cheng <74800123+kaiyuan-cheng@users.noreply.github.com>\nCo-authored-by: Mosè Giordano <mose@gnu.org>",
          "timestamp": "2026-03-30T21:22:20+01:00",
          "tree_id": "b7dbedb13135df05326be1530b59916ca0a883f8",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/821a379c1c035c7650b165b4de0762784dc3eabd"
        },
        "date": 1774903235317,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108785680.26534455,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78532152.6238281,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 55604300.240071625,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 114642965.11972798,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 114642965.11972798,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112739767.38943326,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112739767.38943326,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112739767.38943326,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 100315491.08664177,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 100315491.08664177,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79334924.38531055,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79334924.38531055,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74108264.65678346,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74108264.65678346,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64185156.11152674,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64185156.11152674,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14957227.505051248,
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
          "id": "de897473002e2aedc5d3073e13ccb61fd94085af",
          "message": "Bump version from 0.4.3 to 0.4.4 (#596)\n\nTo capture update to 106.3",
          "timestamp": "2026-03-31T09:10:14-06:00",
          "tree_id": "eea4bf6b12a198e32c9c4b8c5a8e28ef3e011993",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/de897473002e2aedc5d3073e13ccb61fd94085af"
        },
        "date": 1774970897086,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108078389.06223227,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78160801.99971247,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 55436760.65975884,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121449201.05447844,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121449201.05447844,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 111828214.8571775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 111828214.8571775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 111828214.8571775,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 98965007.65902928,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 98965007.65902928,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 78535000.68829295,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 78535000.68829295,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74050259.3303593,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74050259.3303593,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65434689.80394043,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65434689.80394043,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14993849.149067184,
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
          "id": "350d1553a25d5c53fd5b250cd5decbe318b96382",
          "message": "Delete warning (#599)",
          "timestamp": "2026-03-31T12:42:41-06:00",
          "tree_id": "4f02086dcfc37aa4b60e91c40ac27544612f13f7",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/350d1553a25d5c53fd5b250cd5decbe318b96382"
        },
        "date": 1774983643897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 107779596.06625974,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77284302.51887327,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 54799758.17167779,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 120567389.28962651,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 120567389.28962651,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 109760111.21778157,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 109760111.21778157,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 109760111.21778157,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 95887539.45719376,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 95887539.45719376,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 77824701.27351913,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 77824701.27351913,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 70818780.84866573,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 70818780.84866573,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 62399494.0444486,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 62399494.0444486,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14707348.964792749,
            "unit": "points/s"
          }
        ]
      }
    ]
  }
}