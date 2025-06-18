/**
 * **solana.com** - Package from pantry: solana.com
 *
 * @domain `solana.com`
 *
 * @install `launchpad install solana.com`
 * @dependencies `protobuf.dev^21`, `zlib.net^1.2`, `openssl.org^1.1`, ... (+4 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.solanacom
 * console.log(pkg.name)        // "solana.com"
 * console.log(pkg.description) // "Package from pantry: solana.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/solana-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const solanacomPackage = {
  /**
   * The display name of this package.
   */
  name: 'solana.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'solana.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: solana.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install solana.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'protobuf.dev^21',
    'zlib.net^1.2',
    'openssl.org^1.1',
    'rust-lang.org>=1.75<1.78',
    'rust-lang.org/cargo<0.83',
    'freedesktop.org/pkg-config^0.29',
    'systemd.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/solana.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SolanacomPackage = typeof solanacomPackage
