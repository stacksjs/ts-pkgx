/**
 * **libimobiledevice-glue** - Package from pantry: libimobiledevice.org/libimobiledevice-glue
 *
 * @domain `libimobiledevice.org/libimobiledevice-glue`
 *
 * @install `launchpad install libimobiledevice.org/libimobiledevice-glue`
 * @dependencies `libimobiledevice.org/libplist^2.4`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libimobiledeviceorglibimobiledeviceglue
 * console.log(pkg.name)        // "libimobiledevice-glue"
 * console.log(pkg.description) // "Package from pantry: libimobiledevice.org/libim..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libimobiledevice-org/libimobiledevice-glue.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libimobiledeviceorglibimobiledevicegluePackage = {
  /**
   * The display name of this package.
   */
  name: 'libimobiledevice-glue' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libimobiledevice.org/libimobiledevice-glue' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libimobiledevice.org/libimobiledevice-glue' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libimobiledevice.org/libimobiledevice-glue' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libimobiledevice.org/libimobiledevice-glue -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libimobiledevice.org/libimobiledevice-glue' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libimobiledevice.org/libplist^2.4',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/libimobiledevice-glue/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibimobiledeviceorglibimobiledevicegluePackage = typeof libimobiledeviceorglibimobiledevicegluePackage
