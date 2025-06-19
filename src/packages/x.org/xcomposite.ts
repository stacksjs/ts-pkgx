/**
 * **xcomposite** - pkgx package
 *
 * @domain `x.org/xcomposite`
 * @version `0.4.6` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/xcomposite -- $SHELL -i`
 * @dependencies `x.org/x11`, `x.org/xfixes`, `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxcomposite
 * console.log(pkg.name)        // "xcomposite"
 * console.log(pkg.versions[0]) // "0.4.6" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xcomposite.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxcompositePackage = {
  /**
   * The display name of this package.
   */
  name: 'xcomposite' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xcomposite' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xcomposite/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/xcomposite -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/x11',
    'x.org/xfixes',
    'x.org/protocol',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.4.6',
  ] as const,
  aliases: [] as const,
}

export type XorgxcompositePackage = typeof xorgxcompositePackage
