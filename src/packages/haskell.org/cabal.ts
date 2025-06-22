/**
 * **cabal** - Official upstream development repository for Cabal and cabal-install
 *
 * @domain `haskell.org/cabal`
 * @programs `cabal`
 * @version `3.8.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install cabal`
 * @name `cabal`
 * @dependencies `haskell.org@9`, `gnu.org/gmp@6`, `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.cabal
 * // Or access via domain
 * const samePkg = pantry.haskellorgcabal
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "cabal"
 * console.log(pkg.description) // "Official upstream development repository for Ca..."
 * console.log(pkg.programs)    // ["cabal"]
 * console.log(pkg.versions[0]) // "3.8.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/haskell-org/cabal.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cabalPackage = {
  /**
   * The display name of this package.
   */
  name: 'cabal' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'haskell.org/cabal' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Official upstream development repository for Cabal and cabal-install' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/cabal/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cabal' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'cabal',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'haskell.org@9',
    'gnu.org/gmp@6',
    'zlib.net@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '3.8.1',
    '3.14.2.0',
    '3.14.1.1',
    '3.14.1.0',
    '3.12.1.0',
    '3.10.3.0',
    '3.10.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) cabal -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cabal' as const,
}

export type CabalPackage = typeof cabalPackage
