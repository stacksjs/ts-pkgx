/**
 * **giflib.sourceforge.io** - Package from pantry: giflib.sourceforge.io
 *
 * @domain `giflib.sourceforge.io`
 *
 * @install `launchpad install giflib.sourceforge.io`
 * @dependencies `gnu.org/patch`, `imagemagick.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.giflibsourceforgeio
 * console.log(pkg.name)        // "giflib.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: giflib.sourceforge.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/giflib-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const giflibsourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'giflib.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'giflib.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: giflib.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install giflib.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/patch',
    'imagemagick.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/giflib.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GiflibsourceforgeioPackage = typeof giflibsourceforgeioPackage
