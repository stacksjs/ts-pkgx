/**
 * **click** - Package from pantry: palletsprojects.com/click
 *
 * @domain `palletsprojects.com/click`
 *
 * @install `launchpad install palletsprojects.com/click`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.palletsprojectscomclick
 * console.log(pkg.name)        // "click"
 * console.log(pkg.description) // "Package from pantry: palletsprojects.com/click"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/palletsprojects-com/click.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const palletsprojectscomclickPackage = {
  /**
   * The display name of this package.
   */
  name: 'click' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'palletsprojects.com/click' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: palletsprojects.com/click' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install palletsprojects.com/click' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/palletsprojects.com/click/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PalletsprojectscomclickPackage = typeof palletsprojectscomclickPackage
