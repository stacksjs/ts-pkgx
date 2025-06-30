/**
 * **SPIRV-Cross** - Package from pantry: khronos.org/SPIRV-Cross
 *
 * @domain `khronos.org/SPIRV-Cross`
 *
 * @install `launchpad install khronos.org/SPIRV-Cross`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.khronosorgspirvcross
 * console.log(pkg.name)        // "SPIRV-Cross"
 * console.log(pkg.description) // "Package from pantry: khronos.org/SPIRV-Cross"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/SPIRV-Cross.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khronosorgspirvcrossPackage = {
  /**
   * The display name of this package.
   */
  name: 'SPIRV-Cross' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khronos.org/SPIRV-Cross' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: khronos.org/SPIRV-Cross' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install khronos.org/SPIRV-Cross' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +khronos.org/SPIRV-Cross -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install khronos.org/SPIRV-Cross' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/khronos.org/SPIRV-Cross/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KhronosorgspirvcrossPackage = typeof khronosorgspirvcrossPackage
