/**
 * **templ.guide** - Package from pantry: templ.guide
 *
 * @domain `templ.guide`
 *
 * @install `launchpad install templ.guide`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.templguide
 * console.log(pkg.name)        // "templ.guide"
 * console.log(pkg.description) // "Package from pantry: templ.guide"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/templ-guide.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const templguidePackage = {
  /**
   * The display name of this package.
   */
  name: 'templ.guide' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'templ.guide' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: templ.guide' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install templ.guide' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +templ.guide -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install templ.guide' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/templ.guide/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TemplguidePackage = typeof templguidePackage
