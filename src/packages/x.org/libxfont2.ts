/**
 * **libxfont2** - Package from pantry: x.org/libxfont2
 *
 * @domain `x.org/libxfont2`
 *
 * @install `launchpad install x.org/libxfont2`
 * @dependencies `x.org/x11^1`, `x.org/exts`, `x.org/protocol`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorglibxfont2
 * console.log(pkg.name)        // "libxfont2"
 * console.log(pkg.description) // "Package from pantry: x.org/libxfont2"
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
  description: 'Package from pantry: x.org/libxfont2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/libxfont2' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/libxfont2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Xorglibxfont2Package = typeof xorglibxfont2Package
