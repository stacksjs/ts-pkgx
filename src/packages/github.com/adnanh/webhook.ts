/**
 * **webhook** - Package from pantry: github.com/adnanh/webhook
 *
 * @domain `github.com/adnanh/webhook`
 *
 * @install `launchpad install github.com/adnanh/webhook`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomadnanhwebhook
 * console.log(pkg.name)        // "webhook"
 * console.log(pkg.description) // "Package from pantry: github.com/adnanh/webhook"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adnanh/webhook.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomadnanhwebhookPackage = {
  /**
   * The display name of this package.
   */
  name: 'webhook' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/adnanh/webhook' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/adnanh/webhook' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/adnanh/webhook' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/adnanh/webhook -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/adnanh/webhook' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adnanh/webhook/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomadnanhwebhookPackage = typeof githubcomadnanhwebhookPackage
