/**
 * **elementsproject.org** - Package from pantry: elementsproject.org
 *
 * @domain `elementsproject.org`
 *
 * @install `launchpad install elementsproject.org`
 * @dependencies `boost.org^1.64`, `libevent.org`, `oracle.com/berkeley-db`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.elementsprojectorg
 * console.log(pkg.name)        // "elementsproject.org"
 * console.log(pkg.description) // "Package from pantry: elementsproject.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/elementsproject-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const elementsprojectorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'elementsproject.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'elementsproject.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: elementsproject.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install elementsproject.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +elementsproject.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install elementsproject.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'boost.org^1.64',
    'libevent.org',
    'oracle.com/berkeley-db',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/elementsproject.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ElementsprojectorgPackage = typeof elementsprojectorgPackage
