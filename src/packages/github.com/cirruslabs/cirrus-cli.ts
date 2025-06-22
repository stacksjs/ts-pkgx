/**
 * **cirrus-cli** - Package from pantry: github.com/cirruslabs/cirrus-cli
 *
 * @domain `github.com/cirruslabs/cirrus-cli`
 *
 * @install `launchpad install github.com/cirruslabs/cirrus-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcirruslabscirruscli
 * console.log(pkg.name)        // "cirrus-cli"
 * console.log(pkg.description) // "Package from pantry: github.com/cirruslabs/cirr..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/cirruslabs/cirrus-cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcirruslabscirruscliPackage = {
  /**
   * The display name of this package.
   */
  name: 'cirrus-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/cirruslabs/cirrus-cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/cirruslabs/cirrus-cli' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/cirruslabs/cirrus-cli' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/cirruslabs/cirrus-cli -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/cirruslabs/cirrus-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/cirruslabs/cirrus-cli/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcirruslabscirruscliPackage = typeof githubcomcirruslabscirruscliPackage
