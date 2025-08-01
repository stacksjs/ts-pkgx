/**
 * **gen-ir** - Generates LLVM IR for Xcode Projects
 *
 * @domain `veracode.com/gen-ir`
 * @programs `gen-ir`
 * @version `0.5.2` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install gen-ir`
 * @name `gen-ir`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.genir
 * // Or access via domain
 * const samePkg = pantry.veracodecomgenir
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "gen-ir"
 * console.log(pkg.description) // "Generates LLVM IR for Xcode Projects"
 * console.log(pkg.programs)    // ["gen-ir"]
 * console.log(pkg.versions[0]) // "0.5.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/veracode-com/gen-ir.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const genirPackage = {
  /**
   * The display name of this package.
   */
  name: 'gen-ir' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'veracode.com/gen-ir' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Generates LLVM IR for Xcode Projects' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/veracode.com/gen-ir/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install gen-ir' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'gen-ir',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.5.2',
    '0.5.1',
    '0.5.0',
    '0.4.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) gen-ir -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install gen-ir' as const,
}

export type GenirPackage = typeof genirPackage
