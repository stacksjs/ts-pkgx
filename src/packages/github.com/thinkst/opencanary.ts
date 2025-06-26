/**
 * **opencanary** - Package from pantry: github.com/thinkst/opencanary
 *
 * @domain `github.com/thinkst/opencanary`
 *
 * @install `launchpad install github.com/thinkst/opencanary`
 * @dependencies `python.org>=3.10<3.12`, `tcpdump.org`, `openssl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomthinkstopencanary
 * console.log(pkg.name)        // "opencanary"
 * console.log(pkg.description) // "Package from pantry: github.com/thinkst/opencanary"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/thinkst/opencanary.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomthinkstopencanaryPackage = {
  /**
   * The display name of this package.
   */
  name: 'opencanary' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/thinkst/opencanary' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/thinkst/opencanary' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/thinkst/opencanary' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/thinkst/opencanary -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/thinkst/opencanary' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.10<3.12',
    'tcpdump.org',
    'openssl.org',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/thinkst/opencanary/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomthinkstopencanaryPackage = typeof githubcomthinkstopencanaryPackage
