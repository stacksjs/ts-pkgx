/**
 * **xsl** - Package from pantry: docbook.org/xsl
 *
 * @domain `docbook.org/xsl`
 *
 * @install `launchpad install docbook.org/xsl`
 * @dependencies `docbook.org^5`, `gnome.org/libxml2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.docbookorgxsl
 * console.log(pkg.name)        // "xsl"
 * console.log(pkg.description) // "Package from pantry: docbook.org/xsl"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/docbook-org/xsl.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const docbookorgxslPackage = {
  /**
   * The display name of this package.
   */
  name: 'xsl' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'docbook.org/xsl' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: docbook.org/xsl' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install docbook.org/xsl' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +docbook.org/xsl -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install docbook.org/xsl' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'docbook.org^5',
    'gnome.org/libxml2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/docbook.org/xsl/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DocbookorgxslPackage = typeof docbookorgxslPackage
