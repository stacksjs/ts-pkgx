/**
 * **groonga.org** - Package from pantry: groonga.org
 *
 * @domain `groonga.org`
 *
 * @install `launchpad install groonga.org`
 * @dependencies `darwin:taku910.github.io/mecab`, `darwin:taku910.github.io/mecab-ipadic`, `msgpack.org`, ... (+4 more) (includes OS-specific dependencies with `os:package` format)
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
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install groonga.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +groonga.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install groonga.org' as const,
  programs: [] as const,
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
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/groonga.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GroongaorgPackage = typeof groongaorgPackage
