/**
 * **maturin.rs** - Package from pantry: maturin.rs
 *
 * @domain `maturin.rs`
 *
 * @install `launchpad install maturin.rs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.maturinrs
 * console.log(pkg.name)        // "maturin.rs"
 * console.log(pkg.description) // "Package from pantry: maturin.rs"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/maturin-rs.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const maturinrsPackage = {
  /**
   * The display name of this package.
   */
  name: 'maturin.rs' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'maturin.rs' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: maturin.rs' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install maturin.rs' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +maturin.rs -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install maturin.rs' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/maturin.rs/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MaturinrsPackage = typeof maturinrsPackage
