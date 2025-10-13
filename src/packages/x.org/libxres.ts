/**
 * **libxres** - Package from pantry: x.org/libxres
 *
 * @domain `x.org/libxres`
 *
 * @install `launchpad install x.org/libxres`
 * @dependencies `x.org/x11^1`, `x.org/exts`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorglibxres
 * console.log(pkg.name)        // "libxres"
 * console.log(pkg.description) // "Package from pantry: x.org/libxres"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libxres.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorglibxresPackage = {
  /**
   * The display name of this package.
   */
  name: 'libxres' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libxres' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/libxres' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/libxres' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/libxres -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/libxres' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/exts',
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libxres/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorglibxresPackage = typeof xorglibxresPackage
