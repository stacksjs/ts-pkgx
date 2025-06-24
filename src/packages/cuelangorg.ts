/**
 * **cuelang.org** - Package from pantry: cuelang.org
 *
 * @domain `cuelang.org`
 *
 * @install `launchpad install cuelang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cuelangorg
 * console.log(pkg.name)        // "cuelang.org"
 * console.log(pkg.description) // "Package from pantry: cuelang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cuelang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cuelangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'cuelang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cuelang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cuelang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cuelang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cuelang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cuelang.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cuelang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CuelangorgPackage = typeof cuelangorgPackage
