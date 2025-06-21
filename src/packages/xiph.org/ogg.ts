/**
 * **ogg** - Package from pantry: xiph.org/ogg
 *
 * @domain `xiph.org/ogg`
 *
 * @install `launchpad install xiph.org/ogg`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xiphorgogg
 * console.log(pkg.name)        // "ogg"
 * console.log(pkg.description) // "Package from pantry: xiph.org/ogg"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xiph-org/ogg.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xiphorgoggPackage = {
  /**
   * The display name of this package.
   */
  name: 'ogg' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xiph.org/ogg' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xiph.org/ogg' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xiph.org/ogg' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xiph.org/ogg/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XiphorgoggPackage = typeof xiphorgoggPackage
