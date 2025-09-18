/**
 * **github.com/alexellis/k3sup** - pkgx package
 *
 * @domain `github.com/alexellis/k3sup`
 * @version `0.13.11` (10 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install github.com/alexellis/k3sup`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomalexellisk3sup
 * console.log(pkg.name)        // "github.com/alexellis/k3sup"
 * console.log(pkg.versions[0]) // "0.13.11" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/alexellis/k3sup.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomalexellisk3supPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/alexellis/k3sup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/alexellis/k3sup' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/alexellis/k3sup/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/alexellis/k3sup' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.13.11',
    '0.13.10',
    '0.13.9',
    '0.13.8',
    '0.13.6',
    '0.13.5',
    '0.13.4',
    '0.13.3',
    '0.13.2',
    '0.13.1',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/alexellis/k3sup -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/alexellis/k3sup' as const,
}

export type Githubcomalexellisk3supPackage = typeof githubcomalexellisk3supPackage
