/**
 * **x11** - pkgx package
 *
 * @domain `x.org/x11`
 * @version `1.8.12` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/x11 -- $SHELL -i`
 * @dependencies `x.org/xcb^1`, `x.org/protocol`, `freedesktop.org/pkg-config~0.29`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgx11
 * console.log(pkg.name)        // "x11"
 * console.log(pkg.versions[0]) // "1.8.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/x11.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgx11Package = {
  /**
   * The display name of this package.
   */
  name: 'x11' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/x11' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/x11/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/x11 -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/xcb^1',
    'x.org/protocol',
    'freedesktop.org/pkg-config~0.29',
    'x.org/util-macros',
    'x.org/xtrans^1',
    'gnu.org/sed',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.12',
    '1.8.11',
    '1.8.10',
    '1.8.9',
    '1.8.8',
    '1.8.7',
    '1.8.6',
    '1.8.5',
    '1.8.4',
  ] as const,
  aliases: [] as const,
}

export type Xorgx11Package = typeof xorgx11Package
