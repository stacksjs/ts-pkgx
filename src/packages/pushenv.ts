/**
 * **pushenv** - A CLI utility that reads a .env file before starting a process
 *
 * @domain `crates.io/pushenv`
 * @programs `pushenv`
 * @version `1.1.2` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pushenv.md
 *
 * @install `sh <(curl https://pkgx.sh) pushenv`
 * @name `pushenv`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.pushenv
 * // Or access via domain
 * const samePkg = pantry.cratesiopushenv
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pushenv"
 * console.log(pkg.description) // "A CLI utility that reads a .env file before sta..."
 * console.log(pkg.programs)    // ["pushenv"]
 * console.log(pkg.versions[0]) // "1.1.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/pushenv.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pushenvPackage = {
  /**
   * The display name of this package.
   */
  name: 'pushenv' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/pushenv' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A CLI utility that reads a .env file before starting a process' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/pushenv/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) pushenv' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'pushenv',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'crates.io/pushenv' as const,
}

export type PushenvPackage = typeof pushenvPackage
