/**
 * **xcbeautify** - Package from pantry: tuist.io/xcbeautify
 *
 * @domain `tuist.io/xcbeautify`
 *
 * @install `launchpad install tuist.io/xcbeautify`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tuistioxcbeautify
 * console.log(pkg.name)        // "xcbeautify"
 * console.log(pkg.description) // "Package from pantry: tuist.io/xcbeautify"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tuist-io/xcbeautify.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tuistioxcbeautifyPackage = {
  /**
   * The display name of this package.
   */
  name: 'xcbeautify' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tuist.io/xcbeautify' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tuist.io/xcbeautify' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install tuist.io/xcbeautify' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tuist.io/xcbeautify/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TuistioxcbeautifyPackage = typeof tuistioxcbeautifyPackage
