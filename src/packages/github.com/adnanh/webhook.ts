/**
 * **webhook** - webhook is a lightweight incoming webhook server to run shell commands
 *
 * @domain `github.com/adnanh/webhook`
 * @programs `webhook`
 * @version `2.8.2` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) webhook`
 * @name `webhook`
 * @aliases `adnanh/webhook`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.webhook
 * // Or access via domain
 * const samePkg = pantry.githubcomadnanhwebhook
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "webhook"
 * console.log(pkg.description) // "webhook is a lightweight incoming webhook serve..."
 * console.log(pkg.programs)    // ["webhook"]
 * console.log(pkg.versions[0]) // "2.8.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/adnanh/webhook.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const webhookPackage = {
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
  description: 'webhook is a lightweight incoming webhook server to run shell commands' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/adnanh/webhook/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) webhook' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'webhook',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.8.2',
    '2.8.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'adnanh/webhook',
  ] as const,
  fullPath: 'github.com/adnanh/webhook' as const,
}

export type WebhookPackage = typeof webhookPackage
