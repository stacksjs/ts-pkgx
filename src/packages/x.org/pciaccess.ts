/**
 * **pciaccess** - pkgx package
 *
 * @domain `x.org/pciaccess`
 * @version `0.17.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/pciaccess -- $SHELL -i`
 * @dependencies `freedesktop.org/pkg-config`, `x.org/util-macros`, `freedesktop.org/pkg-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgpciaccess
 * console.log(pkg.name)        // "pciaccess"
 * console.log(pkg.versions[0]) // "0.17.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/pciaccess.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgpciaccessPackage = {
  /**
   * The display name of this package.
   */
  name: 'pciaccess' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/pciaccess' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/pciaccess/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/pciaccess -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/pkg-config',
    'x.org/util-macros',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.17.0',
  ] as const,
  aliases: [] as const,
}

export type XorgpciaccessPackage = typeof xorgpciaccessPackage
