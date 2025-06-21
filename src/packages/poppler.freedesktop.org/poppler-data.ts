/**
 * **poppler-data** - Package from pantry: poppler.freedesktop.org/poppler-data
 *
 * @domain `poppler.freedesktop.org/poppler-data`
 *
 * @install `launchpad install poppler.freedesktop.org/poppler-data`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.popplerfreedesktoporgpopplerdata
 * console.log(pkg.name)        // "poppler-data"
 * console.log(pkg.description) // "Package from pantry: poppler.freedesktop.org/po..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/poppler-freedesktop-org/poppler-data.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const popplerfreedesktoporgpopplerdataPackage = {
  /**
   * The display name of this package.
   */
  name: 'poppler-data' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'poppler.freedesktop.org/poppler-data' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: poppler.freedesktop.org/poppler-data' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install poppler.freedesktop.org/poppler-data' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/poppler.freedesktop.org/poppler-data/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PopplerfreedesktoporgpopplerdataPackage = typeof popplerfreedesktoporgpopplerdataPackage
