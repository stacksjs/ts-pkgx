/**
 * **alpaca.cpp** - Locally run an Instruction-Tuned Chat-Style LLM
 *
 * @domain `github.com/antimatter15/alpaca.cpp`
 * @programs `alpaca.cpp`
 * @version `2023.3.21` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) alpaca.cpp`
 * @name `alpaca.cpp`
 * @aliases `antimatter15/alpaca.cpp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.alpacacpp
 * // Or access via domain
 * const samePkg = pantry.githubcomantimatter15alpacacpp
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "alpaca.cpp"
 * console.log(pkg.description) // "Locally run an Instruction-Tuned Chat-Style LLM"
 * console.log(pkg.programs)    // ["alpaca.cpp"]
 * console.log(pkg.versions[0]) // "2023.3.21" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/antimatter15/alpaca-cpp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const alpacacppPackage = {
  /**
   * The display name of this package.
   */
  name: 'alpaca.cpp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/antimatter15/alpaca.cpp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Locally run an Instruction-Tuned Chat-Style LLM' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/antimatter15/alpaca.cpp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) alpaca.cpp' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'alpaca.cpp',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2023.3.21',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'antimatter15/alpaca.cpp',
  ] as const,
  fullPath: 'github.com/antimatter15/alpaca.cpp' as const,
}

export type AlpacacppPackage = typeof alpacacppPackage
