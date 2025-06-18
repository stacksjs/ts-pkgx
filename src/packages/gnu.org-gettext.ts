/**
 * **gettext** - GNU internationalization (i18n) and localization (l10n) library
 *
 * @domain `gnu.org/gettext`
 * @programs `autopoint`, `envsubst`, `gettext`, `gettext.sh`, `gettextize`, ... (+17 more)
 * @version `0.22.5` (7 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gettext.md
 *
 * @install `sh <(curl https://pkgx.sh) +gnu.org/gettext -- $SHELL -i`
 * @aliases `gettext`
 * @dependencies `gnome.org/libxml2~2.13`, `tukaani.org/xz@5`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.gettext
 * // Or access via domain
 * const samePkg = pantry.gnuorggettext
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gnu.org/gettext"
 * console.log(pkg.description) // "GNU internationalization (i18n) and localizatio..."
 * console.log(pkg.programs)    // ["autopoint", "envsubst", ...]
 * console.log(pkg.versions[0]) // "0.22.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gettext.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gettextPackage = {
  /**
   * The display name of this package.
   */
  name: 'gnu.org/gettext' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'gnu.org/gettext' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'GNU internationalization (i18n) and localization (l10n) library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/gnu.org/gettext/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +gnu.org/gettext -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'autopoint',
    'envsubst',
    'gettext',
    'gettext.sh',
    'gettextize',
    'msgattrib',
    'msgcat',
    'msgcmp',
    'msgcomm',
    'msgconv',
    'msgen',
    'msgexec',
    'msgfilter',
    'msgfmt',
    'msggrep',
    'msginit',
    'msgmerge',
    'msgunfmt',
    'msguniq',
    'ngettext',
    'recode-sr-latin',
    'xgettext',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2~2.13',
    'tukaani.org/xz@5',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.22.5',
    '0.22.4',
    '0.22.3',
    '0.22.2',
    '0.22.1',
    '0.22.0',
    '0.21.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'gettext',
  ] as const,
  fullPath: 'gnu.org/gettext' as const,
}

export type GettextPackage = typeof gettextPackage
