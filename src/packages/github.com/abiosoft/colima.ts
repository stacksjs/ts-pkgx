/**
 * **colima** - Package from pantry: github.com/abiosoft/colima
 *
 * @domain `github.com/abiosoft/colima`
 *
 * @install `launchpad install github.com/abiosoft/colima`
 * @dependencies `lima-vm.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomabiosoftcolima
 * console.log(pkg.name)        // "colima"
 * console.log(pkg.description) // "Package from pantry: github.com/abiosoft/colima"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/abiosoft/colima.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomabiosoftcolimaPackage = {
  /**
   * The display name of this package.
   */
  name: 'colima' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/abiosoft/colima' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/abiosoft/colima' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/abiosoft/colima' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/abiosoft/colima -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/abiosoft/colima' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'lima-vm.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/abiosoft/colima/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomabiosoftcolimaPackage = typeof githubcomabiosoftcolimaPackage
