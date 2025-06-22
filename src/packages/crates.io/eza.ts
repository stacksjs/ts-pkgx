/**
 * **eza** - Package from pantry: crates.io/eza
 *
 * @domain `crates.io/eza`
 *
 * @install `launchpad install crates.io/eza`
 * @dependencies `libgit2.org~1.7 # links to libgit2.so.1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesioeza
 * console.log(pkg.name)        // "eza"
 * console.log(pkg.description) // "Package from pantry: crates.io/eza"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/eza.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesioezaPackage = {
  /**
   * The display name of this package.
   */
  name: 'eza' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/eza' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: crates.io/eza' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/eza' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/eza -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/eza' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7 # links to libgit2.so.1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/crates.io/eza/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CratesioezaPackage = typeof cratesioezaPackage
