/**
 * **haskell.org** - Mirror of the Glasgow Haskell Compiler. Please submit issues and patches to GHC's Gitlab instance (https://gitlab.haskell.org/ghc/ghc). First time contributors are encouraged to get started with the newcomers info (https://gitlab.haskell.org/ghc/ghc/wikis/contributing).
 *
 * @domain `haskell.org`
 * @programs `ghc`, `ghc-{{version.marketing}}`, `ghc-{{version}}`, `ghc-pkg`, `ghc-pkg-{{version.marketing}}`, ... (+23 more)
 * @version `9.12.2` (19 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/haskell-org.md
 *
 * @install `sh <(curl https://pkgx.sh) +haskell.org -- $SHELL -i`
 * @dependencies `gnu.org/gmp@6`, `invisible-island.net/ncurses@6`, `sourceware.org/libffi@3`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.haskellorg
 * console.log(pkg.name)        // "haskell.org"
 * console.log(pkg.description) // "Mirror of the Glasgow Haskell Compiler. Please ..."
 * console.log(pkg.programs)    // ["ghc", "ghc-{{version.marketing}}", ...]
 * console.log(pkg.versions[0]) // "9.12.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/haskell-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const haskellorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'haskell.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'haskell.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Mirror of the Glasgow Haskell Compiler. Please submit issues and patches to GHC\'s Gitlab instance (https://gitlab.haskell.org/ghc/ghc). First time contributors are encouraged to get started with the newcomers info (https://gitlab.haskell.org/ghc/ghc/wikis/contributing).' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/haskell.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +haskell.org -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ghc',
    'ghc-{{version.marketing}}',
    'ghc-{{version}}',
    'ghc-pkg',
    'ghc-pkg-{{version.marketing}}',
    'ghc-pkg-{{version}}',
    'ghci',
    'ghci-{{version.marketing}}',
    'ghci-{{version}}',
    'ghcup',
    'haddock',
    'haddock-{{version.marketing}}',
    'haddock-{{version}}',
    'hp2ps',
    'hp2ps-{{version.marketing}}',
    'hp2ps-{{version}}',
    'hpc',
    'hpc-{{version.marketing}}',
    'hpc-{{version}}',
    'hsc2hs',
    'hsc2hs-{{version.marketing}}',
    'hsc2hs-{{version}}',
    'runghc',
    'runghc-{{version.marketing}}',
    'runghc-{{version}}',
    'runhaskell',
    'runhaskell-{{version.marketing}}',
    'runhaskell-{{version}}',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/gmp@6',
    'invisible-island.net/ncurses@6',
    'sourceware.org/libffi@3',
    'linuxgithub.com/numactl/numactl^2gnu.org/gcc',
    'github.com/numactl/numactl^2',
    'gnu.org/gcc',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '9.12.2',
    '9.12.1',
    '9.10.2',
    '9.10.1',
    '9.8.4',
    '9.8.2',
    '9.8.1',
    '9.6.7',
    '9.6.6',
    '9.6.5',
    '9.6.4',
    '9.6.3',
    '9.6.2',
    '9.4.8',
    '9.4.7',
    '9.4.4',
    '9.2.8',
    '9.0.2',
    '8.10.7',
  ] as const,
  fullPath: 'haskell.org' as const,
  aliases: [] as const,
}

export type HaskellorgPackage = typeof haskellorgPackage
