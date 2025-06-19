/**
 * **libxfont2** - pkgx package
 *
 * @domain `x.org/libxfont2`
 * @version `2.0.7` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/libxfont2 -- $SHELL -i`
 * @dependencies `x.org/x11^1`, `x.org/exts`, `x.org/protocol`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorglibxfont2
 * console.log(pkg.name)        // "libxfont2"
 * console.log(pkg.versions[0]) // "2.0.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/libxfont2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorglibxfont2Package = {
  /**
   * The display name of this package.
   */
  name: 'libxfont2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/libxfont2' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libxfont2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/libxfont2 -- $SHELL -i' as const,
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
    'freetype.org',
    'x.org/xtrans',
    'zlib.net',
    'x.org/libfontenc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.0.7',
  ] as const,
  aliases: [] as const,
}

export type Xorglibxfont2Package = typeof xorglibxfont2Package
