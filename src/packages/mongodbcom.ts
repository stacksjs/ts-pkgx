/**
 * **mongodb.com** - Package from pantry: mongodb.com
 *
 * @domain `mongodb.com`
 *
 * @install `launchpad install mongodb.com`
 * @dependencies `curl.se^8`, `openssl.org^1.1`, `mongodb.com/shell`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mongodbcom
 * console.log(pkg.name)        // "mongodb.com"
 * console.log(pkg.description) // "Package from pantry: mongodb.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mongodb-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mongodbcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'mongodb.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mongodb.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mongodb.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install mongodb.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'curl.se^8',
    'openssl.org^1.1',
    'mongodb.com/shell',
    'pkgx.sh^1',
    'crates.io/semverator',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mongodb.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MongodbcomPackage = typeof mongodbcomPackage
