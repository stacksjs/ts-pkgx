/**
 * **templ.guide** - Package from pantry: templ.guide
 *
 * @domain `templ.guide`
 *
 * @install `launchpad install templ.guide`
 * @dependencies `go.dev^1.20`
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install templ.guide' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.20',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/templ.guide/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TemplguidePackage = typeof templguidePackage
