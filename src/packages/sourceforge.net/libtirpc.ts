/**
 * **libtirpc** - pkgx package
 *
 * @domain `sourceforge.net/libtirpc`
 * @version `1.3.7` (5 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install sourceforge.net/libtirpc`
 * @dependencies `kerberos.org`
 * @buildDependencies `linux:llvm.org@^16`, `linux:gnu.org/make` (includes OS-specific dependencies with `os:package` format) - required only when building from source
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenetlibtirpc
 * console.log(pkg.name)        // "libtirpc"
 * console.log(pkg.versions[0]) // "1.3.7" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/libtirpc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetlibtirpcPackage = {
  /**
   * The display name of this package.
   */
  name: 'libtirpc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/libtirpc' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/libtirpc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceforge.net/libtirpc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sourceforge.net/libtirpc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sourceforge.net/libtirpc' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Runtime dependencies for this package.
   * These are required when running the package.
   */
  dependencies: [
    'kerberos.org',
  ] as const,
  /**
   * Build dependencies for this package.
   * These are only required when building the package from source.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:gnu.org/gcc`).
   */
  buildDependencies: [
    'linux:llvm.org@^16',
    'linux:gnu.org/make',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.3.7',
    '1.3.6',
    '1.3.5',
    '1.3.4',
    '1.3.3',
  ] as const,
  aliases: [] as const,
}

export type SourceforgenetlibtirpcPackage = typeof sourceforgenetlibtirpcPackage
