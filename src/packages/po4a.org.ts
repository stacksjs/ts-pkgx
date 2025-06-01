/**
 * **+po4a.org -- $SHELL -i** - Maintain the translations of your documentation with ease  (PO for anything)
 *
 * @domain `po4a.org`
 * @programs `msguntypot`, `po4a`, `po4a-display-man`, `po4a-display-pod`, `po4a-gettextize`, ... (+3 more)
 * @version `0.73.0` (5 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/po4a-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +po4a.org -- $SHELL -i`
 * @aliases `+po4a.org -- $SHELL -i`
 * @dependencies `gnu.org/gettext^0.22`, `perl.org^5.22`, `gnome.org/libxslt^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.po4aorgSHELLi
 * // Or access via domain
 * const samePkg = pantry.po4aorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "po4a.org"
 * console.log(pkg.description) // "Maintain the translations of your documentation..."
 * console.log(pkg.programs)    // ["msguntypot", "po4a", ...]
 * console.log(pkg.versions[0]) // "0.73.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/po4a-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const po4aorgSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'po4a.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'po4a.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Maintain the translations of your documentation with ease  (PO for anything)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/po4a.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +po4a.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'msguntypot',
    'po4a',
    'po4a-display-man',
    'po4a-display-pod',
    'po4a-gettextize',
    'po4a-normalize',
    'po4a-updatepo',
    'podselect',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gettext^0.22',
    'perl.org^5.22',
    'gnome.org/libxslt^1.1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.73.0',
    '0.72.0',
    '0.71.0',
    '0.70.0',
    '0.69.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+po4a.org -- $SHELL -i',
  ] as const,
  fullPath: 'po4a.org' as const,
}

export type Po4aorgSHELLiPackage = typeof po4aorgSHELLiPackage
