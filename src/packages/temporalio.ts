/**
 * **temporal.io** - Package from pantry: temporal.io
 *
 * @domain `temporal.io`
 *
 * @install `launchpad install temporal.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.temporalio
 * console.log(pkg.name)        // "temporal.io"
 * console.log(pkg.description) // "Package from pantry: temporal.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/temporal-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const temporalioPackage = {
  /**
   * The display name of this package.
   */
  name: 'temporal.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'temporal.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: temporal.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install temporal.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +temporal.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install temporal.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/temporal.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TemporalioPackage = typeof temporalioPackage
