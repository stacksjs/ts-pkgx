/**
 * **adr-tools** - Package from pantry: github.com/npryce/adr-tools
 *
 * @domain `github.com/npryce/adr-tools`
 *
 * @install `launchpad install github.com/npryce/adr-tools`
 * @dependencies `gnu.org/bash`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomnpryceadrtools
 * console.log(pkg.name)        // "adr-tools"
 * console.log(pkg.description) // "Package from pantry: github.com/npryce/adr-tools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/npryce/adr-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomnpryceadrtoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'adr-tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/npryce/adr-tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/npryce/adr-tools' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/npryce/adr-tools' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/npryce/adr-tools -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/npryce/adr-tools' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/bash',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/npryce/adr-tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomnpryceadrtoolsPackage = typeof githubcomnpryceadrtoolsPackage
