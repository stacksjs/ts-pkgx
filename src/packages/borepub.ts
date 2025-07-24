/**
 * **bore** - Modern, simple TCP tunnel in Rust that exposes local ports to a remote server
 *
 * @domain `bore.pub`
 * @programs `bore`
 * @version `0.6.0` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bore`
 * @name `bore`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bore
 * // Or access via domain
 * const samePkg = pantry.borepub
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bore"
 * console.log(pkg.description) // "Modern, simple TCP tunnel in Rust that exposes ..."
 * console.log(pkg.programs)    // ["bore"]
 * console.log(pkg.versions[0]) // "0.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/bore-pub.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const borePackage = {
  /**
   * The display name of this package.
   */
  name: 'bore' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'bore.pub' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Modern, simple TCP tunnel in Rust that exposes local ports to a remote server' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/bore.pub/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install bore' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bore',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.6.0',
    '0.5.3',
    '0.5.2',
    '0.5.1',
    '0.5.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) bore -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install bore' as const,
}

export type BorePackage = typeof borePackage
