/**
 * **nomadproject.io** - Package from pantry: nomadproject.io
 *
 * @domain `nomadproject.io`
 *
 * @install `launchpad install nomadproject.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nomadprojectio
 * console.log(pkg.name)        // "nomadproject.io"
 * console.log(pkg.description) // "Package from pantry: nomadproject.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nomadproject-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nomadprojectioPackage = {
  /**
   * The display name of this package.
   */
  name: 'nomadproject.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nomadproject.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nomadproject.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nomadproject.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nomadproject.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nomadproject.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nomadproject.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NomadprojectioPackage = typeof nomadprojectioPackage
