/**
 * **ladspa.org** - Linux Audio Developer's Simple Plugin
 *
 * @domain `ladspa.org`
 * @programs `analyseplugin`, `applyplugin`, `listplugins`
 * @version `1.17.0` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/ladspa-org.md
 * @install `sh <(curl https://pkgx.sh) +ladspa.org -- $SHELL -i`
 * @dependencies `github.com/libsndfile/libsndfile^1.2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ladspaorg
 * console.log(pkg.name)        // "ladspa.org"
 * console.log(pkg.description) // "Linux Audio Developer's Simple Plugin"
 * console.log(pkg.programs)    // ["analyseplugin", "applyplugin", ...]
 * console.log(pkg.versions[0]) // "1.17.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ladspa-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ladspaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'ladspa.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ladspa.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Linux Audio Developer\'s Simple Plugin' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ladspa.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +ladspa.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'analyseplugin',
    'applyplugin',
    'listplugins',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'github.com/libsndfile/libsndfile^1.2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.17.0',
  ] as const,
  fullPath: 'ladspa.org' as const,
  aliases: [] as const,
}

export type LadspaorgPackage = typeof ladspaorgPackage
