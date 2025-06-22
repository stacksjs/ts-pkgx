/**
 * **saml2aws** - Package from pantry: github.com/Versent/saml2aws
 *
 * @domain `github.com/Versent/saml2aws`
 *
 * @install `launchpad install github.com/Versent/saml2aws`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomversentsaml2aws
 * console.log(pkg.name)        // "saml2aws"
 * console.log(pkg.description) // "Package from pantry: github.com/Versent/saml2aws"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/Versent/saml2aws.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomversentsaml2awsPackage = {
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
  description: 'Package from pantry: github.com/Versent/saml2aws' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/Versent/saml2aws' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/Versent/saml2aws -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/Versent/saml2aws' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/Versent/saml2aws/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomversentsaml2awsPackage = typeof githubcomversentsaml2awsPackage
