/**
 * **patchelf** - A small utility to modify the dynamic linker and RPATH of ELF executables
 *
 * @domain `nixos.org/patchelf`
 * @programs `patchelf`
 * @version `0.18.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install patchelf`
 * @name `patchelf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.patchelf
 * // Or access via domain
 * const samePkg = pantry.nixosorgpatchelf
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "patchelf"
 * console.log(pkg.description) // "A small utility to modify the dynamic linker an..."
 * console.log(pkg.programs)    // ["patchelf"]
 * console.log(pkg.versions[0]) // "0.18.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nixos-org/patchelf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const patchelfPackage = {
  /**
   * The display name of this package.
   */
  name: 'patchelf' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nixos.org/patchelf' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A small utility to modify the dynamic linker and RPATH of ELF executables' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nixos.org/patchelf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install patchelf' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'patchelf',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.18.0',
    '0.17.2',
    '0.17.0',
    '0.15.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) patchelf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install patchelf' as const,
}

export type PatchelfPackage = typeof patchelfPackage
