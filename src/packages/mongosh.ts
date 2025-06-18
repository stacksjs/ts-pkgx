/**
 * **mongosh** - MongoDB Shell to connect, configure, query, and work with your MongoDB database
 *
 * @domain `mongodb.com/shell`
 * @programs `mongosh`
 * @version `2.5.2` (34 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/mongodb-com/shell.md
 *
 * @install `sh <(curl https://pkgx.sh) mongosh`
 * @name `mongosh`
 * @aliases `shell`
 * @dependencies `nodejs.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mongosh
 * // Or access via domain
 * const samePkg = pantry.mongodbcomshell
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mongosh"
 * console.log(pkg.description) // "MongoDB Shell to connect, configure, query, and..."
 * console.log(pkg.programs)    // ["mongosh"]
 * console.log(pkg.versions[0]) // "2.5.2" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mongodb-com/shell.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mongoshPackage = {
  /**
   * The display name of this package.
   */
  name: 'mongosh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mongodb.com/shell' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'MongoDB Shell to connect, configure, query, and work with your MongoDB database' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mongodb.com/shell/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) mongosh' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mongosh',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'nodejs.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '2.5.2',
    '2.5.1',
    '2.5.0',
    '2.4.2',
    '2.4.0',
    '2.3.9',
    '2.3.8',
    '2.3.7',
    '2.3.6',
    '2.3.5',
    '2.3.4',
    '2.3.3',
    '2.3.2',
    '2.3.1',
    '2.3.0',
    '2.2.15',
    '2.2.12',
    '2.2.11',
    '2.2.10',
    '2.2.9',
    '2.2.6',
    '2.2.5',
    '2.2.4',
    '2.2.3',
    '2.2.2',
    '2.2.1',
    '2.2.0',
    '2.1.5',
    '2.1.4',
    '2.1.3',
    '2.1.1',
    '2.1.0',
    '2.0.2',
    '2.0.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'shell',
  ] as const,
  fullPath: 'mongodb.com/shell' as const,
}

export type MongoshPackage = typeof mongoshPackage
