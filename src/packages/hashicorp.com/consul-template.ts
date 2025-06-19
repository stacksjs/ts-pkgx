/**
 * **consul-template** - Template rendering, notifier, and supervisor for @HashiCorp Consul and Vault data.
 *
 * @domain `hashicorp.com/consul-template`
 * @programs `consul-template`
 * @version `0.41.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install consul-template`
 * @name `consul-template`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.consultemplate
 * // Or access via domain
 * const samePkg = pantry.hashicorpcomconsultemplate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "consul-template"
 * console.log(pkg.description) // "Template rendering, notifier, and supervisor fo..."
 * console.log(pkg.programs)    // ["consul-template"]
 * console.log(pkg.versions[0]) // "0.41.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hashicorp-com/consul-template.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const consultemplatePackage = {
  /**
   * The display name of this package.
   */
  name: 'consul-template' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hashicorp.com/consul-template' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Template rendering, notifier, and supervisor for @HashiCorp Consul and Vault data.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hashicorp.com/consul-template/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install consul-template' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'consul-template',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.41.0',
    '0.40.0',
    '0.39.1',
    '0.39.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type ConsultemplatePackage = typeof consultemplatePackage
