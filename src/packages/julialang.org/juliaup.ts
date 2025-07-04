/**
 * **juliaup** - Package from pantry: julialang.org/juliaup
 *
 * @domain `julialang.org/juliaup`
 *
 * @install `launchpad install julialang.org/juliaup`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.julialangorgjuliaup
 * console.log(pkg.name)        // "juliaup"
 * console.log(pkg.description) // "Package from pantry: julialang.org/juliaup"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/julialang-org/juliaup.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const julialangorgjuliaupPackage = {
  /**
   * The display name of this package.
   */
  name: 'juliaup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'julialang.org/juliaup' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: julialang.org/juliaup' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install julialang.org/juliaup' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +julialang.org/juliaup -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install julialang.org/juliaup' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/julialang.org/juliaup/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JulialangorgjuliaupPackage = typeof julialangorgjuliaupPackage
