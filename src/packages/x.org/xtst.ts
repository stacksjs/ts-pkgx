/**
 * **xtst** - Package from pantry: x.org/xtst
 *
 * @domain `x.org/xtst`
 *
 * @install `launchpad install x.org/xtst`
 * @dependencies `x.org/xi`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxtst
 * console.log(pkg.name)        // "xtst"
 * console.log(pkg.description) // "Package from pantry: x.org/xtst"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xtst.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxtstPackage = {
  /**
   * The display name of this package.
   */
  name: 'xtst' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xtst' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xtst' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xtst' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xi',
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xtst/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxtstPackage = typeof xorgxtstPackage
