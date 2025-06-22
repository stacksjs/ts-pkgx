/**
 * **k3sup** - Package from pantry: github.com/alexellis/k3sup
 *
 * @domain `github.com/alexellis/k3sup`
 *
 * @install `launchpad install github.com/alexellis/k3sup`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomalexellisk3sup
 * console.log(pkg.name)        // "k3sup"
 * console.log(pkg.description) // "Package from pantry: github.com/alexellis/k3sup"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/alexellis/k3sup.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomalexellisk3supPackage = {
  /**
   * The display name of this package.
   */
  name: 'k3sup' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/alexellis/k3sup' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/alexellis/k3sup' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/alexellis/k3sup' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/alexellis/k3sup -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/alexellis/k3sup' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/alexellis/k3sup/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomalexellisk3supPackage = typeof githubcomalexellisk3supPackage
