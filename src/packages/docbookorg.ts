/**
 * **docbook.org** - Package from pantry: docbook.org
 *
 * @domain `docbook.org`
 *
 * @install `launchpad install docbook.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.docbookorg
 * console.log(pkg.name)        // "docbook.org"
 * console.log(pkg.description) // "Package from pantry: docbook.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docbook-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const docbookorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'docbook.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docbook.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: docbook.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install docbook.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +docbook.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install docbook.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docbook.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DocbookorgPackage = typeof docbookorgPackage
