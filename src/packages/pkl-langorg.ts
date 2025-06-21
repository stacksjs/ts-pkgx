/**
 * **pkl-lang.org** - Package from pantry: pkl-lang.org
 *
 * @domain `pkl-lang.org`
 *
 * @install `launchpad install pkl-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pkllangorg
 * console.log(pkg.name)        // "pkl-lang.org"
 * console.log(pkg.description) // "Package from pantry: pkl-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pkl-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pkllangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pkl-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pkl-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pkl-lang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pkl-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pkl-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PkllangorgPackage = typeof pkllangorgPackage
