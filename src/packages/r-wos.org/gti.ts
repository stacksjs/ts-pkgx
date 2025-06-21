/**
 * **gti** - Package from pantry: r-wos.org/gti
 *
 * @domain `r-wos.org/gti`
 *
 * @install `launchpad install r-wos.org/gti`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.rwosorggti
 * console.log(pkg.name)        // "gti"
 * console.log(pkg.description) // "Package from pantry: r-wos.org/gti"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/r-wos-org/gti.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const rwosorggtiPackage = {
  /**
   * The display name of this package.
   */
  name: 'gti' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'r-wos.org/gti' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: r-wos.org/gti' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install r-wos.org/gti' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/r-wos.org/gti/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type RwosorggtiPackage = typeof rwosorggtiPackage
