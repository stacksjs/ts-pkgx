/**
 * **maturin** - Build and publish crates with pyo3, cffi and uniffi bindings as well as rust binaries as python packages
 *
 * @domain `maturin.rs`
 * @programs `maturin`
 * @version `1.9.0` (21 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install maturin`
 * @name `maturin`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.maturin
 * // Or access via domain
 * const samePkg = pantry.maturinrs
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "maturin"
 * console.log(pkg.description) // "Build and publish crates with pyo3, cffi and un..."
 * console.log(pkg.programs)    // ["maturin"]
 * console.log(pkg.versions[0]) // "1.9.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/maturin-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const maturinPackage = {
  /**
   * The display name of this package.
   */
  name: 'maturin' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'maturin.rs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Build and publish crates with pyo3, cffi and uniffi bindings as well as rust binaries as python packages' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/maturin.rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install maturin' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'maturin',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.9.0',
    '1.8.7',
    '1.8.6',
    '1.8.5',
    '1.8.3',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.8',
    '1.7.7',
    '1.7.6',
    '1.7.5',
    '1.7.4',
    '1.7.3',
    '1.7.2',
    '1.7.1',
    '1.7.0',
    '1.6.0',
    '1.5.1',
    '1.5.0',
    '1.4.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) maturin -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install maturin' as const,
}

export type MaturinPackage = typeof maturinPackage
