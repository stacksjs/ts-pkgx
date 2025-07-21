/**
 * **patchelf** - Package from pantry: nixos.org/patchelf
 *
 * @domain `nixos.org/patchelf`
 *
 * @install `launchpad install nixos.org/patchelf`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nixosorgpatchelf
 * console.log(pkg.name)        // "patchelf"
 * console.log(pkg.description) // "Package from pantry: nixos.org/patchelf"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nixos-org/patchelf.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nixosorgpatchelfPackage = {
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
  description: 'Package from pantry: nixos.org/patchelf' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nixos.org/patchelf' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nixos.org/patchelf -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nixos.org/patchelf' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nixos.org/patchelf/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NixosorgpatchelfPackage = typeof nixosorgpatchelfPackage
