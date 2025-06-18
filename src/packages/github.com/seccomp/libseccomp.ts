/**
 * **scmp_sys_resolver** - Interface to the Linux Kernel's syscall filtering mechanism
 *
 * @domain `github.com/seccomp/libseccomp`
 * @programs `scmp_sys_resolver`
 * @version `2.6.0` (3 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install scmp_sys_resolver`
 * @name `libseccomp`
 * @aliases `scmp_sys_resolver`
 * @dependencies `gnu.org/libtool`, `gnu.org/gperf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.scmpsysresolver
 * // Or access via domain
 * const samePkg = pantry.githubcomseccomplibseccomp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "libseccomp"
 * console.log(pkg.description) // "Interface to the Linux Kernel's syscall filteri..."
 * console.log(pkg.programs)    // ["scmp_sys_resolver"]
 * console.log(pkg.versions[0]) // "2.6.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/seccomp/libseccomp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const scmpsysresolverPackage = {
  /**
   * The display name of this package.
   */
  name: 'libseccomp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/seccomp/libseccomp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Interface to the Linux Kernel\'s syscall filtering mechanism' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/seccomp/libseccomp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install scmp_sys_resolver' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'scmp_sys_resolver',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/libtool',
    'gnu.org/gperf',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.6.0',
    '2.5.6',
    '2.5.5',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'scmp_sys_resolver',
  ] as const,
}

export type ScmpsysresolverPackage = typeof scmpsysresolverPackage
