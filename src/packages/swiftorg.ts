/**
 * **swift** - The Swift Programming Language
 *
 * @domain `swift.org`
 * @programs `docc`, `dsymutil`, `sourcekit-lsp`, `swift-api-checker.py`, `swift-build-sdk-interfaces`, ... (+21 more)
 * @version `6.1.2` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +swift.org -- $SHELL -i`
 * @aliases `swift`
 * @dependencies `gnu.org/gcc`, `gnu.org/binutils`, `gnupg.org^2`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.swift
 * // Or access via domain
 * const samePkg = pantry.swiftorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "swift.org"
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
  name: 'swift.org' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +swift.org -- $SHELL -i' as const,
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
  aliases: [
    'swift',
  ] as const,
}

export type SwiftPackage = typeof swiftPackage
