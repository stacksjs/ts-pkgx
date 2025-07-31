/**
 * **swift.org** - Package from pantry: swift.org
 *
 * @domain `swift.org`
 *
 * @install `launchpad install swift.org`
 * @dependencies `linux:gnu.org/gcc`, `linux:gnu.org/binutils`, `linux:gnupg.org^2`, ... (+4 more) (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install swift.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +swift.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install swift.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:gnu.org/gcc',
    'linux:gnu.org/binutils',
    'linux:gnupg.org^2',
    'linux:gnome.org/libxml2',
    'linux:libgit2.org~1.7 # links to libgit2.so.1.7',
    'linux:curl.se',
    'linux:sqlite.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/swift.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SwiftorgPackage = typeof swiftorgPackage
