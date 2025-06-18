/**
 * **spirv** - API and commands for processing SPIR-V modules
 *
 * @domain `khronos.org/SPIRV-Tools`
 * @programs `spirv-as`, `spirv-cfg`, `spirv-dis`, `spirv-lesspipe.sh`, `spirv-link`, ... (+5 more)
 * @version `2025.1.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +khronos.org/SPIRV-Tools -- $SHELL -i`
 * @aliases `spirv`
 * @dependencies `cmake.org`, `python.org~3.11`, `git-scm.org@2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.spirv
 * // Or access via domain
 * const samePkg = pantry.khronosorgspirvtools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "SPIRV-Tools"
 * console.log(pkg.description) // "API and commands for processing SPIR-V modules"
 * console.log(pkg.programs)    // ["spirv-as", "spirv-cfg", ...]
 * console.log(pkg.versions[0]) // "2025.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/SPIRV-Tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spirvPackage = {
  /**
   * The display name of this package.
   */
  name: 'SPIRV-Tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khronos.org/SPIRV-Tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'API and commands for processing SPIR-V modules' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/khronos.org/SPIRV-Tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +khronos.org/SPIRV-Tools -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'spirv-as',
    'spirv-cfg',
    'spirv-dis',
    'spirv-lesspipe.sh',
    'spirv-link',
    'spirv-lint',
    'spirv-objdump',
    'spirv-opt',
    'spirv-reduce',
    'spirv-val',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'cmake.org',
    'python.org~3.11',
    'git-scm.org@2',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2025.1.0',
    '2024.3.0',
    '2024.2.0',
    '2024.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'spirv',
  ] as const,
}

export type SpirvPackage = typeof spirvPackage
