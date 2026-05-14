window.BENCHMARK_DATA = {
  "lastUpdate": 1778778296168,
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
          "id": "b1aa907105e7a779b3a65288316dfa8f44147351",
          "message": "Bump version from 0.4.4 to 0.4.5 (#605)",
          "timestamp": "2026-04-02T20:35:47-06:00",
          "tree_id": "914dc4613aaa3c481d3144e9d27f8c0370456bfd",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/b1aa907105e7a779b3a65288316dfa8f44147351"
        },
        "date": 1775184765196,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108838864.21206297,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 78214589.5612705,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 51229141.556586675,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 113792330.75779563,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 113792330.75779563,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 112950866.52656378,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 112950866.52656378,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 112950866.52656378,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 101574379.35943343,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 101574379.35943343,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 79575461.69303259,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 79575461.69303259,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74802188.20507699,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74802188.20507699,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65594621.56168656,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65594621.56168656,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14884559.152664382,
            "unit": "points/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "9022843+fergu@users.noreply.github.com",
            "name": "Kevin",
            "username": "fergu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba2ba152fb86346b4e4188b8d72053218efb54a6",
          "message": "Add error message when required keyword arguments to BulkDrag are missing (#603)\n\n* Added error message when required keyword arguments to BulkDrag are missing\n\n* Update if statement for style recommendations\r\n\r\nUpdate if statement to be consistent with Julia style guide and to use a logical and instead of bitwise.\n\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\n\n* Changed error() to throw(ArgumentError()) and made error message more specific to BulkDrag\n\n* Added test to make sure BulkDrag throws an error when misconfigured\n\n---------\n\nCo-authored-by: Kevin Ferguson <kjferguson@ucar.edu>\nCo-authored-by: Mosè Giordano <765740+giordano@users.noreply.github.com>\nCo-authored-by: Gregory L. Wagner <gregory.leclaire.wagner@gmail.com>",
          "timestamp": "2026-04-03T11:36:29-06:00",
          "tree_id": "f1bb7ee053cd27787ef83d5bbcab39f44a95b2f0",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/ba2ba152fb86346b4e4188b8d72053218efb54a6"
        },
        "date": 1775238849677,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108461843.40130568,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77573209.37499402,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 50361159.77607605,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 121322954.20880358,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 121322954.20880358,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 113266324.0653511,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 113266324.0653511,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 113266324.0653511,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 104813698.10653612,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 104813698.10653612,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80162842.82480001,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80162842.82480001,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 74512053.01451638,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 74512053.01451638,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 64858439.25972695,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 64858439.25972695,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14657293.392256241,
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
          "id": "cff9e4c7205343b669b75f015eb71e3b8f14e622",
          "message": "add Base.show(io::IO, tm::TerrainMetrics) (#617)",
          "timestamp": "2026-04-08T10:20:15+10:00",
          "tree_id": "fee60447da7c1fc2558258984922555c3c4ba9ad",
          "url": "https://github.com/NumericalEarth/Breeze.jl/commit/cff9e4c7205343b669b75f015eb71e3b8f14e622"
        },
        "date": 1775608847220,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/MixedPhaseEquilibrium",
            "value": 108902965.52765907,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedEquilibrium",
            "value": 77069916.79080932,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/1M_MixedNonEquilibrium",
            "value": 47697143.03923035,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [256, 256, 128]",
            "value": 122175148.55574384,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/256x256x128",
            "value": 122175148.55574384,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Grid: 512x512x256 [Float32]/Advection: WENO5/NVIDIA L4/nothing",
            "value": 114699087.09980671,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [512, 512, 256]",
            "value": 114699087.09980671,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 114699087.09980671,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO5 [768, 768, 256]",
            "value": 104671165.86787853,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/768x768x256",
            "value": 104671165.86787853,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [256, 256, 128]",
            "value": 80348147.65731272,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/256x256x128",
            "value": 80348147.65731272,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [512, 512, 256]",
            "value": 75991681.12509437,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/512x512x256",
            "value": 75991681.12509437,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Compare advections/NVIDIA L4/WENO9 [768, 768, 256]",
            "value": 65657554.90053608,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: anelastic; Microphysics: nothing [Float32]/Advection: WENO9/NVIDIA L4/768x768x256",
            "value": 65657554.90053608,
            "unit": "points/s"
          },
          {
            "name": "CBL; Dynamics: compressible_splitexplicit; Microphysics: nothing [Float32]/Advection: WENO5/NVIDIA L4/512x512x256",
            "value": 14887704.43635332,
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
      }
    ]
  }
}