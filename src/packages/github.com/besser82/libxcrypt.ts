/**
 * **libxcrypt** - Extended crypt library for descrypt, md5crypt, bcrypt, and others
 *
 * @domain `github.com/besser82/libxcrypt`
 * @version `4.4.38` (6 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +github.com/besser82/libxcrypt -- $SHELL -i`
 * @dependencies `freedesktop.org/pkg-config~0.29`, `perl.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcombesser82libxcrypt
 * console.log(pkg.name)        // "libxcrypt"
 * console.log(pkg.description) // "Extended crypt library for descrypt, md5crypt, ..."
 * console.log(pkg.versions[0]) // "4.4.38" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/besser82/libxcrypt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombesser82libxcryptPackage = {
  /**
   * The display name of this package.
   */
  name: 'libxcrypt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/besser82/libxcrypt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Extended crypt library for descrypt, md5crypt, bcrypt, and others' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/besser82/libxcrypt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install +github.com/besser82/libxcrypt -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'freedesktop.org/pkg-config~0.29',
    'perl.org',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '4.4.38',
    '4.4.37',
    '4.4.36',
    '4.4.35',
    '4.4.34',
    '4.4.33',
  ] as const,
  aliases: [] as const,
}

export type Githubcombesser82libxcryptPackage = typeof githubcombesser82libxcryptPackage
