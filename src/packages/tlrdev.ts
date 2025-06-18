/**
 * **tlr.dev** - Package from pantry: tlr.dev
 *
 * @domain `tlr.dev`
 *
 * @install `launchpad install tlr.dev`
 * @dependencies `openssl.org^1.1`, `go.dev^1.21`, `rust-lang.org^1.78`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.tlrdev
 * console.log(pkg.name)        // "tlr.dev"
 * console.log(pkg.description) // "Package from pantry: tlr.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/tlr-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tlrdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'tlr.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'tlr.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: tlr.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install tlr.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'go.dev^1.21',
    'rust-lang.org^1.78',
    'protobuf.dev',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/tlr.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type TlrdevPackage = typeof tlrdevPackage
