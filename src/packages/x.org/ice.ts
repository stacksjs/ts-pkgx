/**
 * **ice** - pkgx package
 *
 * @domain `x.org/ice`
 * @version `1.1.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/ice -- $SHELL -i`
 * @dependencies `x.org/protocol`, `freedesktop.org/pkg-config~0.29`, `x.org/xtrans`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgice
 * console.log(pkg.name)        // "ice"
 * console.log(pkg.versions[0]) // "1.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/ice.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgicePackage = {
  /**
   * The display name of this package.
   */
  name: 'ice' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/ice' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/ice/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/ice -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/protocol',
    'freedesktop.org/pkg-config~0.29',
    'x.org/xtrans',
    'x.org/x11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.2',
    '1.1.1',
  ] as const,
  aliases: [] as const,
}

export type XorgicePackage = typeof xorgicePackage
