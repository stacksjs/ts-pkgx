/**
 * **age** - A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.
 *
 * @domain `filippo.io/age`
 * @programs `age`, `age-keygen`
 * @version `1.2.1` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +filippo.io/age -- $SHELL -i`
 * @name `age`
 * @dependencies `go.dev^1.19`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.age
 * // Or access via domain
 * const samePkg = pantry.filippoioage
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "age"
 * console.log(pkg.description) // "A simple, modern and secure encryption tool (an..."
 * console.log(pkg.programs)    // ["age", "age-keygen"]
 * console.log(pkg.versions[0]) // "1.2.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/filippo-io/age.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const agePackage = {
  /**
   * The display name of this package.
   */
  name: 'age' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'filippo.io/age' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A simple, modern and secure encryption tool (and Go library) with small explicit keys, no config options, and UNIX-style composability.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/filippo.io/age/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +filippo.io/age -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'age',
    'age-keygen',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.2.1',
    '1.2.0',
    '1.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type AgePackage = typeof agePackage
