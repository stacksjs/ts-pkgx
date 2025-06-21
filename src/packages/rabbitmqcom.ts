/**
 * **rabbitmq.com** - Package from pantry: rabbitmq.com
 *
 * @domain `rabbitmq.com`
 *
 * @install `launchpad install rabbitmq.com`
 * @dependencies `erlang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rabbitmqcom
 * console.log(pkg.name)        // "rabbitmq.com"
 * console.log(pkg.description) // "Package from pantry: rabbitmq.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/rabbitmq-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rabbitmqcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'rabbitmq.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'rabbitmq.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: rabbitmq.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install rabbitmq.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'erlang.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/rabbitmq.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RabbitmqcomPackage = typeof rabbitmqcomPackage
