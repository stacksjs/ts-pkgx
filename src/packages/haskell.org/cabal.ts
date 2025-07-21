/**
 * **cabal** - Package from pantry: haskell.org/cabal
 *
 * @domain `haskell.org/cabal`
 *
 * @install `launchpad install haskell.org/cabal`
 * @dependencies `haskell.org@9`, `gnu.org/gmp@6`, `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.haskellorgcabal
 * console.log(pkg.name)        // "cabal"
 * console.log(pkg.description) // "Package from pantry: haskell.org/cabal"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/haskell-org/cabal.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const haskellorgcabalPackage = {
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
  description: 'Package from pantry: haskell.org/cabal' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install haskell.org/cabal' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +haskell.org/cabal -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install haskell.org/cabal' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/cabal/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HaskellorgcabalPackage = typeof haskellorgcabalPackage
