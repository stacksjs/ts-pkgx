/**
 * **+getfoundry.sh -- $SHELL -i** - Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.
 *
 * @domain `getfoundry.sh`
 * @programs `forge`, `anvil`, `cast`, `chisel`
 * @version `2024.4.12` (9 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/getfoundry-sh.md
 *
 * @install `sh <(curl https://pkgx.sh) +getfoundry.sh -- $SHELL -i`
 * @aliases `+getfoundry.sh -- $SHELL -i`
 * @dependencies `git-scm.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.getfoundryshSHELLi
 * // Or access via domain
 * const samePkg = pantry.getfoundrysh
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "getfoundry.sh"
 * console.log(pkg.description) // "Foundry is a blazing fast, portable and modular..."
 * console.log(pkg.programs)    // ["forge", "anvil", ...]
 * console.log(pkg.versions[0]) // "2024.4.12" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/getfoundry-sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const getfoundryshSHELLiPackage = {
  /**
   * The display name of this package.
   */
  name: 'getfoundry.sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'getfoundry.sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Foundry is a blazing fast, portable and modular toolkit for Ethereum application development written in Rust.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/getfoundry.sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +getfoundry.sh -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'forge',
    'anvil',
    'cast',
    'chisel',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'git-scm.org^2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2024.4.12',
    '2023.12.7',
    '2023.7.16',
    '1.2.2',
    '1.2.1',
    '1.2.0',
    '1.1.0',
    '1.0.0',
    '0.3.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    '+getfoundry.sh -- $SHELL -i',
  ] as const,
  fullPath: 'getfoundry.sh' as const,
}

export type GetfoundryshSHELLiPackage = typeof getfoundryshSHELLiPackage
