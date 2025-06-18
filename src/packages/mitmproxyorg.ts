/**
 * **mitmproxy.org** - Package from pantry: mitmproxy.org
 *
 * @domain `mitmproxy.org`
 *
 * @install `launchpad install mitmproxy.org`
 * @dependencies `pkgx.sh^1`, `python.org~3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mitmproxyorg
 * console.log(pkg.name)        // "mitmproxy.org"
 * console.log(pkg.description) // "Package from pantry: mitmproxy.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mitmproxy-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mitmproxyorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'mitmproxy.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mitmproxy.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mitmproxy.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mitmproxy.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'python.org~3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mitmproxy.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MitmproxyorgPackage = typeof mitmproxyorgPackage
