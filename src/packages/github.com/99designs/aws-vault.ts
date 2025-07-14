/**
 * **aws-vault** - Package from pantry: github.com/99designs/aws-vault
 *
 * @domain `github.com/99designs/aws-vault`
 *
 * @install `launchpad install github.com/99designs/aws-vault`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcom99designsawsvault
 * console.log(pkg.name)        // "aws-vault"
 * console.log(pkg.description) // "Package from pantry: github.com/99designs/aws-v..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/99designs/aws-vault.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcom99designsawsvaultPackage = {
  /**
   * The display name of this package.
   */
  name: 'aws-vault' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/99designs/aws-vault' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/99designs/aws-vault' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/99designs/aws-vault' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/99designs/aws-vault -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/99designs/aws-vault' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/99designs/aws-vault/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcom99designsawsvaultPackage = typeof githubcom99designsawsvaultPackage
