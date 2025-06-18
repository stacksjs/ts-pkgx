/**
 * **lavinmq.com** - Package from pantry: lavinmq.com
 *
 * @domain `lavinmq.com`
 *
 * @install `launchpad install lavinmq.com`
 * @dependencies `openssl.org^1.1`, `pcre.org/v2^10`, `libevent.org^2`, ... (+6 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.lavinmqcom
 * console.log(pkg.name)        // "lavinmq.com"
 * console.log(pkg.description) // "Package from pantry: lavinmq.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/lavinmq-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const lavinmqcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'lavinmq.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'lavinmq.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: lavinmq.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install lavinmq.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'openssl.org^1.1',
    'pcre.org/v2^10',
    'libevent.org^2',
    'hboehm.info/gc^8',
    'crystal-lang.org~1.16 # since 2.4.0',
    'crystal-lang.org/shards',
    'lz4.org^1',
    'gnu.org/help2man',
    'etcd.io',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/lavinmq.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LavinmqcomPackage = typeof lavinmqcomPackage
