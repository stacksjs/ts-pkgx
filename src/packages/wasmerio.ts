/**
 * **wasmer.io** - Package from pantry: wasmer.io
 *
 * @domain `wasmer.io`
 *
 * @install `launchpad install wasmer.io`
 * @dependencies `rust-lang.org^1.65`, `rust-lang.org/cargo^0`, `nodejs.org^18`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.wasmerio
 * console.log(pkg.name)        // "wasmer.io"
 * console.log(pkg.description) // "Package from pantry: wasmer.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/wasmer-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const wasmerioPackage = {
  /**
   * The display name of this package.
   */
  name: 'wasmer.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'wasmer.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: wasmer.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install wasmer.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'rust-lang.org^1.65',
    'rust-lang.org/cargo^0',
    'nodejs.org^18',
    'gnu.org/make^4',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/wasmer.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type WasmerioPackage = typeof wasmerioPackage
