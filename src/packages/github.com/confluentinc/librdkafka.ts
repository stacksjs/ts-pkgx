/**
 * **librdkafka** - The Apache Kafka C/C++ library
 *
 * @domain `github.com/confluentinc/librdkafka`
 * @version `2.10.1` (12 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/confluentinc/librdkafka -- $SHELL -i`
 * @dependencies `lz4.org`, `zlib.net`, `openssl.org^1.1`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomconfluentinclibrdkafka
 * console.log(pkg.name)        // "librdkafka"
 * console.log(pkg.description) // "The Apache Kafka C/C++ library"
 * console.log(pkg.versions[0]) // "2.10.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/confluentinc/librdkafka.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomconfluentinclibrdkafkaPackage = {
  /**
   * The display name of this package.
   */
  name: 'librdkafka' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/confluentinc/librdkafka' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Apache Kafka C/C++ library' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/confluentinc/librdkafka/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/confluentinc/librdkafka -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'lz4.org',
    'zlib.net',
    'openssl.org^1.1',
    'facebook.com/zstd',
    'curl.se',
    'python.org~3.11',
    'llvm.org',
    'freedesktop.org/pkg-config',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.10.1',
    '2.10.0',
    '2.8.0',
    '2.6.1',
    '2.6.0',
    '2.5.3',
    '2.5.0',
    '2.4.0',
    '2.3.0',
    '2.2.1',
    '2.2.0',
    '2.1.1',
  ] as const,
  aliases: [] as const,
}

export type GithubcomconfluentinclibrdkafkaPackage = typeof githubcomconfluentinclibrdkafkaPackage
