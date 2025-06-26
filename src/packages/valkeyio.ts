/**
 * **valkey.io** - Package from pantry: valkey.io
 *
 * @domain `valkey.io`
 *
 * @install `launchpad install valkey.io`
 * @dependencies `openssl.org^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.valkeyio
 * console.log(pkg.name)        // "valkey.io"
 * console.log(pkg.description) // "Package from pantry: valkey.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/valkey-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const valkeyioPackage = {
  /**
   * The display name of this package.
   */
  name: 'valkey.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'valkey.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: valkey.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install valkey.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +valkey.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install valkey.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/valkey.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ValkeyioPackage = typeof valkeyioPackage
