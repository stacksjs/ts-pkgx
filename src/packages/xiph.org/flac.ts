/**
 * **flac** - Package from pantry: xiph.org/flac
 *
 * @domain `xiph.org/flac`
 *
 * @install `launchpad install xiph.org/flac`
 * @dependencies `xiph.org/ogg^1.3.5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xiphorgflac
 * console.log(pkg.name)        // "flac"
 * console.log(pkg.description) // "Package from pantry: xiph.org/flac"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xiph-org/flac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xiphorgflacPackage = {
  /**
   * The display name of this package.
   */
  name: 'flac' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xiph.org/flac' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xiph.org/flac' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xiph.org/flac' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'xiph.org/ogg^1.3.5',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xiph.org/flac/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XiphorgflacPackage = typeof xiphorgflacPackage
