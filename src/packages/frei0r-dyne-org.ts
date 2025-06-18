/**
 * **frei0r.dyne.org** - pkgx package
 *
 * @domain `frei0r.dyne.org`
 * @version `1.8.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +frei0r.dyne.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.frei0rdyneorg
 * console.log(pkg.name)        // "frei0r.dyne.org"
 * console.log(pkg.versions[0]) // "1.8.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/frei0r-dyne-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const frei0rdyneorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'frei0r.dyne.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'frei0r.dyne.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/frei0r.dyne.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +frei0r.dyne.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.8.0',
  ] as const,
  aliases: [] as const,
  fullPath: 'frei0r.dyne.org' as const,
}

export type Frei0rdyneorgPackage = typeof frei0rdyneorgPackage
