/**
 * **daytona.io** - Package from pantry: daytona.io
 *
 * @domain `daytona.io`
 *
 * @install `launchpad install daytona.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.daytonaio
 * console.log(pkg.name)        // "daytona.io"
 * console.log(pkg.description) // "Package from pantry: daytona.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/daytona-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const daytonaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'daytona.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'daytona.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: daytona.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install daytona.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +daytona.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install daytona.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/daytona.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DaytonaioPackage = typeof daytonaioPackage
