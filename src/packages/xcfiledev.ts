/**
 * **xcfile.dev** - Package from pantry: xcfile.dev
 *
 * @domain `xcfile.dev`
 *
 * @install `launchpad install xcfile.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xcfiledev
 * console.log(pkg.name)        // "xcfile.dev"
 * console.log(pkg.description) // "Package from pantry: xcfile.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/xcfile-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xcfiledevPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcfile.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'xcfile.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: xcfile.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install xcfile.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/xcfile.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XcfiledevPackage = typeof xcfiledevPackage
