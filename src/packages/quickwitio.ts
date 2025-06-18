/**
 * **quickwit.io** - Package from pantry: quickwit.io
 *
 * @domain `quickwit.io`
 *
 * @install `launchpad install quickwit.io`
 * @dependencies `protobuf.dev^25`, `rust-lang.org^1.79`, `rust-lang.org/cargo`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.quickwitio
 * console.log(pkg.name)        // "quickwit.io"
 * console.log(pkg.description) // "Package from pantry: quickwit.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/quickwit-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const quickwitioPackage = {
  /**
   * The display name of this package.
   */
  name: 'quickwit.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'quickwit.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: quickwit.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install quickwit.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'protobuf.dev^25',
    'rust-lang.org^1.79',
    'rust-lang.org/cargo',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/quickwit.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type QuickwitioPackage = typeof quickwitioPackage
