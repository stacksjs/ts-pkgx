/**
 * **jinja** - Package from pantry: palletsprojects.com/jinja
 *
 * @domain `palletsprojects.com/jinja`
 *
 * @install `launchpad install palletsprojects.com/jinja`
 * @dependencies `python.org>=3.11`, `markupsafe.palletsprojects.com>=2.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.palletsprojectscomjinja
 * console.log(pkg.name)        // "jinja"
 * console.log(pkg.description) // "Package from pantry: palletsprojects.com/jinja"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/palletsprojects-com/jinja.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const palletsprojectscomjinjaPackage = {
  /**
   * The display name of this package.
   */
  name: 'jinja' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'palletsprojects.com/jinja' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: palletsprojects.com/jinja' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install palletsprojects.com/jinja' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
    'markupsafe.palletsprojects.com>=2.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/palletsprojects.com/jinja/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PalletsprojectscomjinjaPackage = typeof palletsprojectscomjinjaPackage
