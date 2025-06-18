/**
 * **samtools** - Tools (written in C using htslib) for manipulating next-generation sequencing data
 *
 * @domain `htslib.org/samtools`
 * @programs `ace2sam`, `blast2sam.pl`, `bowtie2sam.pl`, `export2sam.pl`, `fasta-sanitize.pl`, ... (+17 more)
 * @version `1.22.0` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +htslib.org/samtools -- $SHELL -i`
 * @aliases `samtools`
 * @dependencies `htslib.org`, `invisible-island.net/ncurses`, `zlib.net@1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.samtools
 * // Or access via domain
 * const samePkg = pantry.htsliborgsamtools
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "htslib.org/samtools"
 * console.log(pkg.description) // "Tools (written in C using htslib) for manipulat..."
 * console.log(pkg.programs)    // ["ace2sam", "blast2sam.pl", ...]
 * console.log(pkg.versions[0]) // "1.22.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/htslib-org/samtools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const samtoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'htslib.org/samtools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'htslib.org/samtools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Tools (written in C using htslib) for manipulating next-generation sequencing data' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/htslib.org/samtools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +htslib.org/samtools -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'ace2sam',
    'blast2sam.pl',
    'bowtie2sam.pl',
    'export2sam.pl',
    'fasta-sanitize.pl',
    'interpolate_sam.pl',
    'maq2sam-long',
    'maq2sam-short',
    'md5fa',
    'md5sum-lite',
    'novo2sam.pl',
    'plot-ampliconstats',
    'plot-bamstats',
    'psl2sam.pl',
    'sam2vcf.pl',
    'samtools',
    'samtools.pl',
    'seq_cache_populate.pl',
    'soap2sam.pl',
    'wgsim',
    'wgsim_eval.pl',
    'zoom2sam.pl',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'htslib.org',
    'invisible-island.net/ncurses',
    'zlib.net@1',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.22.0',
    '1.21.0',
    '1.20.0',
    '1.19.2',
    '1.19.1',
    '1.19.0',
    '1.18.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'samtools',
  ] as const,
  fullPath: 'htslib.org/samtools' as const,
}

export type SamtoolsPackage = typeof samtoolsPackage
