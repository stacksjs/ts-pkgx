/**
 * **icon-theme** - pkgx package
 *
 * @domain `freedesktop.org/icon-theme`
 * @version `0.18.0` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +freedesktop.org/icon-theme -- $SHELL -i`
 * @dependencies `mesonbuild.com`, `ninja-build.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.freedesktoporgicontheme
 * console.log(pkg.name)        // "icon-theme"
 * console.log(pkg.versions[0]) // "0.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/freedesktop-org/icon-theme.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const freedesktoporgiconthemePackage = {
  /**
   * The display name of this package.
   */
  name: 'icon-theme' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'freedesktop.org/icon-theme' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/freedesktop.org/icon-theme/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +freedesktop.org/icon-theme -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'mesonbuild.com',
    'ninja-build.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.0',
    '0.17.0',
  ] as const,
  aliases: [] as const,
}

export type FreedesktoporgiconthemePackage = typeof freedesktoporgiconthemePackage
