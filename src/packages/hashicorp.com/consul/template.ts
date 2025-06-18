/**
 * **hashicorp.com/consul-template** - pkgx package
 *
 * @domain `hashicorp.com/consul/template`
 *
 * @install `pkgx hashicorp.com/consul-template`
 * @name `consul-template`
 * @aliases `hashicorp.com/consul-template`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.hashicorpcomconsultemplate
 * // Or access via domain
 * const samePkg = pantry.hashicorpcomconsultemplate
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "consul-template"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hashicorp-com/consul/template.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hashicorpcomconsultemplatePackage = {
  /**
   * The display name of this package.
   */
  name: 'consul-template' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hashicorp.com/consul/template' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx hashicorp.com/consul-template' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'hashicorp.com/consul-template',
  ] as const,
  fullPath: 'hashicorp.com/consul-template' as const,
}

export type HashicorpcomconsultemplatePackage = typeof hashicorpcomconsultemplatePackage
