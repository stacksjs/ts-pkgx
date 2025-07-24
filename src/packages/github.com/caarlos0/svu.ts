/**
 * **svu** - Package from pantry: github.com/caarlos0/svu
 *
 * @domain `github.com/caarlos0/svu`
 *
 * @install `launchpad install github.com/caarlos0/svu`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcaarlos0svu
 * console.log(pkg.name)        // "svu"
 * console.log(pkg.description) // "Package from pantry: github.com/caarlos0/svu"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/caarlos0/svu.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcaarlos0svuPackage = {
  /**
   * The display name of this package.
   */
  name: 'svu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/caarlos0/svu' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/caarlos0/svu' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/caarlos0/svu' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/caarlos0/svu -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/caarlos0/svu' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/caarlos0/svu/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomcaarlos0svuPackage = typeof githubcomcaarlos0svuPackage
