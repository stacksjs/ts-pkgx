/**
 * **dxc** - Package from pantry: microsoft.com/dxc
 *
 * @domain `microsoft.com/dxc`
 *
 * @install `launchpad install microsoft.com/dxc`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.microsoftcomdxc
 * console.log(pkg.name)        // "dxc"
 * console.log(pkg.description) // "Package from pantry: microsoft.com/dxc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/microsoft-com/dxc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const microsoftcomdxcPackage = {
  /**
   * The display name of this package.
   */
  name: 'dxc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'microsoft.com/dxc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: microsoft.com/dxc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install microsoft.com/dxc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +microsoft.com/dxc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install microsoft.com/dxc' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/microsoft.com/dxc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MicrosoftcomdxcPackage = typeof microsoftcomdxcPackage
