/**
 * **xshmfence** - pkgx package
 *
 * @domain `x.org/xshmfence`
 * @version `1.3.3` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +x.org/xshmfence -- $SHELL -i`
 * @dependencies `x.org/protocol`, `freedesktop.org/pkg-config`, `freedesktop.org/pkg-config`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxshmfence
 * console.log(pkg.name)        // "xshmfence"
 * console.log(pkg.versions[0]) // "1.3.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xshmfence.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxshmfencePackage = {
  /**
   * The display name of this package.
   */
  name: 'xshmfence' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xshmfence' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xshmfence/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +x.org/xshmfence -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/protocol',
    'freedesktop.org/pkg-config',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.3',
    '1.3.2',
  ] as const,
  aliases: [] as const,
}

export type XorgxshmfencePackage = typeof xorgxshmfencePackage
