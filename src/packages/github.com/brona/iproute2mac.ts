/**
 * **iproute2mac** - Package from pantry: github.com/brona/iproute2mac
 *
 * @domain `github.com/brona/iproute2mac`
 *
 * @install `launchpad install github.com/brona/iproute2mac`
 * @dependencies `python.org~3.12`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcombronaiproute2mac
 * console.log(pkg.name)        // "iproute2mac"
 * console.log(pkg.description) // "Package from pantry: github.com/brona/iproute2mac"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/brona/iproute2mac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombronaiproute2macPackage = {
  /**
   * The display name of this package.
   */
  name: 'iproute2mac' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/brona/iproute2mac' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/brona/iproute2mac' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/brona/iproute2mac' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/brona/iproute2mac -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/brona/iproute2mac' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.12',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/brona/iproute2mac/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcombronaiproute2macPackage = typeof githubcombronaiproute2macPackage
