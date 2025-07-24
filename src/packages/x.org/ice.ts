/**
 * **ice** - Package from pantry: x.org/ice
 *
 * @domain `x.org/ice`
 *
 * @install `launchpad install x.org/ice`
 * @dependencies `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgice
 * console.log(pkg.name)        // "ice"
 * console.log(pkg.description) // "Package from pantry: x.org/ice"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/ice.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgicePackage = {
  /**
   * The display name of this package.
   */
  name: 'ice' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/ice' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/ice' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/ice' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/ice -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/ice' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/ice/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgicePackage = typeof xorgicePackage
