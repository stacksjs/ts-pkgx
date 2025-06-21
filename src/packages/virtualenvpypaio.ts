/**
 * **virtualenv.pypa.io** - Package from pantry: virtualenv.pypa.io
 *
 * @domain `virtualenv.pypa.io`
 *
 * @install `launchpad install virtualenv.pypa.io`
 * @dependencies `pkgx.sh^1`, `libexpat.github.io^2`, `openssl.org^1.1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.virtualenvpypaio
 * console.log(pkg.name)        // "virtualenv.pypa.io"
 * console.log(pkg.description) // "Package from pantry: virtualenv.pypa.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/virtualenv-pypa-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const virtualenvpypaioPackage = {
  /**
   * The display name of this package.
   */
  name: 'virtualenv.pypa.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'virtualenv.pypa.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: virtualenv.pypa.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install virtualenv.pypa.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'pkgx.sh^1',
    'libexpat.github.io^2',
    'openssl.org^1.1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/virtualenv.pypa.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type VirtualenvpypaioPackage = typeof virtualenvpypaioPackage
