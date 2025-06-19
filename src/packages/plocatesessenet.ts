/**
 * **plocate.sesse.net** - pkgx package
 *
 * @domain `plocate.sesse.net`
 * @programs `plocate`, `plocate-build`, `updatedb`
 * @version `1.1.23` (2 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +plocate.sesse.net -- $SHELL -i`
 * @dependencies `facebook.com/zstd@1`, `gnu.org/gcc/libstdcxx@14`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.plocatesessenet
 * console.log(pkg.name)        // "plocate.sesse.net"
 * console.log(pkg.programs)    // ["plocate", "plocate-build", ...]
 * console.log(pkg.versions[0]) // "1.1.23" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/plocate-sesse-net.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const plocatesessenetPackage = {
  /**
   * The display name of this package.
   */
  name: 'plocate.sesse.net' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'plocate.sesse.net' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/plocate.sesse.net/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +plocate.sesse.net -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'plocate',
    'plocate-build',
    'updatedb',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'facebook.com/zstd@1',
    'gnu.org/gcc/libstdcxx@14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.1.23',
    '1.1.22',
  ] as const,
  aliases: [] as const,
}

export type PlocatesessenetPackage = typeof plocatesessenetPackage
