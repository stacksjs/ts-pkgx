/**
 * **gci** - Package from pantry: github.com/daixiang0/gci
 *
 * @domain `github.com/daixiang0/gci`
 *
 * @install `launchpad install github.com/daixiang0/gci`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomdaixiang0gci
 * console.log(pkg.name)        // "gci"
 * console.log(pkg.description) // "Package from pantry: github.com/daixiang0/gci"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/daixiang0/gci.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomdaixiang0gciPackage = {
  /**
   * The display name of this package.
   */
  name: 'gci' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/daixiang0/gci' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/daixiang0/gci' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/daixiang0/gci' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/daixiang0/gci -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/daixiang0/gci' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/daixiang0/gci/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomdaixiang0gciPackage = typeof githubcomdaixiang0gciPackage
