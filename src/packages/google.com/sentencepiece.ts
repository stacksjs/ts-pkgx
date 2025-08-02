/**
 * **spm_decode** - Unsupervised text tokenizer for Neural Network-based text generation.
 *
 * @domain `google.com/sentencepiece`
 * @programs `spm_decode`, `spm_encode`, `spm_export_vocab`, `spm_normalize`, `spm_train`
 * @version `0.2.0` (4 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install spm_decode`
 * @name `spm_decode`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.spmdecode
 * // Or access via domain
 * const samePkg = pantry.googlecomsentencepiece
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "spm_decode"
 * console.log(pkg.description) // "Unsupervised text tokenizer for Neural Network-..."
 * console.log(pkg.programs)    // ["spm_decode", "spm_encode", ...]
 * console.log(pkg.versions[0]) // "0.2.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/google-com/sentencepiece.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const spmdecodePackage = {
  /**
   * The display name of this package.
   */
  name: 'spm_decode' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'google.com/sentencepiece' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Unsupervised text tokenizer for Neural Network-based text generation.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/google.com/sentencepiece/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install spm_decode' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'spm_decode',
    'spm_encode',
    'spm_export_vocab',
    'spm_normalize',
    'spm_train',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.0',
    '0.1.99',
    '0.1.98',
    '0.1.97',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +google.com/sentencepiece -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install spm_decode' as const,
}

export type SpmdecodePackage = typeof spmdecodePackage
