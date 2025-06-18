/**
 * **kaspanet/kaspad** - Kaspad was the reference full node Kaspa implementation written in Go (golang), now rewritten in Rust: https://github.com/kaspanet/rusty-kaspa
 *
 * @domain `github.com/kaspanet/kaspad`
 * @programs `genkeypair`, `kaspactl`, `kaspad`, `kaspaminer`, `kaspawallet`
 * @version `0.12.22` (8 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/kaspanet/kaspad -- $SHELL -i`
 * @aliases `kaspanet/kaspad`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.kaspanetkaspad
 * // Or access via domain
 * const samePkg = pantry.githubcomkaspanetkaspad
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/kaspanet/kaspad"
 * console.log(pkg.description) // "Kaspad was the reference full node Kaspa implem..."
 * console.log(pkg.programs)    // ["genkeypair", "kaspactl", ...]
 * console.log(pkg.versions[0]) // "0.12.22" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/kaspanet/kaspad.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kaspanetkaspadPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/kaspanet/kaspad' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/kaspanet/kaspad' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Kaspad was the reference full node Kaspa implementation written in Go (golang), now rewritten in Rust: https://github.com/kaspanet/rusty-kaspa' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/kaspanet/kaspad/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/kaspanet/kaspad -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'genkeypair',
    'kaspactl',
    'kaspad',
    'kaspaminer',
    'kaspawallet',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.12.22',
    '0.12.21',
    '0.12.20',
    '0.12.19',
    '0.12.18',
    '0.12.17',
    '0.12.15',
    '0.12.14',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'kaspanet/kaspad',
  ] as const,
  fullPath: 'github.com/kaspanet/kaspad' as const,
}

export type KaspanetkaspadPackage = typeof kaspanetkaspadPackage
