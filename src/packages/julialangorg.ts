/**
 * **julialang.org** - Package from pantry: julialang.org
 *
 * @domain `julialang.org`
 *
 * @install `launchpad install julialang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.julialangorg
 * console.log(pkg.name)        // "julialang.org"
 * console.log(pkg.description) // "Package from pantry: julialang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/julialang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const julialangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'julialang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'julialang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: julialang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install julialang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +julialang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install julialang.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/julialang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type JulialangorgPackage = typeof julialangorgPackage
