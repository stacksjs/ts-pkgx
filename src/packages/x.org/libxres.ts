/**
 * **libxres** - pkgx package
 *
 * @domain `x.org/libxres`
 * @version `1.2.2` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/libxres -- $SHELL -i`
 * @dependencies `x.org/x11^1`, `x.org/exts`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorglibxres
 * console.log(pkg.name)        // "libxres"
 * console.log(pkg.versions[0]) // "1.2.2" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libxres/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/libxres -- $SHELL -i' as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.2',
  ] as const,
  aliases: [] as const,
}

export type XorglibxresPackage = typeof xorglibxresPackage
