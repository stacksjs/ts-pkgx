/**
 * **micro** - Package from pantry: github.com/mamba-org/micro
 *
 * @domain `github.com/mamba-org/micro`
 *
 * @install `launchpad install github.com/mamba-org/micro`
 * @dependencies `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcommambaorgmicro
 * console.log(pkg.name)        // "micro"
 * console.log(pkg.description) // "Package from pantry: github.com/mamba-org/micro"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mamba-org/micro.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcommambaorgmicroPackage = {
  /**
   * The display name of this package.
   */
  name: 'micro' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mamba-org/micro' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/mamba-org/micro' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/mamba-org/micro' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/mamba-org/micro -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/mamba-org/micro' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se/ca-certs',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mamba-org/micro/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcommambaorgmicroPackage = typeof githubcommambaorgmicroPackage
