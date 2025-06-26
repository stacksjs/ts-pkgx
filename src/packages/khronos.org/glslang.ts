/**
 * **glslang** - Package from pantry: khronos.org/glslang
 *
 * @domain `khronos.org/glslang`
 *
 * @install `launchpad install khronos.org/glslang`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.khronosorgglslang
 * console.log(pkg.name)        // "glslang"
 * console.log(pkg.description) // "Package from pantry: khronos.org/glslang"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/khronos-org/glslang.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const khronosorgglslangPackage = {
  /**
   * The display name of this package.
   */
  name: 'glslang' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'khronos.org/glslang' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: khronos.org/glslang' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install khronos.org/glslang' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +khronos.org/glslang -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install khronos.org/glslang' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/khronos.org/glslang/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type KhronosorgglslangPackage = typeof khronosorgglslangPackage
