/**
 * **makotemplates.org** - Package from pantry: makotemplates.org
 *
 * @domain `makotemplates.org`
 *
 * @install `launchpad install makotemplates.org`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.makotemplatesorg
 * console.log(pkg.name)        // "makotemplates.org"
 * console.log(pkg.description) // "Package from pantry: makotemplates.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/makotemplates-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const makotemplatesorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'makotemplates.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'makotemplates.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: makotemplates.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install makotemplates.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +makotemplates.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install makotemplates.org' as const,
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
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/makotemplates.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MakotemplatesorgPackage = typeof makotemplatesorgPackage
