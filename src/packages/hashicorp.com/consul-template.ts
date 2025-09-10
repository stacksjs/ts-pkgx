/**
 * **hashicorp.com/consul-template** - pkgx package
 *
 * @domain `hashicorp.com/consul-template`
 * @version `0.41.1` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install hashicorp.com/consul-template`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hashicorpcomconsultemplate
 * console.log(pkg.name)        // "hashicorp.com/consul-template"
 * console.log(pkg.versions[0]) // "0.41.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hashicorp-com/consul-template.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hashicorpcomconsultemplatePackage = {
  /**
   * The display name of this package.
   */
  name: 'hashicorp.com/consul-template' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hashicorp.com/consul-template' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hashicorp.com/consul-template/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hashicorp.com/consul-template' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.41.1',
    '0.41.0',
    '0.40.0',
    '0.39.1',
    '0.39.0',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +hashicorp.com/consul-template -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hashicorp.com/consul-template' as const,
}

export type HashicorpcomconsultemplatePackage = typeof hashicorpcomconsultemplatePackage
