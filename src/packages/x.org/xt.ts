/**
 * **xt** - pkgx package
 *
 * @domain `x.org/xt`
 * @version `1.3.1` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/xt -- $SHELL -i`
 * @dependencies `x.org/ice`, `x.org/sm`, `x.org/x11`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxt
 * console.log(pkg.name)        // "xt"
 * console.log(pkg.versions[0]) // "1.3.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxtPackage = {
  /**
   * The display name of this package.
   */
  name: 'xt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xt' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/xt -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/ice',
    'x.org/sm',
    'x.org/x11',
    'freedesktop.org/pkg-config~0.29',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.1',
    '1.3.0',
  ] as const,
  aliases: [] as const,
}

export type XorgxtPackage = typeof xorgxtPackage
