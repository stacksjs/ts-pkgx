/**
 * **nodejs.org** - Package from pantry: nodejs.org
 *
 * @domain `nodejs.org`
 *
 * @install `launchpad install nodejs.org`
 * @dependencies `unicode.org^71`, `openssl.org@1.1`, `zlib.net@1`, ... (+1 more) (includes OS-specific dependencies with `os:package` format)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nodejsorg
 * console.log(pkg.name)        // "nodejs.org"
 * console.log(pkg.description) // "Package from pantry: nodejs.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nodejs-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nodejsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'nodejs.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nodejs.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: nodejs.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nodejs.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nodejs.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nodejs.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   * OS-specific dependencies are prefixed with `os:` (e.g., `linux:freetype.org`).
   */
  dependencies: [
    'unicode.org^71',
    'openssl.org@1.1',
    'zlib.net@1',
    'linux:gnu.org/gcc/libstdcxx',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nodejs.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NodejsorgPackage = typeof nodejsorgPackage
