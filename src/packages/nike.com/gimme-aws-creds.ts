/**
 * **gimme-aws-creds** - Package from pantry: nike.com/gimme-aws-creds
 *
 * @domain `nike.com/gimme-aws-creds`
 *
 * @install `launchpad install nike.com/gimme-aws-creds`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nikecomgimmeawscreds
 * console.log(pkg.name)        // "gimme-aws-creds"
 * console.log(pkg.description) // "Package from pantry: nike.com/gimme-aws-creds"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nike-com/gimme-aws-creds.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nikecomgimmeawscredsPackage = {
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
  description: 'Package from pantry: nike.com/gimme-aws-creds' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nike.com/gimme-aws-creds' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nike.com/gimme-aws-creds -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nike.com/gimme-aws-creds' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nike.com/gimme-aws-creds/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NikecomgimmeawscredsPackage = typeof nikecomgimmeawscredsPackage
