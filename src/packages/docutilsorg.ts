/**
 * **docutils.org** - Package from pantry: docutils.org
 *
 * @domain `docutils.org`
 *
 * @install `launchpad install docutils.org`
 * @dependencies `pkgx.sh^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.docutilsorg
 * console.log(pkg.name)        // "docutils.org"
 * console.log(pkg.description) // "Package from pantry: docutils.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docutils-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const docutilsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'docutils.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docutils.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: docutils.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install docutils.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +docutils.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install docutils.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docutils.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DocutilsorgPackage = typeof docutilsorgPackage
