/**
 * **wasm-pack** - pkgx package
 *
 * @domain `crates.io/wasm-pack`
 *
 * @install `launchpad install crates.io/wasm-pack`
 * @dependencies `rust-lang.org`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cratesiowasmpack
 * console.log(pkg.name)        // "wasm-pack"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/wasm-pack.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiowasmpackPackage = {
  /**
   * The display name of this package.
   */
  name: 'wasm-pack' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/wasm-pack' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install crates.io/wasm-pack' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +crates.io/wasm-pack -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install crates.io/wasm-pack' as const,
}

export type CratesiowasmpackPackage = typeof cratesiowasmpackPackage
