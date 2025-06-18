/**
 * **groonga** - An embeddable fulltext search engine. Groonga is the successor project to Senna.
 *
 * @domain `groonga.org`
 * @programs `groonga`, `groonga-suggest-create-dataset`
 * @version `15.1.1` (27 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +groonga.org -- $SHELL -i`
 * @name `groonga`
 * @dependencies `darwintaku910.github.io/mecabtaku910.github.io/mecab-ipadic`, `taku910.github.io/mecab`, `taku910.github.io/mecab-ipadic`, ... (+9 more)
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
 * console.log(pkg.versions[0]) // "15.1.1" (latest)
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +groonga.org -- $SHELL -i' as const,
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
   */
  dependencies: [
    'darwintaku910.github.io/mecabtaku910.github.io/mecab-ipadic',
    'taku910.github.io/mecab',
    'taku910.github.io/mecab-ipadic',
    'linux/x86-64taku910.github.io/mecabtaku910.github.io/mecab-ipadic',
    'taku910.github.io/mecab',
    'taku910.github.io/mecab-ipadic',
    'msgpack.org',
    'openssl.org',
    'pcre.org/v2',
    'github.com/besser82/libxcrypt',
    'linuxgnome.org/glib',
    'gnome.org/glib',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
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
  fullPath: 'groonga' as const,
}

export type GroongaPackage = typeof groongaPackage
