/**
 * **xtrans** - pkgx package
 *
 * @domain `x.org/xtrans`
 * @version `1.4.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/xtrans -- $SHELL -i`
 * @dependencies `x.org/protocol`, `x.org/util-macros`, `freedesktop.org/pkg-config~0.29`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxtrans
 * console.log(pkg.name)        // "xtrans"
 * console.log(pkg.versions[0]) // "1.4.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xtrans.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxtransPackage = {
  /**
   * The display name of this package.
   */
  name: 'xtrans' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xtrans' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xtrans/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/xtrans -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/protocol',
    'x.org/util-macros',
    'freedesktop.org/pkg-config~0.29',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.0',
  ] as const,
  aliases: [] as const,
}

export type XorgxtransPackage = typeof xorgxtransPackage
