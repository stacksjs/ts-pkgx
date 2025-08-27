/**
 * **packaging** - pkgx package
 *
 * @domain `pypa.io/packaging`
 *
 * @install `launchpad install pypa.io/packaging`
 * @dependencies `python.org>=3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pypaiopackaging
 * console.log(pkg.name)        // "packaging"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pypa-io/packaging.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pypaiopackagingPackage = {
  /**
   * The display name of this package.
   */
  name: 'packaging' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pypa.io/packaging' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pypa/packaging' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pypa.io/packaging' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.11',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pypa.io/packaging -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pypa.io/packaging' as const,
}

export type PypaiopackagingPackage = typeof pypaiopackagingPackage
