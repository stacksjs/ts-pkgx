/**
 * **flux2** - Package from pantry: fluxcd.io/flux2
 *
 * @domain `fluxcd.io/flux2`
 *
 * @install `launchpad install fluxcd.io/flux2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.fluxcdioflux2
 * console.log(pkg.name)        // "flux2"
 * console.log(pkg.description) // "Package from pantry: fluxcd.io/flux2"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/fluxcd-io/flux2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const fluxcdioflux2Package = {
  /**
   * The display name of this package.
   */
  name: 'flux2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'fluxcd.io/flux2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: fluxcd.io/flux2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install fluxcd.io/flux2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +fluxcd.io/flux2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install fluxcd.io/flux2' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fluxcd.io/flux2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Fluxcdioflux2Package = typeof fluxcdioflux2Package
