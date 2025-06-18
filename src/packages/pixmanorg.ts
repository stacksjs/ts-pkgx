/**
 * **pixman.org** - Package from pantry: pixman.org
 *
 * @domain `pixman.org`
 *
 * @install `launchpad install pixman.org`
 * @dependencies `freedesktop.org/pkg-config^0.29`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pixmanorg
 * console.log(pkg.name)        // "pixman.org"
 * console.log(pkg.description) // "Package from pantry: pixman.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pixman-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pixmanorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pixman.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pixman.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pixman.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pixman.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/pkg-config^0.29',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pixman.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PixmanorgPackage = typeof pixmanorgPackage
