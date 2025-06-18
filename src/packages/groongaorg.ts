/**
 * **groonga.org** - Package from pantry: groonga.org
 *
 * @domain `groonga.org`
 *
 * @install `launchpad install groonga.org`
 * @dependencies `taku910.github.io/mecab`, `taku910.github.io/mecab-ipadic`, `taku910.github.io/mecab`, ... (+8 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.groongaorg
 * console.log(pkg.name)        // "groonga.org"
 * console.log(pkg.description) // "Package from pantry: groonga.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/groonga-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const groongaorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'groonga.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'groonga.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: groonga.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install groonga.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'taku910.github.io/mecab',
    'taku910.github.io/mecab-ipadic',
    'taku910.github.io/mecab',
    'taku910.github.io/mecab-ipadic',
    'msgpack.org',
    'openssl.org',
    'pcre.org/v2',
    'github.com/besser82/libxcrypt',
    'gnome.org/glib',
    'freedesktop.org/pkg-config',
    'curl.se',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/groonga.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GroongaorgPackage = typeof groongaorgPackage
