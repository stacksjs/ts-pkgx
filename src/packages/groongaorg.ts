/**
 * **groonga** - An embeddable fulltext search engine. Groonga is the successor project to Senna.
 *
 * @domain `groonga.org`
 * @programs `groonga`, `groonga-suggest-create-dataset`
 * @version `15.1.4` (30 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install groonga`
 * @name `groonga`
 * @dependencies `darwin:taku910.github.io/mecab`, `darwin:taku910.github.io/mecab-ipadic`, `msgpack.org`, ... (+4 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.groonga
 * // Or access via domain
 * const samePkg = pantry.groongaorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "groonga"
 * console.log(pkg.description) // "An embeddable fulltext search engine. Groonga i..."
 * console.log(pkg.programs)    // ["groonga", "groonga-suggest-create-dataset"]
 * console.log(pkg.versions[0]) // "15.1.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/groonga-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const groongaPackage = {
  /**
   * The display name of this package.
   */
  name: 'groonga' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'groonga.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'An embeddable fulltext search engine. Groonga is the successor project to Senna.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/groonga.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install groonga' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'groonga',
    'groonga-suggest-create-dataset',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'darwin:taku910.github.io/mecab',
    'darwin:taku910.github.io/mecab-ipadic',
    'msgpack.org',
    'openssl.org',
    'pcre.org/v2',
    'github.com/besser82/libxcrypt',
    'linux:gnome.org/glib',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '15.1.4',
    '15.1.3',
    '15.1.2',
    '15.1.1',
    '15.0.9',
    '15.0.4',
    '15.0.3',
    '15.0.2',
    '15.0.1',
    '15.0.0',
    '14.1.3',
    '14.1.2',
    '14.1.1',
    '14.1.0',
    '14.0.9',
    '14.0.8',
    '14.0.7',
    '14.0.6',
    '14.0.5',
    '14.0.4',
    '14.0.3',
    '14.0.2',
    '14.0.1',
    '14.0.0',
    '13.1.1',
    '13.1.0',
    '13.0.9',
    '13.0.8',
    '13.0.7',
    '13.0.6',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +groonga.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install groonga' as const,
}

export type GroongaPackage = typeof groongaPackage
