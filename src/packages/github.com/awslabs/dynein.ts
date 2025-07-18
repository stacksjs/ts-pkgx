/**
 * **dy** - DynamoDB CLI written in Rust.
 *
 * @domain `github.com/awslabs/dynein`
 * @programs `dy`
 * @version `0.3.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install dy`
 * @name `dy`
 * @dependencies `linux:openssl.org^1.1` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dy
 * // Or access via domain
 * const samePkg = pantry.githubcomawslabsdynein
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dy"
 * console.log(pkg.description) // "DynamoDB CLI written in Rust."
 * console.log(pkg.programs)    // ["dy"]
 * console.log(pkg.versions[0]) // "0.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/awslabs/dynein.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dyPackage = {
  /**
   * The display name of this package.
   */
  name: 'dy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/awslabs/dynein' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'DynamoDB CLI written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/awslabs/dynein/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install dy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dy',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.3.0',
    '0.2.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) dy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install dy' as const,
}

export type DyPackage = typeof dyPackage
