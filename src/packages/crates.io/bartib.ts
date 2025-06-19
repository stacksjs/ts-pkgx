/**
 * **bartib** - A simple timetracker for the command line. It saves a log of all tracked activities as a plaintext file and allows you to create flexible reports.
 *
 * @domain `crates.io/bartib`
 * @programs `bartib`
 * @version `1.1.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install bartib`
 * @name `bartib`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.bartib
 * // Or access via domain
 * const samePkg = pantry.cratesiobartib
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "bartib"
 * console.log(pkg.description) // "A simple timetracker for the command line. It s..."
 * console.log(pkg.programs)    // ["bartib"]
 * console.log(pkg.versions[0]) // "1.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/bartib.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const bartibPackage = {
  /**
   * The display name of this package.
   */
  name: 'bartib' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/bartib' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A simple timetracker for the command line. It saves a log of all tracked activities as a plaintext file and allows you to create flexible reports.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/bartib/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install bartib' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'bartib',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.0',
    '1.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type BartibPackage = typeof bartibPackage
