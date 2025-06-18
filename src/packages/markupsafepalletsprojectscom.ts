/**
 * **markupsafe.palletsprojects.com** - Package from pantry: markupsafe.palletsprojects.com
 *
 * @domain `markupsafe.palletsprojects.com`
 *
 * @install `launchpad install markupsafe.palletsprojects.com`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.markupsafepalletsprojectscom
 * console.log(pkg.name)        // "markupsafe.palletsprojects.com"
 * console.log(pkg.description) // "Package from pantry: markupsafe.palletsprojects..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/markupsafe-palletsprojects-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const markupsafepalletsprojectscomPackage = {
  /**
   * The display name of this package.
   */
  name: 'markupsafe.palletsprojects.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'markupsafe.palletsprojects.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: markupsafe.palletsprojects.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install markupsafe.palletsprojects.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/markupsafe.palletsprojects.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MarkupsafepalletsprojectscomPackage = typeof markupsafepalletsprojectscomPackage
