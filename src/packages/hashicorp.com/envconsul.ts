/**
 * **envconsul** - Launch a subprocess with environment variables using data from @HashiCorp Consul and Vault.
 *
 * @domain `hashicorp.com/envconsul`
 * @programs `envconsul`
 * @version `0.13.3` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install envconsul`
 * @name `envconsul`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.envconsul
 * // Or access via domain
 * const samePkg = pantry.hashicorpcomenvconsul
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "envconsul"
 * console.log(pkg.description) // "Launch a subprocess with environment variables ..."
 * console.log(pkg.programs)    // ["envconsul"]
 * console.log(pkg.versions[0]) // "0.13.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hashicorp-com/envconsul.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const envconsulPackage = {
  /**
   * The display name of this package.
   */
  name: 'envconsul' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hashicorp.com/envconsul' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Launch a subprocess with environment variables using data from @HashiCorp Consul and Vault.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hashicorp.com/envconsul/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install envconsul' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'envconsul',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.3',
    '0.13.2',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type EnvconsulPackage = typeof envconsulPackage
