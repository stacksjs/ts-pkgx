/**
 * **saml2aws** - CLI tool which enables you to login and retrieve AWS temporary credentials using a SAML IDP
 *
 * @domain `github.com/Versent/saml2aws`
 * @programs `saml2aws`
 * @version `2.36.19` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install saml2aws`
 * @name `saml2aws`
 * @dependencies `go.dev^1.21`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.saml2aws
 * // Or access via domain
 * const samePkg = pantry.githubcomversentsaml2aws
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "saml2aws"
 * console.log(pkg.description) // "CLI tool which enables you to login and retriev..."
 * console.log(pkg.programs)    // ["saml2aws"]
 * console.log(pkg.versions[0]) // "2.36.19" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Versent/saml2aws.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const saml2awsPackage = {
  /**
   * The display name of this package.
   */
  name: 'saml2aws' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/Versent/saml2aws' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI tool which enables you to login and retrieve AWS temporary credentials using a SAML IDP' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Versent/saml2aws/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install saml2aws' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'saml2aws',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.21',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.36.19',
    '2.36.18',
    '2.36.17',
    '2.36.16',
    '2.36.15',
    '2.36.14',
    '2.36.13',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type Saml2awsPackage = typeof saml2awsPackage
