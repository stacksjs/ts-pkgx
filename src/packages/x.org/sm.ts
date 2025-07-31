/**
 * **sm** - Package from pantry: x.org/sm
 *
 * @domain `x.org/sm`
 *
 * @install `launchpad install x.org/sm`
 * @dependencies `x.org/ice`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgsm
 * console.log(pkg.name)        // "sm"
 * console.log(pkg.description) // "Package from pantry: x.org/sm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/sm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgsmPackage = {
  /**
   * The display name of this package.
   */
  name: 'sm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/sm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/sm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/sm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/sm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/sm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/ice',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/sm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgsmPackage = typeof xorgsmPackage
