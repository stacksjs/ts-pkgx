/**
 * **gimme-aws-creds** - A CLI that utilizes Okta IdP via SAML to acquire temporary AWS credentials
 *
 * @domain `nike.com/gimme-aws-creds`
 * @programs `gimme-aws-creds`
 * @version `2.8.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gimme-aws-creds`
 * @name `gimme-aws-creds`
 * @dependencies `pkgx.sh^1`, `python.org^3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.gimmeawscreds
 * // Or access via domain
 * const samePkg = pantry.nikecomgimmeawscreds
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gimme-aws-creds"
 * console.log(pkg.description) // "A CLI that utilizes Okta IdP via SAML to acquir..."
 * console.log(pkg.programs)    // ["gimme-aws-creds"]
 * console.log(pkg.versions[0]) // "2.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nike-com/gimme-aws-creds.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gimmeawscredsPackage = {
  /**
   * The display name of this package.
   */
  name: 'gimme-aws-creds' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nike.com/gimme-aws-creds' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A CLI that utilizes Okta IdP via SAML to acquire temporary AWS credentials' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nike.com/gimme-aws-creds/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install gimme-aws-creds' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gimme-aws-creds',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org^3.11',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.8.2',
    '2.8.1.1',
    '2.8.1',
    '2.8.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type GimmeawscredsPackage = typeof gimmeawscredsPackage
