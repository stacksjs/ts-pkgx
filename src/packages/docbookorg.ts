/**
 * **docbook.org** - pkgx package
 *
 * @domain `docbook.org`
 * @version `5.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +docbook.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.docbookorg
 * console.log(pkg.name)        // "docbook.org"
 * console.log(pkg.versions[0]) // "5.1.0" (latest)
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
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docbook.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +docbook.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.1.0',
  ] as const,
  aliases: [] as const,
}

export type DocbookorgPackage = typeof docbookorgPackage
