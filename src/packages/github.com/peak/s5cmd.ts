/**
 * **s5cmd** - Parallel S3 and local filesystem execution tool.
 *
 * @domain `github.com/peak/s5cmd`
 * @programs `s5cmd`
 * @version `2.3.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install s5cmd`
 * @name `s5cmd`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.s5cmd
 * // Or access via domain
 * const samePkg = pantry.githubcompeaks5cmd
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "s5cmd"
 * console.log(pkg.description) // "Parallel S3 and local filesystem execution tool."
 * console.log(pkg.programs)    // ["s5cmd"]
 * console.log(pkg.versions[0]) // "2.3.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/peak/s5cmd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const s5cmdPackage = {
  /**
   * The display name of this package.
   */
  name: 's5cmd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/peak/s5cmd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Parallel S3 and local filesystem execution tool.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/peak/s5cmd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/peak/s5cmd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install s5cmd' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    's5cmd',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) s5cmd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install s5cmd' as const,
}

export type S5cmdPackage = typeof s5cmdPackage
