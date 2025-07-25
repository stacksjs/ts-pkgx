/**
 * **swift** - The Swift Programming Language
 *
 * @domain `swift.org`
 * @programs `docc`, `dsymutil`, `sourcekit-lsp`, `swift-api-checker.py`, `swift-build-sdk-interfaces`, ... (+21 more)
 * @version `6.1.2` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install swift`
 * @name `swift`
 * @dependencies `linux:gnu.org/gcc`, `linux:gnu.org/binutils`, `linux:gnupg.org^2`, ... (+4 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.swift
 * // Or access via domain
 * const samePkg = pantry.swiftorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "swift"
 * console.log(pkg.description) // "The Swift Programming Language"
 * console.log(pkg.programs)    // ["docc", "dsymutil", ...]
 * console.log(pkg.versions[0]) // "6.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/swift-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const swiftPackage = {
  /**
   * The display name of this package.
   */
  name: 'swift' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'swift.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Swift Programming Language' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/swift.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install swift' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'docc',
    'dsymutil',
    'sourcekit-lsp',
    'swift-api-checker.py',
    'swift-build-sdk-interfaces',
    'swift-build-tool',
    'swift-demangle',
    'swift-driver',
    'swift-format',
    'swift-frontend',
    'swift-help',
    'swift-package',
    'swift-plugin-server',
    'swift-stdlib-tool',
    'swift',
    'swift-api-digester',
    'swift-api-extract',
    'swift-autolink-extract',
    'swift-build',
    'swift-experimental-sdk',
    'swift-package-collection',
    'swift-package-registry',
    'swift-run',
    'swift-symbolgraph-extract',
    'swift-test',
    'swiftc',
  ] as const,
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
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '6.1.2',
    '6.1.1',
    '6.1.0',
    '6.0.3',
    '6.0.2',
    '6.0.1',
    '6.0.0',
    '5.10.1',
    '5.10.0',
    '5.9.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +swift.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install swift' as const,
}

export type SwiftPackage = typeof swiftPackage
