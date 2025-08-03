/**
 * **oauth2-proxy** - A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.
 *
 * @domain `oauth2-proxy.github.io`
 * @programs `oauth2-proxy`
 * @version `7.11.0` (9 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install oauth2-proxy`
 * @name `oauth2-proxy`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.oauth2proxy
 * // Or access via domain
 * const samePkg = pantry.oauth2proxygithubio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "oauth2-proxy"
 * console.log(pkg.description) // "A reverse proxy that provides authentication wi..."
 * console.log(pkg.programs)    // ["oauth2-proxy"]
 * console.log(pkg.versions[0]) // "7.11.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oauth2-proxy-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oauth2proxyPackage = {
  /**
   * The display name of this package.
   */
  name: 'oauth2-proxy' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oauth2-proxy.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A reverse proxy that provides authentication with Google, Azure, OpenID Connect and many more identity providers.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oauth2-proxy.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install oauth2-proxy' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'oauth2-proxy',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '7.11.0',
    '7.10.0',
    '7.9.0',
    '7.8.2',
    '7.8.1',
    '7.8.0',
    '7.7.1',
    '7.7.0',
    '7.6.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) oauth2-proxy -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install oauth2-proxy' as const,
}

export type Oauth2proxyPackage = typeof oauth2proxyPackage
