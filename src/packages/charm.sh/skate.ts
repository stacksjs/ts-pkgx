/**
 * **skate** - A personal key value store 🛼
 *
 * @domain `charm.sh/skate`
 * @programs `skate`
 * @version `1.0.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install skate`
 * @name `skate`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.skate
 * // Or access via domain
 * const samePkg = pantry.charmshskate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "skate"
 * console.log(pkg.description) // "A personal key value store 🛼"
 * console.log(pkg.programs)    // ["skate"]
 * console.log(pkg.versions[0]) // "1.0.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/charm-sh/skate.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const skatePackage = {
  /**
   * The display name of this package.
   */
  name: 'skate' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'charm.sh/skate' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A personal key value store 🛼' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/charm.sh/skate/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install skate' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'skate',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.0.1',
    '1.0.0',
    '0.2.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type SkatePackage = typeof skatePackage
