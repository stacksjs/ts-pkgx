/**
 * **spirv-cross** - SPIRV-Cross is a practical tool and library for performing reflection on SPIR-V and disassembling SPIR-V back to high level languages.
 *
 * @domain `khronos.org/SPIRV-Cross`
 * @programs `spirv-cross`
 * @version `2021.1.15` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install spirv-cross`
 * @name `spirv-cross`
 * @aliases `SPIRV-Cross`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.spirvcross
 * // Or access via domain
 * const samePkg = pantry.khronosorgspirvcross
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "spirv-cross"
 * console.log(pkg.description) // "SPIRV-Cross is a practical tool and library for..."
 * console.log(pkg.programs)    // ["spirv-cross"]
 * console.log(pkg.versions[0]) // "2021.1.15" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/SPIRV-Cross.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spirvcrossPackage = {
  /**
   * The display name of this package.
   */
  name: 'spirv-cross' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khronos.org/SPIRV-Cross' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'SPIRV-Cross is a practical tool and library for performing reflection on SPIR-V and disassembling SPIR-V back to high level languages.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/khronos.org/SPIRV-Cross/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install spirv-cross' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'spirv-cross',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2021.1.15',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'SPIRV-Cross',
  ] as const,
  fullPath: 'khronos.org/SPIRV-Cross' as const,
}

export type SpirvcrossPackage = typeof spirvcrossPackage
