/**
 * **x.org/xinerama** - pkgx package
 *
 * @domain `x.org/xinerama`
 * @version `1.1.5` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install x.org/xinerama`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxinerama
 * console.log(pkg.name)        // "x.org/xinerama"
 * console.log(pkg.versions[0]) // "1.1.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xinerama.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxineramaPackage = {
  /**
   * The display name of this package.
   */
  name: 'x.org/xinerama' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xinerama' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xinerama/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xinerama' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/protocol',
    'x.org/exts',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.5',
  ] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xinerama -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xinerama' as const,
}

export type XorgxineramaPackage = typeof xorgxineramaPackage
