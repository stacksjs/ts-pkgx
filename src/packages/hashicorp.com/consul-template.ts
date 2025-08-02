/**
 * **consul-template** - Package from pantry: hashicorp.com/consul-template
 *
 * @domain `hashicorp.com/consul-template`
 *
 * @install `launchpad install hashicorp.com/consul-template`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hashicorpcomconsultemplate
 * console.log(pkg.name)        // "consul-template"
 * console.log(pkg.description) // "Package from pantry: hashicorp.com/consul-template"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hashicorp-com/consul-template.md
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
  domain: 'hashicorp.com/consul-template' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hashicorp.com/consul-template' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hashicorp.com/consul-template' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +hashicorp.com/consul-template -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hashicorp.com/consul-template' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hashicorp.com/consul-template/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HashicorpcomconsultemplatePackage = typeof hashicorpcomconsultemplatePackage
