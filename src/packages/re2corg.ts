/**
 * **re2c.org** - Package from pantry: re2c.org
 *
 * @domain `re2c.org`
 *
 * @install `launchpad install re2c.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.re2corg
 * console.log(pkg.name)        // "re2c.org"
 * console.log(pkg.description) // "Package from pantry: re2c.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/re2c-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const re2corgPackage = {
  /**
   * The display name of this package.
   */
  name: 're2c.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 're2c.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: re2c.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install re2c.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/re2c.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Re2corgPackage = typeof re2corgPackage
