/**
 * **exts** - Package from pantry: x.org/exts
 *
 * @domain `x.org/exts`
 *
 * @install `launchpad install x.org/exts`
 * @dependencies `x.org/x11^1`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgexts
 * console.log(pkg.name)        // "exts"
 * console.log(pkg.description) // "Package from pantry: x.org/exts"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/exts.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgextsPackage = {
  /**
   * The display name of this package.
   */
  name: 'exts' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/exts' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/exts' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/exts' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11^1',
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/exts/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgextsPackage = typeof xorgextsPackage
