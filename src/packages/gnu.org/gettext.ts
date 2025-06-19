/**
 * **gettext** - GNU internationalization (i18n) and localization (l10n) library
 *
 * @domain `gnu.org/gettext`
 * @programs `autopoint`, `envsubst`, `gettext`, `gettext.sh`, `gettextize`, ... (+17 more)
 * @version `0.22.5` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +gnu.org/gettext -- $SHELL -i`
 * @dependencies `gnome.org/libxml2~2.13 # 2.14 changes the API`, `tukaani.org/xz^5 # autopoint needs this to unpack archives`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.gnuorggettext
 * console.log(pkg.name)        // "gettext"
 * console.log(pkg.description) // "GNU internationalization (i18n) and localizatio..."
 * console.log(pkg.programs)    // ["autopoint", "envsubst", ...]
 * console.log(pkg.versions[0]) // "0.22.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/gnu-org/gettext.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const gnuorggettextPackage = {
  /**
   * The display name of this package.
   */
  name: 'gettext' as const,
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +gnu.org/gettext -- $SHELL -i' as const,
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
    'gnome.org/libxml2~2.13 # 2.14 changes the API',
    'tukaani.org/xz^5 # autopoint needs this to unpack archives',
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
  aliases: [] as const,
}

export type GnuorggettextPackage = typeof gnuorggettextPackage
