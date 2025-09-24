/**
 * **xinerama** - Package from pantry: x.org/xinerama
 *
 * @domain `x.org/xinerama`
 *
 * @install `launchpad install x.org/xinerama`
 * @dependencies `x.org/x11`, `x.org/protocol`, `x.org/exts`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxinerama
 * console.log(pkg.name)        // "xinerama"
 * console.log(pkg.description) // "Package from pantry: x.org/xinerama"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xinerama.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxineramaPackage = {
  /**
   * The display name of this package.
   */
  name: 'xinerama' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xinerama' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xinerama' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xinerama' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xinerama -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xinerama' as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xinerama/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxineramaPackage = typeof xorgxineramaPackage
