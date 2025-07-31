/**
 * **oauth2-proxy.github.io** - Package from pantry: oauth2-proxy.github.io
 *
 * @domain `oauth2-proxy.github.io`
 *
 * @install `launchpad install oauth2-proxy.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.oauth2proxygithubio
 * console.log(pkg.name)        // "oauth2-proxy.github.io"
 * console.log(pkg.description) // "Package from pantry: oauth2-proxy.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/oauth2-proxy-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const oauth2proxygithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'oauth2-proxy.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'oauth2-proxy.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: oauth2-proxy.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install oauth2-proxy.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +oauth2-proxy.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install oauth2-proxy.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/oauth2-proxy.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Oauth2proxygithubioPackage = typeof oauth2proxygithubioPackage
