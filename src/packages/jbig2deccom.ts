/**
 * **jbig2dec** - This is a mirror: the canonical repo is: git.ghostscript.com/jbig2dec.git. This repo does not host releases, they are here: https://github.com/ArtifexSoftware/jbig2dec/tags
 *
 * @domain `jbig2dec.com`
 * @programs `jbig2dec`
 * @version `0.19.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install jbig2dec`
 * @aliases `jbig2dec`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.jbig2dec
 * // Or access via domain
 * const samePkg = pantry.jbig2deccom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "jbig2dec.com"
 * console.log(pkg.description) // "This is a mirror: the canonical repo is: git.gh..."
 * console.log(pkg.programs)    // ["jbig2dec"]
 * console.log(pkg.versions[0]) // "0.19.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jbig2dec-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jbig2decPackage = {
  /**
   * The display name of this package.
   */
  name: 'jbig2dec.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jbig2dec.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'This is a mirror: the canonical repo is: git.ghostscript.com/jbig2dec.git. This repo does not host releases, they are here: https://github.com/ArtifexSoftware/jbig2dec/tags' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jbig2dec.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jbig2dec' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'jbig2dec',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.19.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'jbig2dec',
  ] as const,
}

export type Jbig2decPackage = typeof jbig2decPackage
