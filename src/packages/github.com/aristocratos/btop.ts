/**
 * **btop** - Resource monitor. C++ version and continuation of bashtop and bpytop
 *
 * @domain `github.com/aristocratos/btop`
 * @programs `btop`
 * @version `1.4.3` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install btop`
 * @name `btop`
 * @dependencies `linux:gnu.org/gcc/libstdcxx@14` (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.btop
 * // Or access via domain
 * const samePkg = pantry.githubcomaristocratosbtop
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "btop"
 * console.log(pkg.description) // "Resource monitor. C++ version and continuation ..."
 * console.log(pkg.programs)    // ["btop"]
 * console.log(pkg.versions[0]) // "1.4.3" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/aristocratos/btop.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const btopPackage = {
  /**
   * The display name of this package.
   */
  name: 'btop' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/aristocratos/btop' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Resource monitor. C++ version and continuation of bashtop and bpytop' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/aristocratos/btop/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install btop' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'btop',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'linux:gnu.org/gcc/libstdcxx@14',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.4.3',
    '1.4.2',
    '1.4.1',
    '1.4.0',
    '1.3.2',
    '1.3.1',
    '1.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) btop -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install btop' as const,
}

export type BtopPackage = typeof btopPackage
