/**
 * **xpm** - pkgx package
 *
 * @domain `x.org/xpm`
 * @version `3.5.17` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/xpm -- $SHELL -i`
 * @dependencies `x.org/x11`, `zlib.net^1.2`, `freedesktop.org/pkg-config~0.29`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxpm
 * console.log(pkg.name)        // "xpm"
 * console.log(pkg.versions[0]) // "3.5.17" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xpm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxpmPackage = {
  /**
   * The display name of this package.
   */
  name: 'xpm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xpm' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xpm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/xpm -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'zlib.net^1.2',
    'freedesktop.org/pkg-config~0.29',
    'gnu.org/gettext@0.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.5.17',
    '3.5.15',
  ] as const,
  aliases: [] as const,
}

export type XorgxpmPackage = typeof xorgxpmPackage
