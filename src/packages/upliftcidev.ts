/**
 * **upliftci.dev** - Package from pantry: upliftci.dev
 *
 * @domain `upliftci.dev`
 *
 * @install `launchpad install upliftci.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.upliftcidev
 * console.log(pkg.name)        // "upliftci.dev"
 * console.log(pkg.description) // "Package from pantry: upliftci.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/upliftci-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const upliftcidevPackage = {
  /**
   * The display name of this package.
   */
  name: 'upliftci.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'upliftci.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: upliftci.dev' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install upliftci.dev' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/upliftci.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type UpliftcidevPackage = typeof upliftcidevPackage
