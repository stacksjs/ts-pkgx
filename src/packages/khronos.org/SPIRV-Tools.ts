/**
 * **SPIRV-Tools** - Package from pantry: khronos.org/SPIRV-Tools
 *
 * @domain `khronos.org/SPIRV-Tools`
 *
 * @install `launchpad install khronos.org/SPIRV-Tools`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.khronosorgspirvtools
 * console.log(pkg.name)        // "SPIRV-Tools"
 * console.log(pkg.description) // "Package from pantry: khronos.org/SPIRV-Tools"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/SPIRV-Tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khronosorgspirvtoolsPackage = {
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
  description: 'Package from pantry: khronos.org/SPIRV-Tools' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install khronos.org/SPIRV-Tools' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +khronos.org/SPIRV-Tools -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install khronos.org/SPIRV-Tools' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/khronos.org/SPIRV-Tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KhronosorgspirvtoolsPackage = typeof khronosorgspirvtoolsPackage
