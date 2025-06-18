/**
 * **swift.org** - Package from pantry: swift.org
 *
 * @domain `swift.org`
 *
 * @install `launchpad install swift.org`
 * @dependencies `gnu.org/gcc`, `gnu.org/binutils`, `gnupg.org^2`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.swiftorg
 * console.log(pkg.name)        // "swift.org"
 * console.log(pkg.description) // "Package from pantry: swift.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/swift-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swiftorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'swift.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'swift.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: swift.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install swift.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gcc',
    'gnu.org/binutils',
    'gnupg.org^2',
    'gnome.org/libxml2',
    'libgit2.org~1.7 # links to libgit2.so.1.7',
    'curl.se',
    'sqlite.org^3',
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/swift.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SwiftorgPackage = typeof swiftorgPackage
