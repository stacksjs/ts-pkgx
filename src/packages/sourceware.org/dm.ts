/**
 * **dm** - Package from pantry: sourceware.org/dm
 *
 * @domain `sourceware.org/dm`
 *
 * @install `launchpad install sourceware.org/dm`
 * @dependencies `pagure.io/libaio^0.3`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourcewareorgdm
 * console.log(pkg.name)        // "dm"
 * console.log(pkg.description) // "Package from pantry: sourceware.org/dm"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceware-org/dm.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourcewareorgdmPackage = {
  /**
   * The display name of this package.
   */
  name: 'dm' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceware.org/dm' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceware.org/dm' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceware.org/dm' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sourceware.org/dm -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sourceware.org/dm' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pagure.io/libaio^0.3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceware.org/dm/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SourcewareorgdmPackage = typeof sourcewareorgdmPackage
