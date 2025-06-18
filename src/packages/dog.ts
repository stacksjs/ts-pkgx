/**
 * **dog** - A command-line DNS client.
 *
 * @domain `dns.lookup.dog`
 * @programs `dog`
 * @version `0.1.0` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/dns-lookup-dog.md
 *
 * @install `sh <(curl https://pkgx.sh) dog`
 * @name `dog`
 * @dependencies `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.dog
 * // Or access via domain
 * const samePkg = pantry.dnslookupdog
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "dog"
 * console.log(pkg.description) // "A command-line DNS client."
 * console.log(pkg.programs)    // ["dog"]
 * console.log(pkg.versions[0]) // "0.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/dns-lookup-dog.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const dogPackage = {
  /**
   * The display name of this package.
   */
  name: 'dog' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'dns.lookup.dog' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A command-line DNS client.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/dns.lookup.dog/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) dog' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'dog',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'dns.lookup.dog' as const,
}

export type DogPackage = typeof dogPackage
