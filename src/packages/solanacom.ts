/**
 * **solana.com** - Package from pantry: solana.com
 *
 * @domain `solana.com`
 *
 * @install `launchpad install solana.com`
 * @dependencies `protobuf.dev^21`, `zlib.net^1.2`, `openssl.org^1.1`
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install solana.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +solana.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install solana.com' as const,
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
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/solana.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SolanacomPackage = typeof solanacomPackage
